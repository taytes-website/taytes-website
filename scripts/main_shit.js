
var MuhSnogs = ["cc", "chickprod_v6", "geico_v3", "gta45_v5beta"];
var trumpet;

// SHIEEEET GIBSES MES DAT
function GibsMeSnog()
{
	var MuhSong = MuhSnogs[Math.floor(Math.random() * MuhSnogs.length)];
	return "assets/" + MuhSong + ".mp3";
}

function PlayTrumpet()
{
	trumpet.stop();
	trumpet = new Audio(GibsMeSnog());
	trumpet.loop = true;
	trumpet.play();
}


