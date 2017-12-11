// -*- JavaScript -*-

// 1)
    var x = [];
    x.push("Coding", "Dojo", "Rocks");
    x.pop();
    console.log(x);
// Log the final value of x, what is it?
    // x = ["Coding", "Dojo"]

// 2)
    const y = [];
    y.push(88);
    console.log(y);
// What happened?
    // y = [88];

// 3)
    var z = [9, 10, 6, 5, -1, 20, 13, 2]
    for(var i = 0; i <z.length; i++){
        console.log(z[i]);
    }
    // Now print every element except the final number.
    for(var i = 0; i <z.length-1; i++){
        console.log(z[i]);
    }

// 4)
    var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
    for(var i = 0; i<names.length; i++){
        if(names[i].length === 5){
        console.log(names[i]);
        }
    }

// 5)
    function yell(str){
        console.log(str.toUpperCase());
    }
    yell("Hello World!");
