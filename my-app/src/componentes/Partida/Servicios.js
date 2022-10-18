import axios from "axios";
const baseURL = "http://127.0.0.1:8000";

async function servicioPartida(postData) {
  await axios
    .post(baseURL + "/match/add", postData)
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (error) {
      if (error.response.status === 409) {
        window.alert("Revise los campos e intente de nuevo");
      }
      if (error.response) {
        console.log(`Returned with error: ${error.response.status}`);
      }
    });
}

/*
//name, max_players, password, n_matchs, n_rounds_match;
async function servicioListarPartida() {
  await axios
    .get(baseURL + "/matchs")
    .then((response) => {
      const respuesta = response.data;
      //      console.log(respuesta);
      let lista_partidas = [];
      //      console.log(lista_partidas);
      respuesta.map(function (element) {
        lista_partidas.push(`${element.name}`);
      });
      //      console.log(lista_partidas);
      return lista_partidas[0];
    })
    .catch((e) => {
      console.log(e);
    });
}
*/
export const partidas = { servicioPartida };
