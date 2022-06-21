import Todo from "./components/Todo"

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full course'/>
    </div>
  );
}

export default App;
