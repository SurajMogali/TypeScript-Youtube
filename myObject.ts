const User={
    name:"hitesh",
    email:"hitesh@lco.dev",
    isActive:true
}  

//Passing the object as parameter
function createUser({name:String,isPaid:boolean}){}

let newUser={name:"hitesh",isPaid:false,email:"Suraj@gmail.com"}


createUser(newUser);   //we can add the new field and pass a object as a parameter




createUser({name:"Hitesh",isPaid:false})

function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:399}
}





type User={
    name:string;
    email:string;
    isActive:boolean;
}

//Pass the parameter which is of the type User
function generateUser(user:User):User{
    return {name:"Virat",email:"virat@gmail.com",isActive:true} 
}


console.log(generateUser({name:"",email:"",isActive:true}))


type User2={
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    credcardDetails?:number
}

let myUser:User2={
    _id:"12345",
    name:"h",
    email:"h@h.com",
    isActive:false,
   

}


type cardNumber={
    cardnumber:string
}


type cardDate={
    cardDate:string
}

type cardDetails=cardNumber & cardDate & {
    cvv: number
}


myUser.email="h@gmail.com"
//myUser._id="asa"










export{}






