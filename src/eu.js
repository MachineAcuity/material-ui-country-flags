import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Eu = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <g id="d">
      <g id="b">
        <path d="M0-1l-.31.95.477.156z" id="a"/>
        <use transform="scale(-1 1)" />
      </g>
      <g id="c">
        <use transform="rotate(72)" />
        <use transform="rotate(144)" />
      </g>
      <use transform="scale(-1 1)" />
    </g>
  </defs>
  <path d="M0 0h640v480H0z"/>
  <g transform="translate(320 242.263) scale(23.7037)">
    <use height="100%" width="100%"  y="-6"/>
    <use height="100%" width="100%"  y="6"/>
    <g id="e">
      <use height="100%" width="100%"  x="-6"/>
      <use height="100%" width="100%"  transform="rotate(-144 -2.344 -2.11)"/>
      <use height="100%" width="100%"  transform="rotate(144 -2.11 -2.344)"/>
      <use height="100%" width="100%"  transform="rotate(72 -4.663 -2.076)"/>
      <use height="100%" width="100%"  transform="rotate(72 -5.076 .534)"/>
    </g>
    <use height="100%" width="100%"  transform="scale(-1 1)"/>
  </g>

  </SvgIcon>
);
Eu = pure(Eu);
Eu.displayName = 'Eu';

export default Eu;
