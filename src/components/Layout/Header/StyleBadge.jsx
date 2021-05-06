import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyleBadge = withStyles(( ) => ({
  badge: {
    top: '15px',
    right: '18px',    
    color: 'white',
    padding: '0 4px',
  },
}))(Badge);

export default StyleBadge;
