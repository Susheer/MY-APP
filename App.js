import React, { Component } from "react";
import { Container, Header, Body, Icon,Content,Item,Input,Left,Button,Title,Right } from "native-base";
import Node from "./component/home/item"
export default class AnatomyExample extends Component {
  state = {
    list: [
      { name: "Egg",category:"grocery" },
      { name: "Pizza",category:"dish" },
      { name: "Rice",category:"grocery" },
      { name: "Paracetamol",category:"pharmacy" },
      { name: "Fish",category:"grocery" },
      { name: "Pumpkin",category:"vegetable" },
      { name: "Potatoes",category:"vegetable" },
    
    ],
    term: "",
  };
  render() {
    const { list, term } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Near by</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Item>
            <Input
              placeholder="What do you want?"
              onChangeText={(value) => {
                this.setState({ term: value });
              }}
            />
          </Item>
          {list.map((el) => {
            if (el.name.startsWith(term)) {
              return <Node item={el} />;
            } else if (!term) {
              return <Node name={el} />;
            } else {
              null;
            }
          })}
        </Content>
      </Container>
    );
  }
}



