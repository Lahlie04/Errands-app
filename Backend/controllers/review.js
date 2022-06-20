


const pool = require('../dbconn');
const queries = require('../queries/review')
const Pool = require('pg').Pool;

const getRunnerEarnings =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
   


    pool.query(queries.getRunnerEarnings,[runner_id],(error, results)=>{
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



const getTotal =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
   


    pool.query(queries.getTotal,[runner_id],(error, results)=>{
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


const getReviews =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
    console.log('get reviews: ');   


    pool.query(queries.getReviews,[runner_id],(error, results)=>{
        if(!results) {
            console.log('results:', results);
            console.log('error:', error);
            return res.status(400).send("invalid input")
        }
       
        if(!results.rows.length){
            res.status(404).send('request not found')
            console.log(results.rows);
            
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};


const totalRating =(req,res) =>{
    const runner_id = req.params.runner_id;
    // console.log(client_id)
   


    pool.query(queries.totalRating,[runner_id],(error, results)=>{
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


const rateServices = async (req,res) =>{
    const {runner_id, client_id, rating, reason, request_id} = req.body;
    console.log("rateService:",req.body);
    
    // const {client_id } = req.body;
    // const {rating} = req.body;
    // const {reason} = req.body;
    // const {request_id } = req.body;
    pool.query(queries.rateServices,[runner_id,client_id,rating, reason,request_id],(error, results) =>{
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json("Review added succesfully");
    });
};

module.exports ={
    getRunnerEarnings,  
    getTotal,
    getReviews,
    totalRating,
    rateServices,
}