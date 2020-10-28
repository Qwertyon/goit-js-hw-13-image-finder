import renderllery from './search-image.js';

const fetchImage = (query, page = 1) => {
  const apiKey = '18890167-b52f383349df3e0826420c3eb';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
  fetch(url)
    .then(responce => responce.json())
    .then(data => {
      renderllery(data);
    })
    .catch(error => console.log(error));
};

export default fetchImage;
