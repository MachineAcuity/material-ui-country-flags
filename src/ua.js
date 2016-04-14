import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ua = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 0h640v240H0z"/>
  </g>

  </SvgIcon>
);
Ua = pure(Ua);
Ua.displayName = 'Ua';

export default Ua;
