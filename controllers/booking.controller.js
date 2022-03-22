(async () => {
  const roomId = location.pathname.split('/')[2]
  const roomInput = document.querySelector('#room')
  const room = await (await fetch(`http://localhost:3000/rooms/${roomId}`)).json()
  if (room) {
    roomInput.value = room.name
  }
})()
