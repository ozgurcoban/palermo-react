import styled from 'styled-components';

export const OpeningHoursContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const Header = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Table = styled.table`
  border-radius: 0.5rem;
  background-color: lightGray;
  padding: 2rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 70%;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const HeaderCell = styled.th`
  text-align: left;
`;

export const DataCell = styled.td`
  text-align: right;
`;
