const dispatcher_panel_key = '23ds2fg2_1jhg12gh-hf4,kgj,48l';
const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: { origin: "*" }
});
io.on('connection', (socket) => {
    socket.on('newDelivery', (_id) => {
      io.emit(dispatcher_panel_key, _id)
    });
    socket.on('answerDelivery', (data) => {
      io.emit((dispatcher_panel_key + "_deliveryAnswered"), {id: data.id, index: data.index})
      io.emit(data.id, data.id)
    });
    socket.on('chooseDelivery', (index) => {
      io.emit((dispatcher_panel_key + "_deliveryChosen"), index);
    });
    socket.on('unchooseDelivery', (index) => {
      io.emit((dispatcher_panel_key + "_deliveryUnchosen"), index);
    });
    socket.on('cancelDelivery', (id) => {
      console.log(id)
      io.emit((dispatcher_panel_key + "_deliveryCanceled"), id);
    });
  })
  
server.listen(process.env.PORT || 3000);