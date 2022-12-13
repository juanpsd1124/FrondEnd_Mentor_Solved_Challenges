let questions = document.querySelectorAll(".question")
let questionTitles = document.querySelectorAll(".title")
let answers = document.querySelectorAll(".answer")

questions.forEach( question => {
    question.addEventListener("click", (e) => {
        //e.preventDefault();
        let answer = question.querySelector(".answer")
        let questionTitle = question.querySelector(".title")
        
        answers.forEach( answer => {
            answer.classList.remove("show")
        })

        questionTitles.forEach( title => {
            title.classList.remove("highlight")
        })
        answer.classList.add("show")
        questionTitle.classList.add("highlight") 
    })
})