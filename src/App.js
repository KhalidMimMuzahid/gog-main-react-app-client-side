import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
// import Chat from './components/chat/Chat';
// import ChatFunctional from './components/chatFunctional/ChatFunctional';


function App() {
  return (
    <>
      <div>
        {/* <Chat/> */}
        <RouterProvider router={router}></RouterProvider>
        {/* <ChatFunctional/> */}
        <Toaster />
      </div>
    </>
  );
}

export default App;
