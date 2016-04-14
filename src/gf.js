import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Gf = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480z"/>
  <path d="M0 0l640 480H0z"/>
  <path d="M252.37 218.025h135.26L278.203 297.53 320 168.89l41.798 128.64z"/>

  </SvgIcon>
);
Gf = pure(Gf);
Gf.displayName = 'Gf';

export default Gf;
