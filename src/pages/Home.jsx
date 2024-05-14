import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";

const Home = () => {
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