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
  Text,
  useFormControlStyles,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import styles from "./CSS/Signin.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

const intiUsers = {
  username: "",
  password: "",
};

export default function Singin() {
  const [signIn, setSignIn] = useState([]);
  const [comparingUsers, setComparingUsers] = useState(intiUsers);
  const toast = useToast();
  const { isAuth, toggleAuth, isUsers } = useContext(AuthContext);
  // console.log('isUsers:', isUsers);

  const fetchTodosDataAndUpdate = () => {
    axios
      .get(`https://pularsight-json-server.onrender.com/credentials`)
      .then((res) => setSignIn(res.data)) //-->Promise completed here
      .catch((err) => console.log("axios error:", err)) //-->any error show here
      .finally(() => console.log("Call Completed")); //--> when data completed then it show on console
    //
  };

  useEffect(() => {
    fetchTodosDataAndUpdate();
  }, []);

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    setComparingUsers({ ...comparingUsers, [name]: value });
  };

  const handleClick = () => {
    let checkingData = false;

    if (comparingUsers.username === "" && comparingUsers.password === "") {
      let text = "Please Enter your Username and Password";
      let color = "orange.300";
      let symbol = <MdError fontSize="18px" />
      displayAuthState(color, text, symbol);
      return;
    }

    signIn.forEach((ele) => {//warning
      if (ele.username === comparingUsers.username && ele.password === comparingUsers.password) {
        console.log("i am present username");
        checkingData = true;
        toggleAuth();
        isUsers.byPassWord = ele.password;
        isUsers.byUserName = ele.username;
      }
    });

    // console.log("checkingData:", checkingData);

    if (checkingData) {//Successfully logged in
      let color = "green.300";
      let text = "You are Successfully Login";
      let symbol = <BsFillCheckCircleFill fontSize="18px" />
      displayAuthState(color, text, symbol);
    }
    else {//Incoreect logged in
      let color = "red.300";
      let text = "Please fill Correct Credentials";
      let symbol = <MdError fontSize="18px" />
      displayAuthState(color, text, symbol);
    }

    setComparingUsers(intiUsers);
  };

  const displayAuthState = (color, text, symbol) => {
    toast({
      position: "top",
      render: () => (
        <Box color="black" fontWeight="bold" display="flex" justifyContent="center" alignContent="center" gap="10px" borderRadius="10px" p={4} bg={color}>
          {symbol}
          <Heading fontSize="16px">{text}</Heading>
        </Box>
      ),
    });
  };

  // console.log('signIn:', signIn)
  const { username, password } = comparingUsers;
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
            Sign In
          </Heading>

          <Box>
            <FormControl isRequired maxW="323.75px" h="67.2px" mt="20px">
              <FormLabel color="white">Email or Username</FormLabel>
              <Input
                placeholder="Email or Username"
                type="url"
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
                name="password"
                value={password}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired maxW="323.75px" h="67.2px" mt="30px">
              <Button
                colorScheme="blue"
                w="323.75px"
                maxW="323.75px"
                onClick={handleClick}
              >
                Sign in
              </Button>
            </FormControl>

            <Box className={styles.forgetBox}>
              <Text>Forget password?</Text>
              <Text>Sign in with company or school</Text>
            </Box>

            <FormControl isRequired w="323.75px" h="67.2px" mt="30px">
              <Button colorScheme="blue" bg="rgba(138,153,168,.25)">
                <Link to="/signup"> Create an account</Link>
              </Button>
            </FormControl>
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
            {/* <Button>Try for free</Button> */}
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
