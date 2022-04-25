export default function AsteroidTable({ data }) {
  let obj = [];
  let arr = Object.keys(data["near_earth_objects"]);
  arr.forEach((key, index) => {
    let j = data["near_earth_objects"][key];
    j.map((dt) => {
      obj.push({
        name: dt.name,
        absolute_magnitude_h: dt.absolute_magnitude_h,
        diameter: `${dt["estimated_diameter"]["kilometers"].estimated_diameter_min} - ${dt["estimated_diameter"]["kilometers"].estimated_diameter_max}`,
        missDistance: dt.close_approach_data[0].miss_distance.kilometers,
        link: dt.nasa_jpl_url,
        hazardous: dt.is_potentially_hazardous_asteroid,
      });
    });
  });
  return (
    <table className="table asteroidTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>
            <abbr title="Magnitude at 1au from sun and observer">
              [H] Absolute magnitude
            </abbr>
          </th>
          <th>Estimated Diameter (kms) </th>
          <th>Miss distance (kms) </th>
          <th>Link</th>
          <th>Potentially hazardous</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>
            <abbr title="Magnitude at 1au from sun and observer">
              [H] Absolute magnitude
            </abbr>
          </th>
          <th>Estimated Diameter (kms) </th>
          <th>Miss distance (kms) </th>
          <th>Link</th>
          <th>Potentially hazardous</th>
        </tr>
      </tfoot>
      <tbody>
        {obj.map((j) => {
          return (
            <tr>
              <td>{j.name}</td>
              <td>{j.absolute_magnitude_h}</td>
              <td>{j.diameter}</td>
              <td>{j.missDistance}</td>
              <td>
                <a href={j.link} target="_blank">
                  link
                </a>
              </td>
              <td>{j.hazardous ? "True" : "False"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
