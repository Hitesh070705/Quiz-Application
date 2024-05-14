const questions=[
    {
        'que': 'Which is the longest river in India?',
        'a': 'Brahmputra',
        'b': 'Kaveri',
        'c': 'Krishna',
        'd': 'Ganga',
        'correct': 'd'
    },
    {
        'que': 'The International Literacy Day is observed on',
        'a': 'September 8',
        'b': 'November 22',
        'c': 'May 24',
        'd': 'Januray 12',
        'correct': 'a'
    },
    {
        'que': 'The language of Lakshadweep, a Union Territory of India, is',
        'a': 'Tamil',
        'b': 'Telugu',
        'c': 'Kannad',
        'd': 'Malayalam',
        'correct': 'd'
    }
]
let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll(".options");
const loadQuestion = () =>{
    if(index==total){
        return endquiz();
    }
    else{
    reset();
    }
const data=questions[index];
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const Submitquiz = () =>{
    const data=questions[index];
   const ans = getAnswer();
  if(ans==data.correct){
    right++;
  }
  else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}

const getAnswer = () =>{
    let answer;
optionInputs.forEach( (input) => {
    if(input.checked){
        // return input.value;
        answer=input.value
    }
    
    }
)
return answer;
}

const reset = () =>{
    optionInputs.forEach( (input) => {
        input.checked=false;
    }
    )
}

const endquiz = () =>{
    document.getElementById("box").innerHTML=`
    <h3> Thank you for playing the quiz. </h3>
    <h2> Result: ${right}/${total} are correct. </h2>
    `
}

// initial call
loadQuestion();