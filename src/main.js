import './styles/style.css';

import { nanoid } from 'nanoid';

const allToDos = [
  {
    id: nanoid(5),
    task: 'Comprar leche 🥛',
    isCompleted: false
  },
  {
    id: nanoid(5),
    task: 'Escribir código 💻',
    isCompleted: true
  },
  {
    id: nanoid(5),
    task: 'Hacer la compra 🛒',
    isCompleted: false
  }
];

// Cazo la sección donde añadiré las tareas
const toDoList = document.querySelector('.toDo-list');


// Imprimir los todos al cargar la página
printToDos();

// Rellenar el número de items que faltan por completar
countItemsLeft();



function printToDos () {
  // Borrar toda la lista de tareas
  toDoList.innerHTML = '';

  // Recorro cada tarea de la lista de tareas
  for (const toDo of allToDos) {
  
    // Creo un nuevo "article" por cada uno
    const article = document.createElement('article');
  
    // Le pongo las clases que necesita el article
    article.className = 'bg-white py-2 px-4 first:rounded-t flex items-center gap-3  border-b border-b-gray-300';
  
    // Crear una variable para saber si el input estará checked o no
    const isChecked = toDo.isCompleted ? 'checked' : '';
  
    // Crear una variable para saber si el check icon estará visible o no
    const isCheckIconVisible = toDo.isCompleted ? '' : 'hidden';
  
    // Le pongo lo de dentro
    article.innerHTML = `
    <input aria-label="Complete to-do checkbox" id="${toDo.id}" class="hidden peer" type="checkbox" ${isChecked}>
    <label for="${toDo.id}" class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-check-gradient">
      <svg class="${isCheckIconVisible} check-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
    </label>
    <span class="peer-checked:line-through peer-checked:opacity-30">${toDo.task}</span>
    <button aria-label="Delete button" type="button" class="ml-auto text-gray-600 cursor-pointer hover:scale-110 hover:rotate-90 transition-transform">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
      </svg>
    </button>
    `;

    
    //* Justo aquí debajo, el article YA TIENE DENTRO el input y el Button que completan y borran el toDo.
    const isCompletedCheckbox = article.querySelector('input');
    isCompletedCheckbox.addEventListener('change', () => {
      // Aquí YO TENGO EL OBJETO DEL TODO ENTERO, así que puedo cambiar su propiedad isCompleted a true o false
      toDo.isCompleted = !toDo.isCompleted;

      
      printToDos();
      countItemsLeft();

      console.log(allToDos);
    });


    //* Ahora caza el boton de borrar

    //* Le escuchas el click

    //* Buscas dentro del array cual es el que quiero borrar (con el id)

    //* Haces un splice para borrarlo del array

    //* Reimprimes la lista de todos

    //* Recalculas el número de items que faltan por completar
  
    // Lo meto en el DOM dentro de la sección
    toDoList.append(article);  
  }
}

function countItemsLeft () {
  const itemsLeftOutput = document.querySelector('.items-left-output');
  
  let itemsLeftCount = 0;
  for (const toDo of allToDos) {
    if (toDo.isCompleted === false) {
      itemsLeftCount++;
    }
  }
  
  itemsLeftOutput.innerText = itemsLeftCount;
}



// Cazamos el formulario

// Escuchamos el evento submir

// Paramos el comportamiento por defecto del formulario

// Cogemos el valor del usuario

// Creamos un nuevo TODO que meteremos en el array

//! Primero vacía el section de los todos
// toDoList.innerHTML = '';

// Reimprimimos todos los todos








