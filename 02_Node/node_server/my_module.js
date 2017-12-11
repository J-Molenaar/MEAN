module.exports = function(){
    return {
        greet: function(){
            console.log("we are now using a module!");
        },
        add: function(num1, num2){
            console.log("the sum is:", num1 + num2);
        }
    }
}


// module.exports = function(){
//     return {
//         greet: function(){
//             console.log("we are now using a module!");
//         },
//         add: function(num1, num2){
//             console.log("the sum is:", num1 + num2);
//         }
//     }
// }

// IN APP.JS:
// var my_module = require('./my_module')();     //notice the extra invocation parentheses!
// console.log(my_module);
// my_module.greet();
// my_module.add(5,6);
