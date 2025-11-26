function signup(username){
    let arr=["hema","namodh","venkatesh"];
    if(arr.includes(username)){
        return "user already registered ,please login";
    }
    else{
        arr.push(username);
        return "signup sucessfull,please login";
    }
}
function login(user,pass){
    let arr=["hema","namodh","venkatesh"];
    if(arr.includes(user)){
        if(pass="Emp@123"){
            return "login sucessful";
        }
        else{
            return "wrong password";
        }
    }
    else{
        return "user not found";
    }
}