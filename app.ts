/*const person: {
    name: string;
    age: number;
} = {*/
const person = {
  name: "Fuck",
  age: 100,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
person.role[1] = 10;

let favoriteActivities: any[] = ["Cooking"];
favoriteActivities = ["Sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
