import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let It = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v479.997H0z"/>
    <path d="M0 0h213.331v479.997H0z"/>
    <path d="M426.663 0h213.331v479.997H426.663z"/>
  </g>

  </SvgIcon>
);
It = pure(It);
It.displayName = 'It';

export default It;