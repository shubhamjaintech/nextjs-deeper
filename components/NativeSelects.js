import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
    width: "100%",
    // display: 'block'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: [],
    singleSelect:''
  });

  const getMultipleSelectValue = (event) => {
    const { options } = event?.target;
    const multiSelectValue = [];
    for (let i = 0; i < options?.length; i += 1) {
        if (options[i]?.selected) {
            multiSelectValue.push(options[i]?.value);
        }
    }
    return multiSelectValue;
};
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: getMultipleSelectValue(event)
    });
  };

  const handleChange2 = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };


  return (
    <div>
      <FormControl className={classes.formControl} style={{width: '100%'}}>
        <InputLabel htmlFor="age-native-simple" shrink={true}>Multiple Select</InputLabel>
        <Select
          native
          value={state.age}
          multiple
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value="">Select State </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple2" shrink={true}>singleSelect</InputLabel>
        <Select
          native
          value={state.singleSelect}
          onChange={handleChange2}
          inputProps={{
            name: 'singleSelect',
            id: 'age-native-simple2',
          }}
        >
          <option aria-label="None" value="">Select State </option>
          <option value={10}>1111111111</option>
          <option value={20}>2222222222</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
}
