import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let De = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 320h640v160.002H0z"/>
    <path d="M0 0h640v160H0z"/>
    <path d="M0 160h640v160H0z"/>
  </g>

  </SvgIcon>
);
De = pure(De);
De.displayName = 'De';

export default De;
