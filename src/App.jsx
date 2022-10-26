import { useState } from 'react';
import  '../bootstrap/bootstrap.min.css';
import { useEffect } from 'react';
import { Header, Repositories, TopNav} from './components/body';
import './index.css'


function App() {
  const [user, setUser] = useState([])
  useEffect(()=> {
    fetch('https://api.github.com/users/rodrigodesigner94')
    .then(response => response.json())
    .then(data => setUser(data))
  }, [])

  const [repos, setRepos] = useState([])
    useEffect(()=> {
      fetch('https://api.github.com/users/rodrigodesigner94/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
    }, [])
  

  return (
    <div id='body'> 
    <TopNav />
               
      <Header 
        image={user.avatar_url}
        name={user.name}
        login={user.login}
        profile={user.html_url}
        location={user.location}
        bio={user.bio}
        followers={user.followers}
        following={user.following}          
      />
      <div id="repo">
      {repos.map(repo =>{
        
            return(
              <Repositories
                repoName={repo.name}
                description={repo.description}
                url={repo.html_url}
                key={repo.id}
              />  
            )
        })}
      </div>
        
    </div>
  )
}

export default App
