import React from 'react';
import _ from 'lodash';

function SocialLink(props) {
  const {urlApi} = props;
  const elementLinks = [
    {
      id: 1,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.social.twitter,
      href: 'https://twitter.com/eluverse',
    },
    {
      id: 2,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.social.facebook,
      href: 'https://www.facebook.com/EluVerse/',
    },
    {
      id: 3,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.social.discord,
      href: 'https://discord.io/EluVerse',
    },
    {
      id: 4,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.social.insta,
      href: 'https://www.instagram.com/eluverse/',
    },
    {
      id: 5,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.social.tele,
      href: 'https://t.me/eluverse',
    },
    {
      id: 6,
      img: _.isEmpty(urlApi) ? '' : urlApi.image.social.opensea,
      href: 'https://opensea.io/eluverse',
    },
  ];
  return (
    <div className="playelu__link">
      {elementLinks.map((elementLink) => (
        <div key={elementLink.id} className="playelu__link-ele">
          <a href={elementLink.href}>
            <img src={elementLink.img} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
}
export default SocialLink;
