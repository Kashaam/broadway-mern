class User {
    name; 
    #email;    //private


    constructor (){
        // async not
        // arrow function not
    }

    #setName(_name){
        this.name = _name
    }

    setEmail=(_email)=>{  //private
        this.email = _email;
    }

}



const user1 = new User();
console.log(user1);     //User {name: undefined, email: undefined}

user1.name = "Kasham Kshetri"
user1.setEmail("kashamksh99@gmail.com")








class Calculator{
    fer;
    cel;

    constructor(fer, cel){
        this.fer = fer;
        this.cel = cel;
    }

    

    getFer(){
        this.fer = (this.cel * 9/5) + 32
    }

    getCel(cel){
        this.cel = (this.fer -32) * 5/9;
    }
}


const tem = new Calculator(0, 40);
tem.getFer();
tem.getCel();
console.log(tem)





