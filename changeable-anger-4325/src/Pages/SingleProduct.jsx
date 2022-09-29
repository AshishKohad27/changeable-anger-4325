import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import courseFAQ from "../Components/SingleProducts/courseFAQ";
import tryForFree from "../Components/SingleProducts/tryForFree";

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
    },[])
    console.log('useParams coursesDetails:', coursesDetails)

    return (
      <Box>
hello
      </Box>
    )
}