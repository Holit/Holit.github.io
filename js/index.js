var args = sHref.split("?");
var retval = "";

if(args[0] == sHref) /*参数为空*/
{
	throw "Not verficated"
}  
var str = args[1];
args = str.split("&");
if(args[0]!= 'e10adc3949ba59abbe56e057f20f883e')
{
	throw "Not verficated"
}

