import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mq = (props) => (
  <SvgIcon {...props}>
    
  <g stroke-width="1pt" fill-rule="evenodd">
    <path d="M0 0h640v480H0z"/>
    <path d="M0 0h213.33v480H0z"/>
    <path d="M426.67 0H640v480H426.67z"/>
  </g>

  </SvgIcon>
);
Mq = pure(Mq);
Mq.displayName = 'Mq';

export default Mq;
