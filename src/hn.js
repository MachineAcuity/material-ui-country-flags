import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Hn = (props) => (
  <SvgIcon {...props}>
    
  <path d="M-85.333 0h682.667v512H-85.333z"/>
  <path d="M-85.333 170.667h682.667v170.667H-85.333z"/>
  <g id="c" transform="translate(256 256) scale(28.44444)">
    <g id="b">
      <path id="a" d="M-.31-.05l.477.156L0-1z"/>
      <use height="100%" width="100%"  transform="scale(-1 1)"/>
    </g>
    <use height="100%" width="100%"  transform="rotate(72)"/>
    <use height="100%" width="100%"  transform="rotate(-72)"/>
    <use height="100%" width="100%"  transform="rotate(144)"/>
    <use height="100%" width="100%"  transform="rotate(-144)"/>
  </g>
  <use height="100%" width="100%"  transform="translate(142.222 -45.51)"/>
  <use height="100%" width="100%"  transform="translate(142.222 39.822)"/>
  <use height="100%" width="100%"  transform="translate(-142.222 -45.51)"/>
  <use height="100%" width="100%"  transform="translate(-142.222 39.822)"/>

  </SvgIcon>
);
Hn = pure(Hn);
Hn.displayName = 'Hn';

export default Hn;
