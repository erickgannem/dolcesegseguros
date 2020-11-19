import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Container(props) {
  const { children } = props;
  return (
    <Div>
      {children}
    </Div>
  );
}

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.element,
};
