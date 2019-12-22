import React from 'react';
import { InlineNotification } from 'carbon-components-react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout>
      <InlineNotification
        hideCloseButton={false}
        iconDescription="Fechar notificação"
        kind="warning"
        notificationType="inline"
        role="alert"
        subtitle={
          <span>
            Área em construção, estão apresentados aqui os projetos de meu{' '}
            <a href="https://www.github.com/tupizz">Github</a>
          </span>
        }
        title="Atenção"
      />
      <div>
        <SectionTitle>Private projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
