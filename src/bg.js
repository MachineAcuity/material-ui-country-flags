import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bg = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 319.997h640V480H0z"/>
    <path d="M0 0h640v160.003H0z"/>
    <path d="M0 160.003h640v160.003H0z"/>
  </g>

  </SvgIcon>
);
Bg = pure(Bg);
Bg.displayName = 'Bg';

export default Bg;
