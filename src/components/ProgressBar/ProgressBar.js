/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    innerHeight: 4, 
    rx: 4
  },
  medium: {
    height: 12,
    innerHeight: 8,
    rx: 4
  },
  large: {
    height: 24,
    innerHeight: 16,
    rx: 8
  }
}

const ProgressBar = ({ value, size }) => {
  const PARAMS = SIZES[size];
  let padding = (PARAMS.height - PARAMS.innerHeight) / 2;
  let innerRx = PARAMS.rx / 2;

  return (
            <Fragment>
                <span id="loadinglabel">Loading: </span>
                <ProgressBarStyle role="progressbar" 
                    aria-labelledby="loadinglabel" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}
                    height={PARAMS.height} borderRadius={PARAMS.rx + "px"}>
                  <svg width={100 + (padding * 2)} height={PARAMS.height} rx={PARAMS.rx + "px"}>
                    <rect height={PARAMS.height} width={100 + (padding * 2)} stroke={COLORS.transparentGray15} fill={COLORS.transparentGray15}
                     rx={PARAMS.rx + "px"} />
                    <rect height={PARAMS.innerHeight} width={value} stroke={COLORS.primary} fill={COLORS.primary}
                     y={padding} x={padding} rx={innerRx + "px"}/>
                  </svg>
                </ProgressBarStyle>
                <VisuallyHidden>{value} percent complete.</VisuallyHidden>
            </Fragment>
         );
};



const ProgressBarStyle = styled.span`
  display: inline-block;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${props => props.borderRadius};
  line-height: 0px;
`;



export default ProgressBar;
