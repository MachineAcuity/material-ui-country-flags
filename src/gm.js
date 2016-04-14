import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gm = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0-48h640v480H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(0 48)" stroke-width="1pt">
    <path d="M0-128h640V85.33H0z"/>
    <path d="M0 85.333h640v35.556H0z"/>
    <path d="M0 120.89h640v142.22H0z"/>
    <path d="M0 263.11h640v35.556H0z"/>
    <path d="M0 298.67h640V512H0z"/>
  </g>

  </SvgIcon>
);
Gm = pure(Gm);
Gm.displayName = 'Gm';

export default Gm;
