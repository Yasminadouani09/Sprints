// ESSENTIAL
// 1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop 
// and prints all elements of the array in the console using console.log.
function arrayFor(array){
    for (i=0;i<array.length;i++){
        console.log(array[i])
    }
} 
//  2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While 
// Loop and prints all elements of the array in the console using console.log.
function arrayWhile(array){
    i=0;
    while(i<array.length){
        console.log(array[i])
        i++
    }
}   
 
//  3.Write a function called sum that takes an array of numbers
//  as a parameter and returns the sum of the numbers in the array.
function sum(array){
    result=0
    for (i=0;i<array.length;i++){
        result=result+array[i]
    }
    return result
}
// 4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns
// the summation of every other number starting from the beginning of the array.
function sumEveryOther(array){
    let result=0
    for(let i=0;i<array.length;i+=2){
        result+=array[i]
    }
    return result
}

// 5.Write a function called sumStartAt that takes an array of numbers, 
// and an index as parameters and returns the summation of every number starting 
// from the inputted index, until the end of the array.
function sumStartAt(array,index){
    let result=0
    for (index;index<array.length;index++){
        result+=array[index]
    }
    return result
}

//  6.Write a function called sumUntil that takes an array of numbers, 
// and an index as parameters and returns the summation of every number
//  starting from the index 0, until the index parameter.

function sumUntil(array,index){
    if (index > array.length){
        return "index est sup a la longuer du array"
    }
    else{
    let result=0
    for (i=0;i<=index;i++){
        result+=array[i]
    }
    return result
}
}


//   7.Write a function called subtractReverse that takes an array of numbers as a parameter and
//    returns the subtraction of every number beginning at the last element of the input array and
    // ending at the first element of the input array (in reverse).

    function subtractReverse(array){
        let result=0
        for(i=-1;i;i--){
            result=result-array[i]
        }
        return result
    }
    
     //  8.Write a function called product that takes an array as a parameter and 
    //  returns the product of all the elements in the array.

    function product(array){
        let result=1
        for(let i=0;i<array.length;i++){
            result*=array[i]
        }
        return result

    }


    //9 write a function called average that takes an array as 

    function average(array){
        result=0
        for (i=0;i<array.length;i++){
            result+=array[i]
        }
        return (result/(array.length))
    }

    //10 write a function called square 

    function square(array){
        arraysquare=[]
        for (i=0;i<array.length;i++){
            arraysquare.push(Math.sqrt(array[i]))
    }
    return arraysquare
}

// 11 . write a function called isArray that takes one parametre and returns true if the input is array otherwhise returns false 
        function isArray(param)
        {
            if (typeof(param)==='array')
            return true
       
        else 
        return false
    }

    //EXTENDED
   // 1.write a function called min that takes an array as a parametre and returns the smallest number from the array

        function mini(array){
            for(i=0;i<=array.length;i++){
                if (array[i]< array[i+1])
                result=array[i]
            }
            return result

        }

        // 1.write a function called max that takes an array as a parametre and returns the largest number from the array
         
        function max(array){
            for(i=0;i<=array.length;i++){
                if (array[i]> array[i+1])
                result=array[i]
            }
            return result

        }
