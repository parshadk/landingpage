import React, { useEffect } from 'react';
import image4 from './../assests/printify1.png'
import image5 from './../assests/printify2.png'
import image6 from './../assests/printify3.png'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductCardSec = () => {
  const controls = useAnimation();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start('visible');
      }, 800);
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const features = [
    {
      title: 'CREATE',
      subtitle: 'Custom Products',
      description: 'Easily add your designs to a wide range of products using our free tools',
      image: image4,
    },
    {
      title: 'SELL',
      subtitle: 'On Your Terms',
      description: 'You choose the product, sale price, and where to sell.',
      image: image5,
    },
    {
      title: 'WE HANDLE',
      subtitle: 'Fulfillment',
      description: 'We handle all the printing and delivery logistics once an order is placed.',
      image: image6,
    },
  ];

  return (
    <section className="bg-white-200 py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel for small devices */}
        <div className="sm:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <motion.div variants={cardVariants} className="text-center" >
                  <div className="flex justify-center">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-16 w-16 mb-4"
                    />
                  </div>
                  <h3 className="text-xl text-center mb-0 font-semibold text-green-600">
                    {feature.title}
                  </h3>
                  <h3 className="text-xl font-semibold">{feature.subtitle}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants} className="text-start">
              <div className="flex justify-start">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-16 w-16 mb-4"
                />
              </div>
              <h3 className="text-xl text-start mb-0 font-semibold text-green-600">
                {feature.title}
              </h3>
              <h3 className="text-xl font-semibold">{feature.subtitle}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCardSec;