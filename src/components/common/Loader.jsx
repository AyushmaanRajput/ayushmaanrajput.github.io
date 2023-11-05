import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <LOADER>
      <motion.div
        variants={{
          hidden: {
            y: "100vh",
          },

          visible: {
            y: 0,
          },
          exit: { y: "100vh", transition: { delay: 6 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: 0.25,
          ease: "easeOut",
          delay: 0.25,
        }}
        className="first"
      ></motion.div>
      <motion.div
        variants={{
          hidden: {
            y: "100vh",
          },
          visible: {
            y: 0,
          },
          exit: { y: "100vh", transition: { delay: 5.5 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: 0.25,
          ease: "easeOut",
          delay: 0.5,
        }}
        className="second"
      ></motion.div>
      <motion.div
        variants={{
          hidden: {
            y: "100vh",
          },
          visible: {
            y: 0,
          },
          exit: { y: "100vh", transition: { delay: 5 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: 0.25,
          ease: "easeOut",
          delay: 0.75,
        }}
        className="third"
      ></motion.div>
      <motion.div
        variants={{
          hidden: {
            y: "100vh",
          },
          visible: {
            y: 0,
          },
          exit: { y: "100vh", transition: { delay: 4.5 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: 0.25,
          ease: "easeOut",
          delay: 1,
        }}
        className="fourth"
      ></motion.div>
      <motion.div
        variants={{
          hidden: {
            y: "100vh",
          },
          visible: {
            y: 0,
          },
          exit: { y: "100vh", transition: { delay: 4 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: 0.25,
          ease: "easeOut",
          delay: 1.25,
        }}
        className="fifth"
      ></motion.div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            // scale: 0,
          },
          visible: {
            // scale: 1,
            opacity: 1,
          },
          exit: { opacity: 0, transition: { duration: 0.25 } },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 1.5,
        }}
        className="overlap"
      >
        <div className="loader-text">
          <motion.h1
            variants={{
              hidden: {
                y: 50,
                opactiy: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.25,
              ease: "easeOut",
              delay: 1.75,
            }}
          >
            Developer
          </motion.h1>
          <motion.h1
            variants={{
              hidden: {
                y: 50,
                opactiy: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.25,
              ease: "easeOut",
              delay: 2,
            }}
          >
            Designer
          </motion.h1>
          <motion.h1
            variants={{
              hidden: {
                y: 50,
                opactiy: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.25,
              ease: "easeOut",
              delay: 2.25,
            }}
          >
            Creator
          </motion.h1>
        </div>
      </motion.div>
    </LOADER>
  );
};

const LOADER = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: 1000000000;
  background-color: var(--primary);
  > div {
    background-color: var(--text);
    width: 20vw;
    height: 100vh;
    display: inline-block;
    background-color: var(--background);
    /* &:nth-of-type(1){
    } */
  }
  .overlap {
    position: absolute;
    z-index: 10000000000000000000;
    /* background-color: var(--primary); */
    /* width: min-content; */
    inset: 0;
    width: 100vw;
    padding: 2rem;
    display: grid;
    place-items: center;
  }
  .loader-text {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-transform: uppercase;
    > h1 {
      &:nth-of-type(1),
      &:nth-of-type(3) {
        color: transparent;
        -webkit-text-stroke: 1px var(--text); /* Outline color and width for WebKit (Safari, Chrome) */
        text-stroke: 1px var(--text);
      }
    }
  }
`;
