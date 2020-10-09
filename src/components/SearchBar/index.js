import React from 'react';
import { Input, Select, Button } from 'semantic-ui-react'
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
  <Input className={styles.SearchBar} type="text" placeholder="Como vai ser o seu pet?" action>
    <input />
    <Select id="opt-pets" options={pets} defaultValue="dog" />
    <Select id="opt-cities" options={cities} defaultValue="sao_paulo" />
    <Button id="btn-search">Pesquisar</Button>
  </Input>
);

export default searchBar;
