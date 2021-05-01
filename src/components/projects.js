import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 50px;
  background-color: #98A886;
  height: 100vh;
`;

const Projects = () => {
  return (<ProjectsContainer>
    <Typography variant="h2" >Projects I have Worked On</Typography>
  </ProjectsContainer>)
};

export default Projects;