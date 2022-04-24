export default function AsteroidTable({ data }) {
  return (
    <table className="table">
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
        {
      Object.keys(data["near_earth_objects"]).forEach((key, index) => {
        let ke = data["near_earth_objects"].key;
        ke.map((j) => {
            return (
            <tr>
              <td>{j.name}</td>
              <td>{j.absolute_magnitude_h}</td>
              <td>{j.estimated_diameter.kilometers}</td>
              <td>{j.close_approach_data[0].miss_distance.kilometers}</td>
              <td>{j.nasa_jpl_url}</td>
              <td>{j.is_potentially_hazardous_asteroid}</td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  );
}
