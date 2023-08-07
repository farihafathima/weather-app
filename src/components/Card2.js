import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components'


const StyledCard = styled(Card)`
  background-color: rgba(0, 0, 0, 0.3);
  color:white;
  border:solid 2px black;
  height:100px;
  width:150px;
  &:hover{
    box-shadow: 3px 3px 7px orange;
  }

`;
export const Card2 = (props) => {
    return (
        <div className='col-4 m-4'>
            <StyledCard>
              <h5>{props.requiredText}</h5>
            <p class="display-6">{(props.temp).toFixed(0)}{props.type}</p>
      </StyledCard>
            
        </div>
    )
}

