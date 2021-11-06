import React from "react";
import { useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/"component={HomePage}/>
          <Route path="/projects" component={ProjectsPage}/>
          <Route exact path="/loading" component={LoadingPage}/>
          <Route path="/projects/:projectId" component={ProjectPage} />

        </Switch>


    </Router>
  );
}

const projects = [
  {
    id: 1,
    name: "Project1",
    system: "SEP APP",
},
{
    id: 2,
    name: "Project2",
    system: "System2",
},
{
    id: 3,
    name: "Project3",
    system: "SEP APP",
},
]

function HomePage() {
  return <div>
    <h2>HomePage</h2>
    <Link to='/projects'>Go to projects</Link>
  </div>;
}


function ProjectsPage(props){
  return (
    <div>
      <h2>
        Project Page
      </h2>
      <ul>
        {projects.map ((project,i) =>{
          return (
            <li>
              <Link to={`/projects/${project.id}`} > {project.name}</Link>
            </li>
          )
        }
        
        )}
      </ul>
    </div>

  )
}


function ProjectPage({match: { params: { projectId }, },}) {
    const project = projects.find((p) => p.id === parseInt(projectId))
    console.log(project)
    return (
        <div>
            <h2>ProjectPage</h2>
            <p>id: {project.id}</p>
            <p>name: {project.name}</p>
            <Link>{project.system}</Link>
            <Link to="/loading">start loading</Link>
        </div>
    )
}

const LoadingPage = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.replace("/")
        }, 3000)
    })

    return <div>Loading...</div>

}