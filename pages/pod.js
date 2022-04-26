import PicDisplay from "./components/picDisplay";
import Header from "./components/header";
import Footer from "./components/footer";

const API_KEY = "jnVmmJvgR9jlgrAhreT8VHhyRjXlH3S6NnxZ1Q9p";

export default function PicOfDay({ data }) {
  return (
    <>
      <Header />
      <div className="content-area">
        <div id="podImage">
          <PicDisplay data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
}
