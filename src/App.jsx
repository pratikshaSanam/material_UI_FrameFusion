import React from 'react';
import {
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon:{
marginRight: '20px'
  },
  buttons:{
    marginTop:'40px'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
              Hello hi everyone, this is a photo album and trying to make this sentence as long as possible about this photo album.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photo
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary section
                  </Button>
                </Grid>
                
                
              </Grid>

              
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <CardMedia
  component="img"
  className={classes.cardMedia}
  image="https://media.istockphoto.com/id/1805954358/photo/hr-human-resources-recruitment-team-staff-management-business-concept-relationship-management.jpg?s=2048x2048&w=is&k=20&c=DEwa0J0KtQdlA68yVfnCVsXS6WmAVOcIIdG20hlUtZg="
  title="Image title"
/>

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <CardMedia
  component="img"
  className={classes.cardMedia}
  image="https://media.istockphoto.com/id/1805954358/photo/hr-human-resources-recruitment-team-staff-management-business-concept-relationship-management.jpg?s=2048x2048&w=is&k=20&c=DEwa0J0KtQdlA68yVfnCVsXS6WmAVOcIIdG20hlUtZg="
  title="Image title"
/>

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <CardMedia
  component="img"
  className={classes.cardMedia}
  image="https://media.istockphoto.com/id/1805954358/photo/hr-human-resources-recruitment-team-staff-management-business-concept-relationship-management.jpg?s=2048x2048&w=is&k=20&c=DEwa0J0KtQdlA68yVfnCVsXS6WmAVOcIIdG20hlUtZg="
  title="Image title"
/>

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <CardMedia
  component="img"
  className={classes.cardMedia}
  image="https://media.istockphoto.com/id/1805954358/photo/hr-human-resources-recruitment-team-staff-management-business-concept-relationship-management.jpg?s=2048x2048&w=is&k=20&c=DEwa0J0KtQdlA68yVfnCVsXS6WmAVOcIIdG20hlUtZg="
  title="Image title"
/>

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <CardMedia
  component="img"
  className={classes.cardMedia}
  image="https://media.istockphoto.com/id/1805954358/photo/hr-human-resources-recruitment-team-staff-management-business-concept-relationship-management.jpg?s=2048x2048&w=is&k=20&c=DEwa0J0KtQdlA68yVfnCVsXS6WmAVOcIIdG20hlUtZg="
  title="Image title"
/>

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              <CardMedia
  component="img"
  className={classes.cardMedia}
  image="https://media.istockphoto.com/id/1805954358/photo/hr-human-resources-recruitment-team-staff-management-business-concept-relationship-management.jpg?s=2048x2048&w=is&k=20&c=DEwa0J0KtQdlA68yVfnCVsXS6WmAVOcIIdG20hlUtZg="
  title="Image title"
/>

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;