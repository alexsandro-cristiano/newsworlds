import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  padding: 3.2rem 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'sidebar'
    'main';
  @media (min-width: 992px) {
    align-items: flex-start;
    grid-template-columns: 1fr 350px;
    gap: 2rem;
    padding: 2rem;
  }
`;

export const SidebarNews = styled.div`
  width: 100%;
  @media (min-width: 768px) and (max-width: 991px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media (max-width: 991px) {
    grid-area: sidebar;
  }
`;
export const Text = styled.span`
  visibility: hidden;
  display: none;
  @media (min-width: 992px) {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: left;
    color: #bbbbbb;
    margin-bottom: 0.7rem;
    display: block;
    visibility: visible;
  }
`;
