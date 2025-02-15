import { Flex, Button, Title } from '@mantine/core';
import ProjectData from '../../data/projects.json';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
const ProjectPage = () => {
  console.log(ProjectData);

  function compareStudent(a, b) {
    if (a.student.toLowerCase() > b.student.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  }

  ProjectData.sort(compareStudent);

  return (
    <main className="ProjectPageMain">
      <div className="ProjectTitle">
        <Title order={1}>Project Gallery</Title>
      </div>

      <SearchBar />

      <Flex mih={50} gap="md" direction="row" justify="center" wrap="wrap">
        {ProjectData.map((project) => (
          <div className="ProjectCard">
            <ProjectCard
              title={project.title}
              description={project.description}
              language={project.language}
              student={project.student}
            />
          </div>
        ))}
      </Flex>
    </main>
  );
};

export default ProjectPage;
