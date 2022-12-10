import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import { getUsers } from './services/Users';
import { User } from './services/Users';


function App() {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <Table data={users} />
      </header>
    </div>
  );
}

export default App;
