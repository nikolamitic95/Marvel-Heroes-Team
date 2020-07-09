import React from 'react';
import {  Col, Card, Icon, CardTitle, Button } from 'react-materialize';
import {Link} from 'react-router-dom'


const Character = ({name, img,  myTeamAdd, id}) =>{

 

    return(
        <Col
        m={3}
        s={12}
    >
        <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={img} />}
          
            
            title={name}
        >
               <Link to={`/hero-info/${id}`}> <Button
                    node="a"
                    small
                    style={{
                        marginRight: '5px'
                    }}
                    waves="light"
                >
                    Info
                 </Button> </Link>
            <Button onClick={()=>myTeamAdd(id)} data-id={id}
                node="a"
                small
                style={{
                    marginRight: '5px'
                }}
                waves="light"
            >
                Add 
                     </Button>
        </Card>
    </Col>
    )
}

export {Character};