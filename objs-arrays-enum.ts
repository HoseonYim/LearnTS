/*const person: {
    name: string;
    age: number;
} = {*/

/*const person: {
    name:string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {*/

//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;

enum Role {
  ADMIN = 10,
  READ_ONLY,
  AUTHOR = "AUTHOR"
};

const person = {
  name: "Fuck",
  age: 100,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

//person.role.push("admin"); //tuple cant catch this error
//person.role[1] = 10;
//person.role = [0, 'admin', 'user'];

let favoriteActivities: any[] = ["Cooking"];
favoriteActivities = ["Sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

let dontUseThisPlease: any = 5;
dontUseThisPlease = 'plzz';

//let betterThanAny: any[] = 5;//error beacuse it isnt array
