import { Container, Image, Button, Icon, Popup, Grid, Segment, Checkbox, Table, Input, List } from 'semantic-ui-react';

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

export {Row,RowFooter}