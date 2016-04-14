import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Wf = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0-.001h640v480H0z"/>
    <path d="M0-.001h213.337v480H0z"/>
    <path d="M426.662-.001H640v480H426.662z"/>
  </g>

  </SvgIcon>
);
Wf = pure(Wf);
Wf.displayName = 'Wf';

export default Wf;
