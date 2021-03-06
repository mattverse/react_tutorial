import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    return(
        <div>
            <h3>유저 목록: </h3>
            <ul>
                <li>
                    <NavLink
                        to="/profiles/veleport"
                        activeStyle={{ background: 'black', color: 'white'}}
                    >
                        veleport
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/gildong"
                        activeStyle={{ background: 'black', color: 'white'}}
                    >
                        gildong
                    </NavLink>
                </li>
            </ul>

            <Route 
                path="/profiles"
                exact
                render={() => <div>Select user</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            <WithRouterSample />
        </div>
    );
};

export default Profiles;