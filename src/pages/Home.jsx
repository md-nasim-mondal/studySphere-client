import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";
import useAuth from "../hooks/useAuth";

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
      <h3 className="text-3xl text-center mt-12">This is Home</h3>
      <FAQ/>
    </div>
  );
};

export default Home;