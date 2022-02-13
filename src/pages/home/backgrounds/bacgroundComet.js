import React from 'react';
import _ from 'lodash';


const getRandomNumberMinMax = (min, max) => {
  return parseInt(Math.random() * 100 * min) % max + min;
};

export default function BackgroundComet(props) {
  const {url_api} = props;
  const comets = [
    {
      id: 1,
      img: _.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5,
    },
    {
      id: 2,
      img: _.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5,
    },
    {
      id: 3,
      img: _.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5,
    },
    {
      id: 4,
      img: _.isEmpty(url_api) ? '' : url_api.image.homeBackground.star4,
    },
    {
      id: 5,
      img: _.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5,
    },
    {
      id: 6,
      img: _.isEmpty(url_api) ? '' : url_api.image.homeBackground.star5,
    },
  ];
  return (
    <div style={{position: 'relative'}}>
      {
        comets.map((comet, index) => {
          const cometStyles = {
            position: 'absolute',
            top: -10,
            marginLeft: parseInt(window.innerWidth * (15 / 100) * (index + 1)) - window.innerWidth * 5 / 100,
            width: getRandomNumberMinMax(window.innerWidth * 1 / 100, window.innerWidth * 2 / 100),
            zIndex: getRandomNumberMinMax(0, 6),
            opacity: Math.random(0.95, 1),
          };

          return (
            <img key={comet.id} className='background-comet' src={comet.img} style={cometStyles} alt="" />
          );
        },
        )
      }
    </div>
  );
}
