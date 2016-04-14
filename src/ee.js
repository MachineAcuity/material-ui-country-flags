import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ee = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <rect rx="0" ry="0" height="477.9" width="640"/>
    <rect rx="0" ry="0" height="159.3" width="640" y="320.7"/>
    <path d="M0 0h640v159.3H0z"/>
  </g>

  </SvgIcon>
);
Ee = pure(Ee);
Ee.displayName = 'Ee';

export default Ee;
