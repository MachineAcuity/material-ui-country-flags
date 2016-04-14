import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let In = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v160H0z"/>
  <path d="M0 160h640v160H0z"/>
  <path d="M0 320h640v160H0z"/>
  <g transform="matrix(3.2 0 0 3.2 320 240)">
    <circle r="20"/>
    <circle r="17.5"/>
    <circle r="3.5"/>
    <g id="d">
      <g id="c">
        <g id="b">
          <g id="a">
            <circle r=".875" transform="rotate(7.5 -8.75 133.5)"/>
            <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z"/>
          </g>
          <use height="100%" width="100%"  transform="rotate(15)"/>
        </g>
        <use height="100%" width="100%"  transform="rotate(30)"/>
      </g>
      <use height="100%" width="100%"  transform="rotate(60)"/>
    </g>
    <use height="100%" width="100%"  transform="rotate(120)"/>
    <use height="100%" width="100%"  transform="rotate(-120)"/>
  </g>

  </SvgIcon>
);
In = pure(In);
In.displayName = 'In';

export default In;