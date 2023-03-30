import Footer from "@src/components/Footer/Footer";

const CoreLayout = ({ children }) => {
  return (
    <>
      <>{children}</>
      <Footer />
    </>
  );
};

export default CoreLayout;
