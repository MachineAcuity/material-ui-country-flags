import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Tl = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h682.67v512H0z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" fill-rule="evenodd" transform="scale(.9375)">
    <path d="M0 0h1031.2v512H0z"/>
    <path d="M0 0c3.234 0 512 256.72 512 256.72L0 512V0z"/>
    <path d="M0 0c2.151 0 340.62 256.72 340.62 256.72L0 512V0z"/>
    <path d="M187.71 298.16l-60.813-13.478-31.072 52.839-4.861-59.677-60.753-13.372 54.84-24.817-3.292-59.385 40.235 43.39 55.341-25.232-28.827 53.899 39.203 45.835z"/>
  </g>

  </SvgIcon>
);
Tl = pure(Tl);
Tl.displayName = 'Tl';

export default Tl;
