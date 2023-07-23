import { Stack, MenuButton, Menu, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const LeftSideBar = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-60 h-[990px] text-left text-sm text-gray-200 font-google-sans lg:flex md:hidden">
      <div className="absolute top-[0px] left-[0px] bg-white w-[239px] h-[990px]" />
      <div className="absolute top-[0px] left-[239px] bg-whitesmoke w-px h-[990px]" />
      <Stack className="absolute top-[878px] left-[30px]">
        <Menu>
          <MenuButton
            w="183px"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="whitebg"
          >
            Name
          </MenuButton>
        </Menu>
      </Stack>
      <div className="absolute top-[592px] left-[44px] w-[119px] h-[171px]">
        <div className="absolute top-[0px] left-[0px] text-darkblue">
          Scheduled Races
        </div>
        <div className="absolute top-[57px] left-[31px]">MotoGP 2022</div>
        <div className="absolute top-[105px] left-[31px]">Dynamics 22</div>
        <div className="absolute top-[153px] left-[31px]">Olympics</div>
        <div className="absolute top-[57px] left-[2px] rounded-[50%] box-border w-[15px] h-[15px] border-[1px] border-solid border-royalblue" />
        <div className="absolute top-[105px] left-[2px] rounded-[50%] box-border w-[15px] h-[15px] border-[1px] border-solid border-salmon" />
        <div className="absolute top-[153px] left-[2px] rounded-[50%] box-border w-[15px] h-[15px] border-[1px] border-solid border-lightseagreen" />
      </div>
      <div className="absolute top-[145px] left-[46px] w-[129px] h-[301px]">
        <div className="absolute top-[38px] left-[43px]">Home</div>
        <div className="absolute top-[86px] left-[43px]">Garage</div>
        <div className="absolute top-[231px] left-[43px]">Calculator</div>
        <div className="absolute top-[183px] left-[43px]">Racers</div>
        <div className="absolute top-[134px] left-[43px]">Service Menu</div>
        <div className="absolute top-[280px] left-[43px]">Settings</div>
        <img
          className="absolute h-[7.97%] w-[18.6%] top-[11.3%] right-[81.4%] bottom-[80.73%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon6.svg"
        />
        <img
          className="absolute h-[7.97%] w-[18.6%] top-[59.47%] right-[80.62%] bottom-[32.56%] left-[0.78%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon7.svg"
        />
        <img
          className="absolute h-[7.97%] w-[18.6%] top-[27.24%] right-[81.4%] bottom-[64.78%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon8.svg"
        />
        <img
          className="absolute h-[7.97%] w-[18.6%] top-[43.19%] right-[81.4%] bottom-[48.84%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon9.svg"
        />
        <img
          className="absolute h-[7.97%] w-[18.6%] top-[92.03%] right-[80.62%] bottom-[0%] left-[0.78%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon10.svg"
        />
        <img
          className="absolute h-[7.97%] w-[18.6%] top-[75.42%] right-[80.62%] bottom-[16.61%] left-[0.78%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon11.svg"
        />
        <div className="absolute top-[0px] left-[0px] text-darkblue">Menu</div>
      </div>
      <div className="absolute top-[32px] left-[43px] w-[78px] h-7 text-xl text-primary-color">
        <img
          className="absolute top-[0px] left-[0px] w-[26px] h-[26px]"
          alt=""
          src="/group-2.svg"
        />
        <div className="absolute top-[3px] left-[37px]">iffee</div>
      </div>
    </div>
  );
};

export default LeftSideBar;
