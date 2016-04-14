import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Co = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 240h640v240H0z"/>
    <path d="M0 360h640v120H0z"/>
  </g>

  </SvgIcon>
);
Co = pure(Co);
Co.displayName = 'Co';

export default Co;
