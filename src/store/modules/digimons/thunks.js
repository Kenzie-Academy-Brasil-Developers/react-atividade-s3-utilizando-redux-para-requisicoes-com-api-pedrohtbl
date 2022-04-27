import api from "../../../services/api"
import { addDigimon } from "./actions"

const addDigimonsThunk = (digimon, setError) =>(dispatch)=>{
    api.get(`/name/${digimon}`)
    .then(response => dispatch(addDigimon(response.data[0])))
}

export default addDigimonsThunk