let score :number | string =12
score=22
score ="44 "

type user={
    name:string
    id:number
}
type admin={
    username:string
    id:string
}

let radhey :user | admin ={
    username:"Radhey",
    id:"rwrwrwrwer"
}


//how to use with function
function getDBID(id: number | string){
    if(typeof id ==="string"){

        id.toLowerCase()
    }else{
        id=id+2
    }
}

//array 
const data:number[]=[1,2,5,3]

const data1 :number[]|string []=["hello","world"]   //this can take whole array element as string or as number

const data3 :(number| string)[]=[12,'34']  //by doing this we can accept element of both number and string 



//letttral assignment 
let pi:3.14
pi=3.14
// pi=2.32 


let seatAllotment :'aisle' | 'middle' |'window'
seatAllotment='aisle'
// seatAllotment='crew'   this cannot be done here cause it can only accepts above three