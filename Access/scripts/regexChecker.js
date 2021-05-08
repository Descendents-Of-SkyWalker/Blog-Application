let nameRegex = /^[a-zA-Z ]+$/;
let userRegex = /^[ A-Za-z0-9_@./#&+-]+$/;
let mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let pswdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,20}$/;

function regexTest(value, regex){
    if(value.match(regex))
        return true;
    else
        return false;
}

function validator(key, value){
    console.log(key, value);
    switch(key.toLowerCase()){
        case "name":
            return regexTest(value, nameRegex);
        case "username":
            return regexTest(value, userRegex);
        case "mail id":
            return regexTest(value, mailRegex);
        case "password":
            return regexTest(value, pswdRegex);
        default:
            return true;
    }
}