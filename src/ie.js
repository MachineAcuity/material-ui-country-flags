import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ie = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h639.995v480.004H0z"/>
    <path d="M0 0h213.334v480.004H0z"/>
    <path d="M426.668 0h213.334v480.004H426.668z"/>
  </g>

  </SvgIcon>
);
Ie = pure(Ie);
Ie.displayName = 'Ie';

export default Ie;
