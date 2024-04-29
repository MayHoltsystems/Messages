//Create a random number function
function rndnum(num) {
    return Math.floor(Math.random() * num);
}

//Create object of message items
const Message = {
    Subject: ['You', 'Things', 'Birds', 'Dreams'],
    Action: ['Can be', 'Give', 'Show', 'Inspire'],
    Object: ['Beauty', 'Insight', 'Love', 'Peace']
}

//Create an array to store the message
let PersonalMessage = [];

//Iterate over Message object
for (let i in Message){
    let j = rndnum(Message[i].length)

    switch(i){
        case 'Subject':
            PersonalMessage.push(Message[i][j]);
            break;
        case 'Action':
            PersonalMessage.push(Message[i][j]); 
            break;
        case 'Object':
            PersonalMessage.push(Message[i][j]);
            break;
        default:
            PersonalMessage.push('All is provided for!');      

    }}

//Print the message
const MixedMessage = PersonalMessage.join(' ')
    console.log(MixedMessage)

    //Added comment on branch

    //update text
    