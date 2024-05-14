import { FaSearch } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { RiQuestionnaireLine } from "react-icons/ri";

const FAQ = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-[5%] items-center py-20 w-[94%] md:w-full mx-auto bg-base-100 px-12 rounded-3xl my-12'>
        <div className="w-full">
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>
            Frequently Asked Questions
          </h1>
          <div className='flex flex-col mt-12 gap-6'>
            <div className='flex gap-6 bg-base-200 p-4 justify-center rounded-xl items-center'>
              <p className='text-7xl'>
                <RiQuestionnaireLine />
              </p>
              <p className='flex flex-col'>
                <span className='text-xl md:text-2xl font-semibold pb-1'>
                  Contact live chat
                </span>
                <span className='text-base md:text-lg'>
                  24/7 available. No chat bots
                </span>
              </p>
            </div>
            <div className='flex gap-6 bg-base-200 p-4 justify-center rounded-xl items-center'>
              <p className='text-5xl'>
                <FaSearch />
              </p>
              <p className='flex flex-col'>
                <span className='text-xl md:text-2xl font-semibold pb-1'>
                  Visit Help Center
                </span>
                <span className='text-base md:text-lg'>
                  Check out tutorials
                </span>
              </p>
            </div>
            <div className='flex gap-6 bg-base-200 p-4 justify-center rounded-xl items-center'>
              <p className='text-5xl'>
                <IoCallOutline />
              </p>
              <p className='flex flex-col'>
                <span className='text-xl md:text-2xl font-semibold pb-1'>
                  Call & Talk With Us
                </span>
                <span className='text-base md:text-lg'>
                  1:1 talk with a specialist
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-xl md:text-3xl font-semibold text-center py-4">Here is some common Question of our visitors.</h3>
          </div>
          <div className='join join-vertical w-full'>
            <div className='collapse collapse-plus join-item border border-base-300'>
              <input type='radio' name='my-accordion-4' defaultChecked />
              <div className='collapse-title text-xl md:text-3xl font-medium'>
                What is StudySphere?
              </div>
              <div className='collapse-content'>
                <p className='md:text-lg'>
                  StudySphere is an online platform dedicated to providing
                  students with comprehensive resources and tools to enhance
                  their learning experience. From academic articles to study
                  guides, StudySphere aims to support students in their
                  educational journey.
                </p>
              </div>
            </div>
            <div className='collapse collapse-plus join-item border border-base-300'>
              <input type='radio' name='my-accordion-4' />
              <div className='collapse-title text-xl md:text-3xl font-medium'>
                How can StudySphere help me with my studies?
              </div>
              <div className='collapse-content'>
                <p className='md:text-lg'>
                  StudySphere offers a wide range of resources tailored to
                  various subjects and educational levels. Whether you need
                  assistance with homework, research papers, or exam
                  preparation, StudySphere provides curated content to aid you
                  in achieving academic success.
                </p>
              </div>
            </div>
            <div className='collapse collapse-plus join-item border border-base-300'>
              <input type='radio' name='my-accordion-4' />
              <div className='collapse-title text-xl md:text-3xl font-medium'>
                Is StudySphere suitable for all grade levels?
              </div>
              <div className='collapse-content'>
                <p className='md:text-lg'>
                  Yes, StudySphere caters to students of all grade levels, from
                  elementary school to college and beyond. Our diverse range of
                  resources covers a broad spectrum of subjects and topics,
                  ensuring that learners of all ages and academic levels can
                  benefit from our platform.
                </p>
              </div>
            </div>
            <div className='collapse collapse-plus join-item border border-base-300'>
              <input type='radio' name='my-accordion-4' />
              <div className='collapse-title text-xl md:text-3xl font-medium'>
                Are the resources on StudySphere free to access?
              </div>
              <div className='collapse-content'>
                <p className='md:text-lg'>
                  Yes, the majority of resources on StudySphere are available
                  free of charge. We believe in making education accessible to
                  everyone, which is why we strive to offer a wealth of
                  educational materials at no cost. However, there may be some
                  premium features or content that require a subscription.
                </p>
              </div>
            </div>
            <div className='collapse collapse-plus join-item border border-base-300'>
              <input type='radio' name='my-accordion-4' />
              <div className='collapse-title text-xl md:text-3xl font-medium'>
                How can I contribute to StudySphere?
              </div>
              <div className='collapse-content'>
                <p className='md:text-lg'>
                  StudySphere welcomes contributions from educators, subject
                  matter experts, and students alike. If you have valuable
                  educational content, study materials, or academic insights to
                  share, we encourage you to reach out to our team. Together, we
                  can continue to expand and enrich the StudySphere community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
