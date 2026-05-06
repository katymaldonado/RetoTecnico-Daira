import axios from "axios"

class InteresesGanados {
    #url

    constructor() {
        this.#url = 'https://auto.dairaitgroup.com.ar/webhook/67479a90-b220-4b6a-b082-54ae3de35fe4'
    }

    getAll = async () => {
        try {
            const { data: intereses } = await axios.get(this.#url)
            return intereses
        }
        catch (error) {
            console.error("Error intereses GET", error)
        }
    }

    post = async interes => {
        try {
            const { data: interesGuardado } = await axios.post(this.#url, interes)
            return interesGuardado
        }
        catch (error) {
            console.error("Error intereses POST", error)

        }
    }

}

export default InteresesGanados