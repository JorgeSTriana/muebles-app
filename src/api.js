const url = 'https://randomuser.me/api/?results=50'

function getUsersPromise(){
    return fetch(url)   // fetch hace una petición
    .then(res => res.json())
    .then(res => res.results)       //results es el nombre que aparece en la consola del navegador, si solo se requieren los results
    .catch(err => console.log(err))
}

export default{
    getUsersPromise
}