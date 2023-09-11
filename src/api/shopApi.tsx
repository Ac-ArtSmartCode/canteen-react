import axios from "axios"

export const shopApi = () => {
    axios.defaults.baseURL = "http://api_oh.udvc.ac.th/";
    const canteen = async () => {
        return await axios.get('/shop')
    }

    const details = async (id: string) => {
        return await axios.get(`/shop/${id}`)
    }
    return { canteen, details }
}