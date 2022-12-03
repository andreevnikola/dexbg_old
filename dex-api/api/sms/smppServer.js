var smpp = require('smpp');

function checkAsyncUserPass(id, pass, fn){
    if(id === '08-97-98-7D-C4-F6' && pass === '020908'){
        fn(false)
    }else{
        fn('INCORRECT NAME OR PASS')
    }
}

var server = smpp.createServer({
	debug: true
}, function(session) {
	session.on('error', function (err) {
		// Something ocurred, not listening for this event will terminate the program
  	});
	session.on('bind_transceiver', function(pdu) {
		// we pause the session to prevent further incoming pdu events,
		// untill we authorize the session with some async operation.
		session.pause();
		checkAsyncUserPass(pdu.system_id, pdu.password, function(err) {
			if (err) {
				session.send(pdu.response({
					command_status: smpp.ESME_RBINDFAIL
				}));
				session.close();
				return;
			}
			session.send(pdu.response());
			session.resume();
		});
	});
});

server.listen(2775);