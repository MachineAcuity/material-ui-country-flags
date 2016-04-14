import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Dj = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-40 0h682.67v512H-40z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" fill-rule="evenodd" transform="translate(37.5) scale(.94)">
    <path d="M-40 0h768v512H-40z"/>
    <path d="M-40 0h768v256H-40z"/>
    <path d="M-40 0l382.73 255.67L-40 511.01V0z"/>
    <path d="M119.8 292.07l-30.82-22.18-30.67 22.4 11.407-36.41-30.613-22.48 37.874-.31 11.747-36.3 12 36.216 37.874.048-30.458 22.695 11.66 36.328z"/>
  </g>

  </SvgIcon>
);
Dj = pure(Dj);
Dj.displayName = 'Dj';

export default Dj;
