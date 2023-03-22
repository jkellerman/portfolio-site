import Footer from "@src/components/Footer/Footer";
import Nav from "@src/components/Nav/Nav";

const CoreLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <>{children}</>
      <Footer />
    </>
  );
};

export default CoreLayout;
