import axios from 'axios'
import { baseUrl } from './baseUrl'


export default {
    Client(url = baseUrl + "client/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: client => axios.post(url, client),
            update: (id, client) => axios.put(url + id, client),
            delete: id => axios.delete(url + id)
        }
    },
    Doctor(url = baseUrl + "doctors/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: doctor => axios.post(url, doctor),
            update: (id, doctor) => axios.put(url + id, doctor),
            delete: id => axios.delete(url + id)
        }
    }
}