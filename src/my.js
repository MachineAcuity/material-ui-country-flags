import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let My = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0-.05h640v480.1H0z"/>
  <path id="a" d="M0 445.757h640v34.293H0z"/>
  <use height="100%" width="100%" transform="translate(0 -68.586)" />
  <use height="100%" width="100%" transform="translate(0 -137.17)" />
  <use height="100%" width="100%" transform="translate(0 -205.757)" />
  <use height="100%" width="100%" transform="translate(0 -274.343)" />
  <use height="100%" width="100%" transform="translate(0 -342.93)" />
  <use height="100%" width="100%" transform="translate(0 -411.514)" />
  <path d="M0-.05h480.1v274.343H0z"/>
  <path d="M197.527 34.243c-56.976 0-103.222 46.09-103.222 102.878S140.55 240 197.527 240c20.585 0 39.764-6.023 55.872-16.386a91.574 91.574 0 0 1-29.93 5.007c-50.52 0-91.525-40.866-91.525-91.22 0-50.356 41.004-91.223 91.526-91.223 11.167 0 21.862 1.994 31.757 5.647-16.474-11.096-36.334-17.58-57.7-17.58z"/>
  <path d="M368.706 190.678l-43.48-22.686 12.855 46.43L309 175.58l-9.073 47.272-8.923-47.298-29.205 38.75 13.002-46.39-43.552 22.555 32.353-36.292-49.273 1.892 45.296-19.01-45.235-19.145 49.267 2.04-32.238-36.39 43.48 22.686-12.856-46.428 29.08 38.838 9.074-47.27 8.923 47.297 29.206-38.75-13.003 46.39 43.552-22.555-32.353 36.293 49.273-1.892-45.296 19.01 45.234 19.145-49.266-2.04z"/>

  </SvgIcon>
);
My = pure(My);
My.displayName = 'My';

export default My;