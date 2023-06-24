const axios = require("axios")

module.exports = {
    name: "help",
    content: (sender) => {
        const url = "https://graph.facebook.com/v17.0/115082968146841/messages?platform=instagram"
        let params = {
            recipient: {
                id: sender
            },
            message: {
                text: "yardım menüsü açıldı"
            },
            access_token: require("../config.json").token
        }

        axios({
            method: "POST",
            url: url,
            params: params
        })
    }
}