
const KimInfo = {
    name : "Kim", 
    age : 19,
    gender :  true,
    city : "Korea",
    favNum : ["123",
     "456"],
    favPerson : [
        {
            name: "Lee",
            age: "19"
        },
        {
            name: "Son",
            age: "19"
        }
    ]
}

console.log(KimInfo.favPerson[1].name);