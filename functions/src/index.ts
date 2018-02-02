import * as functions from 'firebase-functions';
import Request from 'request-promise-native'

// function getToken() {
//     if (process.env.NODE_ENV == 'production') {
//         return require('cloud-functions-runtime-config')
//             .getVariable('prod-config', 'telegram/token')
//     }
//     return Promise.resolve(process.env.TELEGRAM_TOKEN)
// }

export const helloWorld = functions.https.onRequest((request, response) => {
    const {message: {chat, text}} = request.body;
    const echo = `echo: ${text}`;


  //  return getToken()
     /*   .then(token => */
     Request.post({
            uri: `https://api.telegram.org/bot${Token}/sendMessage`,
            json: true,
            body: {message: echo, chat_id: chat.id}
        })
        .then(resp => response.send(resp))
        .catch(err => response.status(500).send(err))
});
