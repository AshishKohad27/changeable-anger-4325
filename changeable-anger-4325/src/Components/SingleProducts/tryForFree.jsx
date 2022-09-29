import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./TryForFree.module.css";

export default function TryForFree() {
  return (
    <Box m="auto"    className={styles.block_0}>
      <Box className={styles.block_1} >
        <Heading>Try for free</Heading>
        <Text>
          Get this course plus top-rated picks in tech skills and other popular
          topics.
        </Text>
        <Button w="355px" maxW="355px" h="52px">GET STARTED</Button>
        <Text>₹ 1,499 per month after 10 day trial</Text>
      </Box>

      <Box className={styles.block_2}>
        <Heading>Your 10 day Standard free trial includes</Heading>
        <Box>
          <Box>
            <Image src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/browse/pink-icons/courses-icon.png" />
          </Box>
          <Box className={styles.block_21}>
            <Heading>Expert-led courses</Heading>
            <Text>
              Keep up with the pace of change with thousands of expert-led,
              in-depth courses.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className={styles.block_3}>
        <Text>For teams</Text>
        <Text>
          <span>Give up to 10 users</span> access to our full library including
          this course <span>free for 14 days</span>
        </Text>
      </Box>
    </Box>
  );
}
