import {
  Box,
  GridItem,
  Heading,
  Grid,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Checkbox,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Box className={styles.block_0}>
      <Box className={styles.block_1}>
        <Box>
          <SimpleGrid
            columns={{ sm: 2, md: 4 }}
            // spacing="40px"
            className={styles.block_2}
          >
            {/* <Boxeight='80px'> */}
            <Grid templateRows="repeat(8, 1fr)">
              <GridItem w="100%">
                <Heading as="h2">Support</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Contact</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Help Center</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">IP Site Map</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2" v>
                  Site Map
                </Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Download Pluralsight</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Skills Plans</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Flow Plans</Heading>
              </GridItem>
            </Grid>
            {/* </Box> */}

            {/* <Boxeight='80px'> */}
            <Grid templateRows="repeat(8, 1fr)">
              <GridItem w="100%">
                <Heading as="h2">Community</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Guides</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Teach</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Partner</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2" v>
                  Affiliate Partners
                </Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">PluralsightOne.org</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Authors</Heading>
              </GridItem>
            </Grid>
            {/* </Box> */}

            {/* <Boxeight='80px'> */}
            <Grid templateRows="repeat(8, 1fr)">
              <GridItem w="100%">
                <Heading as="h2">Company</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">About Us</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Careers</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Newsroom</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2" v>
                  Resources
                </Heading>
              </GridItem>
            </Grid>
            {/* </Box> */}

            {/* <Boxeight='80px'> */}
            <Grid templateRows="repeat(8, 1fr)">
              <GridItem w="100%">
                <Heading as="h2">Industries</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Public Sector</Heading>
              </GridItem>

              <GridItem w="100%">
                <Heading as="h2">Non-Profit</Heading>
              </GridItem>
            </Grid>
            {/* </Box> */}
          </SimpleGrid>
        </Box>
        <Box className={styles.block_4}>
          <Heading as="h2">Newsletter</Heading>
          <Heading as="h2">
            Sign up with your email to join our mailing list.
          </Heading>
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <Checkbox defaultChecked>
              I would like to receive emails from Pluralsight:
            </Checkbox>
          </Box>
          <Box>
            <Button colorScheme="blue">Subscribe</Button>
          </Box>

          <Box>
            <Box>
              <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-fb.png" />
            </Box>
            <Box>
              <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-twitter.png" />
            </Box>
            <Box>
              <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-instagram.png" />
            </Box>
            <Box>
              <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-linkedin.png" />
            </Box>
            <Box>
              <Image src="https://www.pluralsight.com/content/dam/social-icons/social-icon-yt.png" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.block_5}>
        <Box>
          <Image src="https://www.pluralsight.com/content/dam/logo/pluralsight-footer-logo-icon.png" />
          <Text>
            Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved
          </Text>
        </Box>
        <Box>
          <Image src="https://www.pluralsight.com/content/dam/social-icons/pluralsight-footer-globe-wireframe.png" />
          <Text>Deutsch</Text>
          <Text>English</Text>
          <Text>French</Text>
        </Box>
        <Box>
          <Text>Terms of Use</Text>
          <Text>Privacy Notice</Text>
          <Text>Modern Slavery Act Transparency Statement</Text>
        </Box>
      </Box>
    </Box>
  );
}
