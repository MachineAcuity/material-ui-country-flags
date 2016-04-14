import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Am = (props) => (
  <SvgIcon {...props}>
    
  <path d="M-1.806 0h4.128v1.032h-4.128z"/>
  <path d="M-1.806 1.032h4.128v1.032h-4.128z"/>
  <path d="M-1.806 2.064h4.128v1.032h-4.128z"/>

  </SvgIcon>
);
Am = pure(Am);
Am.displayName = 'Am';

export default Am;
