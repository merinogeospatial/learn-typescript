function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + ". You are " + person.age + "years old.";
}
var user = {
    firstName: "Bob",
    lastName: "Vance",
    age: 57
};
document.body.innerHTML = greeter(user);
