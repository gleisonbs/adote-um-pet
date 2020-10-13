import React from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react'
import styles from './SearchBar.module.css'

const pets = [
  { key: "dog", text: "Cachorro", value: "dog" },
  { key: "cat", text: "Gato", value: "cat" }
];

const cities = [
  { key: "sao_paulo", text: "São Paulo", value: "sao_paulo" },
  { key: "rio_de_janeiro", text: "Rio de Janeiro", value: "rio_de_janeiro" }
];

const searchBar = () => (
  <Input className={styles.SearchBar} type="text" placeholder="Como será seu próximo pet?" action>
    <input />
    <Dropdown id="opt-pets" placeholder='Cachorro' fluid selection options={pets} />
    <Dropdown id="opt-cities" placeholder='São Paulo' fluid selection options={cities} />
    <Button id="btn-search">PESQUISAR</Button>
  </Input>
);

export default searchBar;
