// -*- JavaScript -*-

// 1) No negatives?
function zero_negatives() {
    var max = true;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            max = false;
        }
    }
    console.log(max);
    return max;
}
x = zero_negatives(1, 123, 500, 115, 44, 88, -99);

// 2) Is even?
function is_even(number){
    if(number % 2 ==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
is_even(77);

// 3) How many evens?
function how_many_even() {
    var count = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 == 0) {
            count++;
        }
    }
    console.log(count);
    return count;
}
x = how_many_even(1, 123, 500, 115, 44, 88);

// 4) Return an array of random numbers between 0 and 9 with the length of n.

function create_dummy_array(){
    var newArr = [];
    for (var i = 0; i < arguments.length; i++){
        newArr.push(Math.floor((Math.random()* 9)+1));
    }
    console.log(newArr);
}
y = create_dummy_array(5);

// 5)
function random_choice(){
    var x = Math.floor((Math.random()* arguments.length)+1);
    console.log(arguments[x]);
}
j = random_choice(1, 123, 500, 115, 44, 88);
