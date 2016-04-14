import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mr = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <circle cx="320" cy="180" r="155"/>
  <path d="M243.425 11.216A150 150 0 0 0 170 140a150 150 0 0 0 150 150 150 150 0 0 0 150-150 150 150 0 0 0-73.433-128.784H243.425z"/>
  <g id="b" transform="matrix(5 0 0 5 320 140)">
    <path id="a" d="M0-12L-3.708-.587l5.706 1.854"/>
    <use height="100%" width="100%"  transform="scale(-1 1)"/>
  </g>
  <use height="100%" width="100%"  transform="rotate(72 320 140)"/>
  <use height="100%" width="100%"  transform="rotate(144 320 140)"/>
  <use height="100%" width="100%"  transform="rotate(-144 320 140)"/>
  <use height="100%" width="100%"  transform="rotate(-72 320 140)"/>

  </SvgIcon>
);
Mr = pure(Mr);
Mr.displayName = 'Mr';

export default Mr;
