// class Api {
    // }
    
    // export default Api;
    
    // import Config from '../../Config';
    
class Api{
        
    getUser() {
        return {
            //company //"_id":"5e46636ad7309f1e4c550f21","role":"company","firstName":"Abdallah","lastName":"Breton","email":"","picture":"","companyName":"","password":"","phoneNumber":"","experience":1,"city":"","postalCode":"","contract":"","siret":"","associationNumber":"","bio":"","github":"","linkedin":"","cv":"","created":null,"__v":0
            "_id":"5e4a96470b3d5d36d8a634a1","role":"developer","firstName":"Marie","lastName":"Dupont","email":"","picture":"","companyName":"","password":"","phoneNumber":"","experience":1,"city":"Paris","postalCode":"75011","contract":"","siret":"","associationNumber":"","bio":"","github":"","linkedin":"","cv":"","position":"","created":null,"__v":0
        }
    }

    getFavoritesUser(){
        const user = this.getUser();
        console.log('user', user._id);
        const url = `http://localhost:3001/favorites/users/${user._id}`
        console.log(url)
        return fetch(url)
            .then(res=>res.json())
            .then(json=>{
                console.log('json', json)
                return json.data

            })

    }

}

export default new Api()