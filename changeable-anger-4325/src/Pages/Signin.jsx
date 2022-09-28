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
} from "@chakra-ui/react";
import React from "react";
import styles from "./CSS/Signin.module.css";
import { useState, useEffect } from "react";

export default function Singin() {
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
            <FormControl isRequired wMax="323.75px" h="67.2px" mt="20px">
              <FormLabel color="white">Email or Username</FormLabel>
              <Input
                placeholder="Email or Username"
                type="url"
                // name="authorImg"
                // value={authorImg}
                // onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired wMax="323.75px" h="67.2px" mt="30px">
              <FormLabel color="white">Password</FormLabel>
              <Input
                placeholder="Password"
                type="url"
                // name="authorImg"
                // value={authorImg}
                // onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired wMax="323.75px" h="67.2px" mt="30px">
              <Button colorScheme="blue" w="323.75px" wMax="323.75px">
                Sign in
              </Button>
            </FormControl>

            <Box className={styles.forgetBox}>
              <Text>Forget password?</Text>
              <Text>Sign in with company or school</Text>
            </Box>

            <FormControl isRequired w="323.75px" h="67.2px" mt="30px">
              <Button colorScheme="blue" bg="rgba(138,153,168,.25)">
                Create an account
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
