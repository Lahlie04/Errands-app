
const updateStatus = "UPDATE request SET status =$1 WHERE id=$2";
const addRequest ="INSERT INTO request(client_id,service_id, address_id, comment) VALUES($1, $2, $3, $4) returning id";

// const getRequests =" SELECT s.name AS errand , concat(u.name ,' ', u.surname) AS client_name, comment, concat(a.street_address,', ', a.suburb,', ',  a.city,', ',  a.postal_code) AS address, r.id FROM request r,users u, service s, address a WHERE r.client_id=u.id AND  r.service_id = s.id   AND a.request_id=r.id AND r.address_id=a.id AND r.status = 'pending' ";

const getRequestByClientId = "SELECT s.name AS service , r.comment, r.status, r.req_date FROM request r JOIN service s ON r.service_id = s.id WHERE r.client_id = $1"

const getRequest = "SELECT  r.id,s.name AS service, concat(u.name ,' ', u.surname) AS client_name, r.comment, concat(a.street_address,', ', a.suburb,', ',  a.city,', ',  a.postal_code) AS address FROM request r, service s, address a, users u WHERE r.client_id=u.id AND  r.service_id = s.id  AND r.address_id=a.id AND r.status = 'pending' ";

const getRequestByRunnerId = "SELECT s.name AS service , concat(u.name ,' ', u.surname) AS client_name, concat(a.street_address,', ', a.suburb,', ',  a.city,', ',  a.postal_code) AS address, status, r.id,  FROM request r,users u, service s, address a WHERE r.client_id=u.id AND r.service_id = s.id AND runner_id =$1 ORDER BY req_date DESC";
;
const acceptRequest = " UPDATE request SET status='accepted', runner_id=$1  WHERE  id=$2 RETURNING *";
 

// const getMaxId ="SELECT id FROM request WHERE client_id= $1 ORDER BY id DESC LIMIT 1";

module.exports ={
    updateStatus,
    addRequest,
    getRequest,
    getRequestByClientId,
    // getMaxId,
    getRequestByRunnerId,
    acceptRequest,

}

// module.exports.getMaxId = async (req, res) => {
//     const client_id=req.params.client_id

//     console.log(req.params);
//     pool.query(queries.getMaxId,[client_id],(error, results) => {
//         if(error){
//             console.log("error:"+error);
//             res.status(404).send(error);
//             throw error; 
//         }
//         res.status(200).json(results.rows);
//     });
// };
