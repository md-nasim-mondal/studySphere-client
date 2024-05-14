import { useEffect, useState } from "react";
import {
    FaFacebookMessenger,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedinIn,
    FaTelegram,
    FaTwitterSquare,
    FaWhatsappSquare,
} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import Icon from "../assets/contact-book-svgrepo-com.svg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
AOS.init();

const Contact = () => {
    const { loading } = useAuth();
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 768) { 
            setShouldAnimate(true);
            AOS.init();
        }
    }, []);

    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    const handleSendButton = () => {
        toast.success("This section is under maintaining Process.");
    };

    return (
        <div className="w-[94%] md:w-full mx-auto mb-12 py-16 lg:py-32  md:min-h-[60vh]  bg-cover bg-center bg-no-repeat bg-opacity-60   shadow-lg my-12  rounded-3xl"
        >
            <Helmet>
                <title>StudySphere || Contact</title>
                <link rel="icon" type="image/svg+xml" href={Icon} />
            </Helmet>
            <h1 className={`${shouldAnimate ? '  animate__animated animate__backInDown' : ''} text-2xl md:text-5xl flex items-center font-bold text-blue-500`}>
                <IoMdContact className="text-7xl text-blue-600" /> Contact With
                Us
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
                <div className={`${shouldAnimate ? 'animate__animated animate__fadeInUpBig' : ''} flex flex-col w-[94%] mx-auto md:w-[40%] gap-6 `}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="number"
                        placeholder="Mobile"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        placeholder="Message"
                        className="textarea textarea-bordered textarea-lg w-full"></textarea>
                    <button
                        onClick={handleSendButton}
                        className="btn btn-outline  btn-primary  w-[40%] bg-[#23BE0A] border-none text-[#FFFFFF]">
                        Send
                    </button>
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start md:pr-8">
                    <h3 className={`${shouldAnimate ? ' animate__animated animate__flip ' : ''} text-3xl text-black`}>
                        Visit our social pages
                    </h3>
                    <div className={`${shouldAnimate ? 'animate__animated animate__rollIn ' : '' } text-4xl flex gap-4 text-blue-500`}>
                        <a href="#">
                            <FaFacebookSquare />
                        </a>
                        <a href="#">
                            <FaInstagramSquare />
                        </a>
                        <a href="#">
                            <FaTwitterSquare />
                        </a>
                        <a href="#">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <h3 className={`${shouldAnimate ? 'animate__animated animate__zoomInUp' : ''} text-3xlb text-black`}>Chat With Us</h3>
                    <div className={`${shouldAnimate ? 'animate__animated animate__zoomInRight' : ''} text-4xl flex gap-4 text-blue-500`}>
                        <a href="#">
                            <FaFacebookMessenger />
                        </a>
                        <a href="#">
                            <FaWhatsappSquare />
                        </a>
                        <a href="#">
                            <FaTelegram />
                        </a>
                    </div>
                    <div className={`${shouldAnimate ? 'animate__animated animate__rollIn' : ''}`}>
                    <h3 className="text-3xl text-black">Call Our Hot-Lines</h3>
                    <a className="text-3xl text-black" href="#">
                        01699308-485
                    </a>
                    </div>
                </div>
            </div>
            <h3 className="text-3xl font-semibold text-center mt-12 text-black">
                Thanks for visiting us
            </h3>
        </div>
    );
};

export default Contact;
