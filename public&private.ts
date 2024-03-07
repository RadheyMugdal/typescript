class User{
    email:string
    name:string
    private readonly city:string ="vadodara"
    constructor (email:string,name:string){
        this.email=email
        this.name = name
    }
}

const radheyji =new User("radhey@gmail.com","Radhey")