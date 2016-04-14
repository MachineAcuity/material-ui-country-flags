import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bj = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path d="M67.64-154h666v666h-666z"/>
    </clipPath>
  </defs>
  <g transform="matrix(.961 0 0 .7207 -65 110.99)" clip-path="url(#a)">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path d="M0-154h333v666H0z"/>
      <path d="M333-154h666v333H333z"/>
      <path d="M333 179h666v333H333z"/>
    </g>
  </g>

  </SvgIcon>
);
Bj = pure(Bj);
Bj.displayName = 'Bj';

export default Bj;
