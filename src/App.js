import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import KommunicateChat from './components/chat/Chat';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
      {/* <KommunicateChat/> */}
    </div>
  );
}

export default App;
