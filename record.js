var recording = false;
var startTime = false;


function recordToggle() {
	var record = document.getElementById('record');
	recording = !recording;
	if (recording) {
		//Start recording
		record.innerHTML = 'Stop'
		startTime = new Date();
	} else {
		//Stop recording
		record.innerHTML = 'Record'
		startTime = false;
	}
	
}