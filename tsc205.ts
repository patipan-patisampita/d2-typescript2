let greeting: (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`
}

console.log(greeting("Mark"));