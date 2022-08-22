
class student {
    constructor(name,age,ph_no,marks){

        this.name=name;
    
        this.age=age;
    
        this.ph_no=ph_no;
    
        this.marks=marks;
    
    }
    placementAge(minAge){
        console.log(this);
        return (minMarks) => {
            console.log("inside eligibility",this);

            if (this.marks>minMarks && this.age > minAge){
                console.log(this.name+ "is eligible for placements");
            }
            else{
                console.log(this.name+ "is eligible for placements");
            }   
        }
    }
}
const priya=new student('priya',25,69);
priya.placementAge(19)(50);