# Cat Tinder Frontend

Set Up
`$ yarn create react-app cat-tinder-frontend `
`$ cd cat-tinder-frontend`
`$ git remote add ... `
`$ git checkout -b main `
`$ git add ... push origin main`

## Creating Basic code for the class components

```javascript
class App extends Component{
  render(){
    return(

    )
  }
}
export default App
```
# React Router // Reactstrap Installation process
`$ yarn add bootstrap`
`$ yarn add reactstrap`
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
`$ yarn add react-router-dom@5.3.0`

# React Router
```javascript
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
```

```javascript
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/catindex" component={CatIndex} />
    <Route path="/catshow" component={CatShow} />
    <Route path="/catnew" component={CatNew} />
    <Route path="/catedit" component={CatEdit} />
    <Route component={NotFound}/>
  </Switch>
</Router>
```


### Cat Read Functionality
- As a developer, I can pass the cat mock data in state to my index component.
  - Refactor static CatIndex route to be a dynamic route (aka accept props)
- As a user, I can see a page that lists of all the cat names.
  - Accept the cat array as props and map
- As a developer, I can refactor the show route to pass the param of id for one cat.
  - Add a param to the route, convert the param to a number, find the cat with the appropriate id
- As a user, I can see a page featuring all the information for one cat.
  - Pull cat values from the object and display
- As a user, I can click on a cat name and be taken to a page that shows me all the information about that cat.
  - Used NavLink to create links to each cat

TODO
As a developer, I have test coverage on my index component.
As a developer, I have test coverage on my show component.
