
const getServices= "SELECT * FROM service";
const addServices ="INSERT INTO service(name,description, cost, image) VALUES($1, $2, $3, $4)";
const checkServiceExist = "SELECT * FROM service WHERE name=$1";
const deleteService = "DELETE FROM service WHERE id=$1";
const getServiceById ="SELECT * FROM service WHERE id= $1";

module.exports ={

    getServices,
    addServices,
    checkServiceExist,
    deleteService,
    getServiceById
}
