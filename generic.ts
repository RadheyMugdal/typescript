const score:Array<number> = []
const names:Array <string> =[]


function  identifyone(val: boolean |number) :boolean |number{
    return val
}
function identifytwo <Type>(val :Type):Type {
    return val
}

function identitythree <T>(val:T):T{
    return val
}


function getSearchProducts<T>(products :T[]):T{
    return products[0]
}

const getSearchproduct=<T>(products: T[]):T=>{
    return products[1]
}

interface Database{
    connection:string
    username:string
    password:string
}

function anotherfunc <T,U extends Database>(valone:T,valtwo:U ):object{
    return {valueOne:valone, valueTwo:valtwo};
}

anotherfunc(12,{connection:"12",username:"radhey",password:"eer"})

interface quiz{
    namr:string
    type:string
}
interface course{
    name:string
    author:string
    subject:string
}
class Sellable <T> {
    public cart:T[] =[]
    addtoCart(product: T){
        this.cart.push(product)
    }
}