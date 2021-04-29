//create an array of print names 
var prints = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
"eleven", "twelve", "thirteen"];



// Create a new HTML image element for the card
let printImage = document.createElement("img");
//create print image array
var images = ["images/01.png"]


//when user first comes to page, they will click the keys on keyboard to retrieve different prints from array 
//create keydown function to call a print for each key 
document.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key)

    let newPrints=" ";

    if(event.key == "a" || event.key == "o")
    newPrint=prints[0]


    //b
    if(event.key == "b" || event.key == "p")
    newPrint=prints[1]
    
  
    //c
    if(event.key == "c" || event.key == "q")

    newPrint=prints[2]

    //d
    if(event.key == "d" || event.key == "r")

    newPrint=prints[3]
   
    //e
    if(event.key == "e" || event.key == "s")

    newPrint=prints[4]

    //f
    if(event.key == "f" || event.key == "t")

    newPrint=prints[5]

    //g
    if(event.key == "g" || event.key == "u")
    newPrint=prints[6]

    //h
    if(event.key == "h" || event.key == "v")

    newPrint=prints[7]

    //i
    if(event.key == "i" || event.key == "w")

    newPrint=prints[8]

    //j
    if(event.key == "j" || event.key == "x")

    newPrint=prints[9]

    //k
    if(event.key == "k" || event.key == "y")

    newPrint=prints[10]

    //l
    if(event.key == "l" || event.key == "z")

    newPrint=prints[11]

    //m
    if(event.key == "m")

    newPrint=prints[12]

    //n
    if(event.key == "n")

    newPrint=prints[13]

    }


)




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



