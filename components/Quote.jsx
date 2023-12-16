// Import necessary dependencies and styles
"use client";

// Import necessary dependencies and styles

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import style from "@/styles/quote.module.scss";

const Quote = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Adjust this threshold based on your preference
    const triggerPoint = windowHeight * 0.7;

    if (scrollY > triggerPoint) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.8 });
    }
  };

  useEffect(() => {
    controls.start({ opacity: 0, scale: 0.8 });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className={style.quote}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{duration: 1.2}}
    >
      <div className={style.box}>
        <FaQuoteLeft className={style.iconleft} />
        <p>
          There&apos;s No Nobility In Playing <br /> Small. Be Different
        </p>
        <FaQuoteRight className={style.iconright} />
      </div>
    </motion.div>
  );
};

export default Quote;


// // Import necessary dependencies and styles
// import style from "@/styles/quote.module.scss";
// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { FaQuoteLeft } from "react-icons/fa";
// import { FaQuoteRight } from "react-icons/fa";

// const Quote = () => {
//   const controls = useAnimation();

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;

//     // Adjust this threshold based on your preference
//     const triggerPoint = windowHeight * 0.7;

//     if (scrollY > triggerPoint) {
//       controls.start({ opacity: 1, x: 0 });
//     } else {
//       controls.start({ opacity: 0, x: "-100%" });
//     }
//   };

//   useEffect(() => {
//     controls.start({ opacity: 0, x: "-100%" });
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [controls]);

//   return (
//     <motion.div
//       className={style.quote}
//       initial={{ opacity: 0, x: "-100%" }}
//       animate={controls}
//       transition={{duration: 1}}
//     >
//       <div className={style.box}>
//         <FaQuoteLeft className={style.iconleft} />
//         <p>
//           There&apos;s No Nobility In Playing <br /> Small. Be Different
//         </p>
//         <FaQuoteRight className={style.iconright} />
//       </div>
//     </motion.div>
//   );
// };

// export default Quote;


// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { FaQuoteLeft } from "react-icons/fa";
// import { FaQuoteRight } from "react-icons/fa";
// import style from "@/styles/quote.module.scss";

// const Quote = () => {
//   const controls = useAnimation();

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const element = document.querySelector(`.${style.quote}`);

//     if (element) {
//       const elementTop = element.getBoundingClientRect().top;

//       // Adjust this threshold based on your preference
//       const triggerPoint = windowHeight * 0.7;

//       if (elementTop < triggerPoint) {
//         controls.start({ opacity: 1, x: 0 });
//       }
//     }
//   };

//   useEffect(() => {
//     controls.start({ opacity: 0, x: -50 });
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [controls]);

//   return (
//     <motion.div
//       className={style.quote}
//       initial={{ opacity: 0, x: -50 }}
//       animate={controls}
//       transition={{duration: 1}}
//     >
//       <motion.div className={style.box}>
//         <FaQuoteLeft className={style.iconleft} />
//         <p>
//           There&apos;s No Nobility In Playing <br /> Small.Be Different
//         </p>
//         <FaQuoteRight className={style.iconright} />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Quote;


// "use client";
// import style from "@/styles/quote.module.scss";
// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import { FaQuoteRight } from "react-icons/fa";

// const Quote = () => {
//   return (
//     <div className={style.quote}>
//       <div className={style.box}>
//         <FaQuoteLeft className={style.iconleft} />
//         <p>
//           There&apos;s No Nobility In Playing <br /> Small.Be Different
//         </p>
//         <FaQuoteRight className={style.iconright} />
//       </div>
//     </div>
//   );
// }; 

// export default Quote;
