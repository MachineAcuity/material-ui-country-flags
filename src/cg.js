import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cg = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-79.458 32h640v480h-640z"/>
    </clipPath>
  </defs>
  <g stroke-width="1pt" fill-rule="evenodd" clip-path="url(#a)" transform="translate(79.458 -32)">
    <path d="M-119.46 32h720v480h-720z"/>
    <path d="M-119.46 32v480l480-480h-480z"/>
    <path d="M120.54 512h480V32l-480 480z"/>
  </g>

  </SvgIcon>
);
Cg = pure(Cg);
Cg.displayName = 'Cg';

export default Cg;
