
$(document).ready(function () {

    $("#quizForm").hide();


    $("#start-button").click(function () {
       
        var number = 90;
        $("#start-button").on("click", start); 
        $("#submit").on("click", finish);  


        
        function start() {
            counter = setInterval(timer, 1000);
            hideMe("#start-button");
            $("#quizForm").show();
            $(".rules").hide();

        }


        function timer() {
            number--
            $("#show-timer").html("<h2>Time Remaining:</h2>" + "<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
                finish();
            }
        }
        function stop() {
            clearInterval(counter);
            $("#results").show();
            $("#restart").show();
            $(".question").hide();
            $(".answers").hide();
            $("#submit").show();
        }
        function finish() {
            number = 1; d
            clearInterval(counter);
            timer();
        }

        function restart() {
            number = 90;
            start();
        }

        function hideMe(e) {
            $(e).hide();
        }
        function showMe(e) {
            $(e).show();
        }


        start();
    });
});


function submitAnswers() {



    var total = 10;
    var score = 0;
    var unanswered = 0;


    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;


    var answers = ["c", "a", "b", "d", "b", "b", "a", "b", "c", "a"];

    if (q1 == answers[0]) {
        score++;
    }
    if (q2 == answers[1]) {
        score++;
    }
    if (q3 == answers[2]) {
        score++;
    }
    if (q4 == answers[3]) {
        score++;
    }
    if (q5 == answers[4]) {
        score++;
    }

    if (q6 == answers[5]) {
        score++;
    }
    if (q7 == answers[6]) {
        score++;
    }
    if (q8 == answers[7]) {
        score++;
    }
    if (q9 == answers[8]) {
        score++;
    }
    if (q10 == answers[9]) {
        score++;
    }


    alert("You scored  " + score + " out of " + total);


}


// Pseudo Code

// code function that displays:

// Correct Answers
// Incorrect Answers
// Unanswered

// and displays content in new html