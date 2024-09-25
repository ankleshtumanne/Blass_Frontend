// src/pages/PublishedPage.js
import React, { useEffect, useState } from 'react';

export const PublishedPage = () => {
  const [publishedComponents, setPublishedComponents] = useState([]);

  useEffect(() => {
    const savedLayout = JSON.parse(localStorage.getItem('publishedLayout'));
    setPublishedComponents(savedLayout || []);
  }, []);

  return (
    <div>
      <h1>Published Layout</h1>
      <div>
        {publishedComponents.map((component, index) => (
          <div key={index} style={{ border: '1px solid #000', padding: '10px', marginBottom: '10px' }}>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};
