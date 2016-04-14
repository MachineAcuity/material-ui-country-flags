import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let At = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M640 480H0V0h640z"/>
    <path d="M640 480H0V319.997h640zm0-319.875H0V.122h640z"/>
  </g>

  </SvgIcon>
);
At = pure(At);
At.displayName = 'At';

export default At;
