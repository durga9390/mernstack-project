/*//DOM=document object model//


const h1_element =document.querySelector('#main_text');
console.log(h1_element.innerText)

const click_me=document.querySelector('#btn');

 let element=true 

click_me.addEventListener('click',()=>{
    if(element){
        h1_element.innerText='hi'
        element=false;
    }
    else{
        h1_element.innerText='hello world!!!'
        element=true;
    }
    })

const list_items = document.querySelectorAll('li')

 console.log(list_items)

for (let item of list_items) {
     console.log(item.textContent)
item.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.remove() 
})
}


const element_p=()=>{
    const element_p=document.createElement('p')
    element_p.textContent=item.textContent
    h1_element.appendchild(element_p)
    item.textContent=''
    
}*/



//todo list//
const h1_element=document.querySelector('h1')
const colors_element=document.querySelector('#colors')
console.log(h1_element);
console.log(colors_element);
h1_element.addEventListener('click,',()=>{
    console.log( 'i am h1 element' );
})
const buy_button_element=document.querySelector('#buy_btn')
console.log(buy_button_element);
const ul_element=document.querySelector('#ul_element')
console.log(ul_element);
const addNewlistElementfunction =()=>{
      console.log(colors_element);
       console.log(colors_element.value);

       const new_li=document.createElement('li')
       new_li.textContent=colors_element.value
       ul_element.appendChild(new_li)
       colors_element.value=''

       const new_button=document.createElement('button')
       new_button.textContent="delete"
       new_li.appendChild(new_button)

//add event listener to  delete list
       new_button.addEventListener('click',()=>{
        ul_element.removeChild(new_li)
       })

// creating a edit button//
const edit_button=document.createElement('button')
edit_button.textContent='edit'
new_li.appendChild(edit_button)

//add  event listener to edit list//
    edit_button.addEventListener('click',()=>{
        colors_element.value=new_li.firstChild.textContent;6
       })

//creating a update button//
const update_button=document.createElement('button')
update_button.textContent='update'
new_li.appendChild(update_button)

//add event listener to update item//
update_button.addEventListener('click',()=>{ 
    if (colors_element.value.trim() !=="")
        {
          new_li.firstChild.textContent=colors_element.value;
            colors_element.value="";
        }  
})
}

buy_button_element.addEventListener('click',()=>{
addNewlistElementfunction()

})

colors_element.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        addNewlistElementfunction()
    }
})




