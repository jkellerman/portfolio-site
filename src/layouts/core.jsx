import Nav from "@src/components/Nav/Nav";

const CoreLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <>{children}</>
    </>
  );
};

export default CoreLayout;
