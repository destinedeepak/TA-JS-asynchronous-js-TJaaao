const root = document.querySelector('.image-root');

document.querySelector('input').addEventListener('keyup', handleSearch);

function handleSearch(event) {
    if(event.keyCode  === 13){
        console.log(event)
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.unsplash.com/search/photos?query=${event.target.value}&client_id=S9asdkNEhL4Wto7u6QOsppAaGOEr8X5b7tqKfqS5kfo`);
        xhr.onload = function() {
            root.innerHTML = "";
            let data = JSON.parse(xhr.response);
            data.results.forEach((ele)=>{
            const img = document.createElement('img');
            img.src = ele.urls.small;
            img.classList.add('image');
            root.append(img);
            })
        }
        xhr.send();
    }
}