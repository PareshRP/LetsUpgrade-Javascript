let array = [
    {
        name : "Ross Geller",
        age : 35,
        country : "New York",
        hobbies : ["Paleontology", "Divorce", "Football"] 
    },
    {
        name : "Monica Geller",
        age : 29,
        country : "New York",
        hobbies : ["Cooking", "Dating", "Football"] 
    },
    {
        name : "Vishy Anand",
        age : 50,
        country : "India",
        hobbies : ["Chess", "Travelling", "Reading"] 
    },
    {
        name : "Harry Potter",
        age : 25,
        country : "India",
        hobbies : ["Magic", "Searching", "Reading"] 
    },

];

console.log(">> Objects having age less than 30:");

function getAge(){
    for (let i = 0; i < array.length; i++) {
        if (array[i].age <30) {
            const element = array[i];
            console.log(`Name: ${element.name}\nAge: ${element.age}\nCountry: ${element.country}\nHobbies: ${element.hobbies}`);  
        }
    }
}
getAge();

console.log("------------------------------------\n>> Objects having Country India:");

function getCountry() {
    for (let i = 0; i < array.length; i++) {
        if (array[i].country == "India") {
            const element = array[i];
            console.log(`Name: ${element.name}\nAge: ${element.age}\nCountry: ${element.country}\nHobbies: ${element.hobbies}`);  
        }
    }
}
getCountry();