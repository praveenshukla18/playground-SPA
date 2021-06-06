import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function CheckboxList(props) {

    const items = props.items.sort((item1, item2) => {
        if(item1.name <= item2.name){
            return -1;
        }
        return 1;
    });
    const classes = useStyles();
    const [listItems, setListItems] = React.useState(items);

    const handleToggle = (value) => () => {
        let item = listItems.find(item => item.name == value);
        item.checked = !item.checked;
        let newListItems = [...listItems];
        setListItems(newListItems);
        props.updateSelected(newListItems);
    };

    return (
        <List className={classes.root}>
            {items.map((item) => {
                const labelId = `checkbox-list-label-${item.name}`;

                return (
                    <ListItem key={item.name} role={undefined} dense button onClick={handleToggle(item.name)}>
                        <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={item.checked}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={item.name} />
                    </ListItem>
                );
            })}
        </List>
    );
}