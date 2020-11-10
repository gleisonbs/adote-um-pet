import React, { Component } from 'react';
import axiosPets from '../axios/axios-pets';
import PetItem from '../components/PetItem';

class List extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }

  componentDidMount() {
    axiosPets
      .get()
      .then((r) => {
        const pets = Object.keys(r.data).map((k) => {
          return {
            name: r.data[k].name,
            imageURL: r.data[k].imageURL,
            type: r.data[k].type,
          };
        });
        this.setState({ pets });
      })
      .catch((e) => {
        console.log('Error', e);
      });
  }

  render() {
    const pets = { ...this.state }.pets.map((p) => (
      <PetItem
        key={p.imageURL}
        imageURL={p.imageURL}
        name={p.name}
        type={p.type}
      />
    ));

    return <>{pets}</>;
  }
}

export default List;
