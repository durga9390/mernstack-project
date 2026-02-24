/*const logged_details=[
    {
     username:  'keerthi',
     address:'guntur',
     e_mail:'keerthiutukuri@gmail.com',
     ph_no:'9398740704',
     location:'brodipet 4th line'
    },
    {
     username:  'durga',
     address:'hyderbad',
     e_mail:'durgagurrana4@gmail.com',
     ph_no:'9390563198',
     location:'lakshmi puram 4th line'
    },
    {
    username:  'swathi',
     address:'namburu',
     e_mail:'keerthiutukuri@gmail.com',
     ph_no:'9398740704',
     location:'vb nagar 4th line'
    }
]
let logged_exist= logged_details.find((details) => {
    return details.username === 'durga'
})

if (logged_exist) {
    console.log(`Hi ${logged_exist.name}. Welcome back!`)
} else {
    console.log(`Sorry! You dont have an account`)
    console.log('Do you want to create an account?')
    let user_answer = prompt("Type 'yes' to create account or else 'no'")
    if (user_answer === 'yes') {
        let username = prompt('Enter your name')
        let address=prompt('enter your address')
        let email = prompt('Enter your email')
        let ph_no = prompt('Enter your ph no ')
        let location = prompt('Enter your lcoation')

        const new_user = {
            username,
            address,
            email,
            ph_no,
            location

        }
        console.log(new_user)
        logged_details.push(new_user)
    } else {
        console.log('Ok bye!')
    }
}



console.log(logged_details)
let item= prompt('enter the item name')
if(item ==="mobile"){
    console.log("model :1+,memory:132gb,processor:qualcomm snap dragon 8,price:$15000;");
}
else {
     console.log("we haven't another gadgets");
     
}
let buy_no= prompt("don't you want to buy!!!  if you want to type buy or else type no");*/


// creating a object using object//
let car={
    car_brand:'audi', 
    model:'RS models (RS Q8, RS e-tron GT)',
    purpose:'driving',
    year:1910,
    make:'a prestigious German luxury car manufacturer, part of the Volkswagen Group',
    color:'brown',
    selling:'march 2006',
    including_parts:['horn', 'steering', 'seats', 'engine', 'wheels'],
    new_MyCar:{
        creators:"audi",
        features :['learn music' ,'bluetooth connection','seat belts', 'automatic parking'],
        insurance:true,
        cost:200000, 
        selling:'march 2009',
}
}
console.log(car);
console.log(car.car_brand);
console.log(car.color);
console.log(car.new_MyCar.features[0]);
console.log(car.new_MyCar.cost);
console.log(car.color=["black"]);
console.log(car.selling['fore sale']=true);
console.log(car.make);
console.log(car.model);





