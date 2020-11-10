import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://adote-um-pet-df1b0.firebaseio.com/pets.json',
});

export default instance;
