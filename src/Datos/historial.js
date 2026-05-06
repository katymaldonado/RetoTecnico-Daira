import axios from "axios"
class Historial {
    #url

    constructor() {
        // this.#url = 'https://683cd1f0199a0039e9e3803f.mockapi.io/apitp3/Usuarios'
        this.#url = 'https://auto.dairaitgroup.com.ar/webhook/7c682683-153c-4543-87ef-bdf7b52745ee'
    }

    getAll = async () => {
        try {
            const { data: historial } = await axios.get(this.#url)
            return historial
        }
        catch (error) {
            console.error("Error historial GET", error)
        }
    }

}

export default Historial