import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Sj = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-24.803 48.27h570.47v427.85h-570.47z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="translate(27.826 -54.153) scale(1.1219)">
    <path d="M0 0h512v512H0z"/>
    <path fill-rule="evenodd" d="M-80 .158h699.74v511.84H-80z"/>
    <path fill-rule="evenodd" d="M-99.213-23.039h212.94v221.47h-212.94zM237.42-23.039h407.46v221.47H237.42zM-99.213 321.67h210v225.76h-210zM240 323.79h404.88v223.65H240z"/>
    <path fill-rule="evenodd" d="M144.65-23.039h64.425v570.47H144.65z"/>
    <path fill-rule="evenodd" d="M-124.02 224.84h768.9v63.444h-768.9z"/>
  </g>

  </SvgIcon>
);
Sj = pure(Sj);
Sj.displayName = 'Sj';

export default Sj;
