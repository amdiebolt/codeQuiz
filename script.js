var timer = document.querySelector("#timer")
var highScore = document.querySelector("#highScore")
var startBtn = document.querySelector("#startBtn")
var answerOne = document.querySelector("#answer1")
var answerTwo = document.querySelector("#answer2")
var answerThree = document.querySelector("#answer3")
var answerFour = document.querySelector("#answer4")
var question = document.querySelector("#question")
var containerEl = document.querySelector("#container")
var scoreBoardEl = document.querySelector("#scoreBoard")

var questionOne = [{
    quest: "Which is an example of a compound data type?",

        ans1: "string",
        ans2: "boolean",
        ans3: "array",
        ans4: "number",
        correct: "array"
},{
    quest: "What is considered the basic structure of a website?",

        ans1: "CSS",
        ans2: "Javascript",
        ans3: "JQuery",
        ans4: "HTML",
        correct: "HTML"
},{
    quest: "What is a programmer's best friend?",

        ans1: "Your coworkers",
        ans2: "Google",
        ans3: "Your spouse",
        ans4: "Your buddy, Phil",
        correct: "Google"
},{
    quest: "How do you call a function?",
    ans1: "functionName()",
    ans2: "Function, I summon thee!",
    ans3: "call.functionName",
    ans4: "functionName.function()",
    correct: "functionName()"
},{
    quest: "What's the proper syntax for randomizing an array named cars?",
    ans1: "cars[Math.floor(Math.random()*cars.length)]",
    ans2: "cars[Math.random(math.floor()*cars.length)]",
    ans3: "return random.cars",
    ans4: "Eeny meeny miny moe",
    correct: "cars[Math.floor(Math.random()*cars.length)]"

    }]

var currentQuestionObject = 0
var quizStart = false 
containerEl.style.display = 'none'
var timeLeft = 45
var score = 0
var initials = ''
var lastQuestion = questionOne.length




startBtn.addEventListener("click", function(){
    quizStart = true
    containerEl.style.display = ''
    startBtn.style.display = 'none'
    timeCount = setInterval(function(){
        timeLeft--
        timer.textContent = timeLeft

        if(timeLeft === 0) {
            clearInterval(timeCount)
        }
    }, 1000)
    theQuiz()


    function theQuiz() {
        if(quizStart = true){
        question.textContent = questionOne[currentQuestionObject].quest
        answerOne.textContent = questionOne[currentQuestionObject].ans1
        answerTwo.textContent = questionOne[currentQuestionObject].ans2
        answerThree.textContent = questionOne[currentQuestionObject].ans3
        answerFour.textContent = questionOne[currentQuestionObject].ans4 

        
    }
        if(gameOver()){
            return
        }}
        

        

      

    answerOne.addEventListener("click", function(){
        var correctAns = questionOne[currentQuestionObject].correct
        if(answerOne.textContent === correctAns){
            alert("Correct!")
            score++
            currentQuestionObject++
            gameOver()
            theQuiz()
        }else{
            alert("Incorrect!")
            currentQuestionObject++
            timeLeft--
            gameOver()
            theQuiz()
        }
       
    
    })
    answerTwo.addEventListener("click", function(){
        var correctAns = questionOne[currentQuestionObject].correct
        if(answerTwo.textContent === correctAns){
            alert("Correct!")
            score++
            currentQuestionObject++
            gameOver()
            theQuiz()
        }else{
            alert("Incorrect!")
            currentQuestionObject++
            timeLeft--
            gameOver()
            theQuiz()
        }
        
    
    })
    answerThree.addEventListener("click", function(){
        var correctAns = questionOne[currentQuestionObject].correct
        if(answerThree.textContent === correctAns){
            alert("Correct!")
            score++
            currentQuestionObject++
            
            gameOver()
            theQuiz()
        }else{
            alert("Incorrect!")
            currentQuestionObject++
            timeLeft--
            gameOver()
            theQuiz()
        }
    
    })
    answerFour.addEventListener("click", function(){
        var correctAns = questionOne[currentQuestionObject].correct
        if(answerFour.textContent === correctAns){
            alert("Correct!")
            score++
            currentQuestionObject++
            
            gameOver()
            theQuiz()
        }else{
            alert("Incorrect!")
            currentQuestionObject++
            timeLeft--
            gameOver()
            theQuiz()
        }
    
    
    })
    console.log(score)

})



function gameOver(){
    if(currentQuestionObject === questionOne.length || timeLeft === 0){
        alert("Game Over")
        initials = prompt("Please eneter your initials")
        localStorage.setItem("initials", initials)
        localStorage.setItem("score", JSON.stringify(score))
        containerEl.style.display = 'none'
        timer.style.display = 'none'
        question.textContent = "Thanks for quizzing!"
    }
}

highScore.addEventListener("click", function(){
    alert(localStorage.getItem("initials") + ' ' + localStorage.getItem("score") + '/5')
})


