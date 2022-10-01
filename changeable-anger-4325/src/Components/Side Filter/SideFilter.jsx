import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    Checkbox,
    Radio,
    RadioGroup,
    Button,
    Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { FilterContext } from "../../Context/DataContext/FilterContextProvider";
import styles from "./SideFilter.module.css";

export default function SildeFilter() {
    const [text, setTexts] = useState({
        value: "",
        category: "",
    });
    const { isSideFilter, toggleSideFilter } = useContext(FilterContext);

    console.log("check------------------:", text);
    toggleSideFilter(text);

    return (
        <Box>
            <Heading>Side Filter</Heading>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem className={styles.block_1}>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" className={styles.block_11}>
                                Skill level
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className={styles.block_2}>
                        {/* <input type="checkbox" name="ashish" checked="ashish" placeholder="hello"  onChange={handleChange} /> */}
                        <Button

                            onClick={() =>
                                setTexts({ ...text, value: "Beginner", category: "level" })
                            }
                        >
                            <Checkbox>Beginner </Checkbox>
                        </Button>
                        <Button
                            onClick={() =>
                                setTexts({ ...text, value: "Advance", category: "level" })
                            }
                        >
                            <Checkbox>Advance </Checkbox>
                        </Button>
                        <Button
                            onClick={() =>
                                setTexts({ ...text, value: "Intermidate", category: "level" })
                            }
                        >
                            <Checkbox>Intermidate </Checkbox>
                        </Button>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" className={styles.block_11}>
                                Subject
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className={styles.block_2}>
                        <Button
                            onClick={() =>
                                setTexts({
                                    ...text,
                                    value: "Architecture & construction",
                                    category: "category",
                                })}
                        >
                            <Checkbox> Architecture & construction </Checkbox>
                        </Button>
                        <Button
                            onClick={() =>
                                setTexts({
                                    ...text,
                                    value: "Business professional",
                                    category: "category",
                                })}
                        >
                            <Checkbox> Business professional </Checkbox>
                        </Button>
                        <Button
                            onClick={() =>
                                setTexts({
                                    ...text,
                                    value: "Creative professional",
                                    category: "category",
                                })}
                        >
                            <Checkbox> Creative professional </Checkbox>
                        </Button>
                        <Button
                            onClick={() =>
                                setTexts({
                                    ...text,
                                    value: "Data professional",
                                    category: "category",
                                })}
                        >
                            <Checkbox> Data professional </Checkbox>
                        </Button>
                        {/* <Button
                            onClick={{ ...text, value: "IT ops", category: "category" }}
                        >
                            <Checkbox> IT ops </Checkbox>
                        </Button> */}
                        <Button
                            onClick={() =>
                                setTexts({
                                    ...text,
                                    value: "Manufacturing & design",
                                    category: "category",
                                })}
                        >
                            <Checkbox> Manufacturing & design </Checkbox>
                        </Button>
                        {/* <Button
                            onClick={() =>
                                setTexts({
                                    ...text,
                                    value: "Information & cyber security",
                                    category: "category",
                                })}
                        >
                            <Checkbox> Information & cyber security </Checkbox>
                        </Button> */}
                        <Button
                            onClick={() =>
                                setTexts({
                                    ...text,
                                    value: "Software development",
                                    category: "category",
                                })}
                        >
                            <Checkbox> Software development </Checkbox>
                        </Button>
                        <Button
                            onClick={() =>
                                setTexts({
                                    ...text,
                                    value: "Web development",
                                    category: "category",
                                })
                            }
                        >

                            <Checkbox> Web development </Checkbox>
                        </Button>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}
