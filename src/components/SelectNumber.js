import React from "react";
import styled from 'styled-components';

const StyledWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 10px auto;
select{
    font-size: 2rem;
border-radius: 10px;
padding : 1rem;
}
`
const SelectNumber = ({ limit, changeInput }) => {
  return (
      <StyledWrapper>
    <select
      value={limit}
      onChange={(e) => {
        changeInput(e.target.value);
      }}
    >
      <option defaultValue value={10}>
        10
      </option>
      <option value={20}>20</option>
      <option value={30}>30</option>
      <option value={50}>50</option>
    </select>
    </StyledWrapper>
  );
};

export default SelectNumber;