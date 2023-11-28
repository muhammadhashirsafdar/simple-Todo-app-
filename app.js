let addbtn = document.getElementById("add-object-btn");
let savebtn = document.getElementById("save-object-btn");
let deleteallbtn = document.getElementById("delete-all");
let objectlist = document.getElementById("object-list");
let editedobject = null

savebtn.style.display = "none"
deleteallbtn.style.display="none"


// Giving attributes

addbtn.setAttribute("class","add-btn")
savebtn.setAttribute("class","save-btn")
deleteallbtn.setAttribute("class","removeallbtn")

// Add button function

addbtn.onclick = function(){
    let objectinput = document.getElementById("object-input");
    let objectinputvalue = objectinput.value;

    if(objectinputvalue.trim()){
        // Creating Li Tag

        let createli = document.createElement("li");
        createli.innerText = objectinputvalue;
        

        // Adding Edit button in Li

        let editbtn = document.createElement("button");
        editbtn.innerText = "Edit"
        createli.appendChild(editbtn);
        editbtn.setAttribute("class","edit-btn")
        

        // Adding Delete button in li 

        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete"
        createli.appendChild(deletebtn);
        deletebtn.setAttribute("class","delete-btn")

        // Adding Li in Ol


        objectlist.appendChild(createli);
        deleteallbtn.style.display = "inline-block"


        // Delete Btn Function

        deletebtn.addEventListener("click",function(){
            createli.remove();
            if(objectlist.children.length === 0){
                deleteallbtn.style.display = "none"
            }
        })


        // Edit Btn Function

        editbtn.addEventListener("click",function(){
            
            let editedtext = createli.childNodes[0].nodeValue;
            objectinput.value = editedtext;
            editedobject = createli
            savebtn.style.display = "inline-block"
            addbtn.style.display = "none"


        //  Save button function

        savebtn.addEventListener("click",function(){
            savebtn.style.display = "none"
            addbtn.style.display = "inline-block"
            editedobject.childNodes[0].nodeValue = objectinput.value;
            objectinput.value = ""

        })

            
        })


    }else{
        alert("Please Input ")
    }

    objectinput.value = ""


}

// Delete all button function

deleteallbtn.onclick=function (){
      if(objectlist.children.length > 0){
        objectlist.innerHTML = null
      }
      deleteallbtn.style.display="none"
}