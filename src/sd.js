import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Sd = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h682.67v512H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="scale(.9375)" stroke-width="1pt">
    <path d="M0 341.32h1024V512H0z"/>
    <path d="M0 170.64h1024v170.68H0z"/>
    <path d="M0 0h1024.8v170.68H0z"/>
    <path d="M0 0v512l341.32-256L0 0z"/>
  </g>

  </SvgIcon>
);
Sd = pure(Sd);
Sd.displayName = 'Sd';

export default Sd;
