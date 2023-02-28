import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Main from "./Main";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SidebarMenu from "./sidebarMenu";
import { useNavigate } from "react-router-dom";

// logo
// import Logo from "../assets/img/uni-logo.svg";
import Logo from "../assets/svg-components/Logo";
import UniLogo from "../assets/img/uni-koblenz-logo.png";
// icons for departments
import LetterD from "../assets/img/letter-d.png";
import LetterA from "../assets/img/letter-a.png";
import LetterB from "../assets/img/letter-b.png";
import LetterG from "../assets/img/letter-g.png";
import LetterH from "../assets/img/letter-h.png";
import LetterE from "../assets/img/letter-e.png";
import LetterF from "../assets/img/letter-f.png";
import Library from "../assets/img/library.png";

function Sidebar({ children }) {
  const routes = [
    {
      path: "/library",
      name: "Library",
      icon: <img src={Library} />,
    },
    {
      path: "/a-block",
      name: "A Block",
      icon: <img src={LetterA} />,
    },
    {
      path: "/b-block",
      name: "B Block",
      icon: <img src={LetterB} />,
    },
    {
      path: "/d-block",
      name: "D Block",
      icon: <img src={LetterD} />,
    },
    {
      path: "/e-block",
      name: "E Block",
      icon: <img src={LetterE} />,
    },
    {
      path: "/f-block",
      name: "F Block",
      icon: <img src={LetterF} />,
    },
    {
      path: "/g-block",
      name: "G Block",
      icon: <img src={LetterG} />,
    },
    {
      path: "/h-block",
      name: "H Block",
      icon: <img src={LetterH} />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // reroute to the main page.
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className='flex flex-row fixed w-full sidebar-container z-10 overflow-y-scroll'>
        <div className='bg-black text-white  z-20'>
          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",

              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className='bg-black text-white overflow-y-scroll'
          >
            <div className='flex items-center  justify-center px-2.5 py-3'>
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='flex mx-auto text-3xl hover:cursor-pointer'
                    onClick={routeChange}
                  >
                    <img src={UniLogo}></img>
                  </motion.h1>
                )}
                <div className='text-xl mt-4 mb-4 float-right hover:cursor-pointer'>
                  <FaBars onClick={toggle} className='pt-2' />
                </div>
              </AnimatePresence>
            </div>

            <section
              className={
                isOpen
                  ? "mt-8  mx-4 flex flex-col  space-y-8"
                  : "flex flex-col  space-y-8"
              }
            >
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className={
                      isOpen
                        ? "flex px-3 py-2 text-xl text-white  space-x-4 border-transparent border-solid border-2 transition-all ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300"
                        : "flex px-3 text-md py-2 text-white  border-transparent border-solid border-2 transition-all ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300"
                    }
                    activeClassName={
                      isOpen ? "active " : "active p-0 rounded-full"
                    }
                  >
                    <div className='flex justify-center space-x-4 items-center'>
                      <div className='icon'>{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='text-sm whitespace-nowrap'
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>
        </div>
        <Main
          className='w-screen  overflow-y-scroll p-0'
          children={children}
        ></Main>
      </div>
    </>
  );
}

export default Sidebar;
