import React from 'react';

import styles from './HomePage.module.css';

import { characterService } from '../../services/characterService';
import { Characters } from './GridCharacters/Characters';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchCharacters } from './Search/Search';
import { MyTeam } from './MyTeam/MyTeam';
import { Header } from './Header/Header';

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

    searchedHeroes = (textInput) => {
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
            <div>
                <Header />
                <Container fluid>
                    <Row className='justify-content-lg-center'>
                        <Col lg="9" md='7' sm='5'>
                            <SearchCharacters searchedHeroes={this.searchedHeroes} />
                            <Characters
                                filteredHeroes={this.state.filteredHeroes}
                                myTeamAdd={this.myTeamAdd}
                            />
                        </Col>
                        <Col lg="3" md='5' sm='7'>
                            <Row className='justify-content-lg-center'>
                                <Col lg="12">
                                    <h4 className={styles.title}>My Team</h4>
                                    <MyTeam
                                        myTeam={this.state.myTeam}
                                        removeHero={this.removeHero}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export { Home }
