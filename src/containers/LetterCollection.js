import React, { Component } from 'react'
import Button from '../components/Button'
import Read from '../components/Read'

class LetterCollection extends Component {
  //accept a collection
  state = {
    item: null,
    itemsStack: [],
    itemsHistory: []
  }

  componentDidMount() {
    const { collection } = this.props

    setCollection(collection)
  }

  setCollection = (collection) => {
    let item = collection.pop()
    let itemStack = collection
    this.setState({
      item: item,
      itemStack: itemStack
    })
  }

  navigationHandler = () => {
    //write a conditional that handles navigating forward and back

  }

  navigateBackward = () => {
    //update the item, stack, and history
    //accept a callback so that we can perform fetches if necessary
  }

  navigateForward = () => {
    //update the item, stack, and history
    //accept a callback so that we can perform fetches if necessary
    //if we perform a fetch, another component's state may change
      //this would cause it to rerender
  }

  //

  handleBack = () => {
    //passes item, stack, and state to the navigation handler
    //also passes isWrite
  }

  handleForward = () => {
    //
  }

  return (
    <>
      <div className='card row'>
        <div className='content'>
          <Read letter={letter} isWrite={true} />
        </div>
      </div>

      <div className='card row'>
        <div>
          <Button onClick={forward} className='ui button primary right floated'>
            <i className='right arrow icon'></i>
          </Button>
          <Button onClick={back} className='ui button secondary right floated'>
            <i className='left arrow icon'></i>
          </Button>
        </div>
      </div>
    </>
  )
}

export default LetterCollection
