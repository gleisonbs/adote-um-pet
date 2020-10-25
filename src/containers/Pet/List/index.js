import React, { Component } from 'react'
import axiosPets from '../../../axios/axios-pets'
import Pet from '../../../components/Pet'

class List extends Component {
  state = {
    pets: []
  }

  componentDidMount() {
    axiosPets.get()
      .then(r => {
        const pets = Object.keys(r.data).map(k => {
          return { name: r.data[k].name, 
            imageURL: r.data[k].imageURL, 
            type: r.data[k].type }
        })
        this.setState({pets: pets});
      })
      .catch((e) => { console.log("Error", e) })
  }

  render() {
    const pets = this.state.pets.map((p, i) => <Pet.Item key={i} {...p} />)

    return (
      <>
        {pets}
      </>
    );
  }
}

export default List;