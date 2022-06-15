const pool = require('../dbconn');
const queries = require('../queries/user')
const Pool = require('pg').Pool;
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs')


const addClient = async (req,res) => {
    // const {firstname, lastname, cell_no, password} = req.body;
     const {name, surname, cell_no, email, password, role} = req.body
     if(name.length<3){
         res.status(400).json({error:"Name cannont be less than 2 characters"});
     }else if(surname.length<3){
         res.status(400).json({error:"Surname cannont be less than 2 characters"});
     }else if(cell_no.length>0 && cell_no.length<10){
         res.status(400).json({error:"Invalid Cell number"});
     }else if(cell_no.length>10){
         res.status(400).json({error:"Invalid Cell number"});
     }else if(password.length<8){
         res.status(400).json('Your Password should be longer than 7 characters');
     }else if(role.length<1){
         res.status(400).json('Please enter your role');
     }else{
 
         //check if email exists
         pool.query(queries.checkClientCelllExists, [cell_no], (error, results) => {
             
             if (results.rows.length){
                 res.status(409).json({error:"Cell number Already exists"});
                 
             }else{
                 const salt = bcrypt.genSaltSync(10)
                 const hashedPassword = bcrypt.hashSync(password , salt)
                 console.log(hashedPassword)
                 pool.query(queries.addClient, 
                     [name,surname, cell_no, email, hashedPassword,role],
                     (error,results)=>{
                     if(error){ 
                         res.status(500).json({error: 'invalid input'})
                         throw error;
                     }else{
                         // addUserMailer(name, surname, cell_no, email, password);
                         res.status(201).json("User created successfully");
                     }
                 });
             }
         });
     
     }
 }
 
 
 const addRunner = async (req,res) => {
     // const {firstname, lastname, cell_no, password} = req.body;
      const {name, surname, cell_no, email, password, role} = req.body
      if(name.length<3){
          res.status(400).json({error:"Name cannont be less than 2 characters"});
      }else if(surname.length<3){
          res.status(400).json({error:"Surname cannont be less than 2 characters"});
      }else if(cell_no.length>0 && cell_no.length<10){
          res.status(400).json({error:"Invalid Cell number"});
      }else if(cell_no.length>10){
          res.status(400).json({error:"Invalid Cell number"});
      }else if(password.length<8){
          res.status(400).json('Your Password should be longer than 7 characters');
      }else if(role.length<1){
          res.status(400).json('Please enter your role');
      }else{
  
          //check if email exists
          pool.query(queries.checkClientCelllExists, [cell_no], (error, results) => {
              
              if (results.rows.length){
                  res.status(409).json({error:"Cell number Already exists"});
                  
              }else{
                  const salt = bcrypt.genSaltSync(10)
                  const hashedPassword = bcrypt.hashSync(password , salt)
                  console.log(hashedPassword)
                  pool.query(queries.addRunner, 
                      [name,surname, cell_no, email, hashedPassword,role],
                      (error,results)=>{
                      if(error){ 
                          res.status(500).json({error: 'invalid input'})
                          throw error;
                      }else{
                          // addUserMailer(name, surname, cell_no, email, password);
                          res.status(201).json("User created successfully");
                      }
                  });
              }
          });
      
      }
  }
 
 
 const getClient = (req, res) => {
     pool.query(queries.getClients,(error, results) => {
         if(error){
             console.log("error:"+error);
             res.status(404).send(error);
             throw error;
         }
         res.status(200).json(results.rows);
     });
 };
 
 const getClientById=(req,res) =>{
     const id =parseInt(req.params.id);
     
 
 
 
     pool.query(queries.getClientById,[id],(error, results)=>{
         if(!results){
             return res.status(400).send("invalid input");
         }
         if(!results.rows.length){ 
             res.status(404).send('user not found');
         }else{
             res.status(200).json(results.rows);
         }
     } );
 };

 const getClientByEmail=(req,res) =>{
    const email = req.params.email;
    console.log(email)
   


    pool.query(queries.getClientByEmail,[email],(error, results)=>{
        if(!results) return res.status(400).send("invalid input")
       
        if(!results.rows.length){ 
            res.status(404).send('user not found')
            console.log(results.rows);
            
            //throw error
        }else{
            res.status(200).json(results.rows);
        }
    } );
};

const clientLogin = async (req,res) =>{
    const { cell_no,email, password } = req.body;
    pool.query(queries.checkClientEmailCellNoExists,[email,cell_no],(error, results)=>{
        // console.log(results)
        
        if(!results.rows.length){ 
            console.log(email)
            res.status(404).json({error:'user not found'})
        }else{
            
            // IF CELLPHONE IS ENTERED
            if(cell_no){

                pool.query(queries.getClientPasswordByCelllNo,[cell_no],(error, results)=>{
                    console.log(results.rows[0].password)
                    const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
                    if(!queryPassword){
                        res.status(404).json({error:'Invalid credentials'});
                    }else{
                        res.status(200).json(results.rows);
                    }
                });

            } else {

                // IF EMAIL IS ENTERED
                pool.query(queries.getClientPasswordByEmail,[email],(error, results)=>{
                    console.log(results.rows[0].password)
                    const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
                    if(!queryPassword){
                        res.status(404).json({error:'Invalid credentials'});
                    }else{
                        res.status(200).json(results.rows);
                    }
                });

            }

           

        }

    });
}
 
 
 const removeClient = (req, res) =>{
     const id =parseInt(req.params.id);
 
     pool.query(queries.getClientById,[id],(error, results)=>{
         const noUserfound = !results.rows.length;
         if(noUserfound){
             res.status(404).json("User does not exist in the database.");
         }else{
             pool.query(queries.removeClient,[id],(error, results)=>{
                 if(error) throw error;
                 res.status(200).json("user removed successfully");
         });
         }
     });
 }
 
 
const totalClients = (req, res) => {
    pool.query(queries.totalClients,(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};


const totalRunners = (req, res) => {
    pool.query(queries.totalRunners,(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

module.exports = {
    addClient,
    addRunner,
    getClient,
    removeClient,
    getClientById,
    getClientByEmail,
    clientLogin,
    totalClients,
    totalRunners

}