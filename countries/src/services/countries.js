import axios from "axios"

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => axios
    .get(baseUrl)
    .then(response => response.data)

export default { getAll }