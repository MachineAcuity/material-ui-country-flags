import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cm = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h213.333v480H0z"/>
  <path d="M213.333 0h213.333v480H213.333z"/>
  <path d="M426.667 0H640v480H426.667z"/>
  <g transform="translate(320 240) scale(7.1111)">
    <g id="b">
      <path id="a" d="M0-8L-2.472-.392 1.332.845z"/>
      <use height="100%" width="100%"  transform="scale(-1 1)"/>
    </g>
    <use height="100%" width="100%"  transform="rotate(72)"/>
    <use height="100%" width="100%"  transform="rotate(144)"/>
    <use height="100%" width="100%"  transform="rotate(-144)"/>
    <use height="100%" width="100%"  transform="rotate(-72)"/>
  </g>

  </SvgIcon>
);
Cm = pure(Cm);
Cm.displayName = 'Cm';

export default Cm;
