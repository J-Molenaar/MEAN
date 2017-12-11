// -*- JavaScript -*-

var _ = {
   map: function(arr, func) {
       let newArr = [];
       for(let i = 0; i < arr.length; i++){
           newArr.push(func(arr[i]));
       }
       return newArr;
   },

   // reduce is dumb... no one uses this.
   // reduce: function() {
   //   // code here;
   // },

   find: function(arr, func) {
     for(let i = 0; i <arr.length, i++){
         let result = func(arr[i]);
            if(result === true){
                return result;
            }
        }
        return false;
   },
   filter: function(arr, func) {
       let newArr = [];
       for(let i = 0; i < arr.length; i++){
           let result = func(arr[i]);
           if(result === true){
           newArr.push(arr[i]);
        }
       }
       return newArr;
   },
   reject: function(arr, func) {
       let newArr = [];
       for(let i = 0; i < arr.length; i++){
           let result = func(arr[i]);
           if(result === false){
           newArr.push(arr[i]);
            }
       }
       return newArr;
   }
 }

 var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 console.log(evens);
