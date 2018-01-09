import React, { Component } from 'react';
import axios from 'axios';
import { Card, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Breweries extends Component {
  state = { Breweries: [] }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        this.setState({ Breweries: res.data.entries })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getBreweries = () => {
    return this.state.Breweries.map(brewery => {
      return (
        <Card key={brewery.id}>
          <Card.Content>
            <Card.Header>
              Brewery Name:
              <Link to='#'>{brewery.name}</Link>
            </Card.Header>
          </Card.Content>
        </Card>
      )
    })
  }
  render() {
    return (
      <Segment>
        <Card.Group itemsPerRow={2}>
          {this.getBreweries()}
        </Card.Group>
      </Segment>
    )
  }
}

export default Breweries;