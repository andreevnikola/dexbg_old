var smpp = require('smpp');
var session = smpp.connect({
	url: 'smpp://localhost:2775',
	auto_enquire_link_period: 10000,
	debug: true
}, function() {
	session.bind_transceiver({
		system_id: '08-97-98-7D-C4-F6',
		password: '020908'
	}, function(pdu) {
		if (pdu.command_status === 0) {
			// Successfully bound
			session.submit_sm({
                source_addr: '+359899910976',
				destination_addr: '+359896604041',
				short_message: 'Hello!'
			}, function(pdu) {
				if (pdu.command_status === 0) {
					// Message successfully sent
					console.log(pdu.message_id);
				}
			});
		}
	});
});