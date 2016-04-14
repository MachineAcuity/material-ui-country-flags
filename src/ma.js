import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ma = (props) => (
  <SvgIcon {...props}>
    
  <path d="M640 0H0v480h640z"/>
  <path d="M320 179.452l-35.574 109.496 93.12-67.647H262.453l93.122 67.648z" stroke="#006233" stroke-width="11.704"/>

  </SvgIcon>
);
Ma = pure(Ma);
Ma.displayName = 'Ma';

export default Ma;
