document.getElementById('login-btn').addEventListener("click", function(e){
    // console.log("clicked");
    // e.preventDefault(); // Prevents reload on button press

    let userNum = document.getElementById("userNumer").value;
    let userPin = document.getElementById("userPin").value;
    console.log(userNum);
    console.log(userPin.length);

    if(userNum.length === 11 && userPin.length > 3){
        let loginSection = document.getElementById("loginSection");
        loginSection.classList.add("hidden");
        
    } else if(userNum.length !== 11 || userPin.length <= 3){
        alert("Number mustbe 11 Digits and Pin should be more then 3 Digits");
    }

});