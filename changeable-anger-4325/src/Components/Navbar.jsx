import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Spacer,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import React from "react";

const links = [{ path: "/", title: "Home" },
{ path: "/signin", title: "Signin" },
{ path: "/signup", title: "Singup" },
{ path: "/contactsale", title: "Contact Sales" },
{ path: "/allproduct", title: "Products" },
{ path: "/form", title: "Forms Data" },
{ path: "/footer", title: "Footer" }
];

export default function Navbar() {
    // styling Declaration
    const activestyle = {
        textDecoration: "none",
        color: "red",
    };
    const defaultStyle = {
        textDecoration: "none",
        color: "black",
    };

    return (
        <Flex minWidth="max-content" alignItems="center" gap="2"
            maxW="1348px"
            m="auto"
            className="NavbarSignin"
        >
            <Box p="2">
                <Heading size="md">Chakra App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap="2">
                {links.map((link) => (
                    <NavLink
                        style={({ isActive }) => {
                            return isActive ? activestyle : defaultStyle;
                        }}
                        key={link.path}
                        to={link.path}
                        end
                    >
                        {link.title}
                    </NavLink>
                ))}
            </ButtonGroup>
        </Flex>
    );
}
