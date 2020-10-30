function onLoad()
{
	var argv = window.location.href.split('?')[1];
	console.log("Readin:"+argv);
	if(argv!=undefined)
	{
		argv = window.atob(argv);
		console.log("Decoded:"+argv);
		argv = argv.split('~')
		if(argv[0] == "OP")
		{
			console.log("Updating command detected.");
			if(argv[1] == undefined)
			{
				console.log("ERROR : Unable to prase argv[1] as undefined.");
			}
		}
	}
}