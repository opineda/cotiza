import React from 'react';
import { Container, Image, Button, Icon, Popup, Modal, Header, Checkbox, Table, Input, List, Form, Segment } from 'semantic-ui-react';

interface PropsRow {
    id: Number;
    descripcion: any;
    unidad: String;
    cantidad: any;
    vUnitario: Number;
    vTotal: Number;
    // any other props that come into the component
  }

interface PropsRowF {
    nombre: String;
    valor: Number;
    // any other props that come into the component
}

function Row({id,descripcion,unidad,cantidad,vUnitario,vTotal}: PropsRow) {
    return (
        <Table.Row style={{ cursor: "pointer" }}>
            <Table.Cell>
                <Checkbox />
            </Table.Cell>
            <Table.Cell width={1}>{id}</Table.Cell>
            <Table.Cell style={{ 
                        whiteSpace: "pre-wrap",
                        textOverflow: "ellipsis",
                        display: "table-cell",
                        overflow: "hidden"
             }} width={8}>{descripcion}</Table.Cell>
            <Table.Cell width={3}>
                <Input
                label={{ basic: true, content: unidad }}
                labelPosition='right'
                placeholder={cantidad}
                size='mini'
                style={{ width: 50 }}
                />
            </Table.Cell>
            <Table.Cell textAlign='right' width={2}>{vUnitario}</Table.Cell>
            <Table.Cell textAlign='right' width={2}>{vTotal}</Table.Cell>
        </Table.Row>
    );
}

function RowFooter({nombre,valor}: PropsRowF) {
    return (
        <Table.Row >
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell textAlign='right'>{nombre}</Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>{valor}</Table.HeaderCell>
        </Table.Row>
    );
}

function LoginModal() {
    const [open, setOpen] = React.useState(false)
  
    return (
      <Modal
        basic
        onClose={() => setOpen(true)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Button>Iniciar sesión</Button>}
      >
        <Header icon>
          <Icon name='building outline' />
          Ingresa tus datos para empezar
        </Header>
        <Modal.Content>
            <Form inverted size='large'>
                <Segment inverted stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Usuario' />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Contraseña'
                    type='password'
                />
                </Segment>
            </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='teal' inverted onClick={() => setOpen(false)}>
            <Icon name='checkmark' /> Iniciar sesión
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }


export {Row,RowFooter,LoginModal}