import './App.css';
import './UseReducer_hook';
import UseReducerHook from './UseReducer_hook';
import UseMemo from './UseMemo_hook';
import UseCallback from './UseCallback_hook';

function App() {
  return (
    <div className="App">
      <h1>State management</h1>
      <UseReducerHook />
      <UseMemo />
      <UseCallback />
    </div>
  );
}

export default App;