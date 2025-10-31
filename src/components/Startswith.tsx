import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import woodBridgeImage from "@/assets/images/wood_bridge.png";
import leafImage from "@/assets/images/leaf.png";
import circledLeafImage from "@/assets/images/circled_leaf.png";

function StartswithCard() {
  return (
    <Stack
      gap={{
        base: "18px",
        xl: "11px",
      }}
      color={"text_primary"}
    >
      <Image
        height={{
          base: "60px",
          xl: "80px",
        }}
        width={{
          base: "60px",
          xl: "80px",
        }}
        marginInline={"auto"}
        src={circledLeafImage}
        alt="Circled leaf image"
      />
      <Text fontSize={"21px"}>Plant Protective</Text>
    </Stack>
  );
}

export default function Startswith() {
  return (
    <Container
      as={"section"}
      mt={{
        base: "36px",
        md: "80px",
        xl: "104px",
      }}
    >
      <Box
        bgImage={`url(${woodBridgeImage})`}
        bgSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        rounded={"lg"}
        height={{
          base: "354px",
          md: "667px",
        }}
        color={"white"}
        textAlign={"center"}
        py={{
          base: "72px 109px",
        }}
        px={"12px"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"lg"}
          border={"md"}
          width={{
            base: "46px",
            md: "92px",
          }}
          height={{
            base: "41px",
            md: "82px",
          }}
          marginInline={"auto"}
        >
          <Image
            height={"22px"}
            width={"22px"}
            src={leafImage}
            alt="Leaf Image"
          />
        </Box>
        <Heading
          fontSize={{
            base: "21px",
            md: "37.9px",
          }}
          mt={{
            base: "13px",
            md: "45px",
          }}
        >
          Wellbeing starts with well doing
        </Heading>
        <Text
          display={{
            base: "none",
            md: "block",
          }}
          mt={"12px"}
          maxWidth={"66ch"}
          marginInline={"auto"}
        >
          Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
          lacus platea orci vel elit blandit facilisis enim risus. Ut tristique
          eget integer odio nec.
        </Text>
        <Button
          variant={"outline"}
          color={"white"}
          rounded={"full"}
          px={"10"}
          mt={{
            base: "13px",
            md: "28px",
          }}
        >
          Join Now
        </Button>
        <Grid
          py={{ base: "71px", xl: "119px" }}
          px={{
            md: "66px",
          }}
          bgColor={"secondary_light"}
          rounded={"lg"}
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
          rowGap={{
            base: "49px",
          }}
          columnGap={"32px"}
          width={"90%"}
          marginInline={"auto"}
          mt={{ base: "38px", md: "42px" }}
        >
          <StartswithCard />
          <StartswithCard />
          <StartswithCard />
          <StartswithCard />
        </Grid>
      </Box>
    </Container>
  );
}
