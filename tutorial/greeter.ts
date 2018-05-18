interface Customer {
    firstName: string;
    lastName: string;
    age: number;
}


function greeter(person: Customer) {

    return "Hello, " + person.firstName + " " + person.lastName + ". You are " + person.age + "years old.";
}

let user = {
    firstName: "Bob",
    lastName: "Vance",
    age: 57
}


document.body.innerHTML = greeter(user);
