// DOM Elements
const ageInputField       = document.querySelector('#age_input');
const submitBtn           = document.querySelector('#submit_age');
const messageDisplay      = document.querySelector('#input_message');
const resetBtn            = document.querySelector('#reset_btn');

// Global variables
let userMessage = null;
const AGE_THRESHOLD = 18;

// Message to display to user
let ageMessages = {
    child: "You are a child",
    teen: "You are a minor",
    adult: "You are an adult",
    senior: "You are a senior",
    invalid: "Invalid entry, number(s) only",
    empty: "Input can not be empty",
    outOfRange: "Input out of range"
};

// Utility function - display messages
function displayMessage(messageText){
    messageDisplay.textContent = messageText;
    ageInputField.value = "";
}

// Main handler to evaluate input
function evaluateAgeInput(){
    const input = ageInputField.value.trim();
    const convertedInputToNumber = Number(input);

    console.log(convertedInputToNumber);

    // Check for empty input
    if(input === ""){
        displayMessage(ageMessages.empty);

        // check for not a number input
    } else if(isNaN(convertedInputToNumber)){
        displayMessage(ageMessages.invalid);
    } else { // Success
        // if(convertedInputToNumber >=5 && convertedInputToNumber <= 12){
        //     displayMessage(ageMessages.child);
        // } else if(convertedInputToNumber >= 13 && convertedInputToNumber <= 19){
        //     displayMessage(ageMessages.teen);
        // } else if(convertedInputToNumber >= 20 && convertedInputToNumber <= 64) {
        //     displayMessage(ageMessages.adult);
        // } else {
        //     displayMessage(ageMessages.senior);
        // }

        // Test with Switch
        switch(true){
            case(convertedInputToNumber >= 5 && convertedInputToNumber <= 12):
               displayMessage(ageMessages.child);
               break;
            case(convertedInputToNumber >= 13 && convertedInputToNumber <= 19):
               displayMessage(ageMessages.teen);
               break;
            case(convertedInputToNumber >= 20 && convertedInputToNumber <= 64):
                displayMessage(ageMessages.adult);
                break;
            case(convertedInputToNumber >= 65 && convertedInputToNumber <= 110):
                displayMessage(ageMessages.senior);
                break;
            default:
                displayMessage(ageMessages.outOfRange);
        }

    }
    
}


function resetInputField(inputEl){
    inputEl.value = "";

}

function resetMessage(messageEl){
    messageEl.textContent = "";
}

function reset(){

    // Reset input field
    resetInputField(ageInputField);

    // Reset message
    resetMessage(messageDisplay);
}

// Event listeners - submit button and enter keyword press
submitBtn.addEventListener('click', evaluateAgeInput);
ageInputField.addEventListener('keypress', (e) => {
    if(e.code == 'Enter') {
        evaluateAgeInput();
    }    
});    
resetBtn.addEventListener('click', reset)








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



