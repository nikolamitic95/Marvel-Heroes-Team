import React from 'react';
import styles from './Search.module.css';

import { Form, FormControl, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchCharacters = ({ searchedHeroes }) => {

    const onSearch = (e) => {
        searchedHeroes(e.target.value)
    }
    return (
        <Row>
            <Col lg='12'>
                <span>
                    <Form >
                        <FaSearch className={styles.icon} />
                        <FormControl onChange={onSearch} type="text" placeholder="Search" className={`${styles.input} mr-sm-2 `} />
                    </Form>
                </span>
            </Col>
        </Row>
    )
}

export { SearchCharacters }