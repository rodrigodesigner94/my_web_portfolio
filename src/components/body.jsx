import { Card, Figure, Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

 export function TopNav(){
  return(
    <Navbar bg="dark" expand="lg" style={{width: '100vw', position: 'fixed', zIndex: '1'}}>
    <Container>
      <Navbar.Brand href="#header" style={{color:'#fff'}}>E-Curriculo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#header" style={{color:'#fff'}}>Github Profile</Nav.Link>
          <Nav.Link href="#repos" style={{color:'#fff'}}>Git Repositories</Nav.Link>
          <Nav.Link href="" style={{color:'#fff'}}>Education</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
 }
  
 export function Header ({image, name, login, profile, location, bio}) {
    return (
      <Card id="header"
        style={{width: '25rem', alignItems: 'center', backgroundColor: '#000',
        boxShadow: '5px 5px 4.5px grey', marginTop: '5.5em'}}>
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
 
  