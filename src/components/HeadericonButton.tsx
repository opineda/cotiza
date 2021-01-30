import React from 'react';
import { Container, Image, Button, Icon, Popup, Grid, Segment, Checkbox, Table, Input, List } from 'semantic-ui-react';

{/* HEADER BUTTONS */}

interface Props {
    desc: String;
    iconName: any;
    // any other props that come into the component
}

const HeaderIconButton = ({desc,iconName} : Props) => {
    return (
        <Popup content={desc}
            trigger={
            <Button icon>
                <Icon size='large' name={iconName} />
            </Button>
            }
            size='small'
        />
    )
}

export default HeaderIconButton 
