import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

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
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container>
      Dis an App
      <AppBar color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <Typography className={classes.title} >
            <Link underline="hover"
            >
              About Me
            </Link>
          </Typography>
          <Typography className={classes.title} >
            <Link>
              Second
            </Link>
          </Typography>
          <Typography className={classes.title} >
            <Link>
              Third
            </Link>
          </Typography>
          <Typography className={classes.title} >
            <Link>
              Fourth
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
