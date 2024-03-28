import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
function Cards() {
  return (
    <div className='box'>
          <Card className='container'   style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src="https://img.money.co.uk/t014ej9w3ur1/3J8USFpK0NinVdBp6FuHCS/0558bd0e7a1a644c3186bf79383a96c0/first-credit-card.jpg?" />
      <Card.Body>
        <Card.Title className='title'>Card Title</Card.Title>
        <Card.Text className='paragraph'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bottun' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Cards
