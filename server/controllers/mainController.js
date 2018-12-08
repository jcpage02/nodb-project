let id = 1
const userInfo = [
    {
        id: id,
        userFirstName: 'James',
        userLastName: 'Page',
        username: 'james',
        password: 'pass',
        userFavMovieGenres: ['Sci-fi', 'Action', 'Comedy'],
        userFavMusicGenres: ['Classical', 'Country', 'Alternative']
    }
]

module.exports = {

    getUserInfo: (req, res) => {
        const userID =
            res.status(200).send(userInfo)
    },

    createUser: (req, res) => {
        const { firstName, lastName, username, password, favMovieGenre, favMusicGenre } = req.body
        id = userInfo.length + 1

        userInfo.push({ id: id, firstName, lastName, username, password, favMovieGenre, favMusicGenre })
        res.status(200).send(userInfo)
    },

    validUser: (req, res) => {
        // console.log(`here is req ${req.body}`)
        const { username, password } = req.body
        const validUser = []

        console.log(`req: ${username} ${password}`)
        userInfo.filter((user, i) => {
            console.log(`userInfo: ${user.username} ${user.password}`)
            if (username === user.username && password === user.password) {
                validUser.push(user)
                // console.log('I am a valid ', validUser)
            }
        })
        res.status(200).send(validUser)
    },

    deleteUser: (req, res) => {
        // console.log(req.params.id)
        const index = userInfo.findIndex((user) => {
            if (user.id === +req.params.id) {
                return true
            } else {
                return false
            }
            userInfo.splice(index, 1)
        })
        res.status(200).send()
    }




}