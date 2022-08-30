const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiresult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(JSON.stringify(response.data)))
    .catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(JSON.stringify(response.data)))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Leonardo da Silva",
    avatar: "https://picsum.photos/200/300",
    city: "São Paulo"
}

const newUser = {
    name: "Leandro Ferreira",
    avatar: "https://picsum.photos/200/300",
    city: "Brasília"
}

getUsers()

getUser(2)

// updateUser(4, userUpdated)

// deleteUser(3)

// addNewUser()