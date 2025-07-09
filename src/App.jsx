import { Outlet } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Footer from './Component/Footer';
import Header from './Component/Header';



function App() {
  return (
 <div>
        <Provider store={appStore}>
   
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
  
    </Provider>
    </div>
      
  
  );
}

export default App;
