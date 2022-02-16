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
  const { imgUrl } = props;
  const [marginLeft, setMarginLeft] = React.useState(getRandomNumberMinMax(1, window.innerWidth / 2));
  const [marginTop, setMarginTop] = React.useState(0);
  const [startWidthState, setStateWidth] = React.useState(getRandomNumberMinMax(window.innerWidth * 0.6 / 100, window.innerWidth * 1.2 / 100));
  const [isFirst, setIsFirst] = React.useState(true);

  const speedRef = React.useRef(2);
  const endRef = React.useRef(1);
  const moveLapseRef = React.useRef(null);
  const endLapseRef = React.useRef(null);

  const { imgUrl } = props;

  React.useLayoutEffect(() => {
    if (startWidth < 0) {
      clearInterval(endLapseRef.current);
      speedRef.current = 1;
      endRef.current = 0;
      setMarginTop(getRandomNumberMinMax(1, window.innerHeight / 4));
      setMarginLeft(getRandomNumberMinMax(1, window.innerWidth));
      setStateWidth(
        getRandomNumberMinMax(
          (window.innerWidth * 0.6) / 100,
          (window.innerWidth * 1.2) / 100,
        ),
      );
      setIsFirst(true);
    }
  }, [startWidth]);

  React.useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      moveLapseRef.current = setInterval(() => {
        speedRef.current += 0.1;
        setMarginLeft((prev) => prev + speedRef.current);
        setMarginTop((prev) => prev + speedRef.current);
        endRef.current += speedRef.current;
        if (endRef.current >= window.innerHeight / 5) {
          clearInterval(moveLapseRef.current);
          moveLapseRef.current = setInterval(() => {
            setStateWidth((prev) => prev - 2);
            setMarginTop((prev) => prev + speedRef.current);
            setMarginLeft((prev) => prev + speedRef.current);
          }, 30);
        }
      }, 30);
    }
  }, [isFirst, speedRef]);

  return (
    <div
      className="my_star-all"
      style={{
        ...starStyles,
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: startWidth,
      }}
    >
      <div className="my-star">
        <img src={imgUrl} style={{}} alt="" />
      </div>
    </div>
  );
}
