// Write your code here
import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(previousMangoCount => ({
      mangoCount: previousMangoCount.mangoCount + 1,
    }))
  }

  eatBanana = () => {
    this.setState(previousBananaCount => ({
      bananaCount: previousBananaCount.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <h1>
          Bob ate {mangoCount} mangoes {bananaCount} bananas
        </h1>
        <div className="fruit-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="img-props"
            />
            <button className="mango-btn" onClick={this.eatMango}>
              Eat Mango
            </button>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="img-props"
            />
            <button className="banana-btn" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
