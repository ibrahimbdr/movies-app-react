import React from 'react'

class Auth {
    constructor(){
        this.auth = false;
    }

    login(func){
        return this.auth = true;
        func();
    }

    logout(func){
        return this.auth = false;
        func();
    }

    isLoggedIn(){
        return this.auth
    }
}


export default  new Auth();