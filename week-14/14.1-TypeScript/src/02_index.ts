interface UserI {
	firstName: string;
	lastName: string;
	age: number;
}

function isLegal(user: UserI) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}
let user : UserI =  {
    firstName:"asheesh" ,
    lastName:"rana" ,
    age: 2,  
}

console.log(isLegal(user));
;

// type SumInput = string | number ;
// function sum(a:SumInput , b: SumInput){
//   return a + b; 
// }


type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};


console.log(teamLead);
