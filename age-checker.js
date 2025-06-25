// DOM Elements
const ageField       = document.querySelector('#age_input');
const submitBtn      = document.querySelector('#submit_age');
const messageDisplay = document.querySelector('#input_message');

// Global variables
let userMessage = null;
const AGE_THRESHOLD = 18;

// Message to display to user
let ageMessages = {
    underage: "You are a minor",
    adult: "You are an adult",
    invalid: "Invalid entry, number(s) only",
    empty: "Input can not be empty"
};

// Utility function - display messages
function displayMessage(messageText){
    messageDisplay.textContent = messageText;
    ageField.value = "";
}

// Main handler to evaluate input
function evaluateAgeInput(){
    const input = ageField.value.trim();

    if(input === ""){
        displayMessage(ageMessages.empty);
    } else if (isNaN(input)){
        displayMessage(ageMessages.invalid);
    } else if (Number(input) < AGE_THRESHOLD){
       displayMessage(ageMessages.underage);
    } else {
        displayMessage(ageMessages.adult);
    }
}

// Event listeners - submit button and enter keyword press
submitBtn.addEventListener('click', evaluateAgeInput);
ageField.addEventListener('keypress', (e) => {
    if(e.code == 'Enter') {
        evaluateAgeInput();
    }    
});    








// function userInputResult(){
//     const age = ageInput.value;

//     if(age.trim() !==""){
//         if(!isNaN(age)){
//             if(age < ageLimit){
//                 inputResponse(messages, 1);
//             } else {
//                 inputResponse(messages, 2);
//             }
//         } else {
//             inputResponse(messages, 3);
//         }
//     } else {
//         inputResponse(messages, 4);
//     }
// }



