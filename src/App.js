import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Main from "./components/main";

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
    backgroundColor: "gray",
    height: "100vh",
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
            <Link href="/about" underline="hover" >
              About Me
            </Link>
          </Typography>
          <Typography className={classes.title} >
            <Link href="/page2" underline="hover" >
              Second
            </Link>
          </Typography>
          <Typography className={classes.title} >
            <Link href="/page3" underline="hover" >
              Third
            </Link>
          </Typography>
          <Typography className={classes.title} >
            <Link href="/page4" underline="hover" >
              Fourth
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.maincontainer} maxWidth="false">
        <Main />
      </Container>
    </div>
  );
}

export default App;
