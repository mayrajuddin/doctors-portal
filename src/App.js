
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w[1440px] mx-auto'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
