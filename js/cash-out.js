console.log("Connected")

let userDetails = {
    balance : localStorage.getItem("balance") || 0,
    loggedIn: localStorage.getItem("loggedIn") || false,
};

document.getElementById("logout-btn").addEventListener("click", function(){
    localStorage.setItem("loggedIn", "false");
    localStorage.setItem("balance", 0);
    localStorage.setItem("userDetails",userDetails);
    window.location.href = "./index.html";


});

if(userDetails["loggedIn"]=== "false"){
    window.location.href = "./index.html";
}


let amount = userDetails["balance"];

document.getElementById('balance').innerText = "$" + amount;

document.getElementById('cash-out-btn').addEventListener('click', function(){
    let bankNum = document.getElementById("agentAccount").value;
    let bankAmount = document.getElementById("bankAmount").value;
    let accountPin = document.getElementById("accountPin").value;

    if(bankNum.length === 11 && parseInt(bankAmount) > 0 && parseInt(bankAmount) - localStorage.getItem("balance") < 0){
        if(parseInt(accountPin) === 1234){
            userDetails["balance"] = parseInt(userDetails["balance"]) - parseInt(bankAmount);
            localStorage.setItem("balance", userDetails["balance"]);

            document.getElementById('balance').innerText = "$" + userDetails["balance"];

            document.getElementById("agentAccount").value = "";
            document.getElementById("bankAmount").value = "";
            document.getElementById("accountPin").value = "";

        }else{
            console.log("Could not");   
        } 
    }
});

document.getElementById("go-add-money").addEventListener('click', function(){
    window.location.href = "./add-money.html";
});
