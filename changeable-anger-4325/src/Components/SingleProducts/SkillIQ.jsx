import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import styles from "./SkillIQ.module.css";

export default function SkillIQ() {
    return (
        <Box className={styles.block_0} >
            <Box></Box>
            <Box  maxW= "435.27px">
                <Image W="100%" h="344.41px" src="https://www.pluralsight.com/content/pluralsight/en/product/skill-iq/jcr:content/image-res.transform/share-image/image.img.62cd6012-136d-4ed7-9fff-787a960b43ea.jpg" />
                <Box>
                    <Image w="80px" h="20px" src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/skill-iq-logo-white.png" />
                    <Heading as="h4">Not sure where to start?</Heading>
                    <Text>Know exactly where everyone on your team stands with</Text>
                    <Button>ASSESSMENTS AND ANALYTICS</Button>
                </Box>
            </Box>

        </Box>

    )
}