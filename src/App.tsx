import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Users } from './__generated__/Users';

const USERS_QUERY = gql`
  query Users {
    users {
      id
      name
      posts {
        id
        content
      }
    }
  }
`;

const App: React.FC = (props) => {
  const { loading, data } = useQuery<Users>(USERS_QUERY);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>users</h1>
      <ul>
        {!data?.users || data.users.length === 0 ? (
          <div>not data...</div>
        ) : (
          data?.users.map((user) => (
            <React.Fragment key={user.id}>
              <li>{user.name}</li>
              <ul>
                {user.posts.map((post) => (
                  <React.Fragment key={post.id}>
                    <li>{post.content}</li>
                  </React.Fragment>
                ))}
              </ul>
            </React.Fragment>
          ))
        )}
      </ul>
    </div>
  );
};

export { App };
