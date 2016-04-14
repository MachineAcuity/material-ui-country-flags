import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Lc = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M0 0h640v480H0z"/>
    <path d="M318.9 41.991l162.66 395.3-322.6.91L318.9 41.991z"/>
    <path d="M319.09 96.516l140.67 339.99-278.99.78 138.32-340.77z"/>
    <path d="M318.9 240.1l162.66 197.64-322.6.46L318.9 240.1z"/>
  </g>

  </SvgIcon>
);
Lc = pure(Lc);
Lc.displayName = 'Lc';

export default Lc;
