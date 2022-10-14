import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Grid,
  Image,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  BsClockFill,
  BsFillBarChartLineFill,
  BsFillCalendarMinusFill,
  BsFillCaretRightFill,
} from "react-icons/bs";
import React, { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";

import styles from "./CSS/SingleProduct.module.css";
import { MdOutlineCategory, MdOutlineSubject } from "react-icons/md";
import CourseInfo from "../Components/CourseInfo";
import SkillIQ from "../Components/SingleProducts/SkillIQ";
import PluralsightReducer from "../Reducer/PluralsightReducer";
import TryForFree from "../Components/SingleProducts/TryForFree";
import CourseFAQ from "../Components/SingleProducts/CourseFAQ";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

export default function SingleProduct() {
  const { data_id } = useParams();
  const [coursesDetails, setcoursesDetails] = useState({});

  useEffect(() => {
    getData(`https://pularsight-json-server.onrender.com/courses/${data_id}`).then((res) =>
      setcoursesDetails(res)
    );
  }, []);
  // console.log("useParams coursesDetails:", coursesDetails);

  return (
    <Box className={styles.block_0}>
      <Box>
        <Box className={styles.block_B1}>
          <Text>
            <Link to="/">Home</Link>
          </Text>
          <BsFillCaretRightFill />
          <Text>
            <Link to="/allproduct">Browser</Link>
          </Text>
          <BsFillCaretRightFill />
          <Text>
            <Link to="/allproduct">Course</Link>
          </Text>
        </Box>
      </Box>
      <Box className={styles.block_1}>
        <Box>
          <Grid
            maxW="1348px"
            m="auto"
            // templateRows='repeat(2,1fr)'
            templateColumns="repeat(12, 1fr)"
            gap={0}
          >
            <GridItem colSpan={{ sm: 12, md: 8 }} bg="">
              <Box maxW="778px" bg="" className={styles.block_S1}>
                <Box>{coursesDetails.title}</Box>
                <Box>
                  <Image src={coursesDetails.authorImg} />
                  <Heading as="h1">{coursesDetails.creator}</Heading>
                  <Heading as="h1">{coursesDetails.ratingStars}</Heading>
                </Box>
                <Box>
                  <Text>{coursesDetails.about}</Text>
                </Box>
                <Box>
                  <Button>
                    <BsFillCaretRightFill />
                    <Text>PREVIEW THIS COURSE</Text>
                  </Button>
                  <CourseInfo coursesDetails={coursesDetails} />
                </Box>
                <Box maxW="778px">
                  <Heading as="h1">What you'll learn</Heading>
                  <Text>{coursesDetails.whatYouWillLearn}</Text>
                </Box>
              </Box>
            </GridItem>

            <GridItem colSpan={{ sm: 0, md: 4 }} bg="">
              <Box bg="#181818">
                <TryForFree />
                {/* <CourseInfo coursesDetails={coursesDetails} /> */}
                <SkillIQ />
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box className={styles.block_2} m="50px">
          <CourseFAQ />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
// background: linear-gradient(to bottom,#26c1e1 0,#26c1e1 33%,#86ce21 33%,#86ce21 33%,#86ce21 68%,#ffc200 68%,#ffc200 100%);
