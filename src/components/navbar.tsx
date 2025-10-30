import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  List,
  Text,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

function NavbarLinks() {
  return (
    <>
      <IconButton
        aria-label="Menu"
        variant={"ghost"}
        _icon={{
          height: "28px",
          width: "28px",
        }}
        display={{
          md: "none",
        }}
      >
        <RxHamburgerMenu />
      </IconButton>
      <List.Root
        listStyleType={"none"}
        display={{
          base: "none",
          md: "flex",
        }}
        flexDirection={"row"}
        gap={"10"}
      >
        <List.Item>
          <Link>About</Link>
        </List.Item>
        <List.Item>
          <Link>Services</Link>
        </List.Item>
        <List.Item>
          <Link>Team</Link>
        </List.Item>
        <List.Item>
          <Link>Contact</Link>
        </List.Item>
      </List.Root>
    </>
  );
}

export default function Navbar() {
  return (
    <Container
      as={"nav"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pt={{
        base: "27px",
        md: "32px",
      }}
      pb={{
        base: "63px",
        md: "58px",
        xl: "142px",
      }}
    >
      <Flex gap={2} alignItems={"center"}>
        <Box
          h="26px"
          w="26px"
          bgColor={"text_invert"}
          borderRadius={"50%"}
        ></Box>
        <Text
          as={"h2"}
          fontSize={"2xl"}
          fontWeight={"semibold"}
          color={"primary"}
        >
          Logo
        </Text>
      </Flex>
      <NavbarLinks />
    </Container>
  );
}
