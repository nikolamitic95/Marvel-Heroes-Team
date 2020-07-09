import React from 'react';

import { characterService } from '../../services/characterService';
import { Row, Container, Switch } from 'react-materialize';
import { HeaderInfo } from './HeaderInfo/HeaderInfo';
import { CharacterInfoPage } from './CharacterInfo/CharacterInfoPage';
import { SwitchComics } from './Switch/SwitchComics';
import { comicsService } from '../../services/comicsService';
import { FullImage } from './FullImage/FullImage';


class HeroInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            comics: [],
            comicsShown: false,
            fullImage: false
        }
    }

    componentDidMount() {
        characterService.getSingleCharacter(this.props.match.params.id)
            .then(data => {
                this.setState({
                    info: data
                })
            })
        comicsService.getComics(this.props.match.params.id)
            .then(data => {
                this.setState({
                    comics: data
                })
            })
    }

    openFullImage = () => {
        this.setState({ fullImage: true })
    }
    closeFullImage = () => {
        this.setState({ fullImage: false })
    }

    showComics = (e) => {
        this.setState({ comicsShown: !this.state.comicsShown });
    };

    render() {
        return (
            <Container className="fluid">
                <HeaderInfo />
                {this.state.fullImage && <FullImage
                    fullImage={this.state.info.fullImage}
                    removeImage={this.closeFullImage} />}
                <Container>
                    <Row>
                        <CharacterInfoPage
                            title={this.state.info.name}
                            image={this.state.info.image}
                            description={this.state.info.description}
                            openFullImage={this.openFullImage}
                        />
                    </Row>
                    <Row>
                        <Switch
                            id="Switch-11"
                            offLabel="Hide Comics"
                            onChange={this.showComics}
                            onLabel="Show Comics"
                        />
                    </Row>
                    <Row>
                        {this.state.comics.map(com => (
                            <SwitchComics
                                key={com.id}
                                display={this.state.comicsShown}
                                title={com.name}
                                image={com.image}
                            />
                        ))}
                    </Row>
                </Container>
            </Container>
        )
    }
}

export { HeroInfo }