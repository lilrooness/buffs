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

	if(moment().diff(blueBuff, 'minutes') >= 5) {
		//TODO Make alert
	}

	if(moment().diff(redBuff, 'minutes') >= 5) {
		//TODO Make alert
	}
	
}, 1000);