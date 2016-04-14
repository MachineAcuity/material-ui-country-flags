import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Be = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" stroke-width="1pt">
    <path d="M0 0h213.335v479.997H0z"/>
    <path d="M213.335 0H426.67v479.997H213.335z"/>
    <path d="M426.67 0h213.335v479.997H426.67z"/>
  </g>

  </SvgIcon>
);
Be = pure(Be);
Be.displayName = 'Be';

export default Be;
