import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bl = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v479.997H0z"/>
    <path d="M0 0h213.33v479.997H0z"/>
    <path d="M426.663 0h213.33v479.997h-213.33z"/>
  </g>

  </SvgIcon>
);
Bl = pure(Bl);
Bl.displayName = 'Bl';

export default Bl;
