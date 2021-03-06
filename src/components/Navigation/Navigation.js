import React from 'react'
import {TestDiv, Container, List} from './Navigation.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {NavigationWrapper} from './Navigation.css'

const Navigation = ({items, RightElement}) => {
    console.log(items)
    return (
        <div style={{border: '1px solid green'}}>
            <Container>
                <NavigationWrapper>
                    <List>
                        {items.map(item => (
                            <li key={item.to}>
                                <Link to={item.to}>{item.content}</Link>
                            </li>
                        ))}
                    </List>
                    {RightElement}
                </NavigationWrapper>
            </Container>
            
        </div>
    )
}

Navigation.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Navigation