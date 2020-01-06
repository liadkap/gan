import axios from 'axios'

const serverPath = 'http://localhost:5000/';

export const get = (url) => {

}

export const post = async (url, body) => {
    return await axios.post(`${serverPath}${url}`, body);
}