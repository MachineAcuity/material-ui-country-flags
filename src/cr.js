import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cr = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 75.428h640v322.285H0z"/>
    <path d="M0 157.716h640V315.43H0z"/>
  </g>

  </SvgIcon>
);
Cr = pure(Cr);
Cr.displayName = 'Cr';

export default Cr;
