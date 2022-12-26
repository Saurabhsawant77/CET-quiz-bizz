const quizDbChem = [
    {
        question: "Q1 Schottky defect is formed in ionic compounds with",
        a: "(A) High degree of ionic character",
        b: "(B) High coordination number of anion",
        c: "(C) Large difference between size of cation and anion",
        d: "(D) Both (A) and (B)",
        ans: "ans4"
    },

    {
        question: "Q2 Which oxidation states CORRECTLY represent the usual range exhibited by the stated metal?",
        a: "(A)Ce; +3 and +4'",
        b: "(B) No; +2 and +4",
        c: "(C) Yb; +3, +4, +5 and +6",
        d: "(D) Lr; +2, +3 and +4",
        ans: "ans1"
    },

    {
        question: "Q3 The number of ions given by Na3[Fe(CN)6] in aqueous solution is",
        a:"(A) 1",
        b:"(B) 2",
        c:"(C) 4",
        d:"(D) 9",
        ans: "ans3"
    },

    {
        question: "Q4 The first oxidation product of secondary alcohols is",
        a: "(A) alkene",
        b: "(B) aldehyde",
        c: "(C)ketone",
        d: "(D) carboxylic acid",
        ans: "ans3"
    },

    {
        question: "5) The number of sigma bonds in vanillin is",
        a: "(A) 16",
        b: "(B) 19",
        c: "(C) 21",
        d: "(D) 22",
        ans: "ans2"
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

let questionCount = 0;

let score = 0;

const loadQuestion = () => {
    const questionlist = quizDbChem[questionCount];
    question.innerHTML= questionlist.question;

    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
       if (curAnsElem.checked) {
        answer = curAnsElem.id
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

    if (checkAnswer===quizDbChem[questionCount].ans) {
        score++;    
    };

    questionCount++;

deselectAll();

    if (questionCount < quizDbChem.length) {
        loadQuestion();  
    }
    else{
        showScore.innerHTML = ` <h3>Your Score ${score}/${quizDbChem.length}</h3>
         <button class="btn" onclick="location.reload()" > Play Again </button>`;

        showScore.classList.remove('scoreArea')
    }
});











