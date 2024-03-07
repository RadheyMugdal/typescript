const user={
   name:"Radhey",
   email:"radhey@gmail.com" ,
   isActive:true
}

function createUser({name:string ,isPaid:boolean,}){

}

createUser({name:"Radhey",isPaid:true})
// createUser({name:"Radhey",isPaid:true,email:"ead"})

let user1={name:"radhey",isPaid:true,isActive:true}
createUser(user1)


function createCourse():{name:string ,price:number}{
    return {name:"react",price:233}
}


type User={
    name:string,
    email:string,
    isActive:boolean
}

function createUserhere(user:User){

}
createUserhere({name:"Radhey",email:"temp@gmail.com",isActive:false})



type user2={
    readonly _id :string
    name :string,
    email:string
     isactive:boolean
     creditcardDetails?:number
}

let  myUser2 :user2 ={
    _id:'12121'
    ,name:'Radhey',
    email:'radhey@gmail',
    isactive:true,
   

}


myUser2.email='h@gmail.com'
// myUser2._id="12121";  read only


type cardNumber={
    cardnumber:string
} 


type cardDate={
    cardDate:string
}

type creditcardDetails=cardNumber & cardDate  & {
    cvv:number
}
export { }
