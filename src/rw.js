import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Rw = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M0 0h640v360H0z"/>
  <path d="M0 0h640v240H0z"/>
  <g transform="translate(511 125.4) scale(.66667)">
    <g id="b">
      <path id="a" d="M116.1 0L35.692 4.7l76.452 25.35L33.26 13.776l67.286 44.273L28.56 21.915l53.535 60.18-60.18-53.534 36.135 71.986L13.777 33.26l16.272 78.884L4.7 35.692 0 116.1-1-1z"/>
      <use height="100%" width="100%"  transform="scale(1 -1)"/>
    </g>
    <use height="100%" width="100%"  transform="scale(-1 1)"/>
    <circle r="34.3" stroke="#00a1de" stroke-width="3.4"/>
  </g>

  </SvgIcon>
);
Rw = pure(Rw);
Rw.displayName = 'Rw';

export default Rw;
