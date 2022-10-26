import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="container">{children}</main>

      <Footer />
    </>
  );
};
