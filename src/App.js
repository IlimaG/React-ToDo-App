import './App.css';
import { ToDoListContextProvider } from './context/ToDoContext';
import ToDoPage from './pages/ToDoPage';




function App() {
  return (
    <div className="App">
      <ToDoListContextProvider>
        <ToDoPage />
      </ToDoListContextProvider>
    </div>
  );
}

export default App;
