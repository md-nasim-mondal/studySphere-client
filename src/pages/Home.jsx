import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";
import useAuth from "../hooks/useAuth";
import Banner from "../components/Banner";
import Feature from "./../components/Feature";

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
      <Feature/>
      <FAQ/>
    </div>
  );
};

export default Home;