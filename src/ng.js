import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ng = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h639.98v479.998H0z"/>
    <path d="M426.654 0H639.98v479.998H426.654zM0 0h213.327v479.998H0z"/>
  </g>

  </SvgIcon>
);
Ng = pure(Ng);
Ng.displayName = 'Ng';

export default Ng;
