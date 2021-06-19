(function(){
const source = document.querySelector('#source');
const root = document.querySelector('.root');
const errorMessageElement = document.querySelector('.error-message');
const main = document.querySelector('.main');
let allnews;

function handleLoader(status = false) {
  if (status) {
    root.innerHTML = `<div class="loader"></div>`;
  }
}

function handleError(message = 'Something went wrong ❌') {
  main.style.display = 'none';
  errorMessageElement.innerText = message;
}

function createUI(news) {
  root.innerHTML = '';
  news.forEach((eachNews) => {
    let innerHtml = `
          <div class="img-container flex-40">
              <img class="full-width" src="${eachNews.imageUrl}" alt="">
          </div>
          <div class="flex-56">
              <h3>${eachNews.newsSite}</h3>
              <p>${eachNews.title}</p>
              <a href="${eachNews.url}" target='_blank'>Read More</a>
          </div>`;
    let article = document.createElement('article');
    article.classList.add('flex', 'relative');
    article.innerHTML = innerHtml;
    root.append(article);
  });
}

function init() {
  handleLoader(true);
  fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`response is not ok❌`);
      }
      return res.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        handleLoader(false);
        allnews = data;
        createUI(data);
      }
    })
    .catch((error) => {
      handleError(error);
    }).finally(handleLoader)
}

source.addEventListener('change', (event) => {
  if (event.target.value === 'default') {
    createUI(allnews);
  } else {
    let filteredNews = allnews.filter((ele) => {
      return (
        ele.newsSite.toLowerCase().split(' ').join('') === event.target.value
      );
    });
    createUI(filteredNews);
  }
});

if (navigator.onLine) {
  init();
} else {
  handleError('Check your internet connection ❌');
}

}())