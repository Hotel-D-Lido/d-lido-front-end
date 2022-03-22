(async () => {
  const generateColumn = (room, images, category) => {
    const image = images[0] ? images[0].content : '/public/images/room-default.jpeg'
    return `<div class="col">
        <div class="card">
            <img src="${image}" class="card-img-top" alt="${room.name}">
            <div class="card-body">
                <h5 class="card-title">${room.name}</h5>
                <p class="card-text">${room.description}</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-secondary">Ver más</button>
              <a type="button" href="/rooms/${room.room_id}/book" target="_self" class="btn btn-primary">Reservar</a>
              <small class="text-muted">$${category.price}/PP/PN</small>
            </div>
        </div>
    </div>`
  }

  const list = document.querySelector('#list')
  const rooms = await (await fetch('http://localhost:3000/rooms')).json()
  if (rooms) {
    list.innerHTML = ''
    rooms.forEach(async room => {
      const images = await (await fetch(`http://localhost:3000/images/by-room/${room.room_id}`)).json()
      const category = await (await fetch(`http://localhost:3000/categories/${room.category_id}`)).json()
      list.innerHTML += generateColumn(room, images, category)
    })
  }
})()
