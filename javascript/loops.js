

let d='#';
 let name ="durga"; 
for(i=1; i<7; i++){
    console.log(`${d}`);
    d=d+'#';
}
console.log(typeof(name));
console.log(name.length);

// fizz &buzz
 let num=1;
for( num=1; num<=100; num=num+1){
    if(num%3){
        console.log(`${num}='fizz'`);     
    }
    else if(num%5){
        console.log(`${num}='Buzz'`);    
    }
    else {
        console.log(`${num}='fizzBuzz'`);
    }
}


//even or odd
num=0;
for( num=0; num<=50; num=num+1){
    if (num%2){
        console.log(`${num}='even'`);  
    }
    else{
        console.log(`${num}='odd'`);   
    }    
}
    

/*
 let age=prompt('enter a age');
if(age>18){
console.log('your are eligible to vote');

}
else if(age!==18){
    console.log('you can vote next year'); 

}
else {
    console.log('your not eligible to vote');
    

}


/*
 let  student_name=prompt('enter your name');
 let  phone_number=prompt('enter your  phone number');
 let  password=prompt('enter user password');
 console.log(number);
 console.log(student_name);
 console.log(phone_number);
 console.log(password);*/



 /*// function defining
 const customer=function(name,itemName) {
    return `Hi ${name}.welcome to my ${itemName} show room`
 }
 let value=customer('billgates', 'car')
 console.log(value);
 

 //arror function
 const subnum=(c,d)=>{
    return c-d
 }
    console.log(subnum(100,50));


const max=(i,j,k,l,m,n)=>{
    let biggest_result=Math.max(i,j,k,l,m,n)
    return biggest_result
}
console.log(max(20,30,50,80, 10,20));

    

