$(document).ready(function() {

    var Questions = [{
            "image": "images/ImpressionSunrise.png",
            "options": ["Claude Monet", "Vincent Van Gogh", "Peter Paul Rubens", "Jackson Pollock"],
            "correctOption": "Claude Monet"
        },

        {
            "image": "images/barfoliesbergeres.png",
            "options": ["Edouard Manet", "Claude Monet", "Camille Pissaro", "Childe Hassam"],
            "correctOption": "Edouard Manet"
        },

        {
            "image": "images/bathersasnieres.jpg",
            "options": ["Camille Pissaro", "Georges Seurat", "Thomas Cole", "Paul Signac"],
            "correctOption": "Georges Seurat"
        },

        {
            "image": "images/avenueintherain.jpeg",
            "options": ["Claude Monet", "Childe Hassam", "Andy Warhol", "Auguste Renoir"],
            "correctOption": "Childe Hassam"
        },

        {
            "image": "images/danseabougival.jpg",
            "options": ["Edouard Manet", "Auguste Renoir", "Peter Paul Rubens", "Georges Seurat"],
            "correctOption": "Auguste Renoir"
        }
    ]

    var Correct = 0
    var CurrentQuestion = 0
    var RemainingQuestions = 4

    function AskQuestion() {
        $(".QuizContainer").append("<div class = 'singlequestion'><img src='" + Questions[CurrentQuestion].image + "'></div>")
        for (i = 0; i < Questions[CurrentQuestion].options.length; i++) {
            //$(".imageContainer").append("<div class='" +Questions[i].number+ "'> <img src='" +Questions[i].image+"'><div class='questionWrapper'></div></div>");
            //var QuestionsHTML = ""
            //$.each(Questions[i].options, function (index,value) {
            //$(".questionWrapper").append("<button>"+value+"</button>");
            //});

            $(".singlequestion").append("<button class='Questions'>" + Questions[CurrentQuestion].options[i] + "</button>")

            //$("button").click(function()
            $("button").off('click').on('click', function() {
                $(this).parent(".singlequestion").hide();
                var AnswerClicked = $(this).text()

                if (RemainingQuestions < 1) {
                	if (AnswerClicked == Questions[CurrentQuestion].correctOption) {
                	Correct++
                	$(".NumberCorrect").html(Correct);
                	$(".singlequestion").html("<h2> You're done!</h2>");
                	$(this).parent(".singlequestion").hide();

                   
                }
                 	//AskQuestion();
                    //return false;
                    $(".QuizContainer").html("<button class='restart'>Restart</button>");
                    $(".restart").click(function(){
                    	$(this).remove();
                    	 Correct = 0
    					 CurrentQuestion = 0
    					 RemainingQuestions = 4
    					 $(".questionNumber").html(CurrentQuestion + 1);
                        $(".NumberCorrect").html(Correct);
                        $(".NumberRemaining").html(RemainingQuestions);
    					AskQuestion();

                    });

                } else {
                    if (AnswerClicked == Questions[CurrentQuestion].correctOption) {
                        Correct++
                        CurrentQuestion++
                        RemainingQuestions--
                        $(".questionNumber").html(CurrentQuestion + 1);
                        $(".NumberCorrect").html(Correct);
                        $(".NumberRemaining").html(RemainingQuestions);
                        console.log("correct");
                    } else {
                        console.log("nope");
                        CurrentQuestion++
                        RemainingQuestions--
                        $(".questionNumber").html(CurrentQuestion + 1);
                        $(".NumberCorrect").html(Correct);
                        $(".NumberRemaining").html(RemainingQuestions);
                        //return false;
                    }

                    AskQuestion();

                }




            });

        }

    }

    AskQuestion();

    /*$("button").click(function() {
    		var AnswerClicked = $(this).text()
    		if (AnswerClicked == Questions[CurrentQuestion].correctOption) {
    			Correct++
    			CurrentQuestion ++
    			RemainingQuestions --
    			$(".questionNumber").html(CurrentQuestion+1);
    			$(".NumberCorrect").html(Correct);
    			$(".NumberRemaining").html(RemainingQuestions);
    			console.log("correct");

    		}
    		else {
    			console.log("nope");
    		}
    		
    			if (RemainingQuestions < 1) {
    		//last question
    	}
    	else {
    		AskQuestion();
    	
    	}
    	});*/




    $(".1").hide();

});