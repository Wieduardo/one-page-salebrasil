import { GlobalProvider } from './providers/global';
import RoutesMain from './routes';
import Global from './styles/global';

function App() {
  return (
    <>
        <GlobalProvider>
            <Global/>
            <RoutesMain/>
        </GlobalProvider>
    </>
  );
}

export default App;