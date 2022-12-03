const express = require("express");
const cors = require("cors");
const apiRouter = require('./router');
const app = express();
const PORT = process.env.PORT || 8080;

app.use( express.json() );
app.use(cors());
app.use('/api', apiRouter);
// app.get("/", (req, res) => {
//   res.send("Ti si mil chovek");
// })

const { dispatcher_panel_key } = require('./variables');

const server = require('http').createServer();

const io = require('socket.io')(server);

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

server.listen(5000)

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON http://localhost:" + PORT);
});