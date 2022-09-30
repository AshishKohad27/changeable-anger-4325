import {
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    Spacer,
    Text,
} from "@chakra-ui/react";
import styles from "./CSS/Home.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Home() {
    const customers = [
        {
            id: 1,
            title:
                "“As a bank, we have a commitment to ensure that we have the right skills and competencies to become a truly digital organization.”",
            author: "Helen Tippell",
            post: "IB Technology Chief Architect and CTO, Deutsche Bank",
            image:
                "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/customer-avatars/deutsche-bank-avatar.webp",
        },
        {
            id: 2,
            title:
                "“This really has changed the game, in terms of the way we view the delivery of technology and how we can work with our business users to try these ideas and then move forward.”",
            author: "Terry Learmouth",
            post: "EMEA CIO, Nomura",
            image:
                "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/customer-avatars/nomura-avatar.webp",
        },
        {
            id: 3,
            title:
                "“We started streamlining so there’s more time for developers to actually focus on their task. The biggest surprise was the change in coding days—it jumped from 2.3 to 3 almost immediately.”",
            author: "Abesh Rajasekharan",
            post: "Director of Technology, Thompson Reuters",
            image:
                "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/customer-avatars/thomson-reuters-avatar.webp",
        },
    ];
    const popular = [
        {
            id: 1,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/python-noshadow.png",
            alt: "python",
        },
        {
            id: 2,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/react-noshadow.png",
            alt: "react",
        },
        {
            id: 3,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/java-noshadow.png",
            alt: "java"
        },
        {
            id: 4,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/csharp-noshadow.png",
            alt: "c++"
        },
        {
            id: 5,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/ruby-noshadow.png"
            , alt: "ruby"
        },
        {
            id: 6,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/aws-noshadow.png"
            , alt: "aws"
        },
        {
            id: 7,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/azure-noshadow.png"
            , alt: "azure"
        },
        {
            id: 8,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/angular-noshadow.png"
            , alt: "angular"
        },
        {
            id: 9,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/javascript-noshadow.png"
            , alt: "javascript"
        },
    ];

    return (
        // columns={{sm: 2, md: 3}}
        <Box className={styles.block_0}>
            {/* <SimpleGrid
                columns={{ sm: 1, md: 1 }}
                spacing="10px"
                className={styles.block_1}
            >
                <Box className={styles.block_11}>
                    <Box width="80%" >
                        <Heading as="h1" width="80%">Pluralsight empowers you to</Heading>
                        <Heading as="h1">build tech fluency</Heading>
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
            </SimpleGrid> */}

            <Box className={styles.block_2}>
                <Grid h="493px" templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="tomato" />
                    <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="tomato" />
                </Grid>
            </Box>

            <Box className={styles.block_3}>
                <Grid h="765px" templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="tomato" />
                    <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="tomato" />
                </Grid>
            </Box>

            <Box className={styles.block_4}>
                <Box></Box>
            </Box>

            <Box className={styles.block_5} h={{base:"500px" ,md:"341px"}}>
                <Box></Box>
                <Box className={styles.block_51}>
                    <Grid h="145.11px" m="auto" templateRows="repeat(2, 1fr)" templateColumns="repeat(10, 1fr)" gap={4}>
                        <GridItem rowSpan={{base:2}} colSpan={{ base: 10, sm: 10, md: 3 }} bg="blue" />
                        <GridItem
                            colSpan={{ base: 10, sm: 10, md: 7 }}
                            bg="tomato"
                            className={styles.block_511}
                        >
                            <Grid
                                // h='145.11px'
                                m="auto"
                                templateColumns="repeat(9, 1fr)"
                                gap={4}
                                paddingTop="35px"
                            >
                                {
                                    popular.map((ele) => (
                                        <GridItem
                                            key={ele.id}
                                            maxW="75px"
                                            h="70px"
                                            colSpan={{ base: 3, sm: 2, md: 1 }}
                                            m="auto"
                                        >
                                            <Image
                                                src={ele.src}
                                                alt={ele.alt}
                                            />
                                        </GridItem>
                                    ))
                                }
                            </Grid>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>

            {/* <Box className={styles.block_6}></Box> */}

            <Box className={styles.block_7}>
                <Box>
                    <Grid
                        maxW="1140px"
                        m="auto"
                        templateColumns="repeat(3, 1fr)"
                        gap={5}
                    >
                        {customers.map((ele) => (
                            <GridItem
                                key={ele.id}
                                colSpan={{ base: 3, sm: 3, md: 1 }}
                                className={styles.block_71}
                            >
                                <Box>
                                    <Image src={ele.image} alt="" />
                                </Box>
                                <Box>{ele.title}</Box>
                                <Box>{ele.author}</Box>
                                <Box>{ele.post}</Box>
                            </GridItem>
                        ))}

                        {/* <GridItem colSpan={{ base: 3, sm: 3, md: 1 }} bg="red" ></GridItem>
                        <GridItem colSpan={{ base: 3, sm: 3, md: 1 }} bg="red" ></GridItem> */}
                    </Grid>
                </Box>
            </Box>

            <Box className={styles.block_8}></Box>

            <Box className={styles.block_9}>
                <Box>
                <Grid h="323px" templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="tomato" >
                        </GridItem>
                    <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="tomato" ></GridItem>
                </Grid>
                </Box>
            </Box>
<Footer/>
        </Box>
    );
}
