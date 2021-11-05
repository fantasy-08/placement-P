import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AlertPage from './AlertPage';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Header({ change, hall_of_fame, old, tabs }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    year: '',
    name: '',
  });
  const [state_button, setState_button] = React.useState({
    checkedA: true,
  });

  const handleChange_button = (event) => {
    setState_button({ ...state, [event.target.name]: event.target.checked });
    if (event.target.name === "checkedA") change("Increasing", !state_button.checkedA);
    else change("statsyear", !state_button.checkedB ? 2 : 3);
  };

  const HandleChange = () => {
    change("HOF", false);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    change('type', event.target.value);
  };

  return (
    <div className="text-center">
      {
        old ? <AlertPage /> : <></>
      }
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          value={state.name}
          onChange={handleChange}
          label="Year"
          inputProps={{
            name: 'name'
          }}
        >
          {
            tabs.map((tab) => {
              return <option value={tab}>{tab}</option>
            })
          }
        </Select>
      </FormControl>
      <FormGroup row>
        <div className="ml-auto">
          <FormControlLabel
            control={<Switch checked={state_button.checkedA} onChange={handleChange_button} name="checkedA" />}
            label="Sort Increasingly"
          />
        </div>

        <IconButton aria-label="delete" className={classes.margin} size="small" onClick={HandleChange}>
          {
            hall_of_fame ?
              <ArrowDownwardIcon fontSize="inherit" /> :
              <AddRoundedIcon fontSize="inherit" />
          }
        </IconButton>

      </FormGroup>
    </div>
  );
}
