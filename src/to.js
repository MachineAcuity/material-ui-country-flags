import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let To = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 0h249.954v200.321H0z"/>
    <g>
      <path d="M102.854 31.24h39.84v139.54h-39.84z"/>
      <path d="M192.55 81.086v39.84H53.01v-39.84z"/>
    </g>
  </g>

  </SvgIcon>
);
To = pure(To);
To.displayName = 'To';

export default To;
