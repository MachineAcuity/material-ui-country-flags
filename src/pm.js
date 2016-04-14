import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Pm = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h640v479.997H0z"/>
    <path d="M0 0h213.331v479.997H0z"/>
    <path d="M426.663 0h213.331v479.997H426.663z"/>
  </g>

  </SvgIcon>
);
Pm = pure(Pm);
Pm.displayName = 'Pm';

export default Pm;
