let log = (request,response,next) => {
    console.log(`${request.method} || ${request.originalUrl}`);
    next();
}

module.exports = log;