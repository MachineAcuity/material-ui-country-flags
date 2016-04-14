import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bo = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M0 323.1h640V480H0z"/>
    <path d="M0 0h640v164.063H0z"/>
    <path d="M0 164.063h640v159.046H0z"/>
  </g>

  </SvgIcon>
);
Bo = pure(Bo);
Bo.displayName = 'Bo';

export default Bo;
