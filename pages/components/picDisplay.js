export default function PicDisplay({ data }) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-256x256 imgContainer">
            <img
              className="lazy-load mainImg"
              src={data.url}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            {data.explanation}
            <br />
          </div>
        </div>
        <div className="content">
          <time dateTime={data.date}>{data.date}</time>
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
