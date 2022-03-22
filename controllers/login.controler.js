const form = document.querySelector('#register_from')
const errorPanel = document.querySelector('#error_panel')

const showErrorPanel = (errorMessage) => {
  errorPanel.classList.remove('visually-hidden')
  errorPanel.textContent = errorMessage
}

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const {
    email,
    password
  } = Object.fromEntries(new FormData(event.target).entries())

  fetch('http://localhost:3000/authentication/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(async response => {
      const data = await response.json()
      if (response.status === 400) {
        return showErrorPanel(data.message)
      } else if (response.status === 200) {
        console.log(data)
        sessionStorage.setItem('authToken', data.token)
        location.replace('/')
      }
    })
    .catch(error => {
      return showErrorPanel(error.message)
    })
})
