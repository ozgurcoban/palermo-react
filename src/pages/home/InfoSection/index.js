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
            <HeaderCell>Måndag</HeaderCell>
            <DataCell>11.00 - 01.00</DataCell>
          </TableRow>
          <TableRow>
            <HeaderCell>Tisdag - Lördag</HeaderCell>
            <DataCell>11.00 - 03.00</DataCell>
          </TableRow>
          <TableRow>
            <HeaderCell>Söndag</HeaderCell>
            <DataCell>11.00 - 01.00</DataCell>
          </TableRow>
        </TableBody>
      </Table>
    </OpeningHoursContainer>
  );
};
