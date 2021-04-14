import React from "react";
import styled from 'styled-components';
const StyledWrapper = styled.div`
display: flex;
align-items: center;
font-size: 2rem;

button {
     border: none;
     font-size: 2rem;
     border-radius: 10px;
     padding: 1rem;
}
`
const PaginationControls = ({ currentPage, setPage, totalPages }) => {
  return (
    <StyledWrapper>
      <StyledWrapper >
        <div >
          <button
            disabled={currentPage === 1}
            onClick={() => setPage((page) => page - 1)}
          >
            Previous
          </button>
        </div>
        <div >
          <p>{currentPage}</p>
        </div>
        <div >
          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage((page) => page + 1)}
          >
            Next
          </button>
        </div>
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default PaginationControls;