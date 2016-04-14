import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Mk = (props) => (
  <SvgIcon {...props}>
    
  <path d="M0 0h640v480H0z"/>
  <path d="M0 0h96l224 231.43L544 0h96L0 480h96l224-231.43L544 480h96zm640 192v96L0 192v96zM280 0l40 205.714L360 0zm0 480l40-205.714L360 480z"/>
  <circle r="77.143" cy="240" cx="320" stroke="#d20000" stroke-width="17.143"/>

  </SvgIcon>
);
Mk = pure(Mk);
Mk.displayName = 'Mk';

export default Mk;
