const io = require('./socket').io
const zerorpc = require('zerorpc')
const {PRISYAD} = require('./Events')

module.exports = function(socket) {
  var client = new zerorpc.Client()
  client.connect('tcp://127.0.0.1:4242')
  console.log('socket id: ' + socket.id)

  socket.on(PRISYAD, obj => {
    console.log('CONNECT')
    client.invoke('streaming_range', 10, obj, 2, function(error, res, more) {
      console.log(res, 'asdasdasdasd')
    })
  })
}
