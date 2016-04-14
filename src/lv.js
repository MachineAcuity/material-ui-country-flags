import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Lv = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M0 0h640v480.003H0z"/>
    <path d="M0 0h640v192.001H0zM0 288.002h640v192.001H0z"/>
  </g>

  </SvgIcon>
);
Lv = pure(Lv);
Lv.displayName = 'Lv';

export default Lv;
