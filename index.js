const fs = require('fs');

const name = "Here are the same name and age in a JSON file";

fs.writeFileSync("redony.text", name , { flag: "a" }, err => {
    if (err) {
        console.error(err);
    } else {
        console.log ("file created successfully");
    }
})