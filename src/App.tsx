import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './custom.css'
import { Container, Image, Button, Icon, Popup, Grid, Segment, Checkbox, Table, Input, List } from 'semantic-ui-react';
import HeaderIconButton from './components/HeadericonButton'
import {Row,RowFooter} from './components/Functions'

var cmd = process.argv[1];
var credJson = JSON.parse('[{"id":0,"usr":"Usuario","pwd":"RGVtbzEyMw==","isActive":false,"isDemo":true,"startDate":null},{"id":1,"usr":"Ingeniero","pwd":"ZWRpZmljaXVt","isActive":false,"isDemo":false,"startDate":null},{"id":2,"usr":"Admin","pwd":"JEFkbWluMTIzKg==","isActive":false,"isDemo":false,"startDate":null}]');

if (localStorage.getItem("credentials") === null) {
    // Running for the first time.
  localStorage.setItem("credentials",JSON.stringify(credJson));
}

var credVar = JSON.parse(localStorage.getItem('credentials') || '{}');
var found = credVar.filter(function(item: any) { return item.isActive === true; });
console.log('found', found[0]);
if (found[0] === undefined ) {
  console.log('Its undefined');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/*Components.HeaderIconButton("Nuevo proyecto",'add circle'); */}
          <Button.Group > 
            <HeaderIconButton desc={"Nuevo proyecto"} iconName={"add circle"}/>
            <HeaderIconButton desc={"Guardar como..."} iconName={"save"}/>
            <HeaderIconButton desc={"Abrir"} iconName={"folder open"}/>
            <HeaderIconButton desc={"Imprimir"} iconName={"print"}/>
          </Button.Group>
        </div>
      </header>
      <Grid >
        <Grid.Column width={11} style={{ padding: '14px 6px 14px 19px'}} >
            <Table compact='very' definition unstackable fluid fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell><Checkbox /></Table.HeaderCell>
                  <Table.HeaderCell width={1}>#</Table.HeaderCell>
                  <Table.HeaderCell width={8}>Rubro</Table.HeaderCell>
                  <Table.HeaderCell textAlign='right' width={3}>Cantidad / ud.</Table.HeaderCell>
                  <Table.HeaderCell textAlign='right' width={2}>V. Unitario</Table.HeaderCell>
                  <Table.HeaderCell textAlign='right' width={2}>Valor Total</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Row id={1} descripcion={"Excavación Manual Manual Manual Manual Manual Manual"} unidad={"m2"} cantidad={2} vUnitario={1.251} vTotal={2.50}/> 
                <Row id={2} descripcion={"Excavación Manual"} unidad={"m2"} cantidad={2} vUnitario={1.251} vTotal={2.50}/> 
                <Row id={3} descripcion={"Excavación Manual"} unidad={"m2"} cantidad={2} vUnitario={1.251} vTotal={2.50}/> 
                <Row id={3} descripcion={"Excavación Manual"} unidad={"m2"} cantidad={2} vUnitario={1.251} vTotal={2.50}/> 
                <Row id={3} descripcion={"Excavación Manual"} unidad={"m2"} cantidad={2} vUnitario={1.251} vTotal={2.50}/> 
                <Row id={3} descripcion={"Excavación Manual"} unidad={"m2"} cantidad={2} vUnitario={1.251} vTotal={2.50}/> 
                <Row id={3} descripcion={"Excavación Manual"} unidad={"m2"} cantidad={2} vUnitario={1.251} vTotal={2.50}/> 
              </Table.Body>
            </Table>

          <div style={{ position: 'relative', bottom: '0.2rem' }}>
            <Segment.Group>
              <Segment.Group horizontal>
                <Segment>Subtotal: 0.00</Segment>
                <Segment>IVA: 0.00</Segment>
                <Segment>Indirectos: 0.00</Segment>
              </Segment.Group>
              <Segment>Total: 0.00</Segment>
            </Segment.Group>
            <Table compact='very' unstackable fluid>
              <Table.Footer >
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan='5'>
                    <Button floated='right' icon labelPosition='left' primary size='small' >
                      <Icon name='add' /> Añadir
                    </Button>
                    <Button disabled icon labelPosition='right' size='small' >
                      Editar
                      <Icon name='edit' /> 
                    </Button>
                    <Button disabled icon labelPosition='right' size='small' >
                      Eliminar
                      <Icon name='delete' /> 
                    </Button>
                    <Button icon labelPosition='right' size='small' >
                      Exportar
                      <Icon name='share square' /> 
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>

        </Grid.Column>
        <Grid.Column width={5} style={{ padding: '14px 19px 14px 4px' }}>
          <Segment>
            <div style={{ overflow: 'auto', height: 'calc(100vh - 85px)', padding: '15' }}>
              <div>Total rubros: 4
                <Input fluid icon='filter' placeholder='Filtrar...' />
              </div>
              <hr/>
              <div>Contratista :</div>
              <Input fluid disabled action={{icon:'edit icon'}} placeholder='Constructora Fulanito' />
              <br/>
              <div>Cliente :</div>
              <Input fluid disabled action={{icon:'edit icon'}} placeholder='Ministerio Ejemplo' />
              <br/>
              <div>Ubicación :</div>
              <Input fluid disabled action={{icon:'edit icon'}} placeholder='Calle 1 #1234 y Calle 2' />
            </div>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
