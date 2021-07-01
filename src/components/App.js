import React from 'react';

import SendMessage from './SendMessage/SendMessage';
import DataLoader from './DataLoader';

/**
 * @component
 */

const App = () => {

  return (
    <div>
      <SendMessage />
      <DataLoader/>
    </div>
  )
}

export default App;