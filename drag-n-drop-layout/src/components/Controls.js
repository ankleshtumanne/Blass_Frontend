// src/components/Controls.js
import React from 'react';

export const Controls = ({ saveLayout, loadLayout, publishLayout }) => {
  return (
    <div>
      <button onClick={saveLayout}>Save Layout</button>
      <button onClick={loadLayout}>Load Layout</button>
      <button onClick={publishLayout}>Publish Layout</button>
    </div>
  );
};
