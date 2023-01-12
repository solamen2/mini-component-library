import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconStyle = styled(Icon)`
  position: absolute;
  padding: 0px 0px 0px ${(p) => p.textWidth * 1.5 + p.size}px;
  top: calc(50% - 0.5em); /* Keep icon in center of input, regardless of the input height */
`

const IconInputField = styled.input`
  padding: 0px 0px 0px ${(p) => p.size + 15}px;
  height: ${(p) => p.size}px;
  width: ${(p) => p.width}px;
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: normal;
    color: ${COLORS.gray500};
  }
`

const IconLabel = styled.label`
  .skinnyIcon {
    display: block;
  }

  .fatIcon {
    display: none;
  }
`

const Wrapper = styled.div`
  position: relative;
  padding: ${(p) => p.topOffset}px 0px 0px 0px;

  &:hover {
    ${IconInputField} {
      color: ${COLORS.black};
    }

    .skinnyIcon {
      display: none;
    }

    .fatIcon {
      display: block;
    }
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const canvasContext = document.createElement('canvas').getContext('2d');
  const textWidth = Math.ceil(canvasContext.measureText(label).width);

  const iconSize = size === "large" ? 24 : 16;

  return (
    <Wrapper class="input-wrapper" topOffset={iconSize - 16}>
      <IconLabel for="icon-input">{label}&nbsp;
        <IconStyle className="skinnyIcon" id={icon} size={iconSize} strokeWidth="1" textWidth={textWidth}/>
        <IconStyle className="fatIcon" id={icon} size={iconSize} strokeWidth="2" textWidth={textWidth}/>
      </IconLabel>
      <IconInputField id="icon-input" width={width} placeholder={placeholder} size={iconSize}/>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
