import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './DragDropEditor.css';

const DraggableElement = ({ type }) => {
    const [, drag] = useDrag(() => ({ type }));
    return <div ref={drag} className="draggable">{type}</div>;
};

const DroppableArea = ({ onDrop }) => {
    const [, drop] = useDrop({
        accept: 'element',
        drop: (item) => onDrop(item),
    });

    return <div ref={drop} className="droppable-area">Drop Here</div>;
};

const DragDropEditor = () => {
    const [elements, setElements] = useState([]);

    const handleDrop = (type) => {
        setElements((prev) => [...prev, type]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="drag-drop-editor">
                <div className="palette">
                    <DraggableElement type="Header" />
                    <DraggableElement type="Footer" />
                    <DraggableElement type="Button" />
                </div>
                <DroppableArea onDrop={(item) => handleDrop(item.type)} />
                <div className="preview">
                    {elements.map((el, i) => (
                        <div key={i} className="preview-item">{el}</div>
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

export default DragDropEditor;
