import {
    Button,
    Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from '@chakra-ui/react'

import { FaCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';

import css from "./UserMenu.module.css"

import { selectorProfile } from 'store/auth/selectors';

const UserMenu = ({ handlerLogOut }) => {
  
  const profile = useSelector(selectorProfile);
  
  return (
    <Menu>
  <MenuButton as={Button} colorScheme='blue' className={css.logout}>
    <FaCircleUser className={css.icon}/>
  </MenuButton>
  <MenuList className={css.list}>
    <MenuGroup title={profile.name} className={css.title}>
    <Text className={css.email}>{profile.email}</Text>
      <MenuItem onClick={handlerLogOut} className={css.out} as={Button} color='#0fb8f5'>Logout</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
  )
}

export default UserMenu