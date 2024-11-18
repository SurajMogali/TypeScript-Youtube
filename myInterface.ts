interface IUser{
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string
   // startTrial :()=> string
    startTrial(): string
    getCoupon(coupon:string,value:number):number

}

interface IAdmin extends IUser{
    role:"admin" | "ta"  | "learner"

} 













const suraj:IUser={dbId:22,email:"h@h.com",
    userId:2211,
    startTrial:()=>{
        return "Trial Started"
    },
    getCoupon:(name:"akash",value:10)=>{
        return 10
    }
}

suraj.email="h@hc.com"
//suraj.dbId=33
// suraj.dbId=33



