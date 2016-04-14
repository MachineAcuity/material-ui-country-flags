import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ch = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v480H0z"/>
    <g>
      <path d="M170 194.997h299.996v89.997H170z"/>
      <path d="M275 89.997h89.996v299.996H275z"/>
    </g>
  </g>

  </SvgIcon>
);
Ch = pure(Ch);
Ch.displayName = 'Ch';

export default Ch;
