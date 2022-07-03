import axios from 'axios'
const baseUrl = 'https://nameless-dawn-23383.herokuapp.com/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

const update = (newObject) => {
  return axios.put(`${baseUrl}/${newObject.id}`, newObject)
}

export default {
  getAll: getAll,
  create: create,
  remove: remove,
  update: update
}