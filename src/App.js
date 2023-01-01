
import './App.css';

import Header from "./components/Header";
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
