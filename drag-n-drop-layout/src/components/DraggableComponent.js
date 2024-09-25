// src/components/DraggableComponent.js
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export const DraggableComponent = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    border: '1px solid #000',
    padding: '10px',
    margin: '10px',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};
