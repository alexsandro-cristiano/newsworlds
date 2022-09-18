import styled from 'styled-components'

export const GridLayoutNewsPage = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 3rem 1rem;
  @media (min-width: 425px) {
    padding: 4rem 3rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) and (max-width: 1399px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1401px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const GridLayoutNewsHome = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
