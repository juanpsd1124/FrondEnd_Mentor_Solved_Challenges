let number = 0;

let selectedNumber= document.querySelector("#selected-score")

let btnArray = [document.querySelector("#one"),
                document.querySelector("#two"),
                document.querySelector("#tree"),
                document.querySelector("#four"),
                document.querySelector("#five")]

let icon = document.querySelector(".star-icon")
let submitBtn = document.querySelector(".submit")

let infoText = document.querySelector(".texts");
let buttonGroup = document.querySelector(".rating");

let submitStyle = document.querySelector(".submitted-card")


for (let i = 0 ; i<=4 ; i++){

        btnArray[i].addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        btnArray.forEach( rating => {
            rating.classList.remove('selected');
        });
        btnArray[i].classList.add("selected");
        number = i+1;
    })
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    icon.remove();
    selectedNumber.innerText = `You selected ${number} out of 5`
    infoText.parentElement.removeChild(infoText);
    buttonGroup.parentElement.removeChild(buttonGroup);
    submitBtn.parentElement.removeChild(submitBtn);
    submitStyle.style.display = "flex";
})

