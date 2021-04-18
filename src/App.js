import Container from "@material-ui/core/Container";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <Container>
      Dis an App
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography>
            About Me
          </Typography>
          <Typography>
            Section 2
          </Typography>
          <Typography>
            Section 3
          </Typography>
          <Typography>
            Section 4
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
