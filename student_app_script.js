var start=prompt("Would you like to start web Appication : (y/n) ?");


var students=[]

function addNewStudent()
 {
   var name=prompt("which name would u like to add?:");
   students.push(name);
}
function displayStudents()
 {
   console.log(students);
}
function removeStudent()
 {
   var name=prompt("which name would like to delete?:");
   var index=students.indexOf(name);
   students.splice(index,1);
}




if (start==='y')
 {
   while (request!=='quit') {

     var request= prompt(" Please Seelct an Option: add,remove,display or quit");

     if (request==='add')
      {
        addNewStudent();
     }
     else if(request==='remove')
     {
        removeStudent();
     }
     else if(request=='display')
     {
       displayStudents();
     }
   }
}
alert("Thanks for Using Web Application. Please Referesh to Start Again");
