import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue--journal-default-rtdb.firebaseio.com'
})

export default journalApi