import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import artificialYogaImage from "@/assets/images/artificial_yoga.png";
import { WellbeingCard } from "./Wellbeing";

export default function WellbeingDesktop() {
  return (
    <Container
      as={"section"}
      display={{
        base: "none",
        xl: "block",
      }}
    >
      <SimpleGrid columns={2} bg={"text_invert"} my={"104px"} rounded={"lg"}>
        <Box py={"99px 51px"} pl={"112px"}>
          <Heading fontSize={"50px"}>Wellbeing is welldoing</Heading>
          <Flex gap={"69px"} mt={"61px"}>
            <WellbeingCard />
            <WellbeingCard />
          </Flex>
        </Box>
        <Box position={"relative"}>
          <Image
            src={artificialYogaImage}
            position={"absolute"}
            bottom={"10px"}
            left={"50%"}
            transform={"translateX(-50%)"}
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
