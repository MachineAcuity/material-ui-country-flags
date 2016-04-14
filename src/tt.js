import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Tt = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M463.663 480L.05 1.003 0 479.747l463.663.253zM176.337 0L639.95 478.997 640 .253 176.337 0z" fill-rule="evenodd"/>
  <path d="M27.74.23h118.597l468.176 479.315h-122.35L27.738.229z" fill-rule="evenodd"/>

  </SvgIcon>
);
Tt = pure(Tt);
Tt.displayName = 'Tt';

export default Tt;
