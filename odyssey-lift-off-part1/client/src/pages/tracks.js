import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Layout } from '../components';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map(track => (
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
  </Layout>;
};

export default Tracks;
