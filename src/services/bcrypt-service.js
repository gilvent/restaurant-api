const bcrypt = require('bcrypt');

/**
 * @param {*} plainText Password to be hashed in plain text
 * @returns Promise of hashed plain text 
 */
let hash = (plainText) => {
    return bcrypt.hash(plainText,10);
}

/**
 * 
 * @param {*} plainText Plain text to be compared
 * @param {*} hash Hashed password from database
 * @returns Promise of boolean
 */
let compare = (plainText,hash) => {
    return bcrypt.compare(plainText,hash);
}

module.exports = {
    hash,
    compare
}