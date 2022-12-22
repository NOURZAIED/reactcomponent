import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from './profile/profilphoto';
import Name from './profile/fullname';
import Adresse from './profile/adresse';
function App() {
  return (
    <div className="App">
      <Photo/>
      <Name/>
      <Adresse/>
    </div>
  );
}

export default App;
