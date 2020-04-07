const axios = require('axios')
const querystring = require('querystring')
// require('dotenv').config()

const instance = axios.create({
    baseURL: 'https://notify-api.line.me/api/notify',

})

exports.initial = () => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN_LINE_NOTIFY}`
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
}

exports.notify = (message) => {
    let query = querystring.stringify({ message })
    instance.post('', query)
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err.response.data))
}

exports.notifySticker = (message, stickerId, stickerPackageId) => {
    let query = querystring.stringify({ message, stickerPackageId, stickerId })
    instance.post('', query)
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err.response.data))
}

exports.notifyImage = (message, imageURL) => {
    let query = {
        message: message,
        imageFullsize: imageURL,
        imageThumbnail: imageURL
    }
    instance.post('', querystring.stringify({ ...query }))
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err.response.data))
}