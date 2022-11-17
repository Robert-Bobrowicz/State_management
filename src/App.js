import './App.css';
import './UseReducer_hook';
import UseReducerHook from './UseReducer_hook';
import UseMemo from './UseMemo_hook';

function App() {
  return (
    <div className="App">
      <h1>State management</h1>
      <UseReducerHook />
      <UseMemo />
    </div>
  );
}

export default App;