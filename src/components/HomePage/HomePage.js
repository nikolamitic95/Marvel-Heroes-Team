import React from 'react';
import {fetchCharacters} from '../../Services/CharacterService';
import{GridCharacters} from './GridCharacters/GridCharacters';
import {Container} from 'react-materialize';
import './Home.css';
import {Search} from './Search/Search';
import {MyTeam} from './MyTeam/MyTeam';
import {Header} from '../Header/Header';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            characters: [],
            filteredHeroes: [],
            myTeam: [],
        }
    }

    componentDidMount() {
        const stopedTeam = localStorage.getItem("myTeam");
        fetchCharacters()
        .then(data=>{
            this.setState({
                characters: data,
                filteredHeroes: data,
                myTeam: stopedTeam ? JSON.parse(stopedTeam) : [], 
            })
        })
    }

    searchedCharacters = (textInput) => {
        const newHeroes = this.state.characters.filter((hero) => {
            return hero.name.toLowerCase().includes(textInput.toLowerCase());
        });
        this.setState({
            filteredHeroes: newHeroes,
        });
    };

    myTeamAdd = (id) => {
        const heroTeam = this.state.myTeam.find((hero) => hero.id === Number(id));
        if (heroTeam) {
          return;
        }
        const heroT = this.state.filteredHeroes.find((hero) =>hero.id === Number(id));
        const myTeam = [...this.state.myTeam, heroT];
        this.setState({ myTeam });  
        localStorage.setItem("myTeam", JSON.stringify(myTeam))
      };

      removeHero = (id)=>{
        let arr = this.state.myTeam.filter((team)=> team.id !==id)
            this.setState({myTeam: arr});
      }

    render(){
        return(
            <div className="relative">
                <Header/>
            <div className="absolute">
            <h3>My Team</h3>
        <MyTeam removeHero={this.removeHero} myTeam={this.state.myTeam}/> 
        </div>
            <Container className="main">
                <Search searchedCharacters={this.searchedCharacters}/>
                <GridCharacters myTeamAdd={this.myTeamAdd} filteredHeroes={this.state.filteredHeroes} />
            </Container>
            </div>
        )
    }
}
export {Home}
