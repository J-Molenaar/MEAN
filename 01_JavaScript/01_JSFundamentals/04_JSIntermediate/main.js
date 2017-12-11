// -*- JavaScript -*-

// 1) Stars
let stars = star_string(8);
function star_string(stars){
    var str = "*";
    console.log(str.repeat(stars));
};

// 2) Stars Array
let x = draw_stars([4, 6, 1, 3, 5, 7, 25]);
function draw_stars(x){
    var str = "*";
    for(var i = 0; i < x.length; i++){
        console.log(str.repeat(x[i]));
    }
};
// 3) Stars and Letters
let y = draw_stars_II([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);
function draw_stars_II(y){
    for(var i = 0; i < y.length; i++){
        if(isNaN(y[i])){
            var str = y[i][0].toLowerCase();
            console.log(str.repeat(y[i].length));
        }
        else{
            var str = "*";
            console.log(str.repeat(y[i]));
        }
    }
};
