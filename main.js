const questions=
[
    {
        question:"What is the largest planet in our solar system?",
        answer1:"Mercury",
        answer2:"Venus",
        answer3:"Earth",
        answer4:"Jupiter",
        correct:"Jupiter"
    },
    {
        question:"How many months have 28 days?",
        answer1:"One",
        answer2:"Six",
        answer3:"Twelve",
        answer4:"Two",
        correct:"Twelve"
    },
    {
        question:"JavaScript is a _____ Side Scripting Language.",
        answer1:"Browser",
        answer2:"Server",
        answer3:"ISP",
        answer4:"None",
        correct:"Browser"
    },
    {
        question:"Who was the first Disney princess?",
        answer1:"Cinderella",
        answer2:"Belle",
        answer3:"Snowwhite",
        answer4:"Tinkerbell",
        correct:"Snowwhite"
    },
    {
        question:"Acrophobia is a fear of",
        answer1:"Height",
        answer2:"Water",
        answer3:"flying",
        answer4:"Blood",
        correct:"Height"
    }
]
let currentindex=0;
let yourscore=0;
let answercheck=document.getElementById('answercheck');
answercheck.innerHTML='<ul id="ultag"></ul>';
let ul=document.getElementById('ultag');

window.addEventListener('load',function (event) 
{
    event.preventDefault();
    let quizcontainer=document.getElementById('quescontainer');
    startquiz(quizcontainer);
});

function startquiz(quizcontainer)
{
    quizcontainer.innerHTML='<button id="mybtn">Start Game</button>';
    let button=document.getElementById('mybtn');
    button.addEventListener('click',function (event) 
    {
        event.preventDefault();
        displayquestion(currentindex,quizcontainer);
    });
}


function displayquestion(currentindex,quizcontainer) 
{
    if(currentindex+1 > questions.length)
    {
        endgame(quizcontainer);
    }
    

    quizcontainer.innerHTML=`<h3>${questions[currentindex].question}</h3>
    <button class="options" id="mybtn">${questions[currentindex].answer1}</button>
    <button class="options" id="mybtn">${questions[currentindex].answer2}</button>
    <button class="options" id="mybtn">${questions[currentindex].answer3}</button>
    <button class="options" id="mybtn">${questions[currentindex].answer4}</button>`;
    
    let correct=questions[currentindex].correct;

    let option=document.querySelectorAll('.options');

    let li=document.createElement('li');

    for (let index = 0; index < option.length; index++) 
    {
        option[index].addEventListener('click',function () 
        {
            if(this.innerHTML==correct)
            {
                currentindex++;
                yourscore+=10;
                li.append(this.innerHTML);
                ul.append(li);
                li.setAttribute('class','correctdata');
                displayquestion(currentindex,quizcontainer);
            }
            else
            {
                currentindex++;
                li.setAttribute('id','wrongdata');
                li.append(this.innerHTML);
                ul.append(li);
                displayquestion(currentindex,quizcontainer);
            }
        });
        
        
    }
}
function endgame(quizcontainer) 
{
    quizcontainer.innerHTML=`<h3>Score</h3>
    <h3>${yourscore+"/"+(questions.length)*10}</h3>
    <button id="mybtn">Restart Game</button>`;
    document.getElementById('mybtn').addEventListener('click',function () 
    {
        startquiz(quizcontainer);
        currentindex=0;
        yourscore=0;
        document.getElementById('ultag').innerHTML="";
    });
}
