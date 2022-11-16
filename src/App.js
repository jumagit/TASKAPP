 
import './App.css';
import Create from './components/create.js'
import Read from './components/read'; 
import Update from './components/update';  
import {
  createBrowserRouter,
  RouterProvider,  
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",    
    element: <Create />,
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);

function App() {
  return (    
    <div className="main">
      <h2 className="main-header"> React Crud Operations</h2>    
      <RouterProvider router={router} />
    </div>  
  );
}
export default App;
