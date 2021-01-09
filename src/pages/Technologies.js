import { useState } from 'react';

function Technologies() {
  const [technologies, setTechnologies] = useState(['React']);
  const [newTech, setNewTech] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!newTech || technologies.includes(newTech)) return;

    setTechnologies([...technologies, newTech]);
    setNewTech('');
  }

  const handleDelete = (tech) => {
    setTechnologies(technologies.filter((techItem) => techItem !== tech));
  }

  return (
    <>
      <ul data-testid="ul-techs">
        {technologies.map(tech => (
          <li data-testid={tech} key={tech}>
            {tech}
            {"  "}
            <button
              disabled={tech === "React"}
              data-testid={`${tech}-btn-delete`}
              type="button"
              onClick={() => handleDelete(tech)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <form data-testid="form-add-tech" onSubmit={handleSubmit}>
        <input
          data-testid="input-add-tech"
          type="text"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Technologies;