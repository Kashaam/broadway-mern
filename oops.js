
// function as a class
function User(name){
    console.log("I am here");
    this.name = name;
    this.lastname = '';
    console.log(name)
}

User.prototype.setName = function(_name){
    this.name = _name;
}




const userObj = new User("Kasham");
console.log(userObj);

userObj.lastname = "Kshetri";
console.log(userObj);


