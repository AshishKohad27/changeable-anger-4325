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
    useToast,
} from "@chakra-ui/react";
import React from "react";
import styles from "./CSS/Signin.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const intiState = {
    email: "",
    username: "",
    password: "",
};

export default function Signup() {
    const [signUp, setSignUp] = useState(intiState);
    const [atLeast, setAtLeast] = useState(false);
    const [lower, setLower] = useState(false);
    const [upper, setUpper] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [number, setNumber] = useState(false);
    const [buttonOpen, setButtonOpen] = useState(false);
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUp({ ...signUp, [name]: value });
    };

    // Atleast 8 character
    function atLeastHave() {
        if (signUp.password.length >= 8) {
            return true;
        }
    }
    let resultAtLeast = atLeastHave();
    //   console.log('resultAtLeast:', resultAtLeast)

    // IncludesNumber
    function IncludesNumber() {
        let num = ["1", 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < num.length; i++) {
            if (signUp.password.includes(num[i])) {
                return true;
            }
        }
    }
    let resultNumber = IncludesNumber();
    //   console.log('resultNumber:', resultNumber);

    // IncludesSymbol
    function IncludesSymbol() {
        let symbol = ["@", "#", "$", "*", "^", "&"];
        for (let i = 0; i <= symbol.length; i++) {
            if (signUp.password.includes(symbol[i])) {
                return true;
            }
        }
    }
    let resultSymbol = IncludesSymbol();
    // console.log('resultSymbol:', resultSymbol);

    // IncludesLowerCase
    function IncludesLowerCase() {
        let symbol = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i <= symbol.length; i++) {
            if (signUp.password.includes(symbol[i])) {
                return true;
            }
        }
    }
    let resultLowerCase = IncludesLowerCase();
    // console.log('resultLowerCase:', resultLowerCase);

    // IncludesUpperCase
    function IncludesUpperCase() {
        let symbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i <= symbol.length; i++) {
            if (signUp.password.includes(symbol[i])) {
                return true;
            }
        }
    }
    let resultUpperCase = IncludesUpperCase();
    // console.log('resultUpperCase:', resultUpperCase);

    let resultButtonOpen;
    if (
        resultNumber &&
        resultSymbol &&
        resultLowerCase &&
        resultUpperCase &&
        resultAtLeast
    ) {
        console.log("all Inculdes:", true);
        resultButtonOpen = true;
    }

    //useEffect to handle infinite rendering
    useEffect(() => {
        setAtLeast(resultAtLeast);
        setLower(resultLowerCase);
        setUpper(resultUpperCase);
        setSymbol(resultSymbol);
        setNumber(resultNumber);
        setButtonOpen(resultButtonOpen);
    }, [
        resultAtLeast,
        resultLowerCase,
        resultUpperCase,
        resultSymbol,
        resultNumber,
        buttonOpen,
    ]);
    // console.log(buttonOpen, "buttonOpen");

    const handleClick = () => {
        console.log(signUp);
        toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
        });

        axios({
            method: "POST",
            url: "http://localhost:4325/credentials",
            data: signUp,
        }).then((res) => {
            setSignUp(intiState);
        });
    };

    // style for Authentication
    const styleAuth = {
        authPass: {
            color: "green",
        },
        authRejected: {
            color: "grey",
        },
        authbuttonPass: {
            background: "grey",
        },
        authButtonReject: {
            background: "royalblue",
        },
    };

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
                                type="text"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <Box className={styles.passwordAuth}>
                            <Heading as="h3">Password must:</Heading>
                            <UnorderedList>
                                <ListItem
                                    style={atLeast ? styleAuth.authPass : styleAuth.authRejected}
                                >
                                    Have at least 8 Characters
                                </ListItem>

                                <ListItem
                                    style={symbol ? styleAuth.authPass : styleAuth.authRejected}
                                >
                                    Have at least 1 letter (@,#,$,%,^,&,*)
                                </ListItem>

                                <ListItem
                                    style={number ? styleAuth.authPass : styleAuth.authRejected}
                                >
                                    Have at least 1 number (1,2,3...)
                                </ListItem>

                                <ListItem
                                    style={
                                        lower && upper ? styleAuth.authPass : styleAuth.authRejected
                                    }
                                >
                                    Include both uppercase and lowercase characters
                                </ListItem>
                            </UnorderedList>
                        </Box>

                        <FormControl
                            isRequired
                            w="323.75px"
                            maxW="323.75px"
                            h="67.2px"
                            mt="30px"
                        >
                            <Button
                                disabled={!buttonOpen}
                                colorScheme="blue"
                                w="323.75px"
                                maxW="323.75px"
                                onClick={handleClick}
                            >
                                Sign Up
                            </Button>
                        </FormControl>

                        <Box className={styles.forgetBox}>
                            <Link to="/signin" >Click here? Sign In</Link>
                        </Box>
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
