
import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
Team
Counter


function App() {
  
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 =()=>{
    alert('button 2 clicked')
  }
  const addToFive = () =>{
    alert(num + 5);
  }

  return (
    <>
      <h3> React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert('third clicked')}}>Third</button>
      {/* vejailla */}
      <button onClick={() =>addToFive(5)}>Four</button>
     
    
    </>
  )
}

export default App
