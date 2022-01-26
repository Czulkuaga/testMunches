import { Link } from 'react-router-dom';
import './App.css';
import logo from './assets/public/logo.svg';

function App() {
  return (
    <div className='h-screen'>
      <header className='bg-green-100 flex justify-center h-screen'>
        <div className='container'>
          <div className='grid grid-row-1'>
            <div className='grid grid-col-1'>
              <div className='flex justify-center items-center flex-col my-16'>
                <img src={logo} className="w-3/6" alt="logo" />
                <p className='text-2xl text-bold mt-4'>
                  Test application
                </p>
              </div>
            </div>
            <div className='grid grid-col-1'>
              <div className='w-100'>
                <div className='grid grid-rows-1'>
                  <div className='grid grid-cols-1'>
                    <div className='flex justify-center'>
                      <Link to="/signin">
                      <button className='w-36 text-lg p-2 border-solid border-2 border-blue-900 rounded-md text-blue-600 bg-blue-400 hover:bg-blue-900 hover:text-blue-100 transition'>SignIn</button>                   
                      </Link>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
