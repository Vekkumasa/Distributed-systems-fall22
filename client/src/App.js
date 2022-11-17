import React from 'react';

import Products from './components/Products';
import Navibar from './components/Navibar';
import LogInModal from './modals/LoginModal';

const App = () => {

  return (
    <div>
      <Navibar />
      <LogInModal />
      <Products />
    </div>
  )
}

export default App;
