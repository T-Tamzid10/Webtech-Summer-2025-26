console.log("Connected");
function validation() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let file = document.getElementById("file").value;

    let gender = document.getElementsByName("gender");

    let selected = false;

    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            selected = true;
        }
    }

    if(!username){
        document.getElementById("usernameErr").innerHTML =
        "Username is required";
    }
    else if(username.length < 3){
        document.getElementById("usernameErr").innerHTML =
        "Username should be at least 3 char";
    }
    else{
        document.getElementById("usernameErr").innerHTML = "";
    }


    if(!password){
        document.getElementById("passwordErr").innerHTML =
        "Password is required";
    }
    else if(password.length < 8){
        document.getElementById("passwordErr").innerHTML =
        "Password must be at least 8 char long";
    }
    else{
        document.getElementById("passwordErr").innerHTML = "";
    }


    if(!selected){
        document.getElementById("genderErr").innerHTML =
        "Select gender";
    }
    else{
        document.getElementById("genderErr").innerHTML = "";
    }


    if(!dob){
        document.getElementById("dobErr").innerHTML =
        "DOB is required";
    }
    else{
        document.getElementById("dobErr").innerHTML = "";
    }


    if(!file){
        document.getElementById("fileErr").innerHTML =
        "File is required";
    }
    else{
        document.getElementById("fileErr").innerHTML = "";
    }

    return false;
}