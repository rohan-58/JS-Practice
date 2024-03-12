const user = {
    name:"Rohan",
    price:999,
    welcomeMessage: function(){
        console.log(`Hello ${this.name} , welcome to website`);  //when we refers current context then we use (this) keyword
        //console.log(this);  //this print current context
    }
}
user.welcomeMessage()
user.name = "Raman";    //here we have changed the current context
user.welcomeMessage()