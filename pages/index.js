import Link from "next/link";
import Script from "next/script";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="content-area">
        <h1 className="title has-text-primary">Project for Webmania</h1>
        <div className="section">
          This project was submitted on 23rd April for Equinox
        </div>
      </div>
      <Script src="../components/script.js" />
      <Footer />
    </>
  );
}
