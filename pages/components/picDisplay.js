import Header from "./header";
import Footer from "./footer";

export default function PicDisplay({ data }) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-256x256 mainImg">
            <img class="lazy-load" src={data.url} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            {data.explanation}
            <br />
            <time datetime={data.date}>{data.date}</time>
          </div>
        </div>
      </div>
      {/* <figure className="picDisplay image is-256x256">
        <p>{data.date}</p>
        <img src={data.url} alt="picture" />
        <p className="floatUp"></p>
      </figure> */}
    </>
  );
}
