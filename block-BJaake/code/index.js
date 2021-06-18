const source = document.querySelector('#source');
const root = document.querySelector('.root');

source.addEventListener('change', (event) => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
    .then((res) => res.json())
    .then(arr => arr.filter(ele => {
        return ele.newsSite.toLowerCase().split(" ").join("") === event.target.value;
    })).then(createUI)
});

function createUI(news) {
    root.innerHTML =""
    news.forEach(eachNews => {
        let innerHtml = `
          <div class="img-container flex-40">
              <img class="full-width" src="${eachNews.imageUrl}" alt="">
          </div>
          <div class="flex-56">
              <h3>${eachNews.newsSite}</h3>
              <p>${eachNews.summary}</p>
              <a href="${eachNews.url}" target='_blank'>Read More</a>
          </div>`
        let article = document.createElement('article');
        article.classList.add('flex','relative');
        article.innerHTML = innerHtml;  
        root.append(article);
    })
}

fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
  .then((res) => res.json())
  .then(createUI);
