import axios from "axios";

// CONST VARIABLE OF 150 RANDOM USERS
const URL = 'https://randomuser.me/api/?results=150&nat=us'

/* eslint-disable-next-line */
export default{
  searchEmployees: function() {
    return axios.get(URL);
  }
}

// Throws error see below for the fix if needed:
// /* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
// export default class {}