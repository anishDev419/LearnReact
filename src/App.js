import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import { useState } from 'react';

function MyButton(){
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

  return(
    <button onClick={handleClick} >
      Clicked {count} times.
    </button>
  )
}

function AdminPanel(){
  return (
    <p> Admin Panel </p>
  )
}

function LoginForm(){
  return (
    <p> Login Form </p>
  )
}

const isLoggedIn = true;
let content;

const products = [
  {id: 1, name: 'orange', qty: 2, isFruit: true},
  {id: 2, name: 'onion', qty: 9, isFruit: false},
  {id: 3, name: 'apple', qty: 3, isFruit: true},
]

const listItems = products.map(product => (
  <li 
    key={product.id}
    style={{
      color: product.isFruit ? 'green': 'red'
    }}
  > {product.name} </li>
))

function App() {
  return (
    <div className="App">
      <h1> Welcome to my App! </h1>
      <MyButton />
      <MyButton />
      <Profile />

      {
        isLoggedIn ? (
          <AdminPanel />
        ) : (
          <LoginForm />
        )
      }

      <ul>{listItems}</ul>

    </div>
  );
}

export default App;
