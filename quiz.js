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

let questionCount = 0;

let score = 0;

const loadQuestion1 = () => {
    const questionlist = quizDbChem[questionCount];
    question.innerHTML= questionlist.question;

    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;
}

loadQuestion1();

const loadQuestion2 = () => {
    const questionlist = quizDbPhy[questionCount];
    question.innerHTML= questionlist.question;

    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;
}

loadQuestion2();

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
        loadQuestion1();  
    }
    else{
        showScore.innerHTML = ` <h3>Your Score ${score}/${quizDbChem.length}</h3>
         <button class="btn" onclick="location.reload()" > Play Again </button>`;

        showScore.classList.remove('scoreArea')
    }

    if (questionCount < quizDbPhy.length) {
        loadQuestion2();  
    }

    if (questionCount < quizDbMaths.length) {
        loadQuestion3();  
    }
});











