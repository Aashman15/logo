import leafLogo from "@/assets/images/leaf.png";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export function WellbeingCard() {
  return (
    <Stack gap={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        rounded={"lg"}
        bg={"primary"}
        height={"58px"}
        width={"58px"}
        marginInline={{
          base: "auto",
          xl: "revert",
        }}
      >
        <Image src={leafLogo} alt="Leaf" />
      </Box>
      <Text
        maxWidth={{
          xl: "20ch",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
        lacus platea orci vel elit.
      </Text>
    </Stack>
  );
}

export default function Wellbeing() {
  return (
    <Container
      as={"section"}
      display={{
        xl: "none",
      }}
    >
      <Box
        bg={"text_invert"}
        marginBlock={{
          base: "36px",
          md: "80px",
        }}
        rounded={"lg"}
        pt={{ base: "74.5px", md: "64px" }}
        pb={{
          base: "31.5px",
          md: "96px",
        }}
        pl={{
          base: "42px",
          md: "147px",
        }}
        pr={{
          base: "58px",
          md: "147px",
        }}
        textAlign={"center"}
      >
        <Stack
          gap={{
            base: "40px",
            md: "69px",
          }}
        >
          <Heading size={{ base: "3xl", md: "5xl" }}>
            Wellbeing is well doing
          </Heading>
          <Flex
            direction={{
              base: "column",
              md: "row",
            }}
            gap={{
              base: "26px",
              md: "53px",
            }}
          >
            <WellbeingCard />
            <WellbeingCard />
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
}
