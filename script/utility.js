// set innerText with id selector 
function setInnerTextById(id,value){
document.getElementById(id).innerText = value;
};

// total and grand total
// budget validation 
        // function budgetValidation (id, priceId){
        //     const budget = document.getElementById(id).innerText;
        // let convertedBudget = parseInt(budget);
        // let remainingBudget = convertedBudget - parseInt(priceId);
        // console.log(remainingBudget);
        // if(remainingBudget < 0){
        //     alert("Expense Exceeds Your Budget. Plan Accordingly");
        //     return;
        // }
        // setInnerTextById("budget", remainingBudget);
        // return;
        // }