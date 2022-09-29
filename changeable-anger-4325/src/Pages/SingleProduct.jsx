import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseFAQ from "../Components/SingleProducts/CourseFAQ";
import TryForFree from "../Components/SingleProducts/TryForFree";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
}

export default function SingleProduct() {
    const { data_id } = useParams();
    const [coursesDetails, setcoursesDetails] = useState({});

    useEffect(() => {
        getData(`  http://localhost:4325/courses/${data_id}`).then((res) =>
            setcoursesDetails(res)
        )
    }, [])
    console.log('useParams coursesDetails:', coursesDetails)

    return (
        <Box>
            <SimpleGrid columns={{ sm: 1, md: 2 }}  m="auto" maxW="1349px" h="800px" bg="teal.500">
                <Box></Box>
                <Box bg=''> <TryForFree /></Box>
                {/* <TryForFree /> */}
            </SimpleGrid>
            <CourseFAQ/>
        </Box>
    )
}