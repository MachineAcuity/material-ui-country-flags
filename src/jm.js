import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Jm = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd">
    <path d="M0 0l320 240L0 480zM640 0L320 240l320 240z"/>
    <path d="M0 0l320 240L640 0zM0 480l320-240 320 240z"/>
    <path d="M640 0h-59.625L0 435.281V480h59.629L640.004 44.719z"/>
    <path d="M0 0v44.722l580.375 435.28h59.629v-44.72L59.629 0z"/>
  </g>

  </SvgIcon>
);
Jm = pure(Jm);
Jm.displayName = 'Jm';

export default Jm;
