import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import blackLeafImage from "@/assets/images/black_leaf.png";
import pineappleImage from "@/assets/images/pineapple_and_juice.png";

function YouAreHeading() {
  return (
    <Heading
      fontSize={{
        base: "39.7px",
        md: "50px",
      }}
      lineHeight={"shorter"}
      textAlign={"center"}
    >
      You are what you eat
    </Heading>
  );
}

function YouareCard() {
  return (
    <Stack
      gap={"20px"}
      textAlign={{
        base: "center",
        xl: "left",
      }}
      width={"fit-content"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"58px"}
        height={"57px"}
        bg={"secondary"}
        rounded={"lg"}
        marginInline={{
          base: "auto",
          xl: "revert",
        }}
      >
        <Image src={blackLeafImage} />
      </Box>
      <Text
        maxWidth={{
          base: "28ch",
          md: "22ch",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
        lacus platea orci vel elit.
      </Text>
    </Stack>
  );
}

export default function Youare() {
  return (
    <Container as={"section"}>
      <Flex
        bg={"text_invert"}
        rounded={"lg"}
        mt={{
          base: "36px",
          md: "80px",
          xl: "104px",
        }}
        paddingBlock={{
          base: "51px 43px",
          md: "106px",
          xl: "81px 112px",
        }}
      >
        <Box
          display={{
            base: "none",
            xl: "block",
          }}
          width={"570px"}
        >
          <Image
            src={pineappleImage}
            objectFit={"cover"}
            marginInline={"auto"}
          />
        </Box>
        <Stack
          gap={{
            base: "41px",
            md: "90px",
          }}
          marginInline={{
            base: "auto",
            xl: "revert",
          }}
          width={"fit-content"}
        >
          <YouAreHeading />
          <Flex
            direction={{
              base: "column",
              md: "row",
            }}
            gap={{
              base: "41px",
              md: "69px",
            }}
            width={"fit-content"}
            marginInline={"auto"}
          >
            <YouareCard />
            <YouareCard />
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
}
