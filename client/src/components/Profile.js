/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Header, Icon, Table } from 'semantic-ui-react';

const Profile = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then(info => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  if (!userInfo) {
    return (
      <div>
        <p>Fetching user profile...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Header as="h1">
          <Icon name="drivers license" />
          {' '}
          My User Profile
          {' '}
        </Header>
        <p>
          This route is protected with the
          {' '}
          <code>&lt;SecureRoute&gt;</code>
          {' '}
          component, which will ensure that this page cannot be accessed until you have authenticated.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Claim</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userInfo).map(claimEntry => {
              const claimName = claimEntry[0];
              const claimValue = claimEntry[1];
              const claimId = `claim-${claimName}`;
              return (
                <tr key={claimName}>
                  <td>{claimName}</td>
                  <td id={claimId}>{claimValue.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Profile;
