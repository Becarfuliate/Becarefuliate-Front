import API from "./api";

const getToken = () => {
    let storage = localStorage.getItem('user');
    if (storage) {
      let user = JSON.parse(localStorage.getItem('user'));
      return "token=" + user.token;
    } else {
      return "token=";
    }
};

const handleresponse = (code, response) => {
    let listRobots = [];
    switch (code) {
        case 200:
            listRobots = response;
            break;
        case 500:
            alert(response.detail);
            break;
        default:
            alert("Error No Contemplado, " + response)
            break;
    }
    return listRobots;
}

const serviceListRobots = async () => {
    let tkn = getToken();
    return await API.get(`/robots?${tkn}`)
    .then(response => handleresponse(response.status, response.data))
    .catch((error) => handleresponse(error.response.status, error.response.data))
    .then(listRobots => listRobots)
};

const exportServiceListarRobots = {
    serviceListRobots
};

export default exportServiceListarRobots;