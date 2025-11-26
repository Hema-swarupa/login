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
