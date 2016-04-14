import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Dz = (props) => (
  <SvgIcon {...props}>
    
  <path d="M320 0h320v480H320z"/>
  <path d="M0 0h320v480H0z"/>
  <path d="M424 180a120 120 0 1 0 0 120 96 96 0 1 1 0-120m4 60l-108-35.2 67.2 92V183.2l-67.2 92z"/>

  </SvgIcon>
);
Dz = pure(Dz);
Dz.displayName = 'Dz';

export default Dz;
