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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["READ_ONLY"] = 11] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Fuck",
    age: 100,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR
};
//person.role.push("admin"); //tuple cant catch this error
//person.role[1] = 10;
//person.role = [0, 'admin', 'user'];
var favoriteActivities = ["Cooking"];
favoriteActivities = ["Sports", 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
var dontUseThisPlease = 5;
dontUseThisPlease = 'plzz';
//let betterThanAny: any[] = 5;//error beacuse it isnt array
