import React from 'react';

import {
  MenuItem,
  SubCategory,
  Item,
  Header,
  Description,
  Name,
  Price,
  CategoryDesc,
  ItemWrapper,
} from './MenuListElements';

const MenuList = ({ items }) => {
  return (
    <>
      {items.map(menuItem => {
        const { subcategory, category, categoryId, description } = menuItem;
        const {
          items: { id, name, desc, price },
        } = menuItem;
        return (
          <MenuItem key={categoryId}>
            <SubCategory>{subcategory}</SubCategory>
            <CategoryDesc>{description}</CategoryDesc>
            <ItemWrapper>
              {menuItem.items.map(submenu => {
                return (
                  <Item>
                    <Header>
                      <Name>{submenu.name}</Name>
                      <Price>{submenu.price}:-</Price>
                    </Header>
                    <Description>{submenu.description}</Description>
                  </Item>
                );
              })}
            </ItemWrapper>
          </MenuItem>
        );
      })}
    </>
  );
};

export default MenuList;
