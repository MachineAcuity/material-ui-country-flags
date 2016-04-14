import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bv = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h640v480H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)">
    <path d="M-28 0h699.74v512H-28z"/>
    <path d="M-52.992-77.837h218.72v276.26h-218.72zM289.42-.572h380.91v199H289.42zM-27.545 320.01h190.33v190.33h-190.33zM292 322.12h378.34v188.21H292z"/>
    <path d="M196.65-25.447h64.425v535.78H196.65z"/>
    <path d="M-27.545 224.84h697.88v63.444h-697.88z"/>
  </g>

  </SvgIcon>
);
Bv = pure(Bv);
Bv.displayName = 'Bv';

export default Bv;
