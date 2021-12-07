import React, { useState } from "react";
import Circle from "../component/icon/Circle";
import Vektok from "../component/icon/Vektok";
import Verify from "../component/icon/Verify";
import people from "../image/people.png";
import slack from "../image/Group652.png";
import prudential from "../image/Group631.png";
import microsoft from "../image/Group651.png";
import zoover from "../image/Group2053.png";
import Group2073 from "../image/Group2073.png";
import Shop from "../component/icon/Shop";
import Card from "../component/icon/Card";
import Close from "../component/icon/Close";
import Favoritchart from "../component/icon/Favoritchart";
import Vektor from "../component/icon/Vektor";
import Cheklist from "../component/icon/Cheklist";
import CircelPeaple from "../component/icon/CircelPeaple";
import Project1 from "../image/project/Rectangle1041.png";
import Project2 from "../image/project/Rectangle1042.png";
import Project3 from "../image/project/Rectangle1043.png";
import Project4 from "../image/project/Rectangle1044.png";
import Project5 from "../image/project/Rectangle1045.png";
import Testemoni from "../image/testemoni/Group9141.png";
import Petik from "../component/icon/Petik";
import Contact from "../image/contact/Group9146.png";
import Facebook from "../component/icon/Facebook";
import Instagram from "../component/icon/Instagram";
import Twiiter from "../component/icon/Twiiter";
import ScrollToTop from "react-scroll-to-top";
import Top from "../component/icon/Top";
import Menu from "../component/icon/Menu";
import { NavLink } from "react-router-dom";

function Home(props) {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="font-judul antialiased mx-auto">
      <ScrollToTop
        smooth
        component={
          <div className="text-gray-800 flex justify-center transform transition hover:scale-110 duration-300">
            <Top />
          </div>
        }
      />
      <div className="bg-retangle1 bg-left-bottom bg-no-repeat bg-80%">
        <div className="bg-retangle12 bg-right-bottom bg-no-repeat bg-50%">
          <div className="container mx-auto  laptop:px-0 px-3">
            {/* navbar */}
            <div className=" py-10 ">
              <div className="flex justify-between w-auto items-center tablet:relative phone:relative">
                <div className=" font-bold text-2xl  italic">
                  <span className="text-red-600">PEBISNIS </span>ULUNG.
                </div>
                <div>
                  <button
                    onClick={() => setIsopen(!isopen)}
                    className="laptop:hidden tablet:block block"
                  >
                    {isopen ? <Close /> : <Menu />}
                  </button>
                </div>
                <div
                  className={`${
                    isopen ? "flex" : "hidden"
                  } laptop:flex laptop:static laptop:w-auto w-full laptop:border-0 rounded-lg  laptop:flex-row  items-center laptop:space-x-12 flex-col absolute z-10 space-y-8 py-14 px-7 laptop:py-0 laptop:space-y-0 text-base tablet:top-10 left-0 top-20 bg-white `}
                >
                  <div>
                    <NavLink to="#">Services</NavLink>
                  </div>
                  <div>
                    <NavLink to="#">Resources</NavLink>
                  </div>
                  <div>
                    <NavLink to="#">Company</NavLink>
                  </div>
                  <div>
                    <NavLink to="#">Blog</NavLink>
                  </div>
                  <div>
                    <NavLink to="#">Contact Us</NavLink>
                  </div>
                  <div className="rounded-3xl border-2 border-yellow-500 ">
                    <div className="py-3 px-7">
                      <NavLink to="#">Let’s Talk</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end navbar */}
            {/* head content */}
            <div className="flex tablet:flex-row flex-col-reverse   pt-6 pb-10 font-judul">
              <div className="tablet:w-1/2 w-full">
                <div className="flex flex-row items-center mt-5 tablet:mt-0">
                  <Verify />
                  <div className="text-yellow-600 laptop:text-base tablet:text-sm phone:text-lg">
                    Best Business Platform - World Record 2021
                  </div>
                </div>
                <div className="text-gray-800 font-bold laptop:text-5xl text-4xl laptop:mt-6 mt-4 ">
                  <span className="leading-snug">
                    Reach Your{" "}
                    <div className="inline-flex relative">
                      Business <Vektok />
                    </div>{" "}
                    Goals in Record Time
                  </span>
                </div>
                <div className="text-gray-600 laptop:text-lg tablet:text-base text-lg font-medium laptop:w-11/12 w-full mt-5">
                  Support small business and join the nationwide movement to
                  encourage commercial support for the millions of minority
                  owned businesses helping world economy.
                </div>
                <div className="laptop:mt-12 flex flex-row tablet:mt-5 mt-5">
                  <div>
                    <button className="bg-red-400 py-3 px-6 rounded-full border-2 border-white shadow-md text-white font-medium mr-3 tablet:text-lg text-base">
                      Get Started
                    </button>
                  </div>
                  <div>
                    <button className="border-2 border-gray-900 rounded-full px-6 py-3 inline-flex items-center shadow-md">
                      {" "}
                      <Circle />{" "}
                      <span className="text-gray-700 tablet:text-lg text-base font-medium">
                        Watch Video
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="tablet:w-1/2 w-full">
                <div className="flex justify-center items-center  ">
                  <img
                    src={people}
                    alt="people"
                    className="tablet:w-11/12 w-3/5 laptop:-mt-7 laptop:-mr-20 tablet:-mr-11"
                  />
                </div>
              </div>
            </div>
            {/* end  head content */}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-14 ">
        <div className="flex tablet:flex-row flex-col tablet:justify-around justify-center items-center space-y-4">
          <div>
            <img src={slack} alt="Slack" />
          </div>
          <div>
            <img src={prudential} alt="Prudential" />
          </div>
          <div>
            <img src={microsoft} alt="Microsoft" />
          </div>
          <div>
            <img src={zoover} alt="Zoover" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-28 px-3 laptop:px-0">
        <div className="flex tablet:flex-row flex-col justify-between">
          <div className="laptop:w-4/12 tablet:w-3/12">
            <div className="text-red-600 text-base">SERVICES</div>
            <div className="text-gray-800 laptop:text-4xl text-2xl font-semibold laptop:mt-3 mt-5">
              Our Capabilities
            </div>
            <div className="text-gray-500 laptop:text-xl tablet:text-base mt-6 w-full">
              We will bring the breathe of our experience and industry knowledge
              to help you succeed
            </div>
            <div className="mt-4 tablet:flex justify-end hidden">
              <Vektor />
            </div>
          </div>
          <div className="tablet:w-9/12 w-full flex flex-row justify-between items-start laptop:pl-8 tablet:pl-6">
            <div className=" w-2/6 tablet:px-4 tablet:py-12 px-2 py-6 transition duration-300 rounded-2xl hover:shadow-xl">
              <div>
                <Shop />
              </div>
              <div className="text-gray-800 laptop:text-xl tablet:text-lg font-semibold mt-4">
                Market Forcest
              </div>
              <div className="text-gray-500 text-base mt-5 w-full">
                Leverage agile framework to provide a robust high level synopsys
                overviews
              </div>
            </div>
            <div className="w-2/6 tablet:px-4 tablet:py-12 px-2 py-6 transition duration-300 rounded-2xl hover:shadow-xl">
              <div>
                <Card />
              </div>
              <div className="text-gray-800 laptop:text-xl tablet:text-lg font-semibold mt-4">
                Fund Raising
              </div>
              <div className="text-gray-500 text-base mt-5">
                Bring to the table survival strategies to ensure proactive
                domination
              </div>
            </div>
            <div className="w-2/6 tablet:px-4 tablet:py-12 px-2 py-6 transition duration-300 rounded-2xl hover:shadow-xl">
              <div>
                <Favoritchart />
              </div>
              <div className="text-gray-800 laptop:text-xl tablet:text-lg font-semibold mt-4">
                Cash Flow
              </div>
              <div className="text-gray-500 text-base mt-5">
                Grow the holistic world view of disruptive innovation workspace
              </div>
            </div>
          </div>
          <div className="mt-4 tablet:hidden justify-center flex">
            <Vektor />
          </div>
        </div>
      </div>
      <div className="bg-bgblue mt-14">
        <div className="flex tablet:flex-row flex-col container mx-auto">
          <div className="tablet:w-1/2 w-full flex items-center justify-center">
            <div className="laptop:-ml-9">
              <img src={Group2073} alt="" />
            </div>
          </div>
          <div className="tablet:w-1/2 w-full">
            <div className="laptop:p-12 px-6 py-12">
              <div className="text-red-500 text-lg ">WHY CHOOSE US</div>
              <div className="text-white font-bolt laptop:text-4xl tablet:text-3xl text-2xl mt-4 leading-normal">
                Take on any Challenge of the Digital World
              </div>
              <div className="mt-5 tablet:space-y-4 space-y-3">
                <div className="inline-flex items-center">
                  <Cheklist />{" "}
                  <span className="text-lg  text-white font-medium">
                    Corporate Financial Advisory
                  </span>
                </div>
                <div className="inline-flex items-center">
                  <Cheklist />{" "}
                  <span className="text-lg  text-white font-medium">
                    Corporate Financial Advisory
                  </span>
                </div>
                <div className="inline-flex items-center">
                  <Cheklist />{" "}
                  <span className="text-lg  text-white font-medium">
                    Corporate Financial Advisory
                  </span>
                </div>
              </div>
              <div className="tablet:mt-10 mt-6">
                <button className="bg-red-400 border-2  shadow-md border-white tablet:text-lg text-base text-white font-medium  py-3 px-6 rounded-full ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 laptop:px-0 px-3">
        <div className="flex flex-wrap justify-center">
          <div className="tablet:w-2/6 3/6 p-4 mt-10  transition duration-300 hover:shadow-xl">
            <img src={Project1} alt="" />
            <div className="text-gray-800 text-lg font-semibold mt-4 flex justify-center">
              Cosmetic Forcest Marketing
            </div>
          </div>
          <div className="tablet:w-2/6 3/6 p-4 mt-10 transition duration-300 hover:shadow-xl">
            <img src={Project2} alt="" />
            <div className="text-gray-800 text-lg font-semibold mt-4 flex justify-center">
              Sales Analytic
            </div>
          </div>
          <div className="tablet:w-2/6 3/6 p-4 mt-10 transition duration-300 hover:shadow-xl">
            <img src={Project3} alt="" />
            <div className="text-gray-800 text-lg font-semibold mt-4 flex justify-center">
              Fashion Store Mobile Apps
            </div>
          </div>
          <div className="tablet:w-2/6 3/6 p-4 mt-10 transition duration-300 hover:shadow-xl">
            <img src={Project4} alt="" />
            <div className="text-gray-800 text-lg font-semibold mt-4 flex justify-center">
              Laura’s Clore Branding Identity
            </div>
          </div>
          <div className="tablet:w-2/6 3/6 p-4 mt-10 transition duration-300 hover:shadow-xl">
            <img src={Project5} alt="" />
            <div className="text-gray-800 text-lg font-semibold mt-4 flex justify-center">
              SEO Marketing 4.0
            </div>
          </div>
          <div className="tablet:w-2/6 3/6 p-4 mt-10">
            <div className="text-red-600 text-base font-medium">PROJECT</div>
            <div className="text-gray-800 laptop:text-4xl tablet:text-3xl text-2xl leading-tight font-semibold mt-5">
              Selected Works from Us
            </div>
            <div className="mt-12">
              <button className="border-2 border-gray-900  py-3 px-6 text-base font-medium rounded-full shadow-md">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 laptop:px-0 px-3">
        <div>
          <div className="text-red-700 font-medium text-lg">TESTIMONIAL</div>
          <div className="text-gray-800 font-semibold laptop:text-4xl text-3xl laptop:w-3/12 tablet:4/5 leading-tight mt-4">
            What Our Customer’s Say
          </div>
          <div className="relative tablet:mt-7 mt-10">
            <div>
              <img src={Testemoni} alt="" />
            </div>
            <div className="shadow-2xl bg-white rounded-2xl p-5  tablet:w-1/2 w-3/4 absolute top-1 right-1">
              <Petik />
              <div className="text-gray-700 laptop:text-lg text-base mt-4">
                I really like the team for example, a relationship-focused
                performance expectation might be that the employee sustain
                collegial working relationships with her peers, subordinates and
                customers.
              </div>
              <div className="inline-flex mt-5 items-center">
                <CircelPeaple />{" "}
                <span className="text-gray-700 laptop:text-xl tablet:text-lg font-semibold">
                  Gloria Jessica
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto laptop:px-0 tablet:px-3 laptop:mt-0 mt-40">
        <div className="flex flex-row">
          <div className="tablet:w-1/2 tablet:block hidden">
            <div className="flex items-center justify-center">
              <div>
                <img
                  src={Contact}
                  alt=""
                  className="laptop:-ml-10 laptop:w-11/12"
                />
              </div>
            </div>
          </div>
          <div className="tablet:w-1/2 w-full px-4">
            <div className="text-red-600 text-base font-medium">CONTACT US</div>
            <div className="text-gray-700 font-semibold laptop:text-4xl text-3xl mt-5">
              Let’s Collaborate Now!
            </div>
            <div className="mt-7">
              <form autoComplete="off">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-gray-700 font-medium laptop:text-xl tablet:text-lg"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="p-3 bg-red-100 mt-4 rounded placeholder-gray-700 focus:outline-none focus:ring-gray-500 focus:ring-2 laptop:text-lg tablet:text-base"
                    placeholder="Input your name"
                  />
                </div>
                <div className="flex flex-row mt-4">
                  <div className="flex flex-col w-1/2 pr-2">
                    <label
                      htmlFor="name"
                      className="text-gray-700 font-medium laptop:text-xl tablet:text-lg"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="p-3 bg-red-100 mt-4 rounded placeholder-gray-700 focus:outline-none focus:ring-gray-500 focus:ring-2 laptop:text-lg tablet:text-base"
                      placeholder="Input your email"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 ">
                    <label
                      htmlFor="name"
                      className="text-gray-700 font-medium laptop:text-xl tablet:text-lg"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      className="p-3 bg-red-100 mt-4 rounded placeholder-gray-700 focus:outline-none focus:ring-gray-500 focus:ring-2 laptop:text-lg tablet:text-base"
                      placeholder="Input your name"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="name"
                    className="text-gray-700 font-medium laptop:text-xl tablet:text-lg"
                  >
                    Message
                  </label>
                  <textarea
                    className="p-5 bg-red-100 mt-4 rounded placeholder-gray-700 focus:outline-none focus:ring-gray-500 focus:ring-2 laptop:text-lg tablet:text-base resize-none"
                    placeholder="Write Message..."
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mt-8">
                  <button className="bg-red-400 border-2  shadow-lg border-white tablet:text-lg text-base text-white font-medium py-3 px-8 rounded-full mr-7">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 mt-36">
        <div className="container mx-auto laptop:px-0 px-3">
          <div className="flex flex-row items-center tablet:justify-around  text-white  py-12">
            <div className="flex laptop:flex-row flex-col laptop:items-center tablet:items-start">
              <div className=" font-bold laptop:text-2xl tablet:xl italic laptop:mr-7 mr-4">
                <span className="text-red-600">PEBISNIS </span>ULUNG.
              </div>
              {/* <div className="text-3xl ">|</div>{" "} */}
              <div className="text-base mr-5 mt-3  laptop:mt-0">
                &copy; Copyright{" "}
                <a className="text-red-500" href="https://www.imsaputra.com/">
                  Imsaputra.com
                </a>
                . <br /> Desain UI by{" "}
                <a
                  className="text-blue-500"
                  href="https://dribbble.com/Rizalgradianto"
                >
                  Rizal Gradian
                </a>
              </div>
            </div>
            <div className="flex laptop:flex-row flex-col laptop:items-center tablet:items-start">
              <div className="mr-3 text-base ">Privacy Policy</div>{" "}
              <div className="text-base mr-3 mt-3  laptop:mt-0">Terms</div>
              <div className=" flex tablet:flex-row flex-col items-center mt-3 laptop:mt-0">
                <div className="text-lg mr-3">Get in Touch</div>{" "}
                <div className="flex flex-row">
                  <Facebook />
                  <Instagram />
                  <Twiiter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
