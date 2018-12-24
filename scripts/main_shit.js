
var MuhSnogs = ["cc", "chickprod_v6", "geico_v3", "gta45_v5beta"];

// SHIEEEET GIBSES MES DAT
function GibsMeSnog()
{
	var MuhSnog = MuhSnogs[Math.floor(Math.random() * MuhSnogs.length)];
	return "assets/" + MuhSnog + ".mp3";
}

function PlayzusMezusMuhSnogNShit()
{
	var trumpet = new Audio(GibsMeSnog());
	trumpet.loop = true;
	trumpet.play();
}

// SHIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET
function PlayRandomSong()
{
	return PlayzusMezusMuhSnogNShit();
}
