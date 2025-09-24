import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <h1>Tasky</h1>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away" />
      <Task title="Laundry" deadline="Tomorrow" />
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
