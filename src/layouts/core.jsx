import Navbar from "@src/components/Navbar/Navbar";

const CoreLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
};

export default CoreLayout;
