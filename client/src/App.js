import React, { useState } from 'react';

import Products from './components/Products';
import Navibar from './components/Navibar';
import LogInModal from './modals/LoginModal';
import Checkout from './components/Checkout';

const App = () => {
  const [checkoutPageOpen, setCheckoutPageOpen] = useState(false)
  return (
    <div>
      {!checkoutPageOpen ?
        <div>
          <Navibar checkoutPageOpen={checkoutPageOpen} setCheckoutPageOpen={setCheckoutPageOpen} />
          <LogInModal />
          <Products />
        </div>
      :
      <div>
        <Navibar checkoutPageOpen={checkoutPageOpen} setCheckoutPageOpen={setCheckoutPageOpen} />
        <LogInModal />
        <Checkout />
      </div>
      }
    </div>
  )
}

export default App;

/*
return (
    <div>
      <Navibar />
      <LogInModal />
      <Products />
    </div>
  )
*/