import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography, IconButton, Link, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Main from "./components/main";
import { Link as ScrollLink, animateScroll as scroll, Element } from "react-scroll";
import About from './components/about'
import Footer from './components/footer'
import LandingPage from "./components/landingpage";
import Projects from "./components/projects";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(4),
  },
  grow: {
    flexGrow: 1,
  },
  maincontainer: {
    backgroundColor: "#2E4057",
    paddingTop: "20px"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <Typography className={classes.title} >
            <ScrollLink
              to="about"
              delay="0"
              smooth="easeInOutQuart"
              offset={-100}
            >
              About Me
            </ScrollLink>
          </Typography>
          <Typography className={classes.title} >
            <ScrollLink
              to="footer"
              delay="0"
              smooth="easeOutQuint"
              offset={-100}
            >
              Footers
            </ScrollLink>
          </Typography>
          <Typography className={classes.title} >
            <ScrollLink
              to="third"
              delay="0"
              smooth="easeInOutQuart"
            >
              Third
            </ScrollLink>
          </Typography>
          <Typography className={classes.title} >
            <ScrollLink
              to="fourth"
              delay="0"
              smooth="easeInOutQuart"
            >
              Fourth
            </ScrollLink>
          </Typography>
        </Toolbar>
      </AppBar>

      <LandingPage />
      
      <Container className={classes.maincontainer} maxWidth="false">
      <Element name="about">
        <About/>
      </Element>
      <Element name="projects">
        <Projects/>
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
      </Container>
    </div>
  );
}

export default App;
