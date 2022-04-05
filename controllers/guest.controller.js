(async () => {
  const generateColumn = (nombre, lastname) => {
    return `<div class="col">
      <p>Bienvenid@: ${nombre} ${lastname}</p>
    </div>`
  }
  const list = document.querySelector('#Nombre')
  const todos = await (await fetch('http://localhost:3000/guests')).json()
  const indicado = window.sessionStorage.getItem('sesionUsuario')
  console.log(indicado)
  todos.forEach(element => {
    if (element.email === indicado) {
      list.innerHTML = ''
      console.log(element)
      const nombre = element.name
      const lastname = element.last_name
      console.log(nombre)
      list.innerHTML += generateColumn(nombre, lastname)
    }
  })
})()
