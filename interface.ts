interface User{
    readonly dbID: number
    email:string,
    userId:Function,
    startTrail:() => string
    getCoupen(coupannameL :string) :number
}
interface User{
    token:string
}

let radheyZzczczc : User={
    email:"radhey@gmail.com",  
    userId:()=>{
        return "wq"
    },
    dbID:121212,
    startTrail:()=>{
        return "trail started"
    },
    getCoupen(name :"coupen1 "){
        return 1
    },
    token: "gh-token"
}


interface adminbhai extends User{

    role:"admin" |"manager"
}