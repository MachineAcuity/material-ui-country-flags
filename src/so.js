import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let So = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-85.334 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" fill-rule="evenodd" transform="translate(80.001) scale(.9375)">
    <path d="M-128 0h768v512h-768z"/>
    <path d="M336.48 381.19l-82.505-53.476-82.101 54.001 30.535-87.754-81.95-54.188 101.39-.756 31.447-87.488 32.121 87.286 101.39.116-81.53 54.699 31.209 87.56z"/>
  </g>

  </SvgIcon>
);
So = pure(So);
So.displayName = 'So';

export default So;
