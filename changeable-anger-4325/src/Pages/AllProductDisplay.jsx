import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./CSS/AllProductDisplay.module.css";
// import { getCourses } from "./AllProductApi";
import { useState } from "react";
import { useEffect } from "react";
import { BsFillClockFill, BsStarFill } from "react-icons/bs";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";

const getCurrentPageUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    return 1;
  }
  if (!value) {
    return 1;
  }
  return value;
};

export default function AllProductDisplay({ order, filterD }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(
    getCurrentPageUrl(searchParams.get("page")) || 1
  );

  const [limit, setLimit] = useState(3);
  const [sort, setSort] = useState("");

  const fetchCoursesDataAndUpdate = (page, limit, orderP, sort) => {
    axios
      .get(
        `http://localhost:4325/courses?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}&q=${filterD}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log("axios", err))
      .finally(() => console.log(`Call Completed`));
  };

  useEffect(() => {
    fetchCoursesDataAndUpdate(
      page,
      limit,
      order,
      sort,
      filterD
    );
  }, [page, limit, order, sort, filterD]);

  useEffect(() => {
    setSearchParams({
      page,
      limit,
      order,
      sort,
      filterD,
    });
  }, [page, limit, order, sort, filterD]);

  return (
    <Box>
      <Box className={styles.block_0}>
        {data.map((ele) => (
          <Box
            key={ele.id}
            maxW="857px"
            h="134.98px"
            bg="teal.500"
            padding="10px"
            border="1px solid black"
          >
            <Heading as="h3">{ele.title}</Heading>
            <Text>by {ele.creator}</Text>

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 4 }}
              spacing="40px"
              className={styles.block_1}
            >
              <Box>
                <Text>{ele.duration}</Text>
                <BsFillClockFill color="white" />
              </Box>

              <Box>
                <Text>{ele.level}</Text>
                <Image src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/course/level.png" />
              </Box>

              <Box>
                <Text>{ele.ratingStars}</Text>
                <Text>{ele.rating} </Text>
              </Box>

              <Box>
                <NavLink to={`/courses/${ele.id}`}>Mores Details</NavLink>
              </Box>
            </SimpleGrid>
          </Box>
        ))}
      </Box>

      <Box>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>

        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Box>
    </Box>
  );
}
