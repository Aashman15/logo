import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  List,
} from "@chakra-ui/react";
import twitterLogo from "@/assets/images/twitter_icon.png";
import instagramLogo from "@/assets/images/instagram_icon.png";
import linkedInLogo from "@/assets/images/linked_in_icon.png";
import facebookLogo from "@/assets/images/facebook_icon.png";

function FooterLogo() {
  return (
    <Flex gap={"10px"} alignItems={"center"}>
      <Box
        height={"26px"}
        width={"26px"}
        rounded={"full"}
        bgColor={"text_invert"}
      ></Box>
      <Heading fontSize={"21.33px"}>Logo</Heading>
    </Flex>
  );
}

function FooterLinks() {
  return (
    <Flex
      flexWrap={"wrap"}
      columnGap={"40px"}
      rowGap={"36px"}
      width={{
        base: "155px",
        md: "fit-content",
      }}
    >
      <Link color={"white"}>About</Link>
      <Link color={"white"}>Services</Link>
      <Link color={"white"}>Team</Link>
      <Link color={"white"}>Contact</Link>
    </Flex>
  );
}

function FooterSocials() {
  return (
    <Flex gap={"24px"} mt={"36px"}>
      <Link>
        <Image
          src={twitterLogo}
          height={"22px"}
          width={"22px"}
          alt="social logo"
        />
      </Link>
      <Link>
        <Image
          src={instagramLogo}
          height={"22px"}
          width={"22px"}
          alt="social logo"
        />
      </Link>
      <Link>
        <Image
          src={linkedInLogo}
          height={"22px"}
          width={"22px"}
          alt="social logo"
        />
      </Link>
      <Link>
        <Image
          src={facebookLogo}
          height={"22px"}
          width={"22px"}
          alt="social logo"
        />
      </Link>
    </Flex>
  );
}

export default function Footer() {
  return (
    <Box bg={"primary"}>
      <Container
        mt={"74px"}
        py={"78px"}
        color={"white"}
        pl={{
          md: "72px",
          xl: "90px",
        }}
        pr={{
          xl: "95px",
        }}
      >
        <Box
          width={{
            mdDown: "fit-content",
          }}
          marginInline={"auto"}
        >
          <Flex
            direction={{
              base: "column",
              xl: "row",
            }}
            gap={"36px"}
            justifyContent={"space-between"}
          >
            <FooterLogo />
            <FooterLinks />
          </Flex>
          <FooterSocials />
        </Box>
      </Container>
    </Box>
  );
}
