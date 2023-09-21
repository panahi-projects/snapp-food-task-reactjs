import { useSelector } from 'react-redux';
import { RootState } from './store';
import Navbar from './components/Navbar';
import CardsList from './components/CardsList';

function App() {
  const colorMode = useSelector((state: RootState) => {
    const { theme } = state.theme;
    return theme;
  });
  return (
    <div id="app" className={colorMode}>
      <CardsList />
    </div>
  );
}

export default App;
