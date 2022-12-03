const { dispatcher_panel_key } = require('./variables');

const http = require('http').createServer();

const io = require('socket.io')(http, {
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

http.listen(8000, () => {
    console.log("Socket server is running!");
})