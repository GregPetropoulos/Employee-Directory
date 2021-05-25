import axios from "axios";

// CONST VARIABLE OF 150 RANDOM USERS
const URL = 'https://randomuser.me/api/?results=150'

export default {
  searchEmployees: function() {
    return axios.get(URL);
  }
};

