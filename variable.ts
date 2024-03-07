let greetings :string ="Radhey Mugdal"
console.log(greetings);



//number 
let userId:number=312313

let username;
username="Radhey"



//any 
let hero;
function getHero(){
    return true;
}
hero=getHero( )


//function
function addTwo(num :number ){
    return num +2   ;
}
addTwo(23)

function getUpper( str : string){
    return str.toUpperCase();
}

console.log( getUpper("radhey"));

function signUpUSer(name :string ,password:string){
    return true
}

signUpUSer("radhey","password")


let loginuser=(name:string,password:string)=>{
    // return true;
    return "welcome user"
}


//specific return
function signUpUser(name :string ,password:string):number{
    return 1
}

// function getValue(myVal:number){
//     if(myVal>5){
//         return true
//     }
//     return "200 Ok"
// }

const getHello =(s:string):string=>{
    return ""
}

const heroes=["thor","spiderman","ironman"]
// const heroes=[1,2,3]
heroes.map((hero)=> `hero is ${hero}`)

function consoleError(err:string):void{
    console.log(err);
    // return 1
    
}

function handleError(err:string):never{
    throw new Error(err)
}


export { };

