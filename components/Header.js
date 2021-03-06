import React,{Component} from 'react';
import {Menu,Button,Icon} from 'semantic-ui-react';
import {Link} from '../routes';
import web3 from '../ethereum/web3';
import {Router} from '../routes';
import { Helmet } from 'react-helmet';
class Header extends Component{
  clickViewProfile=async event=> {
    var accounts;
    var add;
    Promise.all(
      accounts= await web3.eth.getAccounts(),
      add=accounts[0]
    );
    Router.pushRoute(`/showProfiles/${add}`);
  }
  clickCreateContract=async event=>{

    Router.pushRoute(`/contracts/new`);
  }
  clickToGlobal=async event=>{

      Router.pushRoute(`/`);
    }

    clickViewProfile=async event=> {
      var accounts;
      var add;
      Promise.all(
        accounts= await web3.eth.getAccounts(),
        add=accounts[0]
      );
      Router.pushRoute(`/showProfiles/${add}`);
    }
  render(){
  return (
    <Menu style={{marginTop:'10px'}}>
      <Helmet>
          <title>Contracts Management</title>
          <link rel = "icon" href = "https://img.icons8.com/nolan/64/data-protection.png"
        type = "image/x-icon" />
      </Helmet>

    <Button animated basic color='grey' className="item" onClick={this.clickToGlobal}>
      <Button.Content visible>Global Contract</Button.Content>
      <Button.Content hidden>
        <Icon name='globe' />
      </Button.Content>
    </Button>
    <Menu.Menu position="right">
    <Button.Group>
    <Button animated basic color='grey' className="item" onClick={this.clickViewProfile}>
      <Button.Content visible>View Profiles</Button.Content>
      <Button.Content hidden>
        <Icon name='users' />
      </Button.Content>
    </Button>
    <Button animated basic color='grey' className="item" onClick={this.clickCreateContract}>
      <Button.Content visible>Create Contract</Button.Content>
      <Button.Content hidden>
        <Icon name='add' />
      </Button.Content>
    </Button>
    </Button.Group>
    </Menu.Menu>
    </Menu>
  )}
}
export default Header;
