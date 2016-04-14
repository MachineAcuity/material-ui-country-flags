import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cw = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <path id="b" d="M0-1l.225.69H.95L.364.12l.225.69L0 .383-.588.81l.225-.692L-.95-.31h.725z"/>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h682.67v512H0z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="scale(.94)">
    <path d="M0 0h768v512H0z"/>
    <path d="M0 320h768v64H0z"/>
    <use  transform="scale(42.67)" height="9000" width="13500" y="2" x="2"/>
    <use  transform="scale(56.9)" height="9000" width="13500" y="3" x="3"/>
  </g>

  </SvgIcon>
);
Cw = pure(Cw);
Cw.displayName = 'Cw';

export default Cw;
