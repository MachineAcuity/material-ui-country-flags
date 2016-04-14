import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ro = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h213.333v480H0z"/>
    <path d="M213.333 0h213.333v480H213.333z"/>
    <path d="M426.666 0H640v480H426.666z"/>
  </g>

  </SvgIcon>
);
Ro = pure(Ro);
Ro.displayName = 'Ro';

export default Ro;
