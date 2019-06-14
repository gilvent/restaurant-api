let jwt = require('jsonwebtoken');
let config = require('../config/app');

/**
 * 
 * @param {*} payload User object containing [email,name,password] keys
 */
let sign = (payload) => {
    let options = {
        expiresIn: "1h",
        algorithm: "HS256"
    }
    return jwt.sign(payload,config.AppSecret,options);
}

let verify = (token) => {
    try{
        return jwt.verify(token, config.AppSecret);
    }catch (err){
        return {error: err.message};
    }
}
    

module.exports = {
    sign,
    verify
}