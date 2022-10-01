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
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    FormLabel,
    FormControl,
    useDisclosure,
    Modal
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./PluralsightNavbar.module.css";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";


export default function PluralsightNavbar() {
    // isAUTH STATE
    const { isAuth, toggleAuth, isUsers } = useContext(AuthContext)
    console.log('isUsers PluralsightNavbar:', isUsers)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

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
                        <GridItem colSpan={{ base: 0, md: 8 }} className={styles.logout} >
                            <Image

                            />
                            {
                                isAuth ? (<Box >
                                    <Heading  >Users:- <Heading color="#ec008c">{isUsers.byUserName}</Heading> </Heading>
                                    <Button onClick={toggleAuth}>Logout</Button>
                                </Box>) : null
                            }
                        </GridItem>

                        <GridItem
                            colSpan={1}
                            // bg="red.500"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">
                                <Link to="/">Pluralsight</Link>
                            </Heading>
                        </GridItem>

                        <GridItem
                            colSpan={1}
                            // bg="red.500"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px">
                                <Link to="/allproduct">Skills</Link>
                            </Heading>
                        </GridItem>

                        <GridItem
                            colSpan={1}
                            // bg="red.500"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px"><Link to="/allproduct">Flow</Link>
                            </Heading>

                        </GridItem>


                        <GridItem
                            colSpan={1}
                            // bg="red.500"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px"><Link to="/allproduct">Blog</Link>
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
                        <GridItem colSpan={{ base: 2, md: 2 }} bg="">
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
                            <Heading fontSize="16px">
                                <Link to="/allproduct">Solution</Link>
                            </Heading>
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
                            <Heading fontSize="16px"><Link to="/allproduct">Resources</Link></Heading>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            // bg="blue.300"
                            className={styles.block_3}
                        >
                            <Heading fontSize="16px"><Link to="/allproduct">Individuals</Link></Heading>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            // bg="red.200"
                            className={styles.block_3}
                        ></GridItem>

                        <GridItem
                            colSpan={{ base: 1, md: 2 }}
                            // bg="red.200"
                            className={styles.block_3}
                        >
                            {/* <Button bg="#202020" colorScheme="white" className={styles.contactbtn}>
                                Contac
                            </Button> */}
                            <Button bg="#202020" colorScheme="white" className={styles.contactbtn} onClick={onOpen}>Contact Sales</Button>
                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Contact Sales</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6} bg="#2b2b2b" color="white">
                                        <FormControl>
                                            <FormLabel>First name</FormLabel>
                                            <Input ref={initialRef} placeholder='First name' />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel>Last name</FormLabel>
                                            <Input placeholder='Last name' />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel>Email</FormLabel>
                                            <Input placeholder='Email' />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel>Company Name</FormLabel>
                                            <Input placeholder='Company Name' />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} bg="#ec008c   ">
                                            Submit
                                        </Button>
                                        <Button onClick={onClose}>Cancel</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 1, md: 2 }}
                            // bg="red.200"
                            className={styles.block_3}
                        >

                            <Button colorScheme="" backgroundImage="linear-gradient(to right,#f05a28,#ec008c,#f05a28)" className={styles.contactbtn1}>
                                <Link to="/allproduct">View Plans</Link>
                            </Button>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
