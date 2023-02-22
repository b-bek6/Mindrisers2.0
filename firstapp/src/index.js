import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import shopping from './component/ShoppingList';
import TodosApi from './component/TodosApi';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <shopping/>
  <TodosApi/>
);