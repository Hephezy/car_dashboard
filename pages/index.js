import Head from "next/head";
import ContentArea from "../components/content-area";
import NavBar from "../components/nav-bar";
import LeftSideBar from "../components/left-side-bar";

const FrameComponent = () => {
  return (
    <>
      <Head>
        <title>Racing Dashboard</title>
        <meta
          name="description"
          content="A place to track your various cars for racing"
        />
      </Head>
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="relative bg-gray-100 w-[1440px] h-[990px] overflow-hidden shrink-0">
          <div className="absolute top-[343px] left-[354px] w-[970px] h-[541px]">
            <div className="absolute top-[66px] left-[642px] bg-gainsboro w-px h-[475px]" />
            <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[970px] h-px" />
          </div>
          <ContentArea />
          <NavBar />
          <LeftSideBar />
        </div>
      </div>
    </>
  );
};

export default FrameComponent;
