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
    }
];

array.forEach(function(arrays){
    console.log(`Name: ${arrays.name}\nAge: ${arrays.age}\nCountry: ${arrays.country}\nHobbies: ${arrays.hobbies} `);
});


