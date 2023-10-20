import React from "react";
import styled from "styled-components";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "auto" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <REVEAL ref={ref} width={width}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 6,
          bottom: 6,
          left: 0,
          right: 0,
          background: "var(--primary)",
          zIndex: 20,
          opacity:0.8
        }}
      /> */}
    </REVEAL>
  );
};

const REVEAL = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  /* overflow: hidden; */
`;
