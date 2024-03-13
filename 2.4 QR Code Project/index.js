import fs from "fs"
import inquirer from "inquirer"
import qr from "qr-image"

inquirer
    .prompt([
        { "message": "type your url", "name": "url" }
    ])
    .then((answers) => {
        const url = answers.url
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"))

        fs.writeFile("URL.txt", url, (err)=>{
            if(err) throw err;
            console.log("the file has been saved");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });