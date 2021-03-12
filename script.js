function q1() {

    document.getElementById("ques1").innerHTML = "1. Sohan started a business with a capital of Rs. 80000. After 6 months Mohan joined as a partner by investing Rs. 65000. After one year they earned total profit Rs. 20000. What is share of Sohan in the profit?";
    document.getElementById("op111").innerHTML = "Rs. 5222.2";
    document.getElementById("op112").innerHTML = "Rs. 5777.7";
    document.getElementById("op113").innerHTML = "Rs. 6222.2";
    document.getElementById("op114").innerHTML = "Rs. 6777.7";
    document.getElementById("Instruction").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("qu1").style.display = "block"
    document.getElementById("qu2").style.display = "none";
    document.getElementById("qu3").style.display = "none";
    document.getElementById("qu4").style.display = "none";
    document.getElementById("qu5").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
    document.getElementById("prev").style.display = "none";
    document.getElementById("prev").removeEventListener("click", q1);
    document.getElementById("next").removeEventListener("click", q1);
    document.getElementById("next").addEventListener("click", q2);
    document.getElementById("sub").style.display = "none";

}


function q2() {
    document.getElementById("ques2").innerHTML = "2. A mother is twice as old as her son. If 20 years ago, the age of the mother was 10 times the age of the son, what is the present age of the mother?";
    document.getElementById("op221").innerHTML = "38 years";
    document.getElementById("op222").innerHTML = "40 years";
    document.getElementById("op223").innerHTML = "43 years";
    document.getElementById("op224").innerHTML = "45 years";
    document.getElementById("qu2").style.display = "block";
    document.getElementById("qu1").style.display = "none";
    document.getElementById("qu3").style.display = "none";
    document.getElementById("qu4").style.display = "none";
    document.getElementById("qu5").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
    document.getElementById("prev").style.display = "inline-block";
    document.getElementById("prev").removeEventListener("click", q2);
    document.getElementById("next").removeEventListener("click", q2);
    document.getElementById("prev").addEventListener("click", q1);
    document.getElementById("next").addEventListener("click", q3);
    document.getElementById("sub").style.display = "none";


}


function q3() {
    document.getElementById("ques3").innerHTML = "3. What is the difference in the place value of 5 in the numeral 754853?";
    document.getElementById("op331").innerHTML = "49500";
    document.getElementById("op332").innerHTML = "49950";
    document.getElementById("op333").innerHTML = "45000";
    document.getElementById("op334").innerHTML = "49940";
    document.getElementById("qu3").style.display = "block";
    document.getElementById("qu2").style.display = "none";
    document.getElementById("qu5").style.display = "none";
    document.getElementById("qu1").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
    document.getElementById("qu4").style.display = "none";
    document.getElementById("prev").removeEventListener("click", q3);
    document.getElementById("next").removeEventListener("click", q3);
    document.getElementById("next").addEventListener("click", q4);
    document.getElementById("prev").addEventListener("click", q2);
    document.getElementById("sub").style.display = "none";

}

function q4() {
    document.getElementById("ques4").innerHTML = "4. The speed of a boat in still water is 5km/hr. If the speed of the boat against the stream is 3 km/hr, what is the speed of the stream?";
    document.getElementById("op441").innerHTML = "1.5 km/hr";
    document.getElementById("op442").innerHTML = "2 km/hr";
    document.getElementById("op443").innerHTML = "2.5 km/hr";
    document.getElementById("op444").innerHTML = "1 km/hr";
    document.getElementById("qu4").style.display = "block";
    document.getElementById("qu2").style.display = "none";
    document.getElementById("qu5").style.display = "none";
    document.getElementById("qu1").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
    document.getElementById("qu3").style.display = "none";
    document.getElementById("prev").removeEventListener("click", q4);
    document.getElementById("next").removeEventListener("click", q4);
    document.getElementById("next").addEventListener("click", q5);
    document.getElementById("prev").addEventListener("click", q3);
    document.getElementById("sub").style.display = "none";


}

function q5() {
    document.getElementById("ques5").innerHTML = "5. Two ships are sailing in the sea on the two sides of a lighthouse. The angles of elevation of the top of the lighthouse observed from the ships are 30° and 45° respectively. If the lighthouse is 100m high, find the distance between the two ships.";
    document.getElementById("op551").innerHTML = "155.80 m";
    document.getElementById("op552").innerHTML = "157.80 m";
    document.getElementById("op553").innerHTML = "159. 80 m";
    document.getElementById("op554").innerHTML = "161.80 m";
    document.getElementById("qu5").style.display = "block";
    document.getElementById("qu3").style.display = "none";
    document.getElementById("qu2").style.display = "none";
    document.getElementById("qu1").style.display = "none";
    document.getElementById("qu4").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("prev").removeEventListener("click", q5);
    document.getElementById("next").removeEventListener("click", q5);
    document.getElementById("prev").addEventListener("click", q4);
    document.getElementById("sub").style.display = "inline-block";
}

function final() {
    document.getElementById("sub").style.display = "none";
    document.getElementById("qu5").style.display = "none";
    document.getElementById("prev").style.display = "none";
    document.getElementById("qu3").style.display = "none";
    document.getElementById("qu2").style.display = "none";
    document.getElementById("qu1").style.display = "none";
    document.getElementById("qu4").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("dis").style.display = "none";
    document.getElementById("msg").innerHTML = "Quiz has been submitted Successfully!";
}


function timer() {
    var min = 9;
    var sec = 59;
    setInterval(function() {
        if (sec < 10) {
            document.getElementById("dis").innerHTML = "Time left:   0" + min + " : 0" + sec;
        }
        if (sec >= 10) {
            document.getElementById("dis").innerHTML = "Time left:   0" + min + " : " + sec;
        }
        sec--;
        if (sec == 00 && min != 0) {
            min--;
            sec = 60;
        }
        if (min == 0 && sec == -2) {
            alert("time-over");
            return final();
        }

    }, 1000);

}