const input = document.querySelector("input[type='text']");

const root = document.querySelector('ul');

const all = document.querySelector('.all_items');
const active = document.querySelector('.active_items');
const completed = document.querySelector('.completed_items');
const clear = document.querySelector('.clear_completed');

const baseURL = 'https://sleepy-falls-37563.herokuapp.com/api/todo';

function createUI(allTodo, rootElement) {
  root.innerHTML = '';

  allTodo.forEach((todo) => {
    let li = document.createElement('li');
    li.classList.add('li');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-id', todo._id);
    checkbox.checked = todo.isCompleted;
    checkbox.addEventListener('change', handleChecked);

    let span = document.createElement('span');
    span.innerText = todo.title;
    span.classList.add('todo-name');

    let button = document.createElement('button');
    button.innerText = 'X';
    button.classList.add('cross-btn');
    button.setAttribute('data-id', todo._id);
    button.addEventListener('click', deleteTodo);

    li.append(checkbox, span, button);
    li.addEventListener('click',handleEdit)
    rootElement.append(li);
  });
}

function addTodO(event) {
  if (event.keyCode === 13 && event.target.value) {
    let data = {
      todo: {
        title: event.target.value,
        isCompleted: false,
      },
    };
    fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    event.target.value = '';
    fetchData();
  }
}
input.addEventListener('keyup', addTodO);

function handleChecked(event) {
  let data = {
    todo: {
      isCompleted: event.target.checked,
    },
  };
  fetch(baseURL + '/' + event.target.dataset.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function deleteTodo(event) {
  fetch(baseURL + '/' + event.target.dataset.id, {
    method: 'DELETE',
  });
  fetchData();
}

function handleEdit(event){
    
}

function fetchData() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray) {
        return data.todos;
      }
    })
    .then((data) => {
      createUI(data, root);
    });
}

fetchData();
