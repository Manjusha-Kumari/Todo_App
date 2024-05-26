import logo from './logo.svg';
// import './App.css';

import Header from './components/header';
import TodoItem from './components/todoitem';
import Button from './components/button';

import './style.css';

function App() {
  return (
    <div className='todo-container'>
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Button />
    </div>
  )
};

export default App;
