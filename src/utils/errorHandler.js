
const errorHandler = ( message, code ) => {
    let e = new Error( message );
    if( code ) e.statusCode = code;
    return e;
}

module.exports = errorHandler;