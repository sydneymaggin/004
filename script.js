//create an array of print names 
var prints = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
"eleven", "twelve", "thirteen"];



// Create a new HTML image element for the card
let printImage = document.createElement("img");
//create print image array
var images = ["images/01.png"]


//when user first comes to page, they will click the keys on keyboard to retrieve different prints from array 
//create keydown function to call a print for each key 

let oldKey = undefined;

document.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key)

    // if (oldKey !== event.key){
    //     console.log("different key press");
    // }

    // oldKey = event.key;

    let newPrints=" ";

    if(event.key == "a" || event.key == "o"){
    printImage.src = images[0]
    makeDiv("images/01.png");
    }


    //b
    if(event.key == "b" || event.key == "p"){
    newPrint=prints[1]
    makeDiv("images/02.png");
    }
  
    //c
    if(event.key == "c" || event.key == "q"){
    newPrint=prints[2]
    makeDiv("images/03.png");
    }

    //d
    if(event.key == "d" || event.key == "r"){
    newPrint=prints[3]
    makeDiv("images/04.png");
    }
   
    //e
    if(event.key == "e" || event.key == "s"){
    newPrint=prints[4]
    makeDiv("images/05.png");
    }

    //f
    if(event.key == "f" || event.key == "t"){
    newPrint=prints[5]
    makeDiv("images/06.png");
    }

    //g
    if(event.key == "g" || event.key == "u"){
    newPrint=prints[6]
    makeDiv("images/07.png");
    }

    //h
    if(event.key == "h" || event.key == "v"){
    newPrint=prints[7]
    makeDiv("images/08.png");
    }

    //i
    if(event.key == "i" || event.key == "w"){
    newPrint=prints[8]
    makeDiv("images/09.png");
    }

    //j
    if(event.key == "j" || event.key == "x"){
    newPrint=prints[9]
    makeDiv("images/10.png");
    }

    //k
    if(event.key == "k" || event.key == "y"){
    newPrint=prints[10]
    makeDiv("images/11.png");
    }

    //l
    if(event.key == "l" || event.key == "z"){
    newPrint=prints[11]
    makeDiv("images/12.png");
    }

    //m
    if(event.key == "m"){
    newPrint=prints[12]
    makeDiv("images/13.png");
    }

    //n
    if(event.key == "n"){
    newPrint=prints[13]
    makeDiv("images/01.png");
    }
    }

   
)


document.querySelector('#images').img = printImage;

var prompts = [
    'What control do you have over your private data?',
    'Do you worry about who has access to your data?',
    'Are you mindful of your online presence?',
    'Are you afraid of what others can learn about you?',
    'Is your identity safe?'
]

function newPrompt() {
    var randomNumber = Math.floor(Math.random() * (prompts.length));
    document.getElementById('prompt').innerHTML = prompts[randomNumber];
}



function makeDiv(imgURL) {
    const myImg = document.createElement("img");
    myImg.classList.add("circle");
    myImg.src = imgURL;

    document.body.append(myImg);
    console.log(myImg);
}



// document.addEventListener("keydown", function(event)
//     {
//         console.log(event);
//         console.log("what did we just press?");
//         console.log(event.key);
//         if (event.key == "Enter"){
//             document.body.classList.toggle("prompt")
//         }

//         result.innerText = (prompts);
//     })

  