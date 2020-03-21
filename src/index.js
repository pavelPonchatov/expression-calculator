function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arrExpr;
    if(expr.length == 3) {
        arrExpr = expr.split("");
    }else{
        arrExpr = expr.split(" ");
    }
    
    let res = 0;

    let mathOperation = {
        "+": (a,b)=>a+b,
        "-": (a,b)=>a-b,
        "*": (a,b)=>a*b,
        "/": (a,b)=>{
            if(b==0) throw("TypeError: Division by zero.");
            return a/b;
        },
    };
    
    let arrFiltered = arrExpr.filter(el => {
        if(el !== " "){
            return el;
        }
    })

    
    for(let i = 0; i < arrFiltered.length; i++) {

        if(arrFiltered[i] == "*" || arrFiltered[i] == "/") {
            res = mathOperation[arrFiltered[i]](+arrFiltered[i-1],+arrFiltered[i+1]);
            arrFiltered.splice(i-1,3, res);
            i--;
        }
        
    }



    for(let i = 0; i < arrFiltered.length; i++) {
        
        if(arrFiltered[i] == "+" || arrFiltered[i] == "-") {
            res = mathOperation[arrFiltered[i]](+arrFiltered[i-1],+arrFiltered[i+1]);
            arrFiltered.splice(i-1,3, res);
            i--;
        }
    }

    return res;

}

module.exports = {
    expressionCalculator
}





// function expressionCalculator(expr) {
//     let arrExpr = expr.split(" ");
//     let plus = "";
//     let res = 0;

//     let mathOperation = {
//         "+": (a,b)=>a+b,
//         "-": (a,b)=>a-b,
//         "*": (a,b)=>a*b,
//         "/": (a,b)=>{
//             if(b==0) throw("TypeError: Division by zero.");
//             return a/b;
//         },
//     };
    
//     let arrFiltered = arrExpr.filter(el => {
//         if(el !== " "){
//             return el;
//         }
//     })

    
//     for(let i = 0; i < arrFiltered.length; i++) {

//         if(arrFiltered[i] == "*" || arrFiltered[i] == "/") {
//             console.log(arrFiltered);
//             res = mathOperation[arrFiltered[i]](+arrFiltered[i-1],+arrFiltered[i+1]);
//             arrFiltered.splice(i-1,3, res);
//             console.log(arrFiltered);
//             i--;
//         }
        
//     }



//     for(let i = 0; i < arrFiltered.length; i++) {
        
//         if(arrFiltered[i] == "+" || arrFiltered[i] == "-") {
//             console.log(arrFiltered);
//             res = mathOperation[arrFiltered[i]](+arrFiltered[i-1],+arrFiltered[i+1]);
//             arrFiltered.splice(i-1,3, res);
//             console.log(arrFiltered);
//             i--;
//         }
//     }

//     return res;


// }



// console.log(expressionCalculator(" 39 / 41 + 100 + 45 "));