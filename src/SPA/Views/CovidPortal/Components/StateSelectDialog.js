import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';

import StateList from '../Components/StateList';

class StateSelectDialog extends React.Component{

    constructor(props){
        super();
        this.props = props;
    }

    done = () => {
        this.props.onDone(this.selectedList);
    }

    updateSelected(list){
        this.selectedList = list;
    }

    render(){
        return(
            <Dialog open={this.props.open}>
                <DialogTitle>
                    Select states
                </DialogTitle>
                <DialogContent dividers>
                    <StateList items={this.props.stateList} updateSelected={this.updateSelected.bind(this)}/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={this.done}>
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default StateSelectDialog;