const userInfo = [
    {
        id: 1,
        firstName: 'James',
        lastName: 'Page',
        username: 'james',
        password: 'pass',
        favMovieGenres: ['Sci-fi', 'Action', 'Comedy'],
        favMusicGenres: ['Classical', 'Country', 'Alternative']
    }
]


module.exports = {

    getUserInfo: (req, res) => {
        const userID =
            res.status(200).send(userInfo)
    },

    createUser: (req, res) => {
        const { firstName, lastName, username, password, favMovieGenres, favMusicGenres } = req.body
        id = userInfo.length + 1
        console.log(req.body)
        userInfo.push({ id: id, firstName, lastName, username, password, favMovieGenres, favMusicGenres })
        res.status(200).send(userInfo)
    },

    validUser: (req, res) => {
        const { username, password } = req.body
        const validUser = []

        userInfo.filter((user, i) => {
            if (username === user.username && password === user.password) {
                validUser.push(user)
            }
        })
        res.status(200).send(validUser)
    },

    deleteUser: (req, res) => {
        const deleteID = req.params.id;
        userIndex = userInfo.findIndex(user => user.id == deleteID);
        userInfo.splice(userIndex, 1);
        res.status(200).send(userInfo);
    },

    updateUserInfo: (req, res) => {
        const keyArray = Object.keys(req.body)
        const valueArray = Object.values(req.body)
        console.log(keyArray, valueArray)
        const userID = +req.params.id
        userInfo.findIndex((user, i) => {
            if (user.id === +req.params.id) {
                const updatedUser = { ...user }
                keyArray.map((key, i) => {
                    delete updatedUser[key]
                    updatedUser[key] = valueArray[i]
                })
                userInfo[i] = updatedUser
            }
        })
        res.status(200).send(userInfo[userID])
    }


}