import React from 'react';
import {Text, View} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const CRICKET_MATCHES = gql`
  query getFRCHomePage {
    getFRCHomePage {
      upcomingmatches {
        matchID
        matchName
        matchNameHindi
        matchStatus
        statusMessage
        isLiveCriclyticsAvailable
        homeTeamID
        awayTeamID
        homeTeamShortName
        awayTeamShortName
        matchNumber
        toss
        matchDateTimeGMT
        tourName
        currentInningsTeamID
        currentInnings
        matchType
        winningTeamID
        city
        cityHindi
        matchScore {
          teamShortName
          teamID
          teamFullName
          teamScore {
            inning
            inningNumber
            battingTeam
            runsScored
            wickets
            overs
            runRate
            battingSide
            teamID
            battingTeamShortName
            declared
            folowOn
          }
        }
      }
    }
  }
`;

function ExchangeRates() {
  const {loading, error, data} = useQuery(CRICKET_MATCHES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  return data.getFRCHomePage.upcomingmatches.map(
    ({matchID, awayTeamID, matchName, city, matchDateTimeGMT}) => (
      <View key={matchID}>
        <Text> {matchName} </Text>
        <Text>
          At {city}, {matchDateTimeGMT}
        </Text>
      </View>
    ),
  );
}
export default ExchangeRates;
