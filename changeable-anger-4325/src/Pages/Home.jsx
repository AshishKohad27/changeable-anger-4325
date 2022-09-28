import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    SimpleGrid,
    Spacer,
    Text,
} from "@chakra-ui/react";
import styles from "./CSS/Home.module.css";
import React from "react";
import { NavLink } from "react-router-dom";


export default function Home() {
    return (
        // columns={{sm: 2, md: 3}}
        <Box className={styles.block_01}>
            <SimpleGrid
                columns={{ sm: 1, md: 1 }}
                spacing="10px"
                className={styles.block_1}
            >
                <Box className={styles.block_11}>
                    <Box width="80%" >
                        <Heading as="h1" width="80%">Pluralsight empowers you to</Heading>
                        <Heading as="h1">build tech fluency</Heading>
                        {/* <Text>streamline processes</Text>
                        <Text>upskill teams</Text>
                        <Text>deliver faster</Text>
                        <Text>collaborate better</Text>
                        <Text>streamline processes</Text>
                        <Text>innovate smarter</Text> */}
                    </Box>
                    <Box>
                        <Text>
                            Develop critical tech skills. Cut cycle times. Build happier,
                            healthier tech teams. And transform your goals into gains. All
                            with Pluralsight.
                        </Text>
                    </Box>
                    <button>
                        <NavLink></NavLink>
                        View plans
                    </button>
                </Box>
                <Box className={styles.block_12}>
                    <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }}>
                        <Box>
                            <Image src='https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/woman-in-pink-skills.webp' alt="skills" />
                        </Box>
                        <Box>
                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/man-in-black-flow.webp" alt="Flow"></Image>
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
          
        </Box>
    );
}
