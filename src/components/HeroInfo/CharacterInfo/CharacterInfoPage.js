import React from 'react';
import {Col, Card, Icon, CardTitle} from 'react-materialize';


const CharacterInfoPage = ({image, title, description, openFullImage})=>{
    return(
        <Col
        m={12}
        s={12}
      >
        <Card onClick={openFullImage}
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={image}/>}
          horizontal
          revealIcon={<Icon>more_vert</Icon>}
        >
          
            <h5>{title}</h5>
         {description}
        </Card>
      </Col>
    )
}
export{CharacterInfoPage}