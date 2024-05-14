import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";
import useAuth from "../hooks/useAuth";
import Banner from "../components/Banner";

const Home = () => {
  const {loading} = useAuth();
  
  if (loading) {
    return (
        <div className=" flex mt-16 justify-center">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    );
}
  return (
    <div>
    <Helmet>
        <title>StudySphere || Home</title>
      </Helmet>
      <Banner/>
      <FAQ/>
    </div>
  );
};

export default Home;