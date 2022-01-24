
import React from 'react';
const getRandomNumberMinMax = (min, max) => {
  return parseInt(Math.random() * 10 * max) % max + min;
};
const starStyles = {
  position: 'absolute',
  zIndex: 2,
  opacity: 1,
};
export default function Stars(props) {
  const {imgUrl} = props;
  const [marginLeft, setMarginLeft] = React.useState(getRandomNumberMinMax(1, window.innerWidth / 2));
  const [marginTop, setMarginTop] = React.useState(0);
  const [startWidthState, setStateWidth] = React.useState(getRandomNumberMinMax(window.innerWidth * 0.6 / 100, window.innerWidth * 1.2 / 100));
  const [isFirst, setIsFirst] = React.useState(true);
  const speed = React.useRef(2);
  const end = React.useRef(1);
  const moveLapse = React.useRef(null);
  const endLapse = React.useRef(null);
  const move = () => {
    setMarginLeft((prev) => prev + speed.current);
    setMarginTop((prev) => prev + speed.current);
  };
  const inEndState = () => {
    clearInterval(moveLapse.current);
    endLapse.current = setInterval(() => {
      setStateWidth((prev) => prev - 2);
      setMarginTop((prev) => prev + speed.current);
      setMarginLeft((prev) => prev + speed.current);
    }, 28);
  };
  React.useLayoutEffect(() => {
    if (startWidthState < 0) {
      clearInterval(endLapse.current);
      speed.current = 1;
      end.current = 0;
      setMarginTop(getRandomNumberMinMax(1, window.innerHeight / 4));
      setMarginLeft(getRandomNumberMinMax(1, window.innerWidth));
      setStateWidth(getRandomNumberMinMax(window.innerWidth * 0.6 / 100, window.innerWidth * 1.2 / 100));
      setIsFirst(true);
    }
  });
  React.useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      moveLapse.current = setInterval(() => {
        speed.current += 0.1;
        move();
        end.current += speed.current;
        if (end.current >= window.innerHeight / 5) {
          inEndState();
        }
      }, 28);
    }
  });
  return (
    <div className='my_star-all' style={{
      ...starStyles,
      marginLeft: marginLeft,
      marginTop: marginTop,
      width: startWidthState,
    }}>
      <div className='my-star'>
        <img
          src={imgUrl}
          style={{
          }}
          alt="" />
      </div>
    </div>
  );
}
