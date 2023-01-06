import './NotFoundPage404.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const NotFoundPage404 = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const eyeLeft = useRef();


  function calcAngle(element) {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1 + -18;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });

  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="page404">
      <div className="text404">
        <div className="contenedor1">
          <h1>404 NOT PAGE FOUND</h1>
        </div>
        <div className="contenedor2">
          <h2>Not even the Eye of Uatu sees your request...</h2>
        </div>
        <div className="contenedor3">
          <h4>
            Check that you type the address corrently, go back to your previous<br></br>page or try
            usin our site search to find something specific
          </h4>
        </div>
      </div>

      <div className="image404">
        <div className="eye_container">
          <div
            ref={eyeLeft}
            style={{
              transform: `rotate(${calcAngle(eyeLeft)}deg)`
            }}
            className="eye"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage404;
