// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { UserCard } from './Profile';
import users from '../assets/user.json';
import { DataStat } from './Statistic';
import data from '../assets/data.json';
import { Friends } from './FriendList';
import friends from '../assets/friends.json';
import { Transaction } from './TransactionHistory';
import transactions from '../assets/transactions.json';

function App() {
  return (
    <div>
      <UserCard {...users} />
      <DataStat stats={data} />
      <Friends arrFriends={friends} />
      <Transaction items={transactions} />
    </div>
  );
}

export default App;
