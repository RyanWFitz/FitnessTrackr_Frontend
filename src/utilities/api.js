export const BASE_URL = "http://localhost:3500/api";
//export const BASE_URL = " https://fitnesstrac-kr.herokuapp.com/api";
//should be the port that we run our sever on??

export const apiCall = async (path, method, token, body) => {
  console.log("in apiCall");
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
  return response.token;
};