import React from 'react';

import styles from './HeroInfoPage.module.css';

import { characterService } from '../../services/characterService';
import { Switch } from 'react-materialize';
import { HeaderInfo } from './HeaderInfo/HeaderInfo';
import { HeroInfo } from './HeroInfo/HeroInfo';
import { SwitchComics } from './Comics/SwitchComics';
import { comicsService } from '../../services/comicsService';
import { FullImage } from './FullImage/FullImage';
import { Container, Row, Col } from 'react-bootstrap';
import { Loader } from '../Loader/Loader';

class HeroInfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            comics: [],
            comicsShown: false,
            isFullImage: false,
            modalIsOpen: false,
            detailsComics: {},
            isLoading: true
        }
    }

    componentDidMount() {
        characterService.getSingleCharacter(this.props.match.params.id)
            .then(data => { this.setState({ info: data }) })
        comicsService.getComics(this.props.match.params.id)
            .then(data => { this.setState({ comics: data }) })
            .finally(() => this.setState({ isLoading: false }))
    }

    showFullImage = () => {
        this.setState(prevState => ({ isFullImage: !prevState.isFullImage }))
    }

    showComics = (e) => {
        this.setState({ comicsShown: !this.state.comicsShown });
    };

    openModal = (detailsComics = {}) => {
        this.setState(prevState => ({ modalIsOpen: !prevState.modalIsOpen, detailsComics }))
    }

    render() {
        return (
            <>
                <HeaderInfo />
                {this.state.isLoading ?
                    <Loader />
                    :
                    <>
                    <Container className={styles.info}>
                        {/* {this.state.fullImage && <FullImage
                            fullImage={this.state.info.fullImage}
                            removeImage={this.closeFullImage} />} */}
                        <Row>
                            <HeroInfo
                                key={this.state.info.id}
                                title={this.state.info.name}
                                image={this.state.info.image}
                                description={this.state.info.description}
                                showFullImage={this.showFullImage}
                                isFullImage={this.state.isFullImage}
                                fullImage={this.state.info.fullImage}
                            />
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <Switch
                                    id="Switch-11"
                                    offLabel="Hide Comics"
                                    onChange={this.showComics}
                                    onLabel="Show Comics"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <SwitchComics
                                comics={this.state.comics}
                                display={this.state.comicsShown}
                                openModal={this.openModal}
                                modalIsOpen={this.state.modalIsOpen}
                                detailsComics={this.state.detailsComics}
                            />
                        </Row>
                    </Container>
                    </>
                    }
            </>

        )
    }
}

export { HeroInfoPage }