/*type experienceProps = {
  description: string;
}

function Experience({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  }

export default function Experiences({experiences}: {experiences: string[] }) {
  return (
    <div>
       {experiences.map((experience, index) => (
        <Experience key={index} description={experience} />
       ))}
    </div>
  );
}

  function Experience({description}: {description: string}) {
    return <p>{description}</p>
  }
*/
type ExperienceProps = {
  children: React.ReactNode;
};
  
function Experience({ children }: ExperienceProps) {
  return <div>{children}</div>;
}

export default function Experiences() {
  const experiences = [
    { title: "Erfaring 1", description: "Lage en nettside for liten bedrift" },
    { title: "Erfaring 2", description: "Lage en kalkulator" },
    { title: "Erfaring 3", description: "Dette prosjektet" }
     ];

return (
  <div className="card">
    <h2>Erfaringer</h2>
    {experiences.length === 0 ? (
      <p>Ingen erfaringer</p>
    ) : (
      experiences.map((experience, index) => (
        <Experience key={index} >
          <h3>{experience.title}</h3>
          <p>{experience.description}</p>
        </Experience>
      ))
    )}
  </div>
);
}
