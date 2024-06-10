import React, { useState, useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Navbar1 from '../../navbar.js';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './draw.css';

function Canvas() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#EC9418');
  const [backColor, setBackColor] = useState('#E5FFF7');
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [eraseWidth, setEraseWidth] = useState(35);

  const penHandler = () => canvasRef.current?.eraseMode(false);
  const eraserHandler = () => canvasRef.current?.eraseMode(true);
  const undoHandler = () => canvasRef.current?.undo();
  const redoHandler = () => canvasRef.current?.redo();
  const resetCanvasHandler = () => canvasRef.current?.resetCanvas();
  
  const penWidthHandler = (e) => {
    setStrokeWidth(e.target.value);
    penHandler();
  };

  const eraseWidthHandler = (e) => {
    setEraseWidth(e.target.value);
    eraserHandler();
  };

  return (
    <div>
      <Navbar1 />
      <div className="Navbar">
        <Navbar expand="lg">
          <div className="media">
            <Button className="btn btn-outline-success" onClick={penHandler}>✏️ Pen</Button>
            <Button className="btn btn-outline-cyan" onClick={eraserHandler}>Eraser</Button>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="text-center p-3">
                Board Color <input className="m-2" type="color" value={backColor} onChange={(e) => setBackColor(e.target.value)} />
                Pen Color <input type="color" className="m-2" value={color} onChange={(e) => setColor(e.target.value)} />
                <Button className="btn-success" onClick={penHandler}>Pen</Button>
                <input type="range" min="1" max="50" value={strokeWidth} onChange={penWidthHandler} />
                <Button className="btn-cyan" onClick={eraserHandler}>Eraser</Button>
                <input type="range" min="1" max="80" value={eraseWidth} onChange={eraseWidthHandler} />
                <Button className="btn-warning" onClick={undoHandler}>Undo</Button>
                <Button className="btn-success" onClick={redoHandler}>Redo</Button>
                <Button variant="btn-danger" onClick={resetCanvasHandler}>Reset</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <ReactSketchCanvas
        ref={canvasRef}
        width="100em"
        height="40rem"
        strokeWidth={strokeWidth}
        strokeColor={color}
        canvasColor={backColor}
        eraserWidth={eraseWidth}
      />
    </div>
  );
}

export default Canvas;
