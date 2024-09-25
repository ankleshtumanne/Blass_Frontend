// src/components/DroppableArea.js
import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export const DroppableArea = ({ children, id, onDrop }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? 'lightgreen' : 'white',
    minHeight: '300px',
    border: '1px solid black',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
