/*const person: {
    name: string;
    age: number;
} = {*/
var person = {
    name: "Fuck",
    age: 100,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
console.log(person.role.push("admin"));
person.role[1] = 10;
var favoriteActivities = ["Cooking"];
favoriteActivities = ["Sports", 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
