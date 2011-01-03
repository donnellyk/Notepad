var recording = false;
var startTime = false;
var timeStamps = new Array();

var curText = ""; //Messy way to do it, I might fix it later

function recordToggle() {
	var record = document.getElementById('record');
	recording = !recording;
	if (recording) {
		//Start recording
		record.innerHTML = 'Stop'
		startTime = new Date();
		document.getElementById('ts').style.display = "none";
	} else {
		//Stop recording
		record.innerHTML = 'Record'
		startTime = false;
		document.getElementById('ts').style.display = "block";
	}
	
}

function textChange() {
	var text = document.getElementById('notepad').value;
	if (text.length == curText.length) {
		//Nothing has changed, probably just navigating. So, let's display timestamp
		timeStampDisplay();
	} else {
		curText = text;
		curTime = new Date();
		var diff = (curTime - startTime) / 1000;
		if (recording) {
			if (text.length == 1) {
				timeStamps[0] = diff;
			}
			timeStamps[text.length] = diff;
		} else {
			if (text.length == 1) {
				timeStamps[0] = -1;
			}
			timeStamps[text.length] = -1;
		}
	}
}

function timeStampDisplay() {
	var pos = caretPosition(document.getElementById('notepad'));
	if (timeStamps[pos]) {
		document.getElementById('ts').innerHTML = timeStamps[pos];
	}
}

function caretPosition (ctrl) {
	var CaretPos = 0;	
	// IE Support
	if (document.selection) {
		ctrl.focus();
		var Sel = document.selection.createRange ();
		Sel.moveStart ('character', -ctrl.value.length);
		CaretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		CaretPos = ctrl.selectionStart;
	return (CaretPos);
}

function playback() {

}