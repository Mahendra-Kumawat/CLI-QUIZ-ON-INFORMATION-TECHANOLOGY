console.log("Welcome to the my Quiz app");
let  readline=require("readline-sync")
let user=readline.question("Enter your name ")
console.log("hello ",user)
let start = readline.question("Do you want to play Quiz")
let score = 0

const All_question = [{
    "ques" : "Who is the rechest men in the world",
    "a" : "Steve Jobs",
    "b" : "Elon Musk",
    "c" : "Satya Nadela",
    "d" : "Gautam Adani",
    "correct" : "b"
}, 
{
    "ques" : "Who is CEO of APPLE Company",
    "a" : "steve jobs",
    "b" : "Elon Musk",
    "c" : "narayan murti",
    "d" : "tim cook",
    "correct" : "d"
},
{
    "ques" : "Who is the CEO of Facebook",
    "a" : "bill gates",
    "b" : "sunder pichai",
    "c" : "Satya Nadela",
    "d" : "mark zuckerberg",
    "correct" : "d"
},
{
    "ques" : "which of the following is not a operating system ",
    "a" : "Dos",
    "b" : "C",
    "c" : "Mac",
    "d" : "Linux",
    "correct" : "b"
},
{
    "ques" : "Which supercomputer is developed by the Indian Scientists?",
    "a" : "Param",
    "b" : "Compaq Presario",
    "c" : "cary ymp",
    "d" : "None of these",
    "correct" : "a"
}]


if (start.toLowerCase() === "yes"){
    for (let i = 0 ; i < All_question.length ; i++){
        let Whole_question = All_question[i]
        let correct_ans = Whole_question.correct
        let question = Whole_question.ques
        console.log()
        console.log(question)
        console.log("a." , Whole_question.a)
        console.log("b." , Whole_question.b)
        console.log("c." , Whole_question.c)
        console.log("d." , Whole_question.d)
        answer(question , correct_ans)

    }
    
    let show_ans = readline.question("Do you want to show your Result : ");
    if (show_ans.toLowerCase() === "yes"){
        console.log("your total score is : " , score)
    }else{
        console.log("Ok")
    }
}




// to make a function to check answer 
function answer(Question , correct_ans){
    let Ans_input = readline.question("Enter your Answer : ");
    if (Ans_input == correct_ans){
        score +=1
    }else{
        score = score
    }
}