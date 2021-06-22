let root = document.querySelector('.root');
let characterRoot = document.querySelector('.character-root'); 
let close = document.querySelector('.close-btn');

function showCharacterUI(isVisible= false){
    let characterSection = document.querySelector('.character-sec');
    if(isVisible){
        characterSection.classList.remove('hide')
    }else{
        characterSection.classList.add('hide')
    }
}

function showSpinner(isLoading=false){
    let loader = document.querySelector('.loader-div');
    if(isLoading){
        loader.classList.add('loader');
    }else{
        loader.classList.remove('loader')
    }
}

function createUI(rootEle, data){
    data.forEach(ele => {
        let article = document.createElement('article');

        let h2 = document.createElement('h2');
        h2.innerText = ele.name;

        let h3 = document.createElement('h3');
        h3.innerText = ele.authors;

        let a = document.createElement('a');
        a.classList.add('btn');
        a.innerText = `Show Characters (${ele.characters.length})`;
        a.addEventListener('click', ()=>{
            showSpinner(true);
            handleClick(ele.characters);
        })

        article.append(h2,h3,a);
        rootEle.append(article);
    });
}

function handleClick(characterData, event){
    showCharacterUI(true);
    characterRoot.innerHTML = ""
    characterData.forEach(character => {
        fetch(character)
        .then(res => res.json())
        .then(data => {
            showSpinner();
            let p = document.createElement('p');
            p.innerText = data.name;
            characterRoot.append(p);
        })
    })
}

close.addEventListener('click', ()=>{
    showCharacterUI();
})

fetch('https://www.anapioficeandfire.com/api/books')

.then(res => res.json())
.then(d => {
    showSpinner();
    return createUI(root, d)
})

showCharacterUI();
showSpinner(true);
