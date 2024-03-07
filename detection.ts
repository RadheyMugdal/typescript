function detectType(val: number |string ){
    if(typeof val==="number"){
        return 1
    }else{
        return val.toLowerCase()
    }
}

// detectType([233,32,32,4,232,32,])

function provideId(id:string |null){
    if(!id){
        console.log("please provide id");
        return
    }
    return id.toLowerCase()
}


//instance of

function logvalue(x: Date  |string){
    if(x instanceof Date){
        return x
    }
}

type Fish={
    swin :()=>void
}
type Bird={
    fly:()=>void
}
function  isFish(pet:Fish|Bird) :pet is Fish {
    return (pet as Fish ).swin === undefined 
}

function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet
        return "fishfood"
    }
    return "birdfood"
}