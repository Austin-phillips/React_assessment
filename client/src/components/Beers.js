import React, { Component } from 'react';
import axios from 'axios';
import { Card, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = { Beers: []}

  componentDidMount() {
    axios.get('/api/all_beers')
    .then( res => {
      this.setState({ Beers: res.data.entries })
    })
    .catch( err => {
      console.log(err)
    })
  }

  getBeers = () => {
   return this.state.Beers.map( beer => {
     return (
        <Card key={beer.id}>
          <Card.Content>
            <Card.Header>
              Beer Name:
              <Link to='#'>{beer.name}</Link>
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
          {this.getBeers()}
        </Card.Group>
      </Segment>
    )
  }
}

export default Beers;