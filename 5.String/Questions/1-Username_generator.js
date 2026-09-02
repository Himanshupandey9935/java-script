/*Prompt the user to enter their full name. Generate a username for them based on the input.
The username should:
.Start with @
.Be followed by their full name
.End with the length of the full name */

let name = "himanshu";

let username = `@${name}${name.length}`
console.log(username);