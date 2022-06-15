
const pool = require('../dbconn');
const queries = require('../queries/address')
const Pool = require('pg').Pool;


module.exports.addAddress = async (req,res) => {
    // const {firstname, lastname, cell_no, password} = req.body;
     const {street_address, suburb, city, postal_code} = req.body
    
            pool.query(queries.addAddress, 
                [street_address, suburb, city, postal_code],
                (error,results)=>{
                if(error){ 
                    res.status(500).json({error: 'invalid input'})
                    throw error;
                }else{
                         // addUserMailer(name, surname, cell_no, email, password);
                    res.status(201).json("Address created successfully");
                }
            });
}


module.exports.getAddress = (req, res) => {
    pool.query(queries.getAddress,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};