import styled from 'styled-components';

export const GridContainer = styled.div`
  padding: 2rem 5rem;
  display: grid;
  grid-template-columns: 1fr 256px;
  gap: 2rem;
  align-items: flex-start;
`;

export const BoxNews = styled.div`
  width: 100%;
`;
export const Text = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: left;
  color: gray;
  margin-bottom: 0.5rem;
  display: block;
`;
