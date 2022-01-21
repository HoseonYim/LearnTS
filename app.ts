/*const person: {
    name: string;
    age: number;
} = {*/
const person = {
    name: 'Fuck',
    age: 100,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: any[] = ['Cooking'];
favoriteActivities = ['Sports', 1];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby);
}