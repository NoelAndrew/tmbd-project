export const HttpClient = ({ baseUrl }: any) => {
    const get = (url: any) => fetch(baseUrl + url, {
        method: 'GET',
    }).then(res => res.json());

    return {
        get,
    }
}