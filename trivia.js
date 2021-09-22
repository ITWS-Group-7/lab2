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
    },
    {
      question: "What is Amendment 1 about?",
      answers: {
        a: 'The right to bear arms ',
        b: 'The right to not have your picture taken',
        c: 'Freedom of religion and speech',
        d: 'Not being allowed to disrespect people'
      },
      correctAnswer: 'c'
    }
    ,
    {
      question: "What is Amendment 2 about?",
      answers: {
        a: 'The right to bear arms ',
        b: 'The right to not have your picture taken',
        c: 'Freedom of religion and speech',
        d: 'Not being allowed to disrespect people'
      },
      correctAnswer: 'a'
    }
    ,
    {
      question: "What is Amendment 3 about?",
      answers: {
        a: 'Protecting private homewoners from military invasion ',
        b: 'The right to bear arms',
        c: 'The right to be seen before the court of law',
        d: 'The right to be outside late at night'
      },
      correctAnswer: 'a'
    }
    ,
    {
      question: "What is Amendment 4 about?",
      answers: {
        a: 'Protecting private homewoners from military invasion',
        b: 'The right to bear arms',
        c: 'The right to be seen before the court of law',
        d: 'The right to not be unlawfully searched by the police without a justifiable reason'
      },
      correctAnswer: 'd'
    }
    ,
    {
      question: "What is Amendment 5 about?",
      answers: {
        a: 'The right to not be arrested',
        b: 'The right to own a business',
        c: 'Following the golden rule',
        d: 'The right to not have to testify against oneself in court'
      },
      correctAnswer: 'd'
    }
    ,
    {
      question: "What is Amendment 6 about?",
      answers: {
        a: 'Being kind to fellow citizens',
        b: 'Criminals still maintaining their rights such as the right to have a lawyer',
        c: 'Doing charity work',
        d: 'Protection from excessive punishments'
      },
      correctAnswer: 'b'
    }

    ,
    {
      question: "What is Amendment 7 about?",
      answers: {
        a: 'Businesses going bankrupt',
        b: 'The right to have medical records protected',
        c: 'Civil cases being settled in federal court',
        d: 'Protecting private homewoners from military invasion'
      },
      correctAnswer: 'c'
    }
    ,
    {
      question: "What is Amendment 8 about?",
      answers: {
        a: 'Protecting criminals from excessive punishment such as unreasonably high bails',
        b: 'The right to be seen before the court of law',
        c: 'The right to be outside late at night',
        d: 'Freedom of religion and speech'
      },
      correctAnswer: 'a'
    }
    ,
    {
      question: "What is Amendment 9 about?",
      answers: {
        a: 'Consequences for driving recklessly',
        b: 'The right to publicly display artwork',
        c: 'The right to be outside late at night',
        d: 'Ensuring that people have more rights than those stated in the Constitution'
      },
      correctAnswer: 'd'
    }
    ,
    {
      question: "What is Amendment 10 about?",
      answers: {
        a: 'Civil cases being settled in federal court',
        b: 'Ensuring the balance in power between the federal and state governments',
        c: 'Businesses going bankrupt',
        d: 'Avoding taxes'
      },
      correctAnswer: 'b'
    }
  ];
 var quiz = document.getElementById ('quiz');
 var results = document.getElementById('results');
 var submit = document.getElementById('submit');

 createQuiz(allQuestions, quiz, results, submit);
function createQuiz(questions, quiz,results, submit){
   
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
                
            }
            output.push('<section class="question">' + questions[i].question + '</section>'
                + '<section class="answers">' + answers.join('') + '</section>');
        }
        quiz.innerHTML = output.join('');
    }
    
    function showScore(questions, quiz, results){
        var allAnswers = quiz.querySelectorAll('.answers');

        var choice='';
        var correct = 0;
        for( var i=0; i<questions.length;i++){
            choice = (allAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        }
        if(choice==questions[i.correctAnswer]){
            correct++;
        }
        else{   
            correct+=0;
        }
    }
    results.innerHTML= correct +' out of '+ questions.length;

    
    showQuiz(questions,quiz);

    submit.onclick = function(){
        showScore(questions, quiz, results);
    }




 }