import {
  Stack,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ContentArea = () => {
  return (
    <div className="absolute top-[145px] left-[305px] w-[1031px] h-[794px] text-left text-base text-black font-google-sans">
      <div className="absolute top-[598px] left-[536px] w-[495px] h-[196px] text-3xs">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cards-bg shadow-[0px_100px_80px_rgba(41,_72,_152,_0.05),_0px_64.81481170654297px_46.85px_rgba(41,_72,_152,_0.04),_0px_38.51852035522461px_25.48px_rgba(41,_72,_152,_0.03),_0px_20px_13px_rgba(41,_72,_152,_0.03),_0px_8.148148536682129px_6.52px_rgba(41,_72,_152,_0.02),_0px_1.8518518209457397px_3.15px_rgba(41,_72,_152,_0.01)] w-[495px] h-[196px]" />
        <div className="absolute top-[29px] left-[40px] w-[417px] h-[148px]">
          <div className="absolute top-[41px] left-[104px] w-[313px] h-[107px] text-center text-slategray">
            <div className="absolute top-[94px] left-[0px] w-[313px] h-[13px]">
              <div className="absolute top-[0px] left-[0px] inline-block w-[19.49px]">
                Jan
              </div>
              <div className="absolute top-[0px] left-[255.67px] inline-block w-[20.64px]">
                Aug
              </div>
              <div className="absolute top-[0px] left-[36.69px] inline-block w-[19.49px]">
                Fab
              </div>
              <div className="absolute top-[0px] left-[292.36px] inline-block w-[20.64px]">
                Sep
              </div>
              <div className="absolute top-[0px] left-[72.23px] inline-block w-[20.64px]">
                Mar
              </div>
              <div className="absolute top-[0px] left-[110.07px] inline-block w-[19.49px]">
                Apr
              </div>
              <div className="absolute top-[0px] left-[145.61px] inline-block w-[21.78px]">
                May
              </div>
              <div className="absolute top-[0px] left-[183.44px] inline-block w-[19.49px]">
                Jun
              </div>
              <div className="absolute top-[0px] left-[222.42px] inline-block w-[14.9px]">
                Jul
              </div>
            </div>
            <img
              className="absolute top-[12.5px] left-[-1.5px] w-[315px] h-[72.5px]"
              alt=""
              src="/graph.svg"
            />
            <div className="absolute top-[0px] left-[22px] w-[74px] h-[54px] text-left text-xs text-white">
              <div className="absolute top-[43px] left-[32px] rounded-[50%] bg-white shadow-[0px_4px_7px_rgba(255,_47,_94,_0.4)] box-border w-[11px] h-[11px] border-[3px] border-solid border-crimson" />
              <div className="absolute top-[0px] left-[0px] w-[74px] h-[43.86px]">
                <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-[74px] h-[38px]" />
                <div className="absolute top-[12px] left-[18px]">2h 12m</div>
                <div className="absolute top-[37.5px] left-[31.14px] bg-gray-300 w-[9px] h-[9px] [transform:_rotate(-45deg)] [transform-origin:0_0]" />
              </div>
            </div>
          </div>
          <div className="absolute top-[99px] left-[0px] w-[71px] h-[49px] text-xl font-tomorrow">
            <div className="absolute top-[0px] left-[2px] tracking-[-0.07em] font-medium">
              84%
            </div>
            <div className="absolute top-[30px] left-[0px] w-[71px] h-[19px] text-base text-crimson">
              <div className="absolute top-[0px] left-[22px] font-medium">
                -8.0%
              </div>
              <img
                className="absolute top-[1px] left-[0px] w-[18px] h-[18px]"
                alt=""
                src="/arrow.svg"
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[412.5px] h-5 text-base">
            <b className="absolute top-[0px] left-[0px]">Engine Performance</b>
            <Stack className="absolute top-[2px] left-[346px]">
              <Menu>
                <MenuButton
                  w="66.5px"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="whitebg"
                >
                  This Year
                </MenuButton>
                <MenuList>
                  <MenuItem value="January">January</MenuItem>
                  <MenuItem value="February">February</MenuItem>
                  <MenuItem value="March">March</MenuItem>
                  <MenuItem value="April">April</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                  <MenuItem value="June">June</MenuItem>
                  <MenuItem value="July">July</MenuItem>
                  <MenuItem value="August">August</MenuItem>
                  <MenuItem value="September">September</MenuItem>
                  <MenuItem value="October">October</MenuItem>
                  <MenuItem value="November">November</MenuItem>
                  <MenuItem value="December">December</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </div>
        </div>
      </div>
      <div className="absolute top-[598px] left-[0px] w-[486px] h-[196px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cards-bg shadow-[0px_100px_80px_rgba(41,_72,_152,_0.05),_0px_64.81481170654297px_46.85px_rgba(41,_72,_152,_0.04),_0px_38.51852035522461px_25.48px_rgba(41,_72,_152,_0.03),_0px_20px_13px_rgba(41,_72,_152,_0.03),_0px_8.148148536682129px_6.52px_rgba(41,_72,_152,_0.02),_0px_1.8518518209457397px_3.15px_rgba(41,_72,_152,_0.01)] w-[486px] h-[196px]" />
        <div className="absolute top-[23px] left-[37px] w-[412.5px] h-[148px]">
          <div className="absolute top-[0px] left-[0px] w-[412.5px] h-5">
            <b className="absolute top-[0px] left-[0px]">Races</b>
            <div className="absolute top-[2px] left-[345px] text-xs">
              <div className="absolute top-[0px] left-[0px]">This Year</div>
              <img
                className="absolute top-[6.5px] left-[60.5px] w-[7px] h-[3.5px]"
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-[99px] left-[0px] w-[65px] h-[49px] text-xl font-tomorrow">
            <div className="absolute top-[0px] left-[2px] tracking-[-0.07em] font-medium">
              48
            </div>
            <div className="absolute top-[30px] left-[0px] w-[65px] h-[19px] text-base text-limegreen">
              <div className="absolute top-[0px] left-[22px] font-medium">
                +12%
              </div>
              <img
                className="absolute top-[1px] left-[0px] w-[18px] h-[18px]"
                alt=""
                src="/arrow1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[55px] left-[127px] w-[284px] h-[92px] text-center text-3xs text-slategray">
            <div className="absolute top-[79px] left-[4px] w-[273px] h-[13px]">
              <div className="absolute top-[0px] left-[0px]">Jan</div>
              <div className="absolute top-[0px] left-[223px]">Aug</div>
              <div className="absolute top-[0px] left-[32px]">Fab</div>
              <div className="absolute top-[0px] left-[255px]">Sep</div>
              <div className="absolute top-[0px] left-[63px]">Mar</div>
              <div className="absolute top-[0px] left-[96px]">Apr</div>
              <div className="absolute top-[0px] left-[127px]">May</div>
              <div className="absolute top-[0px] left-[160px]">Jun</div>
              <div className="absolute top-[0px] left-[194px]">Jul</div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[284px] h-[70px]">
              <div className="absolute top-[46px] left-[0px] rounded-sm bg-lavender w-7 h-6" />
              <div className="absolute top-[46px] left-[224px] rounded-sm bg-lavender w-7 h-6" />
              <div className="absolute top-[36px] left-[32px] rounded-sm bg-lavender w-7 h-[34px]" />
              <div className="absolute top-[36px] left-[256px] rounded-sm bg-lavender w-7 h-[34px]" />
              <div className="absolute top-[56px] left-[64px] rounded-sm bg-lavender w-7 h-3.5" />
              <div className="absolute top-[23px] left-[96px] rounded-sm bg-lavender w-7 h-[47px]" />
              <div className="absolute top-[36px] left-[128px] rounded-sm bg-lavender w-7 h-[34px]" />
              <div className="absolute top-[28px] left-[192px] rounded-sm bg-lavender w-7 h-[42px]" />
              <div className="absolute top-[0px] left-[160px] rounded-sm bg-blueviolet w-7 h-[70px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[215px] left-[754px] flex flex-col items-start justify-start gap-[60px] text-[17.02px] text-color-2">
        <div className="relative w-[204.08px] h-[60px]">
          <div className="absolute h-[88.66%] w-[58.31%] top-[2.36%] right-[0%] bottom-[8.98%] left-[41.69%]">
            <div className="absolute top-[58.64%] left-[0%]">Championships</div>
            <div className="absolute top-[0%] left-[0%] text-[22.69px] font-medium font-tomorrow text-color-3">
              72
            </div>
          </div>
          <div className="absolute h-full w-[29.4%] top-[0%] right-[70.6%] bottom-[0%] left-[0%] rounded-[50%] bg-crimson opacity-[0.1]" />
          <img
            className="absolute h-[47.28%] w-[13.26%] top-[26%] right-[78.41%] bottom-[26.72%] left-[8.34%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/mastery-icon.svg"
          />
          <img
            className="absolute h-[47.24%] w-[13.89%] top-[66.17%] right-[63.4%] bottom-[-13.42%] left-[22.7%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/moon-icon.svg"
          />
          <img
            className="absolute h-[33.09%] w-[11.12%] top-[33.09%] right-[79.85%] bottom-[33.83%] left-[9.03%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/cat-icon.svg"
          />
        </div>
        <div className="relative w-[127.62px] h-[60px]">
          <div className="absolute h-[85.08%] w-[33.33%] top-[2.36%] right-[0%] bottom-[12.55%] left-[66.67%]">
            <div className="absolute h-[38.89%] w-full top-[61.11%] left-[0%] inline-block">
              Skins
            </div>
            <div className="absolute top-[0%] left-[0%] text-[22.69px] font-medium font-tomorrow text-color-3">
              32
            </div>
          </div>
          <div className="absolute h-full w-[47.01%] top-[0%] right-[52.99%] bottom-[0%] left-[0%] rounded-[50%] bg-blueviolet opacity-[0.1]" />
          <img
            className="absolute h-[47.28%] w-[21.2%] top-[226%] right-[65.47%] bottom-[-173.28%] left-[13.33%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/mastery-icon1.svg"
          />
          <img
            className="absolute h-[46.85%] w-[22.03%] top-[22.79%] right-[65.27%] bottom-[30.36%] left-[12.69%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/moon-icon1.svg"
          />
          <img
            className="absolute h-[33.09%] w-[17.78%] top-[233.09%] right-[67.78%] bottom-[-166.17%] left-[14.44%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/cat-icon1.svg"
          />
        </div>
        <div className="relative w-[258.08px] h-[60px]">
          <div className="absolute h-[85.08%] w-[67.03%] top-[2.36%] right-[0%] bottom-[12.55%] left-[32.97%]">
            <div className="absolute h-[38.89%] w-full top-[61.11%] left-[0%] inline-block">
              Trophies Won
            </div>
            <div className="absolute top-[0%] left-[0%] text-[22.69px] font-medium font-tomorrow text-color-3">
              64
            </div>
          </div>
          <div className="absolute h-full w-[23.25%] top-[0%] right-[76.75%] bottom-[0%] left-[0%] rounded-[50%] bg-color-2 opacity-[0.2]" />
          <img
            className="absolute h-2/5 w-[10.07%] top-[31.67%] right-[83.34%] bottom-[28.33%] left-[6.59%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
          <img
            className="absolute h-[47.24%] w-[10.99%] top-[466.17%] right-[71.06%] bottom-[-413.42%] left-[17.95%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/moon-icon2.svg"
          />
          <img
            className="absolute h-[33.09%] w-[8.79%] top-[433.09%] right-[84.07%] bottom-[-366.17%] left-[7.14%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/cat-icon2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[211px] left-[10px] w-[712px] h-[364px] font-poppins">
        <img
          className="absolute top-[86px] left-[0px] w-[712px] h-[278px] object-cover mix-blend-darken"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[0px] left-[36px] w-[620px] h-[58px]">
          <img
            className="absolute top-[2.7px] left-[428px] w-[272px] h-[231.3px]"
            alt=""
            src="/arrows.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-[337px] h-[58px]">
            <div className="absolute top-[0px] left-[315px]">TM</div>
            <div className="absolute top-[0px] left-[0px] text-29xl">
              Infiniti Renault
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[50px] w-[970px] h-[102px] text-center text-xs text-silver">
        <div className="absolute top-[0px] left-[0px] w-[100px] h-[102px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cards-bg shadow-[0px_100px_80px_rgba(41,_72,_152,_0.05),_0px_64.81481170654297px_46.85px_rgba(41,_72,_152,_0.04),_0px_38.51852035522461px_25.48px_rgba(41,_72,_152,_0.03),_0px_20px_13px_rgba(41,_72,_152,_0.03),_0px_8.148148536682129px_6.52px_rgba(41,_72,_152,_0.02),_0px_1.8518518209457397px_3.15px_rgba(41,_72,_152,_0.01)] w-[100px] h-[102px]" />
          <div className="absolute top-[23.93px] left-[34px] w-7 h-[61.07px]">
            <div className="absolute top-[46.07px] left-[0px]">Start</div>
            <img
              className="absolute h-[42.8%] w-full top-[0%] right-[0%] bottom-[57.2%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[174px] w-[100px] h-[102px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cards-bg shadow-[0px_100px_80px_rgba(41,_72,_152,_0.05),_0px_64.81481170654297px_46.85px_rgba(41,_72,_152,_0.04),_0px_38.51852035522461px_25.48px_rgba(41,_72,_152,_0.03),_0px_20px_13px_rgba(41,_72,_152,_0.03),_0px_8.148148536682129px_6.52px_rgba(41,_72,_152,_0.02),_0px_1.8518518209457397px_3.15px_rgba(41,_72,_152,_0.01)] w-[100px] h-[102px]" />
          <div className="absolute top-[22.4px] left-[36px] w-[29px] h-[60.6px]">
            <div className="absolute top-[45.6px] left-[0px]">Drive</div>
            <img
              className="absolute h-[41.58%] w-[86.9%] top-[0%] right-[4.83%] bottom-[58.42%] left-[8.28%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon1.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[348px] w-[100px] h-[102px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cards-bg shadow-[0px_100px_80px_rgba(41,_72,_152,_0.05),_0px_64.81481170654297px_46.85px_rgba(41,_72,_152,_0.04),_0px_38.51852035522461px_25.48px_rgba(41,_72,_152,_0.03),_0px_20px_13px_rgba(41,_72,_152,_0.03),_0px_8.148148536682129px_6.52px_rgba(41,_72,_152,_0.02),_0px_1.8518518209457397px_3.15px_rgba(41,_72,_152,_0.01)] w-[100px] h-[102px]" />
          <div className="absolute top-[21px] left-[17px] w-[66px] h-[62px]">
            <div className="absolute top-[47px] left-[0px]">Maintinance</div>
            <img
              className="absolute h-[45.16%] w-[42.42%] top-[0%] right-[27.27%] bottom-[54.84%] left-[30.3%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon2.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[522px] w-[100px] h-[102px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cards-bg shadow-[0px_100px_80px_rgba(41,_72,_152,_0.05),_0px_64.81481170654297px_46.85px_rgba(41,_72,_152,_0.04),_0px_38.51852035522461px_25.48px_rgba(41,_72,_152,_0.03),_0px_20px_13px_rgba(41,_72,_152,_0.03),_0px_8.148148536682129px_6.52px_rgba(41,_72,_152,_0.02),_0px_1.8518518209457397px_3.15px_rgba(41,_72,_152,_0.01)] w-[100px] h-[102px]" />
          <div className="absolute top-[21.11px] left-[30px] w-10 h-[61.89px]">
            <div className="absolute top-[46.89px] left-[0px]">Battery</div>
            <img
              className="absolute h-[44.9%] w-[46.32%] top-[0%] right-[24.34%] bottom-[55.1%] left-[29.34%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon3.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[696px] w-[100px] h-[102px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cards-bg shadow-[0px_100px_80px_rgba(41,_72,_152,_0.05),_0px_64.81481170654297px_46.85px_rgba(41,_72,_152,_0.04),_0px_38.51852035522461px_25.48px_rgba(41,_72,_152,_0.03),_0px_20px_13px_rgba(41,_72,_152,_0.03),_0px_8.148148536682129px_6.52px_rgba(41,_72,_152,_0.02),_0px_1.8518518209457397px_3.15px_rgba(41,_72,_152,_0.01)] w-[100px] h-[102px]" />
          <div className="absolute top-[22px] left-[37px] w-[27px] h-[61px]">
            <div className="absolute top-[46px] left-[0px]">Tires</div>
            <img
              className="absolute h-[42.62%] w-[96.3%] top-[0%] right-[0%] bottom-[57.38%] left-[3.7%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon4.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[870px] w-[100px] h-[102px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-cards-bg shadow-[0px_100px_80px_rgba(41,_72,_152,_0.05),_0px_64.81481170654297px_46.85px_rgba(41,_72,_152,_0.04),_0px_38.51852035522461px_25.48px_rgba(41,_72,_152,_0.03),_0px_20px_13px_rgba(41,_72,_152,_0.03),_0px_8.148148536682129px_6.52px_rgba(41,_72,_152,_0.02),_0px_1.8518518209457397px_3.15px_rgba(41,_72,_152,_0.01)] w-[100px] h-[102px]" />
          <div className="absolute top-[21px] left-[37px] w-[26px] h-[62px]">
            <div className="absolute top-[47px] left-[0px]">Lock</div>
            <img
              className="absolute h-[45.16%] w-[82.54%] top-[0%] right-[4.88%] bottom-[54.84%] left-[12.58%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
