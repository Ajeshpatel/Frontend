import Home from "./component/Home"
// import './App.css'

function App() {
  let name = "Ajay"
  let age = 33;
  return (
    <>
      <h1>Welcome</h1>
      <Home name = {name} age = {age}/>
    </>
  )
}

export default App
