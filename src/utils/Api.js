// class Api {
//     getUser() {
//         return {
//             "_id":"5e456dcd899c923f10b08fb6","role":"","firstName":"Jean","lastName":"","email":"","picture":"","companyName":"","password":"","phoneNumber":"","experience":1,"city":"","postalCode":"","contract":"","siret":"","associationNumber":"","bio":"","github":"","linkedin":"","cv":"","created":null,"__v":0
//         };
//     }
// }

// export default Api;

// import Config from '../../Config';

class Api{

    getUser(){
        const url = `http://localhost:3001/users`
        console.log(url)
        return fetch(url)
            .then(res=>res.json())
            .then(json=>{
                console.log('json', json)
                return json

            })

    }

}

export default new Api()