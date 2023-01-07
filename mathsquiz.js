const quizDbMaths = [
    {
        question: "Q1 Difference of slopes of the lines represented by equation (sec20-sin20)-2xy tan 0+ y² sin20=0 is",
        a: "(A) 1",
        b: "(B) 3",
        c: "(C) 2",
        d: "(D) 4",
        ans: "ans3"
    },

    {
        question: "Q2 If the plane x-3y+ 5z = d passes through the point (1, 2, 4), then the lengths of intercepts cut by it on the axes of X, Y, Z are respectively",
        a: "(A)15,-5,3'",
        b: "(B) 1,-5,3",
        c: "(C) -15,5,-3",
        d: "(D) 1,-6,20",
        ans: "ans1"
    },

    {
        question: "Q3 In a triangle ABC, b = √3, c = 1 and angle A 30°, then the largest angle of the triangle is",
        a:"(A) 135°",
        b:"(B) 90°",
        c:"(C) 60°",
        d:"(D) 120°",
        ans: "ans4"
    },

    {
        question: "Q4 If x co-ordinate of a point on the line joining points (2, 2, 1) and (5, 1, -2) is 4, then its z co-ordinate will be ",
        a: "(A) 1",
        b: "(B) -1",
        c: "(C) 2",
        d: "(D) -2",
        ans: "ans2"
    },

    {
        question: "5) If the origin and the points P(2, -7, 5), Q(2, 3,-5) and R(x, y, z) are co-planar, then",
        a: "(A) x + y + z=0",
        b: "(B) x - y + z=0",
        c: "(C) x - 2y+ z=0",
        d: "(D) x - y + 2z=0",
        ans: "ans1"
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

const loadQuestion3 = () => {
    const questionlist = quizDbMaths[questionCount];
    question.innerHTML= questionlist.question;

    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;
}

loadQuestion3();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
       if (curAnsElem.checked) {
        answer = curAnsElem.id;
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

    if (checkAnswer===quizDbMaths[questionCount].ans) {
        score++;    
    };

    questionCount++;

deselectAll();

if (questionCount < quizDbMaths.length) {
    loadQuestion3();  
}
else{
    document.getElementById("countdown").style.display = "none";
    document.getElementById("pervious").style.display = "none";
    document.getElementById("next").style.display = "none";
    showScore.innerHTML = ` <h3>Your Score ${score}/${quizDbMaths.length}</h3>
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
    
    loadQuestion3();

    // questionCount--;
    // loadQuestion3();
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
    loadQuestion3();
    // questionCount++;
    // loadQuestion3()
}