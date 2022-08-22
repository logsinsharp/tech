class student{

    static count=0;  //static variable to call

    

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       

       return(student.count++);     //this is how u access static variable

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${age} is not eligible`);

       }

   }
const priya=new student('priya',25,69);

const lachu=new student('lachu',37,90);

const darsh=new student('darsh',29,45);