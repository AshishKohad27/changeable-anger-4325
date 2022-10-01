import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import styles from "./CSS/AllProductDisplay.module.css";
import React, { useState, useEffect, useReducer, useContext } from "react";
import { BsFillClockFill, BsStarFill } from "react-icons/bs";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";
import PluralsightReducer from "../Reducer/PluralsightReducer";
import { Error, Loading, Success } from "../Reducer/PluralsightAction";
import { FilterContext } from "../Context/DataContext/FilterContextProvider";

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
  //FilterContext
  const { isSideFilter } = useContext(FilterContext);
  // Reducer
  const [state, dispatch] = useReducer(PluralsightReducer, {
    loading: false,
    error: false,
    success: false,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [resetData, setResetData] = useState([]);
  const [page, setPage] = useState(
    getCurrentPageUrl(searchParams.get("page")) || 1
  );

  const [limit, setLimit] = useState(4);
  const [sort, setSort] = useState("rating");

  const fetchCoursesDataAndUpdate = (page, limit, orderP, sort) => {
    dispatch(Loading);
    axios
      .get(
        `http://localhost:4325/courses?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}&q=${filterD}`
      )
      .then((res) => {
        setData(res.data);
        setResetData(res.data);
        dispatch(Success);
      })
      .catch((err) => {
        console.log("axios", err);
        dispatch(Error);
      })
      .finally(() => console.log(`Call Completed`));
  };

  useEffect(() => {
    fetchCoursesDataAndUpdate(page, limit, order, sort, filterD);
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

  const SortBaseOnLevel = () => {
    console.log(isSideFilter.category);

    if (isSideFilter.category === "level") {
      const dataAfterSortlevel = data.filter(
        (ele) => ele.level === isSideFilter.value
      );
      setData(dataAfterSortlevel);
    } else if (isSideFilter.category === "category") {
      const dataAfterSortlevel = data.filter(
        (ele) => ele.category === isSideFilter.value
      );
      setData(dataAfterSortlevel);
    }
  };
  console.log("dataAfterSortlevel:", data);
  console.log("back of data--->:", resetData);

  const SortBaseOnLevelReset = () => {
    setData(resetData);
    isSideFilter.value = "";
    isSideFilter.category = "";
  };

  // Loading

  if (state.loading) {
    // 
    //working
    return (
      // <Box maxW="900px" h="auto" bg="white">
        <Spinner
          margin="auto"
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      // </Box>
    );
  }

  return (
    <Box h="auto" bg="">

      <Box className={styles.block_0Filter}>
        {" "}
        <Button onClick={SortBaseOnLevel}>Add Filter</Button>
        <Button onClick={SortBaseOnLevelReset}>
          {" "}
          <ImCross /> Clear
        </Button>
      </Box>
      <Box
        className={styles.block_0}
        maxW="857px"
      // bg="green.300"
      >
        {data.map((ele) => (
          <Box
            key={ele.id}
            w="857px"
            // maxWidth="857px"
            maxW="857px"
            // h="134.98px"
            // bg="teal.500"
            padding="10px"
            paddingLeft="20px"
          // border="1px solid black"
          >
            <Heading as="h3">{ele.title}</Heading>
            <Text>by {ele.creator}</Text>

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 4 }}
              spacing="40px"
              // bg="red.500"
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

      <Box className={styles.block_page}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>

        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Box>
    </Box>
  );
}
