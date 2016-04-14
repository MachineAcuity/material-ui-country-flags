import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bf = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M640.003 479.578H.378V0h639.625z"/>
    <path d="M639.628 480H.003V240.216h639.625z"/>
    <path d="M254.612 276.188l-106.066-72.434 131.043.122 40.386-117.322 40.388 117.322 131.043-.087-106.085 72.398 40.59 117.27-105.954-72.573-105.955 72.556"/>
  </g>

  </SvgIcon>
);
Bf = pure(Bf);
Bf.displayName = 'Bf';

export default Bf;
