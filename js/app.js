var redBuff = Date();
var blueBuff = Date();

$('#blue').click(function() {
	blueBuff = Date();
});

$('#red').click(function() {
	redBuff = Date();
});

setInterval(function(){
	
	$('#blue p').text(moment(moment().diff(blueBuff)).format('mm:ss'));
	$('#red p').text(moment(moment().diff(redBuff)).format('mm:ss'));
	
}, 1000);