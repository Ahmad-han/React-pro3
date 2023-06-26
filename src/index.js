import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



/* 
1. Замена всех отрицательных чисел

    Есть массив из чисел `[2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]`.
    Напиши код, который все отрицательные значения элементов массива заменит на нолик.
    
    В итоге должно получиться: `[2, 0, 0.1, 0, 0, 0, 0, 0, 0.3, 0.003, 2]`.

    Решение:

    let arr = [2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]

    arr.map((num) => {
     if(num < 0) {
      return 0
     } else {
      return num 
     }
    })






2. Избавляемся от близнецов

   Дан массив из объектов:
    const elements = [ 
    { a: 2, b: 12 },
    { a: 0.1, b: 0.1 }, 
    { a: 0, b: 1 }, 
    { a: 100, b: 1000 },
    { a: 4, b: 4 }` 
   ];
   
Обработай массив так, чтобы в итоге остались только те элементы, у которых значения свойств `a` и `b` не совпадают.

Решение:

elements.filter((item) => {
 return item.a !== item.b
})



3. Поиск близнеца

Напиши код, который в массиве из предыдущего задания найдет какого-нибудь близнеца (объекта, у которого значения обеих свойств равны) и вернет сумму этих значений.


Решение:

elements.find((item) => {
  if(item.a === item.b) {
    return item.a + item.b
  } else {
    return false
  }
})
*/