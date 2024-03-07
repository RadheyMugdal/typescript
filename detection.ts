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