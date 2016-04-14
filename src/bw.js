import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Bw = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" fillOpacity="1">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 160h640v160H0z"/>
    <path d="M0 185.97h640v108.05H0z"/>
  </g>

  </SvgIcon>
);
Bw = pure(Bw);
Bw.displayName = 'Bw';

export default Bw;
