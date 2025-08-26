document.getElementById('login-btn').addEventListener("click", function(e){
    // console.log("clicked");
    // e.preventDefault(); // Prevents reload on button press

    let userNum = parseInt(document.getElementById("userNumer").value);
    let userPin = parseInt(document.getElementById("userPin").value);
    console.log(userNum);
    console.log(userPin);

    if(userNum == 1234567890 && userPin == 1234){
        // let loginSection = document.getElementById("loginSection");
        // loginSection.classList.add("hidden");

        window.location.href = "./add-money.html";
        
    } else{
        alert("Number: 1234567890 \nPin: 1234");
    }

});