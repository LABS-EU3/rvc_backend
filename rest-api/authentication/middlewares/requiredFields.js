function requiredFields(req, res, next){
  const { body } = req;
  const missingFields = [];
  if(!body.email){
    missingFields.push('email')
  } 
  if(!body.username){
    missingFields.push('username')
  } 
  if (!body.password){
    missingFields.push('password')
  }
  if(!missingFields.length){
    next();
  } else {
    res.status(400).json(`No values entered for: ${missingFields.join(", ")}`)
  }
}

module.exports = { requiredFields };