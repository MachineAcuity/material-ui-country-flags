import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cz = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-74 0h682.67v512H-74z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(69.38) scale(.94)" stroke-width="1pt">
    <path d="M-74 0h768v512H-74z"/>
    <path d="M-74 0h768v256H-74z"/>
    <path d="M-74 0l382.73 255.67L-74 511.01V0z"/>
  </g>

  </SvgIcon>
);
Cz = pure(Cz);
Cz.displayName = 'Cz';

export default Cz;
