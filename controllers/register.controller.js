const form = document.querySelector('#register_from')
const errorPanel = document.querySelector('#error_panel')

const showErrorPanel = (errorMessage) => {
  errorPanel.classList.remove('visually-hidden')
  errorPanel.textContent = errorMessage
}

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const {
    name,
    last_name: lastName,
    phone,
    address,
    country,
    zip_code: zipCode,
    birth_date: birthDate,
    email,
    password,
    confirm_password: confirmPassword,
    card_number: cardNumber,
    card_type: cardType
  } = Object.fromEntries(new FormData(event.target).entries())

  if (password !== confirmPassword) {
    return showErrorPanel('Las contraseñas no coinciden')
  }

  fetch('http://localhost:3000/guests/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      last_name: lastName,
      phone,
      address,
      country,
      zip_code: zipCode,
      birth_date: birthDate,
      email,
      password,
      card_number: cardNumber,
      card_type: cardType

    })
  })
    .then(async response => {
      const data = await response.json()
      if (response.status === 400) {
        return showErrorPanel(data.message)
      } else if (response.status === 201) {
        location.replace('/login')
      }
    })
    .catch(error => {
      return showErrorPanel(error.message)
    })
})
