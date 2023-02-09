import { RouterProvider } from 'react-router';
import './App.css';
import { routes } from './routes/ReactRouter/ReactRouter';

function App() {
  return (
    <div className="App">
      <RouterProvider router = {routes}></RouterProvider>
    </div>
  );
}

export default App;
