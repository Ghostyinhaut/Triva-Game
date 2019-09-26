        //answer object
        var rightAnswers=[
            "John and Mary",
            "in the 19th century, when it became a symbol of the abolition of slavery",
            "Buttermilk",
            "a four-story Georgian-style home in Missouri",
            "compact disk player",
            "Byron Nelson",
            "Willie Mays"
        ]       
        var rightAnswerCounter=0;
        var incerrectCounter=0;
        var noSelectCounter=0;
        var numOfQuestions=7;

        $(document).ready(function() {
            $(".container").hide();

            //Set time out
            var ifHadStared=false
            var sec=30;

            function timer(){
                sec--;
                $("#Timer").text("Time Remaining "+sec+"s");
                if(sec===0){
                    $(".container").hide();
                    $("#result").append("<h1>TIME UP!!!");
                    Counter();
                    result();
                    clearInterval(t);
                }
            }

            
            //Start Button listener
            var t;
            $("#Start").click(function(event) {
                t=setInterval(timer,1000);
                $(".container").show();
                $("#Start").hide();
            });

            function result(){
                $("#result").append("<h1>Correct: "+rightAnswerCounter+"</h1>");
                $("#result").append("<h1>Incorrect: "+incerrectCounter+"</h1>");
                $("#result").append("<h1>Questions that didn't answer: "+noSelectCounter+"</h1>");
            }
            //Submit Button listener
            $("#submit").click(function() {
                Counter();
                console.log("right:"+rightAnswerCounter);
                console.log("incorrect:"+incerrectCounter);
                console.log("empty selection"+noSelectCounter);
                $(".container").hide();
                result();
                clearInterval(t);
            });

            //counter function
            function Counter(){
                for(var i=1;i<numOfQuestions+1;i++){
                    var selected=$('input[name=q'+i+']:checked').val();
                    console.log(selected);
                    if(rightAnswers.includes(selected)){
                        rightAnswerCounter++;
                    }else if(typeof selected==="undefined"){
                        noSelectCounter++;
                    }else{
                        incerrectCounter++;
                    }
                }
            }
        });