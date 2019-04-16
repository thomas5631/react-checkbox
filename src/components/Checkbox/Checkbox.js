import React from 'react';

import './Checkbox.scss';

const CheckboxContainer = ({ className, children, ...props }) => (
  <div className={`checkbox-container ${className}`} {...props}>
    {children}
  </div>
);

const HiddenCheckbox = props => (
  <input className="hidden-checkbox" type="checkbox" {...props} />
);

const StyledCheckbox = ({ children, checked, ...props }) => (
  <div
    className="styled-checkbox"
    style={{
      backgroundColor: checked ? 'green' : 'white',
    }}
    {...props}
  >
    {children}
  </div>
);

const Icon = ({ children, ...props }) => (
  <svg className="icon" {...props}>
    {children}
  </svg>
);

export const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
