var audioClip = document.getElementById("myAudio");

function playme(x) {
    x.play();
}

function playAudio() {
    audioClip.play();
}

function pauseAudio() {
    audioClip.pause();
}

function postSelection(letter) {
	const API_URL = 'receive_selection.php';
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(this.responseText);
            
            //Remove on prod
            console.log(response.status);

            if (response.status === true) {
                //success state
				
				var element = document.getElementById("response-correct-container");
                element.classList.remove("reverse-active");
                var element = document.getElementById("response-correct-wrapper");
                element.classList.remove("inactive");
                var element = document.getElementById("response-correct-container");
                element.classList.add("correct-active");
                var element = document.getElementById("response-correct-wrapper");
                element.classList.add("correct-wrapper");		
            } else {
                //fail state
                var element = document.getElementById("response-incorrect-container");
                element.classList.remove("reverse-active");
                var element = document.getElementById("response-incorrect-wrapper");
                element.classList.remove("inactive");
                var element = document.getElementById("response-incorrect-container");
                element.classList.add("incorrect-active");
                var element = document.getElementById("response-incorrect-wrapper");
                element.classList.add("incorrect-wrapper");				
            };
        }
    };
	// Send async request 
    xmlhttp.open("POST", API_URL, true);
	// We want to send data as json
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	// post values
    xmlhttp.send(JSON.stringify( { selectedLetter: letter } ));
}