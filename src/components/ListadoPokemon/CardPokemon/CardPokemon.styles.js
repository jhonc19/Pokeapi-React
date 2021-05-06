import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: '110px',
    maxHeight: '110px',
    minHeight: '110px',    
    margin: '7px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  contentTypes: {
    display: 'flex',
    flex: 'wrap',
  },

  type: {
    display: 'flex',
    paddingRight: theme.spacing(1),
  },

  spaceLeft: {
    paddingLeft: theme.spacing(0.5),
  },
}));

export default useStyles;
