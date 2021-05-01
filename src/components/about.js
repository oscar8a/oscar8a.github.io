import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const AboutContainer = styled.div`
    padding: 50px;
    background-color: #F4AC45;
`;

const About = () => {
  return (<AboutContainer>
    <Typography variant="h1" >A Short Bio</Typography>
    <Typography variant="h5" >
      I'm from a small city called Siguatepeque, Honduras. It is located in a basin-like area, sorrounded by forests and mountains.
      There was a constitutional crisis in 2009, which resulted in a military coup. It wasn't safe and this prompted me to move to
      Orlando, FL where I finished High School and College.
      Since I was young I have always messed around with computers and other technology gadgets. I know my way around them and this
      made me become the go to person when anyone had problems or issue with their tech, especially my parents and their friends.
      I knew there was so much more to learn, since there were still more complex things that to me were magic. So I decided to 
      study in a technology related field when I went to college.
      I attained my degree in Information Technology and worked in the field for a couple years. Helping customers with their 
      tech problems and fix any issues that might need fixing from a technician.
      The feeling that I could always do more was there, which impulsed me to go back to school, more specifically a coding bootcamp 
      to strengthen my software development skills. I have noticed how websites and other web applications have evolved so much in a
      short time, so I was excited to learn these skills in order to build them myself. One of the most valuable skills I learned is 
      knowing how-to-learn. Researching and applying the technologies and frameworks that exist in the best way possible for the project
      I would be working on. The future is promising and we will be part of it. Thank You for reading!
    </Typography>
  </AboutContainer>)
};

export default About;