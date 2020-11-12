import qs from 'qs'
import axios from 'axios'

const url = "https://dmessenger.pro/api/v1"

const Login = async (username, password) => {
  const data = {
    'email': username, 
    'password': password
  }
  const headers = {
    'Content-Type': 'application/json'
  }

  const result = await axios.post( url + "/auth/jwt/login", data, headers )
    .then( res => {
      //console.log("__res__", res)
      if (res.data && res.data.detail && res.data.detail.message)
        return res.data.detail.message

      return res
    })
    .catch( err => {
      //console.log("__err__", err, "______", err.response)
      if (err.response && err.response.data && err.response.data.detail && err.response.data.detail[0])
        return err.response.data.detail[0].msg
      if (err.response && err.response.status)
        return "Backend return code " + err.response.status +" :: "+ err.response.statusText
      
      return JSON.stringify(err).substr(2, 48)
    })

  if (result && result.data && result.data.token) {
    return {
      token: result.data.token
    }
  } else {
    return result
  }
}

const Registration = async (username, password) => {
  const data = {
    'email': username,
    'password': password,
  }
  const headers = {
    'Content-Type': 'application/json'
  }

  const result = await axios.post( url + "/auth/register", data, headers )
    .then( res => {
      // console.log("__res__", res)
      return res
    })
    .catch( err => {
      // console.log("__err__", err)
      if (err.response && err.response.data && err.response.data.detail && err.response.data.detail[0])
        return err.response.data.detail[0].msg
      if (err.response && err.response.status)
        return "Backend return code " + err.response.status +" :: "+ err.response.statusText
      
      return JSON.stringify(err).substr(2, 48)
    })

  if (result && result.data && result.data.id) {
    return {
      id: result.data.id
    }
  } else {
    return result
  }
}

export {
  Login,
  Registration
}
