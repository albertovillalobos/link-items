require('normalize.css/normalize.css');
require('styles/App.css');
var _ = require('underscore');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let cItems = [
  'http://www.zeldadungeon.net/Zelda05/Items/DekuStickG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/DekuNutG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/BombG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/FairyBowG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/FireArrowG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/DinsFireG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/FairySlingshotG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/OcarinaofTimeG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/BombchuG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/HookshotG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/IceArrowG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/FaroresWindG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/BoomerangG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/LensofTruthG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/MagicBeanG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/MegatonHammerG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/LightArrowG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/NayrusLoveG.png',
  'http://www.zeldadungeon.net/Zelda05/Items/BottleG.png',
  'http://www.zeldadungeon.net/Zelda05/BiggoronSwordQuest/ClaimCheckG.png',
  'http://www.zeldadungeon.net/Zelda05/Masks/MaskofTruth.png'
];

let linkImage = 'http://i.imgur.com/8qpm3xm.png';
let naviImage = 'http://i.imgur.com/e6JQTYk.png'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenItems: cItems,
      shownItems: [],
    }
  }

  render() {
    return (
      <div className="index">
        <img src={linkImage} alt="Link" />
        <Navi addItem={this.addItem.bind(this)}/>
        <Inventory items={this.state.shownItems}/>
      </div>
    );
  }

  addItem() {
    if (this.state.hiddenItems.length > 0) {
      // pick random item index
      var randomIndex = _.random(0, this.state.hiddenItems.length-1);
      var newItem = this.state.hiddenItems[randomIndex];
      var hiddenItems = _.without(this.state.hiddenItems, newItem);
      var shownItems = this.state.shownItems;
      shownItems.push(newItem);
      this.setState({
        hiddenItems: hiddenItems,
        shownItems: shownItems
      });
    }
  }
}

class Navi extends React.Component {
  render() {
    return (
      <div className='navi' onClick={this.props.addItem}>
        <img className='navi' src={naviImage} alt="Navi" />
        Click me to get an item!
      </div>
    );
  }
}

class Inventory extends React.Component {
  render() {
    return (
      <div className='inventory'>
        {
          this.props.items.map(function(item) {
            return (<img src={item} className='inventory-item'/>)
          })
        }
      </div>
    )
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;
