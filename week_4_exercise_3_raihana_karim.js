let globalCount = 12;
 console.log("global count original value: ", globalCount);
 console.log("_".repeat(80));
 
 function showLocalScope(){
    let localCount = 5; 
    console.log("local count original value: ", localCount);
    change()
    function change(){
        globalCount = 18;
        localCount = 10;
    }
    console.log("local count changed value: ", localCount);
    console.log("global count (inside function) changed value: ", globalCount);
    console.log("_".repeat(80));
 }

 function student(name, surname, age, grade){
    this.name = name;
    this.surname = surname; 
    this.age = age;
    this.grade = grade;
 }
{
 let student1 = new student("raihana", "karim", 18, "A");
 let student2 = new student("deon", "hawes", 20, "B");
 let student3 = new student("shaheed", "karlie", 19, "B+");

 const students = [student1, student2, student3];

 console.log(student1, student2, student3);
 console.log("_".repeat(80));
}

 let school = {
    name: "spine road high",
    location: "rocklands",
    principal: {
        name: "mr.fairbain",
        age: 56
    },
    address: {
        street: "corner of spine road and merrydale avenue",
        city: "cape town",
        zip: "7785"
    },
 };

 console.log(school);
 console.log(school.principal);
 console.log(school.address); 