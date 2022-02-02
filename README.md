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
