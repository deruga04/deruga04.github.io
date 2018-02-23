window.onload = function(){
	var ctx = new AudioContext();
	var audio = document.getElementById("twintails");
	audio.crossOrigin = "anonymous";
	audio.controls = true;
	var audioSrc = ctx.createMediaElementSource(audio);
	var analyser = ctx.createAnalyser();
	audioSrc.connect(analyser);
	audioSrc.connect(ctx.destination);
	var freqData = new Uint8Array(analyser.frequencyBinCount);

	function renderFrame(){
		requestAnimationFrame(renderFrame);
		analyser.getByteFrequencyData(freqData);
	}
	console.log(audio);
	audio.play();
	console.log("playing");
	//renderFrame();
}