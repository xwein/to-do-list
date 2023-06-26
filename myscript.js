const taskList = document.getElementById('task-list');

taskList.addEventListener('click', (event) => {
  const listItem = event.target.closest('li');
  if (listItem) {
    listItem.classList.toggle('finished');
    updateTaskCount();
  }
});

function updateTaskCount() {
  const taskNumber = document.getElementById('active-task');
  const activeTasks = taskList.querySelectorAll('li:not(.finished)');
  taskNumber.innerHTML = activeTasks.length;
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    addTask();
  }
}

const input = document.getElementById('input');

function addTask() {
  if (input.value === '') {
    // Handle the case when the input value is empty
  } else {
    const newTask = document.createElement('li');
    const crossIcon = document.createElement('img');
    crossIcon.src = 'icon-cross.svg';
    crossIcon.classList.toggle('cross-icon');
    newTask.innerHTML = input.value;
    newTask.appendChild(crossIcon);
    taskList.appendChild(newTask);
    input.value = '';
    updateTaskCount();
    crossIcon.addEventListener('click', (event) => {
      const li = event.target.closest('li');
      li.remove();
      updateTaskCount();
    });
  }
}



const activeTask = document.getElementById('active');
const allTask = document.getElementById('all');
const completedTask = document.getElementById('completed')

activeTask.addEventListener('click', () => {
  const finished = document.querySelectorAll('.finished');
  const unfinished = document.querySelectorAll('li:not(.finished)');
  activeTask.style.color = 'hsl(220, 98%, 61%)'
  allTask.style.color = 'hsl(233, 14%, 35%)'
  completedTask.style.color = 'hsl(233, 14%, 35%)'
  finished.forEach((item) => {
    item.style.display = "none";
  });
  unfinished.forEach((item) => {
    item.style.display = "flex";
  });
  updateTaskCount()
});

allTask.addEventListener('click', () => {
  const unfinished = document.querySelectorAll('li:not(.finished)');
  const finished = document.querySelectorAll('.finished');
  activeTask.style.color = 'hsl(233, 14%, 35%)'
  allTask.style.color = 'hsl(220, 98%, 61%)'
  completedTask.style.color = 'hsl(233, 14%, 35%)'
  finished.forEach((item) => {
    item.style.display = "flex";
  });
  unfinished.forEach((item) => {
    item.style.display = "flex";
  });
  updateTaskCount()
});


completedTask.addEventListener('click', () => {
  const unfinished = document.querySelectorAll('li:not(.finished)');
  const finished = document.querySelectorAll('.finished');
  activeTask.style.color = 'hsl(233, 14%, 35%)'
  allTask.style.color = 'hsl(233, 14%, 35%)'
  completedTask.style.color = 'hsl(220, 98%, 61%)'
  unfinished.forEach((item) => {
    item.style.display = "none";
  });
  finished.forEach((item) => {
    item.style.display = "flex";
  });
  updateTaskCount()
});

const clear = document.getElementById('clear-function');
clear.addEventListener('click', () => {
  const finished = document.querySelectorAll('.finished');
  finished.forEach(element => element.remove());
});

function changeTheme() {
  const navElement = document.querySelector('.nav');
  navElement.style.backgroundImage = 'url("bg-desktop-light.jpg")';
  const bodyElement = document.querySelector('body');
  bodyElement.style.backgroundColor = 'hsl(0, 0%, 98%)';
  const inputElement = document.querySelector('.input-todo');
  inputElement.style.backgroundColor = 'hsl(236, 33%, 92%'


}



