function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane User", "John Smith"];
console.log(greeter(user)); // Correct output

let singleUser = "Jane User";
console.log(greeter(singleUser)); // Correct output