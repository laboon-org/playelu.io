import React from 'react';
import _ from 'lodash';


const getRandomNumberMinMax = (min, max) => {
  return parseInt(Math.random() * 100 * min) % max + min;
};

export default function BackgroundStar(props) {
  const { url_api } = props;
  const stars = [
    {
      id: 1,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star4,
    },
    {
      id: 2,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.startDeviated,
    },
    {
      id: 3,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 4,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.startDeviated,
    },
    {
      id: 5,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star4,
    },
    {
      id: 6,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star4,
    },
    {
      id: 7,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 8,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star4,
    },
    {
      id: 9,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 10,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 11,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.startDeviated,
    },
    {
      id: 12,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star4,
    },
    {
      id: 13,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 14,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 15,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 16,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.startDeviated,
    },
    {
      id: 17,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 18,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
    {
      id: 19,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5,
    },
  ];
  return (
    <div style={{ position: 'relative' }}>
      {
        stars.map((star, key) => {
          const starStyles = {
            position: 'absolute',
            marginTop: getRandomNumberMinMax(window.innerHeight * 1 / 100, window.innerHeight * 60 / 100),
            marginLeft: parseInt(window.innerWidth * (5 / 100) * (key + 1)) - window.innerWidth * 5 / 100,
            width: key === 3 ? window.innerWidth * 7 / 100 : getRandomNumberMinMax(window.innerWidth * 2 / 100, window.innerWidth * 6 / 100),
            zIndex: 0,
            opacity: Math.random(0.95, 1),
          };
          return (
            <img key={star.id} className='background-star' src={star.img} style={starStyles} alt="" />
          );
        },
        )
      }
    </div>
  );
}
