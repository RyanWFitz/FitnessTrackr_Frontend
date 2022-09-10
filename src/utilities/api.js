export const BASE_URL = "https://arcane-basin-38571.herokuapp.com/";
//export const BASE_URL = " https://fitnesstrac-kr.herokuapp.com/api";

export const apiCall = async (path, method, token, body) => {
  
  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    console.log("options", options);
    const response = await fetch(`${BASE_URL}/${path}`, options);
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);

    if (data.error) {
      throw data.error;
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const loginOrRegister = async (path, username, password) => {
  console.log("In loginOrRegister");
  const response = await apiCall(`users/${path}`, "POST", null, {
    username,
    password,
  });
  console.log("response", response, response.token);
  return response;
};
