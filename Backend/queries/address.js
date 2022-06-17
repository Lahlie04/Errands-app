const addAddress = "INSERT INTO address(street_address, suburb, city, postal_code) VALUES($1, $2, $3, $4) RETURNING *";
const getAddress = "SELECT * FROM address";


module.exports ={
    addAddress, 
    getAddress
}