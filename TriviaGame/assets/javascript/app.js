function startGame() {
    function Timer () {
        var timeRemaining = 60;
        var timer = setInterval(function() {
            timeRemaining--;
            $("#countDown").html(timeRemaining);
            if(timeRemaining === 0) {
                clearInterval(timer);
                gradeQuiz();
            }
            else timer;
        }, 1000);
    }
    document.getElementById("game").style.display = "initial";
    document.getElementById("startButton").style.display = "none";
    Timer();
}

function one(checkbox) {
    var checkboxes = $("#q1")
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function two(checkbox) {
    var checkboxes = $("#q2")
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function three(checkbox) {
    var checkboxes = $("#q3")
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function four(checkbox) {
    var checkboxes = $("#q4")
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function reset() {
    window.location.reload(false);
}

function gradeQuiz(){
    var correct = 0;
    if ($("#1d")[0].checked){
        correct++;
    }
    if ($("#2c")[0].checked){
        correct++;
    }
    if ($("#3a")[0].checked){
        correct++;
    }
    if ($("#4b")[0].checked){
        correct++;
    }
    alert("You got "+ correct + " answers correct") 
        reset();
}
