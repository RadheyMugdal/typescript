class Userjii{
   
    private readonly city:string ="vadodara"
    constructor (public email:string,public name:string){
        this.email=email
        this.name = name
    }

    get getAppleEmail():string{
        return  `apple:${this.email}`;
    }
}

///access modifier
class Course{
    protected coursecount:number
    private deleteToken(){
        console.log("token deleted");
        
    }
    get getCountofCourses():number{
        return this.coursecount
    }
    set setcountofcourse(count){
        this.coursecount=count
    }

    get tokendelete():Function{
        return this.deleteToken
    }
}


class Userbhao extends Course{
     isFamily :boolean =true
     changeCourseCount(){
        this.coursecount=1
     }
}