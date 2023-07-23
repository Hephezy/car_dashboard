import {
  Stack,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <div className="absolute top-[24px] left-[240px] w-[1200px] h-[75px] md:flex-col">
      <div className="absolute top-[74px] left-[0px] bg-whitesmoke w-[1200px] h-px" />
      <div className="absolute top-[10px] left-[980px] w-[159px] h-9">
        <img
          className="absolute top-[0px] left-[123px] rounded-[50%] w-9 h-9 object-cover md:flex md:cursor-pointer"
          alt=""
          src="/avatar@2x.png"
        />
        <img
          className="absolute h-[66.67%] w-[15.09%] top-[19.44%] right-[45.91%] bottom-[13.89%] left-[38.99%] max-w-full overflow-hidden max-h-full md:hidden md:cursor-pointer"
          alt=""
          src="/person.svg"
        />
        <img
          className="absolute h-[69.44%] w-[15.09%] top-[16.67%] right-[84.91%] bottom-[13.89%] left-[0%] max-w-full overflow-hidden max-h-full md:hidden md:cursor-pointer"
          alt=""
          src="/notification.svg"
        />
      </div>
      <Stack className="absolute top-[0px] left-[596px]">
        <Menu>
          <MenuButton
            w="310px"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="whitebg"
          >
            Dropdown
          </MenuButton>
          <MenuList>
            <MenuItem value="Ferrari">Ferrari</MenuItem>
            <MenuItem value="Aston Martin">Aston Martin</MenuItem>
            <MenuItem value="Mercedes">Mercedes</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
      <InputGroup
        className="bg-[transparent] absolute top-[0px] left-[45px]"
        width="517px"
        w="517px"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input variant="filled" placeholder="Search for a race, car or racer" />
      </InputGroup>
    </div>
  );
};

export default NavBar;
