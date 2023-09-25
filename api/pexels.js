import axios from "axios";

export const getImages = async (searchTerm='people') => 
await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
        Authorization: 'HUdIUSyCTHhyNYGfzyG5ujJfrgIYNCJ6VHbyNoaHyWy4C3MqD2vtEyuI'
    }
})