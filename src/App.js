import logo from './logo.svg';
// import './App.css';

import Header from './components/header';
import TodoItem from './components/todoitem';
import Button from './components/button';

import './style.css';

function App() {
  return (
    <div className='todo-container'>
      <Header title='Todo App'/>
      <TodoItem text='Eat'/>
      <TodoItem text='Exercise'/>
      <TodoItem completed={true} text='Drink Milk'/>
      <TodoItem text='Sleep'/>
      <Button />
    </div>
  )
};

export default App;
