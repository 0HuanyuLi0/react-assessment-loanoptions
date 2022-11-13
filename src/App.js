import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Buttons from './components/Buttons';
import TableComponent from './components/TableComponent';
import { useSelector } from 'react-redux';
function App() {

  const isDark = useSelector(state => state.darkMode)

  return (
    <div className={isDark?'dark':null}>
      <Buttons />
      <TableComponent />
    </div>
  );
}

export default App;
