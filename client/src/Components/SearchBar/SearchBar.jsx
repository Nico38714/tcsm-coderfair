import { Menu, Button, Text, rem, TextInput, Flex } from '@mantine/core';
import ProjectData from '../../data/projects.json';
import './SearchBar.css';
import { useState } from 'react';

const SearchBar = () => {
  const [sortSelection, tempFunction] = useState(false); //Use Sina's menu sorting state to map sort funciton to the dropdown buttons

  return (
    <Flex justify="center" align="center" gap="10px">
      <div className="SearchBar">
        <TextInput placeholder="Search student or project" />
      </div>

      <Menu shadow="md" width={200} onChange={sortSelection}>
        <Menu.Target>
          <Button>Sort</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Sort By:</Menu.Label>
          <Menu.Item>Rank</Menu.Item>
          <Menu.Item>Student A-Z</Menu.Item>
          <Menu.Item>Project A-Z</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
};

export default SearchBar;
