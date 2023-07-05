export const HttpClient = ({ baseUrl }) => {
    const get = (url: any) => fetch(baseUrl + url, {
        method: 'GET',
    }).then(res => res.json());

    return {
        get,
    }
}