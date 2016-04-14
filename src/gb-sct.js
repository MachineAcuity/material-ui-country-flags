import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let GbSct = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M0 0l5 3M0 3l5-3" stroke="#fff" stroke-width=".6" transform="scale(128 160)"/>

  </SvgIcon>
);
GbSct = pure(GbSct);
GbSct.displayName = 'GbSct';

export default GbSct;
