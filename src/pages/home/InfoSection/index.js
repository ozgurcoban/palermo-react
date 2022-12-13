import React from 'react';

import {
  OpeningHoursContainer,
  Header,
  Table,
  TableBody,
  TableRow,
  HeaderCell,
  DataCell,
} from './InfoSectionElements';

export const InfoSection = () => {
  return (
    <OpeningHoursContainer>
      <Header>Öppettider</Header>
      <Table>
        <TableBody>
          <TableRow>
            <HeaderCell>Måndag - Torsdag</HeaderCell>
            <DataCell>16.00 - 22.00</DataCell>
          </TableRow>
          <TableRow>
            <HeaderCell>Fredag</HeaderCell>
            <DataCell>16.00 - 23.00</DataCell>
          </TableRow>
          <TableRow>
            <HeaderCell>Lördag</HeaderCell>
            <DataCell>12.00 - 23.00</DataCell>
          </TableRow>
          <TableRow>
            <HeaderCell>Söndag</HeaderCell>
            <DataCell>12.00 - 22.00</DataCell>
          </TableRow>
        </TableBody>
      </Table>
    </OpeningHoursContainer>
  );
};
