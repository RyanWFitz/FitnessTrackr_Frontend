//DO WE OUT OUR LOCAL HOST HERE ?
const FITNESSTRACK = " ? "

export const apiCall = async (url, method = 'GET', token, body) => {
    let data = false;
    try {
        const response = await fetch(
            FITNESSTRACK + url,
            setToken(getFetchOptions(method, bpdy), token)
        );
        data = await response.json();

        if(data.error) {
            throw data.error;
        }
    } catch (e) {
        console.error(e);
    }
    return data;
}

const getFetchOptions = (method, body) => {
    return {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

const setToken = (body, token) => {
    return token ?
    Object.assign(body, {'Authorization': 'Bearer ${token}' }) :
    body;
}


export const fetchActivities = async(token) => {
   const data = await apiCall('/activities', 'GET', token)
   if (!data || !data.data) {
       return []
   }
   return data.data.posts || [];

}