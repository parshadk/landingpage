import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRightLong } from "react-icons/fa6";
const ProductSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const cardVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "spring", stiffness: 60, delay: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 1.3 } },
  };

  return (
    <section
      className="overflow-hidden bg-green-300 p-5 max-w-[100vw] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]"
      ref={ref}
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-start py-20 max-w-6xl mx-auto">
        <motion.div className="lg:w-2/5 w-full z-10">
          <div className="bg-green-500 lg:h-[40rem] h-[20rem] lg:rounded-3xl rounded-t-xl">
            <img
              src="https://printify.com/pfh/media/clothes-CMPWJ6JG.webp"
              alt="Products Images"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="relative lg:absolute lg:bottom-12 lg:right-0 bg-white w-full lg:rounded-2xl rounded-b-xl lg:my-8 text-center p-5 md:text-left lg:pt-[5%] lg:pe-[7%] lg:pb-[12.8%] lg:ps-[50%]"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="lg:text-3xl text-2xl font-bold mb-4">
              Easily add your design to a wide range of products
            </h2>
            <p className="text-gray-600 mb-6">
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <div className="group relative cursor-pointer p-2 w-32 border-2 bg-white rounded-full overflow-hidden text-black text-center font-semibold">
              <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                All Products
              </span>
              <div className="flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
                <span>All Products</span>
                <FaArrowRightLong />
              </div>
              <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg  dark:group-hover:bg-[#7db961] group-hover:bg-[#347731] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;


