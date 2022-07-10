//1.On clicking the delete button we should be able to remove the newly created li tag
//2.Now add an edit button next to the delete icon.[Dont have to build the functionality]



var form = document.getElementById('addForm')
var itemList = document.getElementById('items')

//form submit event
form.addEventListener('submit',addItem)   //created event and tasked it to run a function addItem

//delete event //
itemList.addEventListener('click', removeItem)   //on click of delete btn (x) , we need to run a fn remove item


//creating function addItem
function addItem(e){
    e.preventDefault()

    // console.log(1);
    //get input value //
    var newItem = document.getElementById('item').value;

    //create new li element to add after the input //
    var li = document.createElement('li')
    //add class name to it
    li.className = 'list-group-item';
    console.log(li);

    //add textNode with input value
    li.appendChild(document.createTextNode(newItem))
    //create a delete button element //
    var deleteBtn = document.createElement('button')




    //Answer 2. =====================================================================
    //===============================================================================

    
    //create an edit btn
    var editBtn = document.createElement('button2')
    //============edit button class==========//
    editBtn.className = 'btn btn-danger btn-sm float-right'
    //append text node to edit btn//====================//
    editBtn.appendChild(document.createTextNode('edit'))
    //append btn in the li as btn should be inside of the <li> //=========================//
    li.appendChild(editBtn)

    //add classes to delete btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    
    //append text node //
    deleteBtn.appendChild(document.createTextNode('X'))
    
    // append btn in the li as btn should be inside of the <li> //
    li.appendChild(deleteBtn)
    
    //append <li> to list //
    //now we want to append child and pass that in <li>  //
    itemList.appendChild(li)
}

//Answer 1. =====================================================================
//===============================================================================

// remove item 
function removeItem(e){

    if (e.target.classList.contains('delete')){
        //confirming to delete //
        if (confirm('Are you sure ?')){
            //if yes then create a variable <li>
            var li = e.target.parentElement  //li is the parent and we need to delete that using btn so parentElement
            itemList.removeChild(li) //li is the child of item list ul

        }
        
    }
}












