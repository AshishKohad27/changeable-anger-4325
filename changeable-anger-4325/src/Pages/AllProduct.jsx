import { Box, Button, Heading, Input, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Portal, Tooltip } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import styles from "./CSS/AllProduct.module.css"

export default function AllProduct() {
    return (
        <Box className={styles.block_0}>
            <Box className={styles.block_1}></Box>
            <Box className={styles.block_2}>
                <Heading>Search</Heading>
            </Box>
            <Box className={styles.block_3}>
                <Box>
                    <Input variant='filled' placeholder='Filled' />
                    <Button colorScheme='blue'>   <SearchIcon />  </Button>
                </Box>

                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme='blue'>
                        Sort by
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                            <MenuItemOption value='asc'>Ascending</MenuItemOption>
                            <MenuItemOption value='desc'>Descending</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}