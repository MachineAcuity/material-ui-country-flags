import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Re = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v479.997H0z"/>
    <path d="M0 0h213.331v479.997H0z"/>
    <path d="M426.663 0h213.331v479.997H426.663z"/>
  </g>

  </SvgIcon>
);
Re = pure(Re);
Re.displayName = 'Re';

export default Re;
