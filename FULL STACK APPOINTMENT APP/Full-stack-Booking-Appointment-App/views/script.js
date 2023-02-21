let form = document.getElementById('form');
let itemList = document.getElementById('users');

let flag = false;

//-------Display the data from server to UI after each time refresh screen
//axios.get request to gitting data from crudcrud to UI.

window.addEventListener('DOMContentLoaded', () => {
    axios.get("http://localhost:3000/forms")
        .then((response) => {
           
            response.data.allUsers.forEach((ele) => {
                showNewUserOnscreen(ele);
               
            })
        })
        .catch((err) => {
            console.log(err);
        })
})

//form submit event:


form.addEventListener('submit', addItem);


function addItem(e) {
    e.preventDefault();
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let obj = {
        id,
        name,
        phone,
        email
    };
    postRequest = async () => {
        try {
             if(flag==false){
            //add new data server as well as in UI.
            const response = await axios.post("http://localhost:3000/forms", obj);
            console.log(response);
            console.log(response.data.newUserDetail);
           
            showNewUserOnscreen(response.data.newUserDetail);
            return;}

            else
            {
                console.log(obj.id);
                const response = await axios.put(`http://localhost:3000/forms/${obj.id}`, obj);
                console.log(response.data);
                location.reload();
                
                
            }
        } catch (err) {
            document.body.innerHTML += "<h4>Something went wrong !</h4>";
            console.log(err);
        }
    }
    postRequest();
}



//delete data from UI and Server as well.
deleteUserfromapi = async (id) => {
    try {
        const users = await axios.delete(`http://localhost:3000/forms/${id}`);
        deleteUser(id);
    } catch (err) {
        document.body.innerHTML += "<h4>Something went wrong !</h4>";
        console.log(err);
    }
}

//for display list on screen
function showNewUserOnscreen(userDetails) {
    const d=document.getElementById('users')
    let li= `<li id="${userDetails.id }"> '${userDetails.name}','${userDetails.phone}','${userDetails.email}'
     <button onclick = editUser('${ userDetails.id}','${userDetails.name}','${userDetails.phone}','${userDetails.email}')> Edit </button> 
     
     <button onclick = deleteUserfromapi('${userDetails.id}')> Delete </button> 
      </li>`
   d.innerHTML=d.innerHTML + li
}

function deleteUser(id) {
    let child = document.getElementById(id)
    let parent=document.getElementById('users')
    parent.removeChild(child)
    
}

function editUser(id,name,phone,email) {
    flag = true;
    document.getElementById('id').value=id;
    document.getElementById('name').value=name;
document.getElementById('phone').value=phone;
document.getElementById('email').value=email;

    }


//function for delete and edit button.





function deleteUser(id) {
    let child = document.getElementById(id)
    let parent=document.getElementById('users')
    parent.removeChild(child)
    
}

function editUser(id,name,phone,email) {
    document.getElementById('id').value=id;
    document.getElementById('name').value=name;
document.getElementById('phone').value=phone;
document.getElementById('email').value=email;
deleteUserfromApi(id)
    }


//function for delete and edit button.




