import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import styled from 'styled-components';
import backgroundImage from '../images/cloudy.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledCard = styled(Card)`
  background-color: rgba(0, 0, 0, 0.3);
  color:orange;
  height:100%;
  width:500px;
  border:solid 2px black;
  &:hover{
    box-shadow: 3px 3px 7px orange;
  }
 
`;
const Data=styled.p`
color:white;
`;

export const Card1 = (props) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className='mx-5 my-4 justify-content-center'>
      <StyledCard className=''>
        <CardBody>
          <CardTitle>
            <h1> <FontAwesomeIcon size="2px" icon={props.icon} /> <FontAwesomeIcon size="2px" icon={props.icon} /></h1>
          
          </CardTitle>
          <Data><h2 className='display-5'>{capitalizeFirstLetter(props.data)}</h2></Data>
          <Data><p className='display-5' >{ ((props.temp)).toFixed(0)}°C</p>
          <p>Feels Like:{(props.feelsLike).toFixed(0)}°C</p>
          <p className='display-5'>{capitalizeFirstLetter(props.country)}</p>
          <p>{props.date}</p></Data>
        </CardBody>
      </StyledCard>
    </div>
  );
};
