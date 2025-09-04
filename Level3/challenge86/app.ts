const user: User = {
  id: 1,
  name: "waleed",
  email: "waleed@example.com"
};

function greet(u: User): string {
  return `Hello, ${u.name}`;
}

console.log(greet(user));
