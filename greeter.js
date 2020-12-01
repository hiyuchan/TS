// function greeter(person) {
//     return "Hello, " + person;
// }
function greeter2(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user2 = { firstName: 'chen', lastName: 'hiyu' };
document.body.innerHTML = greeter2(user2);
