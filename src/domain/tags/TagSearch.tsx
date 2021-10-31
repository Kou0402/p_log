import React from 'react'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const TagSearch: React.FC = () => {
  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton
          as={IconButton}
          aria-label="タグ検索"
          variant="ghost"
          _active={{ backgroundColor: 'gray.800' }}
          _focus={{ backgroundColor: 'gray.800' }}
          _hover={{ backgroundColor: 'gray.700' }}
          icon={<SearchIcon />}
        ></MenuButton>
        <MenuList bgColor="gray.800" border="1px" borderColor="gray.600">
          <MenuItem>日常</MenuItem>
          <MenuItem>フロントエンド</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}
