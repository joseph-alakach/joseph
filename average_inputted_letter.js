    const any=require("readline-sync");
    let x=any.question("input a grade: ");
    // x is the inputted grade by the user
    let sum=0;
    let grades=[];
    if(isNaN(x)){
        while(isNaN(x)) {
            x=x.toLowerCase();
            switch(x){
                case "a":
                 sum=sum+4;
                 grades.push(x);
                 break;
                case "b":
                 sum=sum+3;
                 grades.push(x);
                 break;
                case "c":
                 sum=sum+2;
                 grades.push(x);
                 break;
                case "d":
                 sum=sum+1;
                 grades.push(x);
                 break;
                case "f":
                 sum=sum+0;
                 grades.push(x);
                 break;
                case "a-":
                case "a+":
                case "b-":
                case "b+":
                case "c+":
                case "c-":
                case "d+":
                case "d-":                                                            
                 sum=sum+0;
                 console.log("please reinput the last inputted grade without a (-) or (+) ");
                 break;  
            }
            x=any.question("input a grade or if you want to stop the programe input a number: ");
        } let average=sum/(grades.length);
        console.log( "the average is: " + average);
        console.log('the grades are: ');
        console.log(grades);
    }else{ 
        console.log('enter a valid grade (letter)');
    }
    