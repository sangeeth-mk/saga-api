import axios from 'axios';

export function requestgetuser(){
    return axios.request({
method:"get",
url:"https://jsonplaceholder.typicode.com/users/1"
    })
}