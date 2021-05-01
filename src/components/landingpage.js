import React, { Component } from 'react';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
    padding: 20px;
    background-color: #694A38;
    height: 100vh;
`;

const LandingPageImage = styled.img`
    display: block;
    width: 100%;
    height: 100vh;
`

const LandingPage = () => {
    return (<LandingPageImage
        // src="https://upload.wikimedia.org/wikipedia/commons/3/33/Manchester_United_Panorama_%288051523746%29.jpg"
        src="https://i.ytimg.com/vi/d-zKJCKsoWw/maxresdefault.jpg"
    />
    )
};

export default LandingPage;