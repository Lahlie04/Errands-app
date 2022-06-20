const getRunnerEarnings = "SELECT s.name AS errand , concat(u.name ,' ', u.surname) AS client_name, cost FROM request r,users u, service s WHERE r.client_id=u.id AND r.service_id = s.id AND runner_id =$1"

const getTotal = " SELECT SUM(cost) AS total FROM request r, service s WHERE s.id =r.service_id AND r.runner_id=$1 ";

const getReviews = " SELECT s.name AS errand, CONCAT(u.name,' ',u.surname) AS client_name,reason, rating  from users u, service s, review r, request rq where u.id=r.client_id and s.id=rq.service_id and r.runner_id=$1";

const totalRating = " select to_char(avg(rating), '9D99') AS avg from review where runner_id=$1 ";

const rateServices = " INSERT INTO review (runner_id, client_id, rating, reason, request_id) VALUES($1, $2, $3, $4,$5)";




module.exports ={
    getRunnerEarnings,  
    getTotal,
    getReviews,
    totalRating,
    rateServices,

}