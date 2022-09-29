import { Box, Button, Heading, Input, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Portal, Tooltip, useStatStyles } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import styles from "./CSS/AllProduct.module.css"
import AllProductDisplay from "./AllProductDisplay.jsx";
import SildeFilter from "../Components/Side Filter/SideFilter";

export default function AllProduct() {

    const [order, setOrder] = useState("");
    // console.log('All Products order:', order);
    const [filterD, setFilterD] = useState("");
    // console.log('filterD:', filterD);


    return (
        <Box className={styles.block_0}>
            <Box className={styles.block_1}></Box>
            <Box className={styles.block_2}>
                <Heading>Search</Heading>
            </Box>
            <Box className={styles.block_3}>

                <Box maxW="1058px" w="1058px"     >
                    <Input borderRadius="none" variant='filled' placeholder='Search' type={filterD} onChange={(e) => setFilterD(e.target.value)} />
                    <Button colorScheme='blue' maxW="61px" h="55px" borderRadius="none" >   <SearchIcon />  </Button>
                </Box>
                <Box>
                    <Menu closeOnSelect={false} className={styles.block_31}>
                        <MenuButton as={Button} colorScheme='blue' maxW="170px" h="55px" borderRadius="none" >
                            Sort by
                        </MenuButton>
                        <MenuList minWidth='240px'>
                            <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                                <MenuItemOption value='asc' onClick={() => setOrder("asc")} >Ascending</MenuItemOption>
                                <MenuItemOption value='desc' onClick={() => setOrder("desc")} >Descending</MenuItemOption>
                                <MenuItemOption value='reset' onClick={() => setOrder("")} >Reset</MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>

            <Box className={styles.block_4}>
                <SildeFilter />
                <AllProductDisplay
                    order={order}
                    filterD={filterD}
                />
            </Box>
        </Box>
    )
}