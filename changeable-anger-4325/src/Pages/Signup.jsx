import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import styles from "./CSS/Signin.module.css";
import { useState, useEffect } from "react";
import Singin from "./Signin";

const intiState = {
    email: "",
    username: "",
    password: "",
};

export default function Signup() {
    const [signUp, setSignUp] = useState(intiState);
    const [lower, setLower] = useState(false);

    const handleChange = (e) => {
        // setSignUp(e.target.value);

        // console.log("e.target.value:-->", signUp);
        const { name, value } = e.target;
        setSignUp({ ...signUp, [name]: value });
    };
    // let result = signUp.email.includes("@", "#");
    // console.log("result:", result);
    // if (signUp.email.length >= 8) {
    //     console.log("lengthL:", signUp.email.length);
    // }
    // IncludesNumber
    function IncludesNumber() {
        let num = ["1", 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < num.length; i++) {
            if (signUp.username.includes(num[i])) {
                return true;
            }
        }
    };
    let resultNumber = IncludesNumber();
    // console.log('resultNumber:', resultNumber);

    // IncludesSymbol
    function IncludesSymbol() {
        let symbol = ["@", "#", "$", "*", "^", "&"];
        for (let i = 0; i <= symbol.length; i++) {
            if (signUp.username.includes(symbol[i])) {
                return true;
            }
        }
    };
    let resultSymbol = IncludesSymbol();
    // console.log('resultSymbol:', resultSymbol);

    // IncludesLowerCase
    function IncludesLowerCase() {
        let symbol = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i <= symbol.length; i++) {
            if (signUp.username.includes(symbol[i])) {
                return true;
            }
        }
    };
    let resultLowerCase = IncludesLowerCase();
    console.log('resultLowerCase:', resultLowerCase);


    // IncludesUpperCase
    function IncludesUpperCase() {
        let symbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i <= symbol.length; i++) {
            if (signUp.username.includes(symbol[i])) {
                return true;
            }
        }
    };
    let resultUpperCase = IncludesUpperCase();
    // console.log('resultUpperCase:', resultUpperCase);

    if (resultNumber && resultSymbol && resultLowerCase && resultUpperCase) {
        console.log("all Inculdes:", true);
    }

    //useEffect to handle infinite rendering
    useEffect(() => {
        setLower(resultLowerCase);
    }, [resultLowerCase])


    const handleClick = () => {
        console.log(signUp);

        //   axios({
        //     method: "POST",
        //     url: " http://localhost:4325/courses",
        //     data: course,
        //   }).then((res) => {
        //     setCourse(intiState);
        //   });
    };

    // style for Authentication
    const styleAuth = {
        authPass: {
            color: "green",
        },
        authRejected: {
            color: "grey",
        },
    }

    const { email, username, password } = signUp;
    return (
        <Box bg="#0d0f12" m="auto">
            <Grid
                h="200px"
                margin="auto"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(10, 1fr)"
                gap={0}
            >
                <GridItem
                    colSpan={{ base: 10, sm: 10, md: 4 }}
                    bg="#0d0f12"
                    rowSpan={0}
                    className={styles.loginLeft}
                >
                    <Image
                        src="https://app.pluralsight.com/id/img/login-logo.png"
                        alt="logo"
                    />

                    <Heading mt="10px" color="white">
                        Sign Up
                    </Heading>

                    <Box>
                        <FormControl isRequired maxW="323.75px" h="67.2px" mt="20px">
                            <FormLabel color="white">Email</FormLabel>
                            <Input
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl isRequired maxW="323.75px" h="67.2px" mt="30px">
                            <FormLabel color="white">Username</FormLabel>
                            <Input
                                placeholder="Username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl isRequired maxW="323.75px" h="67.2px" mt="30px">
                            <FormLabel color="white">Password</FormLabel>
                            <Input
                                placeholder="Password"
                                type="url"
                            // name="authorImg"
                            // value={authorImg}
                            // onChange={handleChange}
                            />
                        </FormControl>

                        <Box>
                            <Text as="h5" style={lower ? styleAuth.authPass : styleAuth.authRejected} >Have at least 8 Characters</Text>
                            <Text as="h5" style={lower ? styleAuth.authPass : styleAuth.authRejected} >Have at least 1 letter (a,b,c,..)</Text>
                            <Text as="h5" style={lower ? styleAuth.authPass : styleAuth.authRejected} >Have at least1 letter (a,b,c,..)</Text>
                            <Text as="h5" style={lower ? styleAuth.authPass : styleAuth.authRejected} >Have at least1 letter (a,b,c,..)</Text>
                            <Text as="h5" style={lower ? styleAuth.authPass : styleAuth.authRejected} >Have at least1 letter (a,b,c,..)</Text>
                        </Box>
                        <UnorderedList>
                            <ListItem style={lower ? styleAuth.authPass : styleAuth.authRejected} >Have at least 8 Characters</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>

                        <FormControl
                            isRequired
                            w="323.75px"
                            maxW="323.75px"
                            h="67.2px"
                            mt="30px"
                        >
                            <Button colorScheme="blue" w="323.75px" maxW="323.75px">
                                Sign Up
                            </Button>
                        </FormControl>

                        <Box className={styles.forgetBox}></Box>
                    </Box>

                    <Box w="full" className={styles.copyRight}>
                        <Text>
                            Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved
                        </Text>
                        <Text>Terms of Use | Privacy Policy</Text>
                    </Box>
                </GridItem>

                <GridItem
                    colSpan={{ base: 10, sm: 10, md: 6 }}
                    className={styles.loginRight}
                >
                    <Box>
                        <Image
                            src="https://www.pluralsight.com/content/dam/pluralsight2/login/bg-gtm-2020.png"
                            alt="loginRightImg"
                        />
                    </Box>

                    <Box>
                        <Image
                            src="https://www.pluralsight.com/content/dam/pluralsight2/login/login-h1.png"
                            alt=""
                        />
                        <Button>Try for free</Button>
                    </Box>

                    <Box>
                        <button>Try for free</button>
                    </Box>

                    <Box>
                        <Image src="https://www.pluralsight.com/content/dam/pluralsight2/logos/logo-build-better.png" />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}
