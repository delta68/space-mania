import Header from "./components/header";
import Footer from "./components/footer";
import PicDisplay from "./components/picDisplay";
const API_KEY = "jnVmmJvgR9jlgrAhreT8VHhyRjXlH3S6NnxZ1Q9p";
import Script from "next/script";

export default function EarthImages({ data }) {
  return (
    <>
      <Header />
      <div id="earthImages" className="content-area">
        {data.map((element) => {
          let year = element.identifier.slice(0, 4);
          let date = element.identifier.slice(4).match(/.{1,2}/g);
          let obj = {
            url: `https://epic.gsfc.nasa.gov/archive/natural/${year}/${date[0]}/${date[1]}/thumbs/${element.image}.jpg`,
            explanation: element.caption,
            date: element.date,
          };
          return (
            <>
              <a
                href={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${date[0]}/${date[1]}/png/${element.image}.png`}
                target="_blank"
              >
                <PicDisplay data={obj} />
              </a>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let response = await fetch(`https://epic.gsfc.nasa.gov/api/natural`);
  let data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
