    function addTwo(num:number){    
        return num+1
    }



    function getUpper(val : string){
        return val.toUpperCase()
    }


    function signUpUser(name:string,email:string,isPaid:boolean){


    }

    let loginUser=(name:string,email:string,isPaid:boolean=false)=>{

    }

    signUpUser("Suraj","suraj@gmail.com",false)
    loginUser("Tejas","Tejas@gmail.com")

    console.log(addTwo(5));


    function getValue(myVal:number){
        if(myVal>5){
            return true
        }

        return "200 OK"

    }


    const getHello =(s:String):String=>{
        return ""
    } 

    const heros=["thor","spiderman","ironman"]
    //const heros =[1,2,3]

    heros.map((hero):string=>{
        return 'hero is ${hero}'


    })


    function consoleError(errmsg:string):void{
        console.log(errmsg);
       
    }

    //It will return a value nor it have the return type.
    //It means it will throw the exception 
    function handleError(errmsg:string):never{
        throw new Error(errmsg);
    }

    






    export {}