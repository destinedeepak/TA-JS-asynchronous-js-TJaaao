function fetch(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => res(JSON.parse(xhr.response));
    xhr.onerror = () => rej('Something went wrong');
    xhr.send();
  });
}

fetch('https://api.github.com/users/gaearon')
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => {
    console.log(error);
  });
