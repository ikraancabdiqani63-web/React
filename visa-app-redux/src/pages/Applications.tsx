import { useAppSelector } from "../hooks/hooks";

function Applications() {
  const applications = useAppSelector((state) => state.visa.applications);

  return (
    <div>
      <h2>Applications</h2>

      {applications.map((app) => (
        <div key={app.id}>
          <h3>{app.fullName}</h3>

          <p>{app.country}</p>

          <p>{app.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Applications;
