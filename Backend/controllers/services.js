const pool = require('../dbconn');
const queries = require('../queries/services')
const Pool = require('pg').Pool;

const addServices = async (req,res) => {
    // const {firstname, lastname, cell_no, password} = req.body;
     const {name,description, cost, image } = req.body
     pool.query(queries.checkServiceExist , [name], (error, results) => {
            
        if (results.rows.length){
            res.status(409).json({error:"Service Already exists"});
            
        }else{
            pool.query(queries.addServices, 
                [name,description, cost, image],
                (error,results)=>{
                if(error){ 
                    res.status(500).json({error: 'invalid input'})
                    throw error;
                }else{
                         // addUserMailer(name, surname, cell_no, email, password);
                    res.status(201).json("Service created successfully");
                }
            });
        }
    
    });
}
const getServices = (req, res) => {
    pool.query(queries.getServices,(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        console.log(results);   
        res.status(200).json(results.rows);
    });
};

const deleteService = (req, res) =>{
    const id =parseInt(req.params.id);

    pool.query(queries.getServiceById,[id],(error, results)=>{
        const noService = !results.rows.length;
        if(noService){
            res.status(404).json("Errand does not exist in the database.");
        }else{
            pool.query(queries.deleteService,[id],(error, results)=>{
                if(error) throw error;
                res.status(200).json("Errand removed successfully");
        });
        }
    });
}

module.exports ={
addServices,
getServices,
deleteService,
}