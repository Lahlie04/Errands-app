const pool = require('../dbconn');
const queries = require('../queries/request')
const Pool = require('pg').Pool;




module.exports.getRequestByClientId = (req, res) => {
    const client_id = req.params.id

    pool.query(getRequest,[client_id],(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

module.exports.getRequest = (req, res) => {
const address_id = req.params.id
    pool.query(queries.getRequest, [address_id],(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

module.exports.getRequestByRunnerId = (req, res) => {
    const runner_id = req.params.id;
    const address_id = req.params.id

    pool.query(queries.getRequestByRunnerId,[runner_id, address_id],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
       
        if(!results.rows.length){ 
            res.status(404).send('request not found')
            console.log(results.rows);
            
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};

module.exports.acceptRequest = async (req,res) =>{
    // const {runner_id} = req.body;
    // const {id} = req.body;
    const{runner_id, id} = req.body;
    
    pool.query(queries.acceptRequest,[runner_id,id],(error, results) =>{
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json("Request accepted succesfully");
    });
};

module.exports.updateStatus = async (req,res) =>{
    const id = req.params.id;
    const {status } = req.body;
    pool.query(queries.updateStatus,[status,id],(error, results) =>{
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json("Status updated succesfully");
    });
};

     
module.exports.addRequest = async (req,res) => {
   
    const {client_id,service_id,comment} = req.body
   
           pool.query(queries.addRequest, 
               [client_id,service_id,comment],
               (error,results)=>{
               if(error){ 
                   res.status(500).json({error: 'invalid input'})
                   throw error;
               }else{
   
                   res.status(201).json("Request created successfully");
               }
           });
       
   
   
}