//1Q:For the given JSON iterate over all for loops (for, for in, for of, forEach)
//AnsCode:
//creating Json data 
var detailes = [
    {
        person:"Raj",
        age:"25",
        company:"TCS"
    },
    {
        person:"Ram",
        age:"28",
        company:"Infosys"
    },
    {
        person:"Raghu",
        age:"30",
        company:"Google"
    },
];
//Json iteration using for loop
for (var i = 0; i < detailes.length;i++){
    //console.log(detailes[i]);
    console.log(`
    Name:${detailes[i].person}
    Age:${detailes[i].age}
    Company:${detailes[i].company}
    `)
}
//Json iteration using for in loop
for(var i in detailes){
    console.log(`
    Name:${detailes[i].person}
    Age:${detailes[i].age}
    Company:${detailes[i].company}
    `)
}
//Json iteration using for of loop
for(var i of detailes){
    console.log(`
    Name:${i.person}
    Age:${i.age}
    Company:${i.company}
    `)
}
//Json iteration using forEach loop
detailes.forEach(function(obj){
    console.log(`
    Name:${obj.person}
    Age:${obj.age}
    Company:${obj.company}
    `)
})

//2Q:Create your own resume data in JSON format
//AnsCode:
//creation of resume data in Json format
let resume = {   
    Basic:{   
            fName:"Jane",
            Email:"Jane@gmail.com",
            MobileNo:9874563212,
            Summary:"my Career objective is To utilize all my skills to improve organization growth and for my career success",
            Address:{
                HNo:1-25,
                City:"banglore",
                State:"Karnataka",
                Pincode:560001,            
            },
        },    
        Education:{
            Institute:"APJ institute of Technology and Science",
            Location:"Banglore",
            StudyType:"Btech-CSE",
            YearofStudy:2014-2018,
            GPA:8.6,
            },
        Languages:["Englis","Hindi","Tamil"],
        Skills:{
            Courses:["HTML","CSS","JavaScript"],
        }
    
};
//getting the resume Json data in one way    
console.log(resume.Basic);
console.log(resume.Education);
console.log(resume.Languages);
console.log(resume.Skills);
//getting the resume Json data in another way using template Literal
    console.log(`
    Basic-
          fName:${resume.Basic.fName}
          Email:${resume.Basic.Email}
          MobileNo:${resume.Basic.MobileNo}
          Summary:${resume.Basic.Summary}
        Address-
          City:${resume.Basic.Address.City}
          State:${resume.Basic.Address.State}
    Education-
          Institute:${resume.Education.Institute}
          StudyType:${resume.Education.StudyType}
          YearofStudy:${resume.Education.YearofStudy}
          GPA:${resume.Education.GPA}
    Languages:${resume.Languages}
    Skills:${resume.Skills.Courses}    
    `);
