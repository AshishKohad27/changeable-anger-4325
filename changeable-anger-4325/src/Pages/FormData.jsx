import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Grid,
  GridItem,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillClockFill, BsStarFill } from "react-icons/bs";

const intiState = {
  title: "",
  subject: "",
  category: "",
  creator: "",
  duration: "",
  level: "",
  update: "",
  rating: "",
  ratingStars:"",
  about: "",
  whatYouWillLearn: "",
  authorImg:"",
};
export default function FormData() {
  const [course, setCourse] = useState(intiState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleClick = () => {
    console.log(course);

    axios({
      method: "POST",
      url: " http://localhost:4325/courses",
      data: course,
    }).then((res) => {
      setCourse(intiState);
    });
  };

  const {
    title,
    subject,
    category,
    creator,
    duration,
    level,
    update,
    rating,
    ratingStars,
    about,
    whatYouWillLearn,
    authorImg,
  } = course;
  return (
    <Grid
      m="auto"
      w="800px"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    >
      <GridItem colSpan={3} bg="">
        <Heading>Form</Heading>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Category"
            name="category"
            value={category}
            onChange={handleChange}
          >
            <option>Architecture & construction</option>
            <option>Business professional</option>
            <option>Creative professional</option>
            <option>Data professional</option>
            <option>IT ops</option>
            <option>Manufacturing & design</option>
            <option>Information & cyber security</option>
            <option>Web development</option>
          </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl isRequired>
          <FormLabel>Subject</FormLabel>
          <Input
            placeholder="Subject"
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
          />
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl isRequired>
          <FormLabel>Creator</FormLabel>
          <Input
            placeholder="Creator"
            type="text"
            name="creator"
            value={creator}
            onChange={handleChange}
          />
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl isRequired>
          <FormLabel>Duration</FormLabel>
          <Input
            placeholder="Duration"
            type="text"
            name="duration"
            value={duration}
            onChange={handleChange}
          />
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl>
          <FormLabel>Level</FormLabel>
          <Select
            placeholder="Level"
            name="level"
            value={level}
            onChange={handleChange}
          >
            <option>Advance</option>
            <option>Intermidate</option>
            <option>Beginner</option>
          </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl isRequired>
          <FormLabel>Update</FormLabel>
          <Input
            placeholder="Date of Creation"
            type="date"
            name="update"
            value={update}
            onChange={handleChange}
          />
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl isRequired>
          <FormLabel>Rating</FormLabel>
          <Input
            placeholder="Rating"
            type="number"
            name="rating"
            value={rating}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Rating Stars</FormLabel>
          <Select
            placeholder="Rating Stars"
            name="ratingStars"
            value={ratingStars}
            onChange={handleChange}
          >
            <option>⭐️</option>
            <option>⭐️⭐️</option>
            <option>⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️⭐️</option>
          </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormControl isRequired>
          <FormLabel>Author Image</FormLabel>
          <Input
            placeholder="Author Image"
            type="url"
            name="authorImg"
            value={authorImg}
            onChange={handleChange}
          />
        </FormControl>
      </GridItem>

      <GridItem colSpan={1} bg="">
        <FormLabel>About</FormLabel>
        <Textarea
          isInvalid
          placeholder="About"
          type="text"
          name="about"
          value={about}
          onChange={handleChange}
        />
      </GridItem>

      <GridItem colSpan={2} bg="">
        <FormLabel>What you will learn?</FormLabel>
        <Textarea
          isInvalid
          placeholder="What you will learn?"
          type="text"
          name="whatYouWillLearn"
          value={whatYouWillLearn}
          onChange={handleChange}
        />
      </GridItem>

      <GridItem colSpan={3} bg="">
        <Button
          w="full"
          colorScheme="teal"
          variant="outline"
          onClick={handleClick}
        >
          Button
        </Button>
      </GridItem>
    </Grid>
  );
}

