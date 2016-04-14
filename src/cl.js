import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cl = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h682.67v512H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="scale(.9375)" fillOpacity=".996">
    <path d="M255.99 0H768v256H255.99z"/>
    <path d="M0 0h256v256H0z"/>
    <path d="M167.82 191.71l-39.653-29.737-39.458 30.03 14.674-48.8-39.386-30.133 48.728-.42L127.84 64l15.437 48.537 48.728.064-39.184 30.418 15 48.69z"/>
    <path d="M0 256h768v256H0z"/>
  </g>

  </SvgIcon>
);
Cl = pure(Cl);
Cl.displayName = 'Cl';

export default Cl;
