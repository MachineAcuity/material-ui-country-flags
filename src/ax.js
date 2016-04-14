import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ax = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M106.25 0h1133.3v850H106.25z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="translate(-149.33) scale(.6024)">
    <path d="M0 0h1300v850H0z"/>
    <g>
      <path d="M400 0h250v850H400z"/>
      <path d="M0 300h1300v250H0z"/>
    </g>
    <g>
      <path d="M475 0h100v850H475z"/>
      <path d="M0 375h1300v100H0z"/>
    </g>
  </g>

  </SvgIcon>
);
Ax = pure(Ax);
Ax.displayName = 'Ax';

export default Ax;
