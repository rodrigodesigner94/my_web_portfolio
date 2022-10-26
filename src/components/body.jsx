import { Card, Figure, Button, Container, Nav, Navbar } from "react-bootstrap";

 export function TopNav(){
  return(
    <Navbar bg="dark" variant="dark" style={{width: '100vw', position: 'fixed', zIndex: '1',
     transitionTimingFunction: 'ease-in', transition: 'all 0.5s'}}>
        <Container>
          <Navbar.Brand href="#header">E-Currículo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#header">GitHub Profile</Nav.Link>
            <Nav.Link href="#repos">GitHub Repositories</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
 }
  
 export function Header ({image, name, login, profile, location, bio}) {
    return (
      <Card id="header"
        style={{width: '30rem', alignItems: 'center', backgroundColor: '#000',
        boxShadow: '5px 5px 4.5px grey', marginTop: '65px'}}>
        <Figure style={{marginTop: '10px'}}>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={image}
          style={{borderRadius: "50%"}}
        />        
      </Figure>
        <Card.Body style={{alignItems: 'center',color: '#fff'}} >
          <Card.Title style={{height:'2rem'}}>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{height:'1.3rem'}} >{location}</Card.Subtitle>
          <Card.Link href={profile}>{login}</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/rodrigo-borges-78a359a1/">Linkedin Profile</Card.Link>
          <Card.Text >            
            {bio}
          </Card.Text>          
        </Card.Body>
      </Card>
    );
  };

  export function Repositories({repoName, description, url}) {
    return(
        
        <Card id="repos"
         style={{width: '25rem', margin: '10px', boxShadow: '4px 4px 6px'}}>
      <Card.Header>Repositório</Card.Header>
      <Card.Body>
        <Card.Title style={{height:'2rem'}}>{repoName}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button href={url} target='_blank'>Visite</Button>
      </Card.Body>
    </Card>
    )
    
  };
 
  