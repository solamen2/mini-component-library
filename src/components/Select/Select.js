import React, {Fragment} from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children}) => {
  const displayedValue = getDisplayedValue(value, children);

  const canvasContext = document.createElement('canvas').getContext('2d');
  const textWidth = Math.ceil(canvasContext.measureText(displayedValue).width);

  return (
    <Fragment>
      <Wrapper value={value} onChange={onChange}>
        {children}
      </Wrapper>
      <Chevron style={{ "padding": "0px 0px 0px " + ((textWidth * 1.4) + 24) + "px" }}>
        <Icon id="chevron-down" size="24"/>
      </Chevron>
    </Fragment>
  );
};

const Chevron = styled.div`
  margin: -30px 0px 0px 0px;
  color: ${COLORS.gray700};
`;

const Wrapper = styled.select`
  appearance:none;
  border-radius: 8px;
  padding: 10px 14px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:hover + ${Chevron} {
    color: ${COLORS.black};
  }
`;

export default Select;
