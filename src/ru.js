import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ru = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 160.003h640V480H0z"/>
    <path d="M0 319.997h640V480H0z"/>
  </g>

  </SvgIcon>
);
Ru = pure(Ru);
Ru.displayName = 'Ru';

export default Ru;
