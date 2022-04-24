import PicDisplay from "./components/picDisplay";

const API_KEY = "jnVmmJvgR9jlgrAhreT8VHhyRjXlH3S6NnxZ1Q9p";

export default function PicOfDay({ data }) {
  return <PicDisplay data={data} />;
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
