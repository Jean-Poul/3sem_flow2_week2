import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById('tb');
const url = 'http://localhost:3333/api/users';



fetch(url)
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        const trs = data.map((user) => {
            return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>`;
        });
        const trStr = trs.join('');
        tb.innerHTML = trStr;
    });



function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

/*
## Get user by ID
*/

const showUser = document.getElementById('txt_User');
const input = document.getElementById('inp_User').value;
document.getElementById("btn_User").onclick = () =>{
    const id = document.getElementById("inp_User").value;
    fetch(url + "/" + id)
    .then(res => fetchWithErrorCheck(res))
    .then(user => {
        const userString = `ID: ${user.id} Name: ${user.name}`;
        document.getElementById("txt_User").innerHTML = userString;
    });
}


/*
## Insert user
*/
document.getElementById("btn_InsertPerson").onclick = () => {


    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById("inp_InsertName").value,
            age: document.getElementById("inp_InsertAge").value,
            gender: document.getElementById("inp_InsertGender").value,
            email: document.getElementById("inp_InsertMail").value
        })
    }

    fetch(url, options);

    location.reload();
    
}

/*
## Edit user
*/
document.getElementById("btn_updatePerson").onclick = () => {

    const updateID = document.getElementById("inp_updateID").value;

    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById("inp_updateName").value,
            age: document.getElementById("inp_updateAge").value,
            gender: document.getElementById("inp_updateGender").value,
            email: document.getElementById("inp_updateMail").value
        })
    }
    fetch(`${url}/${updateID}`, options);
    location.reload();
}

/*
## Delete user
*/
document.getElementById("btn_DeletePerson").onclick = () => {
    const deleteID = document.getElementById("inp_DeleteID").value;

    let options = {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json'
        }
     }   
     fetch(`${url}/${deleteID}`, options);
     location.reload();
}

