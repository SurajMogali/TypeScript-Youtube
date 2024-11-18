let score:number | string = 33


score = 44
score = "55"


type User2={
    name:String;
    id:number
}

type Admin={
    name:String;
    id:number

}


let hitesh:User | Admin ={name:"hitesh",id:334}


hitesh ={name:"hc",id:334}


// function getDbId(id:number|string){

//     console.log('DB id is: ${id}');

// }

getDbId(3)
getDbId("3")


function getDbId(id:number|string){

   if(typeof id==="string"){
    id.toLowerCase()
   }
   

}


//array


 const data: (string |number|boolean)[]=[1,2,3,"4",true] 

let seatAllotment:"aisle"|"middle"|"window";
seatAllotment="aisle"




