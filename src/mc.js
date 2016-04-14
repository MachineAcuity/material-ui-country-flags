import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mc = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v240H0z"/>
    <path d="M0 240h640v240H0z"/>
  </g>

  </SvgIcon>
);
Mc = pure(Mc);
Mc.displayName = 'Mc';

export default Mc;
