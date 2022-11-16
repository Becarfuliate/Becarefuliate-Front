import axios from "axios";
const baseURL = "http://127.0.0.1:8000";

const defaultdataPartida = {
  name: "",
  max_players: "",
  password: "",
  n_matchs: "",
  n_rounds_matchs: ""
}

async function servicioPartida(postData) {
  await axios
    .post(baseURL + "/match/add", postData)
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (error) {
      if (error.response.status === 409) {
        alert(error.response.data.detail);
      }
      if (error.response.status === 422) {
        alert(error.response.data.detail[0].msg);
      }
      if (error.response) {
        console.log(`Returned with error: ${error.response.status}`);
      }
    });
}

function handleSubmit(dataPartida) {
  const user = JSON.parse(localStorage.getItem("user"));
  const postData = {
    name: dataPartida.name,
    max_players: dataPartida.max_players,
    min_players: 2,
    password: dataPartida.password,
    n_matchs: dataPartida.n_matchs,
    n_rounds_matchs: dataPartida.n_rounds_match,
    user_creator: user.userlogin,
    token: user.token,
  };
  servicioPartida(postData);
}

export {handleSubmit, defaultdataPartida};
