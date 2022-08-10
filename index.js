function receivesAFunction(callback) {
    return callback();
} 
receivesAFunction(function () {return Spy});


function returnsANamedFunction() {
    return function fn() {
        return "hello"
    }
}
    


function returnsAnAnonymousFunction() {
    return function() {
        
    }
}
   