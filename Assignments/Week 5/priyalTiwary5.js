1. // MAGIC 8 BALL //

<html> 
<head> 
<title>Magic 8 Ball</title>
 <script type="text/javascript"> 
// we define answers 
var answers = 
["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again"];
window.onload = function()
 { 
 	var eight = document.getElementById("eight");
 	 var answer = document.getElementById("answer"); 
 	 var eightball = document.getElementById("eight-ball"); 
 	 var question = document.getElementById("question"); eightball.addEventListener("click", function() { 
 	 	if (question.value.length < 1)
 	 	 { 
 	 	 	alert('Enter a question!'); 
 	 	 	} 
 	 	 	else
 	 	 	 { 
 	 	 	 	eight.innerText = ""; 
 	 	 	 	var num = Math.floor(Math.random() * Math.floor(answers.length)); 
 	 	 	 	answer.innerText = answers[num]; 
 	 	 	 	} }); 
 	 	 	 	}; 
 	 	 	 	</script> <style type="text/css"> h1 { font-weight: 100; font-size: 2.5em;} 
 	 	 	 	#content
 	 	 	 	 { width: 600px; margin: 0 auto; margin-top: 50px; border: 1px dotted black; text-align: center; font-family: 'Helvetica Neue', arial; font-weight: 100; 
 	 	 	 	 } 
 	 	 	 	 div.eight-ball { background-color: black; border: 1px solid black; border-radius: 50%; width: 300px; height: 300px; margin: 0 auto; margin-bottom: 30px; margin-top: 30px;
 	 	 	 	  } 
 	 	 	 	  div.answer { background-color: #333; border: 1px solid #333; border-radius: 50%; width: 50%; height: 50%; margin: 25% auto;
 	 	 	 	   } 
 	 	 	 	   p#eight { font-size: 5em; margin: 20% auto; color: white; } 
 	 	 	 	   p#answer { padding: 23px; color: lightblue; letter-spacing: 2px; font-size:18px; } #question { margin: 20px; padding: 10px; width: 400px; font-size:22px; } 
 	 	 	 	   #info { font-size: 22px; } 
 	 	 	 	   </style> 
 	 	 	 	   </head> 
 	 	 	 	   <body> 
 	 	 	 	   <div id="content"> 
 	 	 	 	   <h1>Magic 8 ball</h1> 
 	 	 	 	   <p id="info">
 	 	 	 	   Ask me what you want to know and click on the Magic 8 Ball</p> 
 	 	 	 	   <input type="text" id="question" /> 
 	 	 	 	   <div id="eight-ball" class="eight-ball"> <div class="answer"> 
 	 	 	 	   <p id="eight">8</p> 
 	 	 	 	   <p id="answer"></p> 
 	 	 	 	   </div> 
 	 	 	 	   </div> 
 	 	 	 	   </div> 
 	 	 	 	   </body>
 	 	 	 	   </html>


2. //MULTIPLES ACCORDING TO LIMIT//

const findmultiples=(num,length)=>{
  let arr=[]
  for(let i=0;i<length;i++){
    arr[i]=num*(i+1);
  }
  return arr;
}
let num=prompt("Enter the number whose multiples you want to find out");
let length=prompt("Enter the size of array");
console.log(findmultiples(num,length));



3.  // FIBONACCI SERIES //

// program to generate fibonacci series up to n terms // 
//take input from the user//
const number = parseInt(prompt('Enter the number of terms: ')); 
let n1 = 0, n2 = 1, nextTerm; console.log('Fibonacci Series:');
 for (let i = 1; i <= number; i++) { console.log(n1); 
 nextTerm = n1 + n2; 
 n1 = n2; n2 = nextTerm; 
 }


 	 	 	 	   


