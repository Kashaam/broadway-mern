class User {
    #name;
    address;
    phone;


    setName(_name){
        this.#name = _name;
    }

    constructor(){
        console.log("I am in parent class")
    }
}


class Admin extends User{
    email;
    role = "ADMIN"

    //we cannot directly call constructor in child class

    constructor(_name){  //constructor overriding
        super(_name);
        console.log("I am in admin class");
    }

    getName(){
        return ('My name is ' + super.getName());
    }
}

const objName = new Admin("Raman");
objName.getName();




