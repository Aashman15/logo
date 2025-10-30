import {
  Container,
  VStack,
  Text,
  Button,
  Box,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import performingYogaImage from "@/assets/images/woman_performing_yoga.png";
import grindingPlantsImage from "@/assets/images/grinding_plants.png";

function HeroPassage() {
  return (
    <Box mb={"56px"} textAlign={"center"} color={"text_primary"}>
      <Text
        as="h2"
        fontSize={{
          base: "37px",
          md: "65px",
        }}
        lineHeight={{
          base: "47px",
          md: "82px",
        }}
        fontWeight={"semibold"}
      >
        The dawn of a new era in health is here
      </Text>
      <Text as={"p"} mt={"17px"} mb={"33px"}>
        Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
        lacus platea orci vel elit blandit facilisis{" "}
      </Text>
      <Button bgColor={"primary"} size={"xl"} borderRadius={"full"} px={"12"}>
        Join Now
      </Button>
    </Box>
  );
}

function HeroImages() {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      rowGap={"28px"}
      columnGap={{
        base: "28px",
        xl: "48px",
      }}
    >
      <Image
        rounded={"md"}
        src={performingYogaImage}
        aria-label="Women performing yoga"
        height={"390px"}
        width={"100%"}
      />
      <Image
        rounded={"md"}
        src={grindingPlantsImage}
        aria-label="grinding plants image"
        height={"390px"}
        width={"100%"}
      />
    </SimpleGrid>
  );
}

export default function Hero() {
  return (
    <Container as={"section"}>
      <HeroPassage />
      <HeroImages />
    </Container>
  );
}
