import { UserCard } from './Profile/Profile';
import users from '../assets/user.json';
import { DataStat } from './Statistic/Statistic';
import data from '../assets/data.json';
import { Friends } from './FriendsList/FriendList';
import friends from '../assets/friends.json';
import { Transaction } from './TransactionHistory/TransactionHistory';
import transactions from '../assets/transactions.json';

function App() {
  return (
    <div>
      <UserCard {...users} />
      <DataStat stats={data} title="Upload stats" />
      <Friends arrFriends={friends} />
      <Transaction items={transactions} />
    </div>
  );
}

export default App;
