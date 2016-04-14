import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Sc = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h682.67v512H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="scale(.9375)" stroke-width="1pt">
    <path d="M0 0h992.13v512H0z"/>
    <path d="M0 512l992.12-170.67V512H0z"/>
    <path d="M0 512l992.12-341.33v170.67L0 512z"/>
    <path d="M0 512V0h330.71L0 512z"/>
    <path d="M0 512L330.71 0h330.71L0 512z"/>
  </g>

  </SvgIcon>
);
Sc = pure(Sc);
Sc.displayName = 'Sc';

export default Sc;
