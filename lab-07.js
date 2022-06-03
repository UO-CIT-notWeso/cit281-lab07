//Custom Error class
class CustomError extends Error {
constructor(message) {
    super(message);
}}


//throw Generic Error
function throwGenericError() {
    throw new Error(" Generic error ");
}


//throw Custom Error
function throwCustomError(){
    throw new CustomError(" Custom error ");
}


//try..catch..finally calling throwGenericError
console.log(" Force generic error ");
try {
    console.log(" Generic error try block ");
    throwGenericError();
}
catch (err) {
    console.log(" Generic error catch block ");
    console.log(" Error: ", err.message);
}
finally {
    console.log(" Generic error finally block ");
}


//try..catch..finally calling throwCustomError
console.log(" Force custom error ");
try {
    console.log(" Custom error try block ");
    throwCustomError();
} 
catch (err) {
    console.log(" Custom error catch block ");
    console.log(" CustomError: ", err.message);
}
finally {
    console.log(" Custom error finally block ");
}
