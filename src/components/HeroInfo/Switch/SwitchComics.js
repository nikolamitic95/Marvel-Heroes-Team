import React from 'react';
import {Switch, Col, Card, Icon, CardTitle} from 'react-materialize';
import './SwitchComics.css';


const SwitchComics = ({image, title, display }) =>{
    return(
  
<Col
m={4}
s={12}
>
  <div className={` ${display ? 'displayComics' : 'hideComics' }`}>
<Card 
  closeIcon={<Icon>close</Icon>}
  header={<CardTitle image={image} />}
  horizontal
  revealIcon={<Icon>more_vert</Icon>}
>
 {title}
</Card>
</div>
</Col>
    )
}

export{SwitchComics};