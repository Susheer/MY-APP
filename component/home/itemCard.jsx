import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    const {name,category}=this.props;
    return (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://w7.pngwing.com/pngs/898/751/png-transparent-leaf-vegetable-vegetarian-cuisine-diet-food-recipe-frozen-non-veg-thumbnail.png'}} />
                <Body>
                  <Text>{name}</Text>
                  <Text note>{category}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://nhncwtttsf-flywheel.netdna-ssl.com/6/wp-content/uploads/sites/29/2019/01/Eat-Vegetables.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="add" />
                  <Text>1</Text>
                  <Icon active name="add" />
                </Button>
              </Left>
             {/*   <Body>
               <Button transparent>
                <Icon active name="substract" />
                  <Text>12Rs-/</Text>
                </Button>
              </Body> */}
              <Right>
                <Text>12 Rs</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}