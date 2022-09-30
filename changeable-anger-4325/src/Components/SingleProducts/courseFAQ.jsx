import {
  Box,
  Heading,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./CourseFAQ.module.css";

export default function CourseFAQ() {
  return (
    <Box >
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        m="auto"
        maxW="1349px"
        h="auto"
        bg="#222222"
        color="#ececec"
        mb="50PX"
        padding="50px 10px"
        className={styles.faq}
        // display="flex"
      >
        <Box maxW="555px" h="auto"  className={styles.frequently}>
            <Text>KNOW WHAT YOU'RE GETTING</Text>
            <Heading as="h1">A few frequently asked questions</Heading>
        </Box>
        <Box bg="" maxW="780px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.title}>
                    Will I be charged now for a free trial?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.titleContent}>
                No, we won't charge you at this time. However, there is a $1 USD
                hold that is immediately released. You may see a charge of $1 on
                your account, but it will be reversed. After your trial ends,
                we'll use this information to create your account, so you can
                continue to build new skills with uninterrupted access to our
                platform.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.title}>
                    How does a Pluralsight subscription work?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.titleContent}>
                It's simple. When you sign up, you'll immediately have unlimited
                viewing of thousands of expert courses, paths to guide your
                learning, tools to measure your skills and hands-on resources
                like exercise files. There’s no limit on what you can learn and
                you can cancel at any time.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.title}>
                    Can I cancel anytime?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.titleContent}>
                Yes, you can cancel your subscription at any time. Your
                subscription will auto-renew until you cancel, but why would you
                want to?
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.title}>
                    What are Pluralsight business plans?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.titleContent}>
                Businesses of all sizes - from small shops to large enterprises
                - purchase these plans, with other tools to effectively grow and
                measure skills and track progress. In addition to all the
                features that come with personal plans, business plans include
                easy group management, in-depth reporting on usage and skills
                growth, SSO and more.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.title}>
                    How long is my personal free trial?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={styles.titleContent}>
                When you sign up for a personal trial, you will receive 10 days
                and 200 minutes of viewing. If your trial is not canceled within
                the 10 days, the trial will convert to a paid subscription that
                will auto-renew until the subscription is canceled. Click here
                for more information on our trial.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
