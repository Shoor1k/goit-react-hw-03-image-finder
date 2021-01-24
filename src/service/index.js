


export default function pixabayApi(name, page) {
    const KEY = `9129335-d520ad64a87037f5fc5f30593`;
    const BASE_URL = `https://pixabay.com/api/`

    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=${KEY}`
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(new Error(`Изображение  ${name} не найденно`));
    })
}


