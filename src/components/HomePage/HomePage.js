import React from 'react';

import './Home.css';

import { characterService } from '../../services/characterService';
import { GridCharacters } from './GridCharacters/GridCharacters';
import { Container } from 'react-materialize';
import { Search } from './Search/Search';
import { MyTeam } from './MyTeam/MyTeam';
import { Header } from '../Header/Header';

console.log(characterService);


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            heroes: [],
            filteredHeroes: [],
            myTeam: [],
        }
    }

    componentDidMount() {
        const stopedTeam = localStorage.getItem("myTeam");
        characterService.getCharacter()
            .then(data => {
               return this.setState({
                    heroes: data,
                    filteredHeroes: data,
                    myTeam: stopedTeam ? JSON.parse(stopedTeam) : [],
                })
            })
    }

    searchedCharacters = (textInput) => {
        const newHeroes = this.state.heroes.filter((hero) => {
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
        const heroT = this.state.filteredHeroes.find((hero) => hero.id === Number(id));
        const myTeam = [...this.state.myTeam, heroT];
        this.setState({ myTeam });
        localStorage.setItem("myTeam", JSON.stringify(myTeam))
    };

    removeHero = (id) => {
        let arr = this.state.myTeam.filter((team) => team.id !== id)
        this.setState({ myTeam: arr });
    }

    render() {
        return (
            <div className="relative">
                <Header />
                <div className="absolute">
                    <h3>My Team</h3>
                    <MyTeam removeHero={this.removeHero} myTeam={this.state.myTeam} />
                </div>
                <Container className="main">
                    <Search searchedCharacters={this.searchedCharacters} />
                    <GridCharacters myTeamAdd={this.myTeamAdd} filteredHeroes={this.state.filteredHeroes} />
                </Container>
            </div>
        )
    }
}
export { Home }
