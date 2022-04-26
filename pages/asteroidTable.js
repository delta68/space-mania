import AsteroidTable from "./components/dataItem";
import Header from "./components/header";
import Footer from "./components/footer";

const API_KEY = "jnVmmJvgR9jlgrAhreT8VHhyRjXlH3S6NnxZ1Q9p";

export default function asteroidTable({ data }) {
  return (
    <>
      <Header />
      <AsteroidTable data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`
    );
    const data = await response.json();
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: "error",
      },
    };
  }
}
