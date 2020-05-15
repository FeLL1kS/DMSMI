import axios from 'axios'

const baseUrl = "http://localhost:11717/api/"

export default {
    Client(url = baseUrl + "client/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: client => axios.post(url, client),
            update: (id, client) => axios.put(url + id, client),
            delete: id => axios.delete(url + id)
        }
    }
}