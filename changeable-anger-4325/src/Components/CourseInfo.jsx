import { Box, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { BsClockFill, BsFillBarChartLineFill, BsFillCalendarMinusFill } from "react-icons/bs"
import { MdOutlineCategory, MdOutlineSubject } from "react-icons/md"

export default function CourseInfo({coursesDetails}){
    console.log('coursesDetails:', coursesDetails)
    return (
        <Box mt="60px">
        <Heading m="20px">Course info</Heading>
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th>Info</Th>
                <Th isNumeric>Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Rating</Td>

                <Td isNumeric >{coursesDetails.ratingStars}({coursesDetails.rating})</Td>
              </Tr>
              <Tr>
                <Td>Level</Td>

                <Td isNumeric display="flex" justifyContent="end"  gap="10px" >{coursesDetails.level}<BsFillBarChartLineFill/></Td>
              </Tr>
              <Tr>
                <Td>Updated</Td>

                <Td isNumeric display="flex" justifyContent="end" gap="10px" >{coursesDetails.update}<BsFillCalendarMinusFill/></Td>
              </Tr>
              <Tr>
                <Td>Duration</Td>

                <Td isNumeric display="flex" justifyContent="end" gap="10px" >{coursesDetails.duration}<BsClockFill/></Td>
              </Tr>
              <Tr>
                <Td>Subject</Td>

                <Td isNumeric display="flex" justifyContent="end" gap="10px" >{coursesDetails.subject}<MdOutlineSubject/></Td>
              </Tr>
              <Tr>
                <Td>Category</Td>

                <Td isNumeric display="flex" justifyContent="end" gap="10px" >{coursesDetails.category}<MdOutlineCategory/></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    )
}