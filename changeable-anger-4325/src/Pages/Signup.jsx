import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./CSS/Signin.module.css";

export default function Singup() {


    

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
            <FormControl isRequired wMax="323.75px" h="67.2px" mt="20px">
              <FormLabel color="white">Email</FormLabel>
              <Input
                placeholder="Email"
                type="url"
                // name="authorImg"
                // value={authorImg}
                // onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired wMax="323.75px" h="67.2px" mt="30px">
              <FormLabel color="white">Username</FormLabel>
              <Input
                placeholder="Username"
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

            <FormControl
              isRequired
              w="323.75px"
              wMax="323.75px"
              h="67.2px"
              mt="30px"
            >
              <Button colorScheme="blue" w="323.75px" wMax="323.75px">
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
