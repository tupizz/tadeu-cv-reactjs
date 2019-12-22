import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
  return (
    <Layout>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, index) => (
            <WorkItem key={index}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle>
                <span>{work.location}</span>
                <p>
                  {`${work.start.month}/${work.start.year}`} to{' '}
                  {work.end.year && work.end.month ? (
                    `${work.end.month}/${work.end.year}`
                  ) : (
                    <span>nowadays</span>
                  )}
                </p>
              </div>
              <Paragraph>{work.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
