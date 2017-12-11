// -*- JavaScript -*-

    function magic_multiply(x,y){
        if(x === 0 && y === 0 ){
            return "All inputes are zero";
            }
            if (typeof y === "number"){
                switch (typeof x) {
                    case "Number":
                        return x * y;
                    case "string":
                        return x.repeat(y);
                    case "objects":
                        if (Array.isArray(x)){
                            return x.map(x =>x*y);
                        }
                    default:
                    return `magic_multiply isnt able to process ${typeof x} data type.`;
            }
        }
        else{
            return "Can't multiply NaN"
        }
    }

let test1 = magic_multiply(7,"three");
console.log(test1);
