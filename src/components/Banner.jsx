import p1 from "../assets/images/p7.jpg";
import p2 from "../assets/images/p6.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className='mySwiper'>
        <SwiperSlide>
          <div
            className='hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16'
            style={{
              backgroundImage: `url(${p1})`,
            }}>
            <div className='hero-overlay rounded-xl md:rounded-3xl'></div>
            <div className='hero-content text-center text-neutral-content '>
              <div>
                <h1 className='mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]'>
                  Academic Odyssey: Navigate Your Learning Journey
                </h1>
                <p className='mb-5 font-medium text-white '>
                  Embark on a scholarly adventure with resources tailored to
                  every stage of your educational voyage. From study tips to
                  career guidance, our curated collection equips learners with
                  the tools and knowledge needed to thrive in academia and
                  beyond. Whether you&apos;re a novice explorer or a seasoned
                  scholar, let us be your compass on the path to academic
                  success.
                </p>
                <Link
                  to='/assignments'
                  className='btn btn-ghost btn-outline text-white text-lg font-bold '>
                  See All Assignment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16'
            style={{
              backgroundImage: `url(${p2})`,
            }}>
            <div className='hero-overlay rounded-xl md:rounded-3xl'></div>
            <div className='hero-content text-center text-neutral-content '>
              <div>
                <h1 className='mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]'>
                  Scholarly Spotlight: Illuminating Paths to Success
                </h1>
                <p className='mb-5 font-medium text-white '>
                  Explore insightful content curated to guide students through
                  challenges and triumphs on their academic endeavors. Our
                  platform shines a spotlight on the experiences and expertise
                  of educators and peers, offering valuable insights, advice,
                  and inspiration to help you navigate the complexities of
                  academia with confidence. Join us as we illuminate the
                  pathways to scholarly achievement and personal growth.
                </p>
                <Link
                  to='/assignments'
                  className='btn btn-ghost btn-outline text-white text-lg font-bold '>
                  See All Assignment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16'
            style={{
              backgroundImage: `url(${p3})`,
            }}>
            <div className='hero-overlay rounded-xl md:rounded-3xl'></div>
            <div className='hero-content text-center text-neutral-content '>
              <div>
                <h1 className='mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]'>
                  Learning Nexus: Where Knowledge Meets Opportunity
                </h1>
                <p className='mb-5 font-medium text-white '>
                  Dive into a virtual realm where educational opportunities
                  abound, fostering growth and discovery for all learners. Our
                  platform serves as a dynamic nexus where knowledge intersects
                  with opportunity, connecting students, educators, and
                  resources in a collaborative ecosystem. Whether you seek
                  academic support, career guidance, or personal development,
                  our diverse array of offerings empowers you to pursue your
                  passions and realize your potential.
                </p>
                <Link
                  to='/assignments'
                  className='btn btn-ghost btn-outline text-white text-lg font-bold '>
                  See All Assignment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16'
            style={{
              backgroundImage: `url(${p4})`,
            }}>
            <div className='hero-overlay rounded-xl md:rounded-3xl'></div>
            <div className='hero-content text-center text-neutral-content '>
              <div>
                <h1 className='mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]'>
                  Mindful Learning Hub: Cultivating Wisdom, One Click at a Time
                </h1>
                <p className='mb-5 font-medium text-white '>
                  Delve into a sanctuary of learning, where mindfulness meets
                  scholarship, empowering users to excel academically and
                  personally. Our platform is more than just a repository of
                  information; it&apos;s a nurturing environment where learners
                  can cultivate self-awareness, resilience, and well-being
                  alongside their academic pursuits. Through curated content,
                  interactive exercises, and community support, we invite you to
                  embark on a transformative journey of growth and
                  enlightenment.
                </p>
                <Link
                  to='/assignments'
                  className='btn btn-ghost btn-outline text-white text-lg font-bold '>
                  See All Assignment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero bg-cover bg-center h-[550px] lg:min-h-[660px] xl:min-h-[720px] rounded-xl md:rounded-3xl bg-no-repeat w-[94%] md:w-full mx-auto my-12 md:my-16'
            style={{
              backgroundImage: `url(${p5})`,
            }}>
            <div className='hero-overlay rounded-xl md:rounded-3xl'></div>
            <div className='hero-content text-center text-neutral-content '>
              <div>
                <h1 className='mb-5  text-white text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]'>
                  Academic Atlas: Mapping Your Path to Excellence
                </h1>
                <p className='mb-5 font-medium text-white '>
                  Uncover a treasure trove of tools and insights to chart your
                  course towards academic achievement and fulfillment. Our
                  platform acts as your personal academic atlas, guiding you
                  through the ever-changing landscape of higher education with
                  clarity and purpose. Whether you&apos;re navigating course
                  selections, exploring career pathways, or seeking research
                  opportunities, our comprehensive resources are here to help
                  you plot your trajectory towards excellence.
                </p>
                <Link
                  to='/assignments'
                  className='btn btn-ghost btn-outline text-white text-lg font-bold '>
                  See All Assignment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
