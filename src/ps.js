import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ps = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-118 0h682.67v512H-118z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="translate(110.63) scale(.9375)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path d="M-246 0H778.002v170.667H-246z"/>
      <path d="M-246 170.667H778.002v170.667H-246z"/>
      <path d="M-246 341.334H778.002v170.667H-246z"/>
      <path d="M-246 512.001l512.001-256L-246 0v512.001z"/>
    </g>
  </g>

  </SvgIcon>
);
Ps = pure(Ps);
Ps.displayName = 'Ps';

export default Ps;
