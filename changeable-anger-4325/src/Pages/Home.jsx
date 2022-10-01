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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
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
            alt: "java",
        },
        {
            id: 4,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/csharp-noshadow.png",
            alt: "c++",
        },
        {
            id: 5,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/ruby-noshadow.png",
            alt: "ruby",
        },
        {
            id: 6,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/aws-noshadow.png",
            alt: "aws",
        },
        {
            id: 7,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/azure-noshadow.png",
            alt: "azure",
        },
        {
            id: 8,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/angular-noshadow.png",
            alt: "angular",
        },
        {
            id: 9,
            src: "https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/javascript-noshadow.png",
            alt: "javascript",
        },
    ];

    return (
        // columns={{sm: 2, md: 3}}
        <Box className={styles.block_0} bg="white">
            <Box className={styles.block_1}>
                <Box className={styles.block_11}>
                    <Box className={styles.block_111}>
                        <Box>
                            <Heading maxW="872px" fontSize="56px" mb="45px">Pluralsight empowers you to onboard quicker</Heading>
                        </Box>
                        <Text maxW="522px" fontSize="17px" mb="20px">
                            Develop critical tech skills. Cut cycle times. Build happier,
                            healthier tech teams. And transform your goals into gains. All
                            with Pluralsight.
                        </Text>
                        <Box className={styles.block_111btn}>
                            <Button  >View Plan</Button>
                        </Box>
                    </Box>
                    <Box className={styles.block_112}>
                        <Box>
                            <Image
                                maxW="670px"
                                h="348px"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/woman-in-pink-skills.webp"
                            />
                        </Box>
                        <Box>
                            <Image
                                maxW="670px"
                                h="348px"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/man-in-black-flow.webp"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.block_12}>
                    <Text color="white" fontSize="17px" fontWeight="bold">
                        Organizations we’ve helped:
                    </Text>

                    <Grid
                        templateColumns="repeat(5, 1fr)"
                        gap={6}
                        className={styles.block_121}
                    >
                        <GridItem w="100%" h="10" bg="">
                            <Image
                                maxW="192px"
                                h="24px"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/dell-logo.webp"
                            />
                            =
                        </GridItem>
                        <GridItem w="100%" h="10" bg="">
                            <Image
                                maxW="192px"
                                h="66px"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/ge-logo.webp"
                            />
                        </GridItem>
                        <GridItem w="100%" h="10" bg="">
                            <Image
                                maxW="127px"
                                h="36px"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/fedex-logo.webp"
                            />
                        </GridItem>
                        <GridItem w="100%" h="10" bg="">
                            <Image
                                maxW="118px"
                                h="44px"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/ford-logo.webp"
                            />
                        </GridItem>
                        <GridItem w="100%" h="10" bg="">
                            <Image
                                maxW="62px"
                                h="62px"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/organization-logos/bt-logo.webp"
                            />
                        </GridItem>
                    </Grid>
                </Box>
            </Box>

            <Box className={styles.block_2} mt="">
                <Grid h="493px" templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem
                        colSpan={{ base: 2, sm: 2, md: 1 }}
                        bg=""
                        className={styles.block_21}
                    >
                        <Box>
                            <Heading>Why Pluralsight?</Heading>
                            <Text>
                                Whether you’re an individual looking to learn Python to advance
                                your career or an enterprise team looking to cut cycle times,
                                speed up onboarding, or give your teams the skills to realize
                                your strategies, we remove the challenges and roadblocks slowing
                                you down. We’re advancing the world’s tech workforce, and that
                                starts with making your work more efficient and effective—and
                                giving you more to celebrate.
                            </Text>
                            <Button>See our solution</Button>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="">
                        <Image
                            src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/why-pluralsight.webp"
                            alt="homeblock 2"
                        />
                    </GridItem>
                </Grid>
            </Box>

            <Box className={styles.block_3}>
                <Heading mt="90px" mb="70px">
                    Products
                </Heading>
                <Grid h="765px" templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem
                        colSpan={{ base: 2, sm: 2, md: 1 }}
                        // bg="tomato"
                        maxW="500px"
                        h="auto"
                    >
                        <Box
                            maxW="500px"
                            h="765.08px"
                            bg="white"
                            m="auto"
                            paddingTop="20px"
                            className={styles.block_31}
                        >
                            <Image
                                maxW="460px"
                                h="250px"
                                m="auto"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/skills-badges.webp"
                                alt="1"
                            />

                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/product/logo-skills-black.png" />
                            <Text>
                                Empower yourself or your team to develop the skills critical to
                                delivering on your career goals and initiatives with our tech
                                skills platform.
                            </Text>

                            <Box>
                                <Accordion allowToggle maxW="460px" m="auto" mb="25px">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    View all courses
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}></AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    For individuals
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}></AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Take a skill assessment
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}></AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    View plans
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}></AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>

                            <Button>Explore Skills</Button>
                        </Box>
                    </GridItem>
                    <GridItem
                        colSpan={{ base: 2, sm: 2, md: 1 }}
                        // bg="tomato"
                        maxW="500px"
                        h="auto"
                    >
                        <Box
                            maxW="500px"
                            h="765.08px"
                            bg="white"
                            m="auto"
                            paddingTop="20px"
                            className={styles.block_31}
                        >
                            <Image
                                maxW="460px"
                                h="250px"
                                m="auto"
                                src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/flow-dashboard.png"
                                alt="1"
                            />

                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/product/logo-flow-black.png" />
                            <Text>
                                Empower yourself or your team to develop the skills critical to
                                delivering on your career goals and initiatives with our tech
                                skills platform.
                            </Text>

                            <Box>
                                <Accordion allowToggle maxW="460px" m="auto" mb="25px">
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    View Flow features
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}></AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Take a tour
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}></AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Contact sales
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}></AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    View plans
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}></AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>

                            <Button>Explore Flow</Button>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>

            <Box className={styles.block_4}>
                <Box>
                    <Image
                        ml="20px"
                        pt="20px"
                        pb="15px"
                        src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-revamp/proserv-logo.png"
                    />

                    <Text
                        m="auto"
                        mt="20px"
                        mb="20px"
                        maxW="800px"
                        color="#181818"
                        fontSize="17px"
                        textAlign="justify"
                    >
                        Get more out of Skills and Flow. Customize your team’s learning
                        experiences and drive your most important initiatives forward with
                        our Professional Services.
                    </Text>
                    <Box className={styles.block_41}>
                        <Button>ProServ for SkIlls</Button>
                        <Button>ProServ for Flow</Button>
                    </Box>
                </Box>
            </Box>

            <Box className={styles.block_5} h={{ base: "500px", md: "341px" }}>
                <Box></Box>
                <Box className={styles.block_51}>
                    <Grid
                        h="145.11px"
                        m="auto"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(10, 1fr)"
                        gap={4}
                    >
                        <GridItem
                            rowSpan={{ base: 2 }}
                            colSpan={{ base: 10, sm: 10, md: 3 }}
                        //   bg="blue"
                        >
                            <Heading
                                fontSize="28px"
                                maxW="280px"
                                textAlign="justify"
                                ml="30px"
                                color="white"
                                mb="20px"
                            >
                                Popular Pluralsight Skills topics to learn now
                            </Heading>
                            <Text
                                fontWeight="bold"
                                fontSize="14px"
                                textAlign="left"
                                ml="30px"
                                color="#ec008c"
                            >
                                View all Skills topics{" "}
                            </Text>
                        </GridItem>

                        <GridItem
                            colSpan={{ base: 10, sm: 10, md: 7 }}
                            //   bg="tomato"
                            className={styles.block_511}
                        >
                            <Grid
                                // h='145.11px'
                                m="auto"
                                templateColumns="repeat(9, 1fr)"
                                gap={4}
                                paddingTop="35px"
                            >
                                {popular.map((ele) => (
                                    <GridItem
                                        key={ele.id}
                                        maxW="75px"
                                        h="70px"
                                        colSpan={{ base: 3, sm: 2, md: 1 }}
                                        m="auto"
                                    >
                                        <Image src={ele.src} alt={ele.alt} />
                                    </GridItem>
                                ))}
                            </Grid>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>

            {/* <Box className={styles.block_6}></Box> */}

            <Box className={styles.block_7}>
                <Box mt="100px">
                    <Heading mb="20px" fontSize="48px">
                        What our customers are saying
                    </Heading>
                    <Text mb="50px" bg="">
                        A word from our partners
                    </Text>
                </Box>
                <Box>
                    <Grid maxW="1140px" m="auto" templateColumns="repeat(3, 1fr)" gap={5}>
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

            <Box className={styles.block_8} mt="140px">
                <Grid maxW="1140px" m="auto" templateColumns="repeat(3, 1fr)" gap={5}>
                    <GridItem colSpan={{ base: 3, md: 1 }} className={styles.block81}>
                        <Box>
                            <Image src="https://www.pluralsight.com/content/dam/pluralsight2/one/psone-logo.png" />
                            <Heading>See our growth, progress, and evolution</Heading>
                            <Text>
                                At Pluralsight, we see firsthand every day how technology makes
                                the impossible possible. It’s why Pluralsight One exists: to
                                accelerate our mission of advancing the world’s tech workforce,
                                challenging assumptions about solutions, and creating
                                significant, lasting social impact.
                            </Text>
                            <Button>For non-Profits</Button>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={{ base: 3, md: 2 }} bg="">
                        <Image src="https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022-webp/pluralsight-one-collage.webp" />
                    </GridItem>
                </Grid>
            </Box>

            <Box className={styles.block_9} mt="40px">
                <Box>
                    <Grid h="323px" templateColumns="repeat(2, 1fr)" gap={4}>
                        <GridItem
                            colSpan={{ base: 2, sm: 2, md: 1 }}
                            bg=""
                            className={styles.block_91}
                        >
                            <Image
                                h="323px"
                                borderRadius="20px"
                                src="images/logo-red.png"
                                className={styles.block_9img}
                            />
                            <Box m="auto" color="white">
                                <Heading
                                    fontSize="28px"
                                    mb="20px"
                                    maxW="400px"
                                    lineHeight="35px"
                                >
                                    Ready to get started with Pluralsight Skills?
                                </Heading>
                                <Text fontSize="17px" mb="20px">
                                    Develop better. Deliver better.
                                </Text>
                                <Box className={styles.block_92}>
                                    <Button>View Individual plans</Button>
                                    <Button>View team plans</Button>
                                </Box>
                            </Box>
                        </GridItem>

                        <GridItem
                            colSpan={{ base: 2, sm: 2, md: 1 }}
                            bg=""
                            className={styles.block_91}
                        >
                            <Image
                                h="323px"
                                borderRadius="20px"
                                src="images/logo-blue.png"
                                className={styles.block_9img}
                            />
                            <Box m="auto" color="white">
                                <Heading
                                    fontSize="28px"
                                    mb="20px"
                                    maxW="400px"
                                    lineHeight="35px"
                                >
                                    Ready to get started with Pluralsight Flow?
                                </Heading>
                                <Text fontSize="17px" mb="20px">
                                    Unlock your people. Upgrade your processes.
                                </Text>
                                <Box className={styles.block_92}>
                                    <Button>Contact Sales</Button>
                                </Box>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
