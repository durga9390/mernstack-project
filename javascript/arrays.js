/*//sum fo last two numbers
const adition=(value)=>{
    let last_first=Number(value.at(-2))
    let last_second=Number(value.at(-1))
    let add= last_first + last_second ;
console.log(`sum of last two numbers :${add}`)
}
adition([1,2,3])
adition([2,4,5,6,9])
adition([1,5,7])

//for of  syntax sum of all numbers
 const list_num=function sum(numbers){
    let sum=0;

    for(let num of numbers){
        sum+=num;
    }
return sum;
}
list_num([4,,8,9]);

//make pi 
const make_pi=()=>{
    return[20,39,10]
}
console.log(make_pi());


const first_last10=(list)=>{
    if(list[0]===10|| list[list.at-1]===10){
        console.log('true')
    }
    else{
        console.log('false');
    }
}
first_last10([1,30,9])
first_last10([10,20,40])
first_last10([0,5,11])*/
  

/*//find index in a list//
arr8 =[9,4,5,8]
let findIndex =arr8.indexOf(0)
console.log(findIndex)


let fruits=['orange', 'apple', 'banana', 'grap', 'orange']
let lastfruit=fruits.lastIndexOf('orange')
console.log(lastfruit);*/
    

