import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
    <Helmet>
        <title>StudySphere || Home</title>
      </Helmet>
      <h3 className="text-3xl text-center mt-12">This is Home</h3>
    </div>
  );
};

export default Home;