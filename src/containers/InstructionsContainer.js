import React from 'react'
import LetterCollection from './LetterCollection'
import Read from '../components/Read'

import INSTRUCTIONS from '../data/insructions'

class InstructionsContainer extends React.Component {
  state = {
    instruction: null,
    instructions: [],
    instructionsHistory: []
  }
}
