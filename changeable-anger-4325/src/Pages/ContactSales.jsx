import { Button, Heading, useToast } from "@chakra-ui/react";
import React from "react";

export default function ContactSale() {
    //    ToastExample();
    // function ToastExample() {
    const toast = useToast()

    const HANDLEcLICK=()=>{
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }

    return (
        <Button
            onClick={HANDLEcLICK}
        >
            Show Toast
            cHECKING</Button>
    )
    //   }
}