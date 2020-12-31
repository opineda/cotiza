import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './custom.css'
import { Container, Image, Button, Icon, Popup, Grid, Segment, Checkbox, Table, Input, List } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button.Group >
            <Popup content='Nuevo proyecto'
              trigger={
                <Button data-content="Nuevo proyecto" icon>
                  <Icon size='large' name='add circle' />
                </Button>
              }
              size='small'
            />
            <Popup content='Guardar como...'
              trigger={
                <Button data-content="Nuevo proyecto" icon>
                  <Icon size='large' name='save' />
                </Button>
              }
              size='small'
            />
            <Popup content='Abrir'
              trigger={
                <Button data-content="Nuevo proyecto" icon>
                  <Icon size='large' name='folder open' />
                </Button>
              }
              size='small'
            />
            <Popup content='Imprimir'
              trigger={
                <Button data-content="Nuevo proyecto" icon>
                  <Icon size='large' name='print' />
                </Button>
              }
              size='small'
            />
          </Button.Group>{' '}
        </div>
        <Grid >
          <Grid.Column width={3} style={{ padding: '14px 3px' }}>
            <Segment>
              <Input fluid icon='search' placeholder='Buscar...' />
              <List style={{ overflow: 'auto', position: 'relative', height: 'calc(100vh - 140px)' }}>
                <List.Item>
                  <List.Icon name='folder' />
                  <List.Content>
                    <List.Header>src</List.Header>
                    <List.Description>Source files for project</List.Description>
                    <List.List>
                      <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                          <List.Header>site</List.Header>
                          <List.Description>Your site's theme</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                          <List.Header>themes</List.Header>
                          <List.Description>Packaged theme files</List.Description>
                          <List.List>
                            <List.Item>
                              <List.Icon name='folder' />
                              <List.Content>
                                <List.Header>default</List.Header>
                                <List.Description>Default packaged theme</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name='folder' />
                              <List.Content>
                                <List.Header>my_theme</List.Header>
                                <List.Description>
                                  Packaged themes are also available in this folder
                    </List.Description>
                              </List.Content>
                            </List.Item>
                          </List.List>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='file' />
                        <List.Content>
                          <List.Header>theme.config</List.Header>
                          <List.Description>
                            Config file for setting packaged themes
              </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='folder' />
                  <List.Content>
                    <List.Header>dist</List.Header>
                    <List.Description>Compiled CSS and JS files</List.Description>
                    <List.List>
                      <List.Item>
                        <List.Icon name='folder' />
                        <List.Content>
                          <List.Header>components</List.Header>
                          <List.Description>
                            Individual component CSS and JS
              </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='file' />
                  <List.Content>
                    <List.Header>semantic.json</List.Header>
                    <List.Description>Contains build settings for gulp</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column width={9} style={{ padding: '14px 3px' }}>
            <Segment style={{ overflow: 'auto', height: 'calc(100vh - 255px)', padding: '5' }}>
              <Table compact='very' singleLine celled definition unstackable collapsing >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell width={6}>Rubro</Table.HeaderCell>
                    <Table.HeaderCell width={4}>Cantidad / ud.</Table.HeaderCell>
                    <Table.HeaderCell>V. Unitario</Table.HeaderCell>
                    <Table.HeaderCell>Valor Total</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>Excavación Manual</Table.Cell>
                    <Table.Cell>
                      <Input
                        label={{ basic: true, content: 'm2' }}
                        labelPosition='right'
                        placeholder='1.00'
                        size='mini'
                        style={{ width: 50 }}
                      />
                    </Table.Cell>
                    <Table.Cell>1.00$</Table.Cell>
                    <Table.Cell>1.00$</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>2</Table.Cell>
                    <Table.Cell>Limpieza del santuario</Table.Cell>
                    <Table.Cell>
                      <Input
                        label={{ basic: true, content: 'm2' }}
                        labelPosition='right'
                        placeholder='1.00'
                        size='mini'
                        style={{ width: 50 }}
                      />
                    </Table.Cell>
                    <Table.Cell>1.00$</Table.Cell>
                    <Table.Cell>1.00$</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>Encofrado de paredes</Table.Cell>
                    <Table.Cell>
                      <Input
                        label={{ basic: true, content: 'm2' }}
                        labelPosition='right'
                        placeholder='1.00'
                        size='mini'
                        style={{ width: 50 }}
                      />
                    </Table.Cell>
                    <Table.Cell>1.00$</Table.Cell>
                    <Table.Cell>1.00$</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>

            <div style={{ position: 'relative', bottom: '0.2rem' }}>
              <Table compact='very' unstackable>
                <Table.Footer >
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell textAlign='right'>Subtotal</Table.HeaderCell>
                    <Table.HeaderCell textAlign='right'>3.00$</Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell textAlign='right'>IVA</Table.HeaderCell>
                    <Table.HeaderCell textAlign='right'>0.36$</Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell textAlign='right'>TOTAL</Table.HeaderCell>
                    <Table.HeaderCell textAlign='right'>3.36$</Table.HeaderCell>
                  </Table.Row>
                  <Table.Row unstackable>
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
          <Grid.Column width={4} style={{ padding: '14px 3px' }}>
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
      </header>
    </div>
  );
}

export default App;
