import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    background,
    Box,
    Button,
    Center,
    Grid,
    GridItem,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./PluralsightNavbar.module.css";

export default function PluralsightNavbar() {
    return (
        <Box m="auto" bg="red.500" maxW={"1348px"} mt="">

            <Box maxW={"1348px"} h="46px" bg="#202020">
                <Box
                    maxW="1200px"
                    // bg="blue.500"
                    h="46px"
                    m="auto"
                    className={styles.block_2}
                >
                    <Grid
                        h="24px"
                        // templateRows='repeat(2, 1fr)'
                        pt="2px"
                        color="#ececec"
                        templateColumns="repeat(14, 1fr)"
                        gap={0}
                        className={styles.block_21}
                    >
                        <GridItem colSpan={8} bg="">
                            <Image

                            />
                        </GridItem>

                        <GridItem
                            colSpan={1}
                            // bg="red.500"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">Pluralsight
                            </Heading>
                        </GridItem>

                        <GridItem
                            colSpan={1}
                            // bg="red.500"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">Skills
                            </Heading>
                        </GridItem>

                        <GridItem
                            colSpan={1}
                            // bg="red.500"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">Flow
                            </Heading>

                        </GridItem>


                        <GridItem
                            colSpan={1}
                            // bg="red.500"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">Blog
                            </Heading>
                        </GridItem>

                        <GridItem
                            colSpan={2}
                            // bg="red.500"
                            className={styles.block_3}
                            borderLeft="2px solid white"
                        >

                            {/* <Box pl="10px"> */}
                            <Image src="https://www.pluralsight.com/content/dam/ps-nav-assets/nav-profile-image.svg" />

                            <Popover >
                                <PopoverTrigger className={styles.menu_1btn}>
                                    <Button bg="#202020" colorScheme="#202020" >Sign In</Button>
                                </PopoverTrigger>
                                <Portal  >
                                    <PopoverContent maxW="220PX">
                                        <PopoverArrow />
                                        <PopoverHeader>Sign in</PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody className={styles.menu_1} >
                                            <Button colorScheme='blue'>
                                                <Link to="/signin">Sign In</Link>
                                            </Button>
                                            <Button colorScheme='blue'>   <Link to="/signup">Sign Up</Link></Button>
                                        </PopoverBody>

                                    </PopoverContent>
                                </Portal>
                            </Popover>


                            {/* </Box> */}

                        </GridItem>

                    </Grid>
                </Box>
            </Box>

            <Box maxW={"1348px"} h="85px" bg="#2b2b2b">
                <Box
                    maxW="1200px"
                    // bg="blue.100"
                    h="85px"
                    m="auto"
                    className={styles.block_2}
                >
                    <Grid
                        h="40px"
                        // templateRows='repeat(2, 1fr)'
                        pt="20px"
                        templateColumns="repeat(11, 1fr)"
                        gap={4}

                        color="white"
                    >
                        <GridItem colSpan={2} bg="">
                            <Link to="/">
                            <Image
                                src="https://www.pluralsight.com/content/dam/ps-nav-assets/product-logo/pluralsight-color-full-logo.png"
                                alt="logo"
                            /></Link>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            // bg="red.200"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">Solution</Heading>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            // bg="blue.300"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">
                                <Link to="/allproduct">Products</Link>
                            </Heading>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            // bg="red.200"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">Resources</Heading>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            // bg="blue.300"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">Individuals</Heading>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            // bg="red.200"
                            className={styles.block_3}
                        ></GridItem>

                        <GridItem
                            colSpan={2}
                            // bg="red.200"
                            className={styles.block_3}
                        >
                            <Button bg="#202020" colorScheme="white" className={styles.contactbtn}>
                             <Link to="/contactsale">   Contact Sales</Link>
                            </Button>
                        </GridItem>
                        <GridItem
                            colSpan={2}
                            // bg="red.200"
                            className={styles.block_3}
                        >

                            <Button colorScheme="" backgroundImage="linear-gradient(to right,#f05a28,#ec008c,#f05a28)" className={styles.contactbtn1}>
                                View Plans
                            </Button>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
