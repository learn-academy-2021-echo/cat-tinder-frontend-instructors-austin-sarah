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

# Pushing to Github
`$ git add .`
`$ git commit -m ...`
`$ git push origin ...`

# Pulling down from github
`$ git checkout main`
`$ git pull origin main`
`$ yarn`
`$ git checkout -b new-branch`

# Testing With Jest and Enzyme
- Install Enzyme
`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

- Running the Tests
`$ yarn test`

Testing Imports and configurations
```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
```
Testing Syntax Example
```javascript
describe("",()=>{
    it("",()=>{
        const renderedVariableName = shallow(<Component/>)
        const thingBeingLookedFor = renderedVariableName.find("[attribute]")
        const otherThingBeingLookedFor = renderedVariableName.find("ComponentName")
        expect(thingBeingLookedFor.props().component).toEqual(SomeComponent)    
        expect(otherThingBeingLookedFor.length).toEqual(1)
    })
})
```
Selector Syntax

- [Enzyme Selector Docs](https://enzymejs.github.io/enzyme/docs/api/selector.html)

Assertion Syntax
```javascript
    expect(<componentVariable>.<elementQueryMethod>()).<matcher>(<expectedValue>)
```
```javascript
    expect(<actualThing>).<matcher>(<expectedValue>)
```

Helpful Methods
- .debug()
- .props()