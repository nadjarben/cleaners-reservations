import React from 'react';
import { postOrder } from '../../../../store/actions/customerActions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles(theme => ({
    container: {
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

function ModalOrder(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        payed: false,
      });
    const [values, setValues] = React.useState({
        hazmana: 0,
        amount: 0,
        term: '',
        info: '',
      });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
      
      const handleChangeCheck = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

      const handleSubmit = () => {
      const id = props.customer._id
      const { hazmana, amount, term, info} = values;
      const { payed } = state;
      props.postOrder(id, hazmana, amount, term, info, payed);
      alert('Commande enregistree')
      window.location.reload();
      }

    return (
        <div style={{minHeight:'50vh'}}>
            <h4 style={{textAlign:'center'}}>Enregistrer une nouvelle commande</h4>
            <br/>
            
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Numero"
                    className={classes.textField}
                    value={values.hazmana}
                    onChange={handleChange('hazmana')}
                    margin="normal"
                    variant="outlined"
                />
                <br/>
                <TextField
                    id="outlined-name"
                    label="Montant"
                    className={classes.textField}
                    value={values.amount}
                    onChange={handleChange('amount')}
                    margin="normal"
                    variant="outlined"
                />
                <br/>
                <TextField
                    id="outlined-name"
                    label="Date de retour"
                    className={classes.textField}
                    value={values.term}
                    onChange={handleChange('term')}
                    margin="normal"
                    variant="outlined"
                />
                <br/>
                <TextField
                    id="outlined-name"
                    label="Infos"
                    className={classes.textField}
                    value={values.info}
                    onChange={handleChange('info')}
                    margin="normal"
                    variant="outlined"
                />
                <br/>
                <FormControlLabel
          value="start"
          control={<Checkbox color="primary" checked={state.paye} onChange={handleChangeCheck('payed')} value="payed" />}
          label="Paye"
          labelPlacement="start"
        />
        <br/>
        <Button onClick={handleSubmit} variant="outlined" color="primary" className={classes.button}>
        Envoyer
      </Button>
      </form>
        </div>
    )
}
const mapStateToProps = state => ({
  })

export default connect( mapStateToProps,
    { postOrder })(ModalOrder)