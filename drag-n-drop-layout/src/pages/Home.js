// src/pages/Home.js
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import  {DraggableComponent}  from '../components/DraggableComponent.js';
import { DroppableArea } from '../components/DroppableArea';
import { Controls } from '../components/Controls';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const Home = () => {
  const [components, setComponents] = useState([]);

  const handleDragEnd = (event) => {
    const { over } = event;
    if (over && !components.includes(event.active.id)) {
      setComponents((prev) => [...prev, event.active.id]);
    }
  };

  const saveLayout = async () => {
    const layout = { components };
    await setDoc(doc(db, 'layouts', 'user-layout'), layout);
    alert('Layout saved!');
  };

  const loadLayout = async () => {
    const docSnap = await getDoc(doc(db, 'layouts', 'user-layout'));
    if (docSnap.exists()) {
      setComponents(docSnap.data().components);
    } else {
      alert('No saved layout found');
    }
  };

  const publishLayout = () => {
    window.localStorage.setItem('publishedLayout', JSON.stringify(components));
    window.open('/published', '_blank');
  };

  return (
    <div>
      <h1>Drag-and-Drop Page Builder</h1>
      <DndContext onDragEnd={handleDragEnd}>
        <DroppableArea id="droppable-area">
          {components.map((id) => (
            <DraggableComponent key={id} id={id}>
              {id}
            </DraggableComponent>
          ))}
        </DroppableArea>
        <Controls saveLayout={saveLayout} loadLayout={loadLayout} publishLayout={publishLayout} />
      </DndContext>
    </div>
  );
};
