import React from 'react';

export default () => (
  <div onClick={() => alert('this handler was attached client side')}>
    CLICK HERE
  </div>
);
