import { Height } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: '20px',
  },
  buttons: {
    marginTop: '40px',
  },
  cardGrid: {
    padding: '20px 0',
  },
  card: {
    Height: '100%', // Fixed typo here
    display: 'flex',
    flexDirection: 'column',
  },
 
  cardMedia: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default  useStyles;