import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Qa = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-27.334 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(25.626) scale(.9375)" stroke-width="1pt">
    <path d="M-70 0h768v512H-70z"/>
    <path d="M86.533 511.76l-156.53.24L-70 0 85.8.081l100.53 32.327-99.795 31.51 99.791 32.49-99.791 31.51 99.791 32.49-99.791 31.51 99.791 32.49-99.791 31.51 99.791 32.49-99.791 31.511 99.791 32.49-99.791 31.511 99.791 32.49-99.791 31.51 99.791 32.49-99.791 31.51"/>
  </g>

  </SvgIcon>
);
Qa = pure(Qa);
Qa.displayName = 'Qa';

export default Qa;
