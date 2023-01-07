const quizDbPhy = [
    {
        question: "Q1 The amplitude of sound is doubled and the frequency is reduced to one fourth. The intensity of sound at the same point will be",
        a: "(A) increased to double",
        b: "(B) increased to four times ",
        c: "(C) decreased to half ",
        d: "(D) decreased to one fourth ",
        ans: "ans4"
    },

    {
        question: "Q2 The maximum safe speed, for which a banked road is intended, is to be increased by 20%. If the angle of banking is not changed, then the radius of curvature of the road should be changed from 30 m to ",
        a: "(A) 36m '",
        b: "(B) 24m ",
        c: "(C) 43.2m",
        d: "(D) 60m ",
        ans: "ans3"
    },

    {
        question: "Q3 When an electric dipole p is placed in a uniform electric field E then at what angle the value of torque will be maximum?",
        a:"(A) 90°",
        b:"(B) 0°",
        c:"(C) 180°",
        d:"(D) 45°",
        ans: "ans1"
    },

    {
        question: "Q4) In inelastic collision, ",
        a: "(A) momentum, kinetic energy and total energy are conserved. ",
        b: "(B) momentum, kinetic energy and total energy are not conserved. ",
        c: "(C) momentum and kinetic energy are conserved but total energy is not conserved",
        d: "(D) total energy and momentum are conserved but kinetic energy is not conserved. ",
        ans: "ans4"
    },

    {
        question: "5) The colour of a star depends upon its",
        a: "(A) density",
        b: "(B) distance from the sun",
        c: "(C) radius",
        d: "(D) surface temperature",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let arr = [];

var curAnsElem;

let questionCount = 0;

let score = 0;

const loadQuestion2 = () => {
    const questionlist = quizDbPhy[questionCount];
    question.innerHTML= questionlist.question;

    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;
}

loadQuestion2();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
       if (curAnsElem.checked) {
        answer = curAnsElem.id
        arr.push(curAnsElem.id);
        console.log(answer);
       } 
       
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', ()=>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if (checkAnswer===quizDbPhy[questionCount].ans) {
        score++;    
    };
    

    questionCount++;

deselectAll();

    if (questionCount < quizDbPhy.length) {
        loadQuestion2();  
    }
    else{
        document.getElementById("countdown").style.display = "none";
        document.getElementById("pervious").style.display = "none";
        document.getElementById("next").style.display = "none";
        showScore.innerHTML = ` <h3>Your Score ${score}/${quizDbPhy.length*2}</h3>
         <button class="btn" onclick="location.reload()" > Play Again </button>`;

        showScore.classList.remove('scoreArea')
    }

});

const startingMunites = 5;
let time = startingMunites * 60;

const countdownEl = document.getElementById('countdown');

// 

function updateCountdwon(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    if (minutes==0 & seconds==0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("pervious").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("submit").style.display = "none";

        showScore.innerHTML = ` <h3>Your Score ${score}/${quizDbChem.length}</h3>
        <button class="btn" onclick="location.reload()" > Play Again </button>`;

       showScore.classList.remove('scoreArea')


    }
}

function displayQuiz(){
    document.getElementById("inner-div-id").style.display = "grid";
}


document.getElementById("pervious").addEventListener("click", goPrevious);

function goPrevious(){

    if (questionCount <=0) {
        questionCount=0
    } else {
        questionCount--;
    }
    
    selPrev = () => {
        // console.log("chalu ahhe mi")
        // console.log(answer);
        document.getElementById(arr[questionCount]).checked = true;
        // curAnsElem.id.checked=true;
    }
    selPrev();
    
    loadQuestion2();
    // questionCount--;
    // loadQuestion2();
}

document.getElementById("next").addEventListener("click", goNext);

function goNext(){

    if (questionCount >=5) {
        questionCount=5;

    } else {
        questionCount++;
    }

    // deselectAll();
    // questionCount++ ;    
    loadQuestion2();
    // questionCount++;
    // loadQuestion2()
}