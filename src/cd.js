import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cd = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2L28.8 96zM600 0L0 360v120h40l600-360V0h-40"/>
  <path d="M640 0L0 384v96L640 96V0"/>

  </SvgIcon>
);
Cd = pure(Cd);
Cd.displayName = 'Cd';

export default Cd;
