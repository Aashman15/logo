import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import holdingPlantImage from "@/assets/images/hand_holding_plants.png";
import flowerIcon from "@/assets/images/flower_icon.png";

function FreshCard() {
  return (
    <Flex gap={"23px"}>
      <Image src={flowerIcon} alt="Flower icon" />
      <Text
        color={"primary"}
        width={{
          md: "37ch",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
        lacus platea
      </Text>
    </Flex>
  );
}

export default function Fresh() {
  return (
    <Container as={"section"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{
          base: "25px",
          xl: "53px",
        }}
        alignItems={"center"}
      >
        <Box
          width={"full"}
          height={"578px"}
          minWidth={{
            md: "300px",
          }}
        >
          <Image
            src={holdingPlantImage}
            alt="Hand holding plant image"
            rounded={"lg"}
            height={"100%"}
            width={"100%"}
          />
        </Box>

        <Box
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Heading
            fontSize={{
              base: "39.7px",
              md: "50.52px",
            }}
            lineHeight={"shorter"}
          >
            Fresh organic produce
          </Heading>
          <Text mt={"16px"} lineHeight={"24px"}>
            Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
            lacus platea orci vel elit blandit facilisis enim risus. Ut
            tristique eget integer odio nec vulputate consequat. Elit mattis ac
            in amet sit viverra.
          </Text>
          <Stack
            textAlign={"left"}
            mt={{
              base: "26px",
              md: "80px",
            }}
            gap={{
              base: "26px",
              md: "52px",
            }}
          >
            <FreshCard />
            <FreshCard />
            <FreshCard />
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
}
