var Allquestions = [
    {
      question: "What is the purpose of Article 1",
      answers: {
        a: 'If Federal laws are above state laws',
        b: 'How the legislative branch works',
        c: 'How the Judicial branch works',
        d: 'How can the Constitution can be Changed'
        
      },
      correctAnswer: 'b'
    },
    {
      question: "What is Article 6 about?",
      answers: {
        a: 'How the states should function ',
        b: 'How the US deals with Debt',
        c: 'How can the Constitution can be Changed',
        d: 'How the Judicial branch works'
      },
      correctAnswer: 'c'
    }
  ];
  
 var quiz = document.getElementById ('quiz');
 var results = document.getElementById('results');
 var submit = document.getElementById('submit');

 function createQuiz(Allquestions, quiz,results, submit){

    function showQuiz(questions,quiz){
        var output =[];
        var answers;
   
        for(var i=0; i< questions.length;i++){
            answers =[];

            for(letter in questions[i].answers){
                answers.push(
                    '<label>'+ 
                    '<input type="radio" name="question'+ i+
                    '" value="'+ letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
                output.push('<section class="question">' + questions[i].question + '</section>'
                + '<section class="answers">' + answers.join('') + '</section>')
            }

        }
    }
    
 }