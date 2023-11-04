import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {Link} from 'react-router-dom'
import {Component} from 'react'

// import ContactUs from '../ContactUs'
import AppTheme from '../../context/Theme'
import {
  DivContainer,
  ListContainer,
  ListItems,
  SpanEl,
} from './styledComponents'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, activeTab, activeTabItem} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const hoverBgColor = activeTheme === 'light' ? '#616e7c' : '#475569'

          const onClickTrend = () => {
            activeTab('Trending')
          }

          const onClickGame = () => {
            activeTab('Game')
          }

          const onClickSave = () => {
            activeTab('Save')
          }

          const onClickHome = () => {
            activeTab('Home')
          }
          console.log(activeTabItem)

          return (
            <DivContainer>
              <ListContainer>
                <Link to="/">
                  <ListItems
                    color={`${activeTabItem === 'Home' ? `red` : color}`}
                    bgColor={`${hoverBgColor}`}
                    onClick={onClickHome}
                  >
                    <span className="nav-icons">
                      <HiHome size={20} />
                    </span>{' '}
                    <SpanEl>Home</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/trending">
                  <ListItems
                    color={`${
                      activeTabItem === 'Trending' ? `#ff0000` : color
                    }`}
                    bgColor={`${hoverBgColor}`}
                    onClick={onClickTrend}
                  >
                    <span className="nav-icons">
                      <AiFillFire size={20} />
                    </span>{' '}
                    <SpanEl>Trending</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/gaming">
                  <ListItems
                    color={`${activeTabItem === 'Game' ? `#ff0000` : color}`}
                    bgColor={`${hoverBgColor}`}
                    onClick={onClickGame}
                  >
                    <span className="nav-icons">
                      <SiYoutubegaming size={20} />
                    </span>{' '}
                    <SpanEl>Gaming</SpanEl>
                  </ListItems>
                </Link>
                <Link to="/saved-videos">
                  <ListItems
                    color={`${activeTabItem === 'Save' ? `#ff0000` : color}`}
                    bgColor={`${hoverBgColor}`}
                    onClick={onClickSave}
                  >
                    <span className="nav-icons">
                      <MdPlaylistAdd size={20} />
                    </span>
                    <SpanEl>Saved videos</SpanEl>
                  </ListItems>
                </Link>
              </ListContainer>
            </DivContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Navbar
