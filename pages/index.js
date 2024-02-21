import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getLists } from '../api/listData';
import ListCard from '../components/ListCard';

function Home() {
  const [lists, setLists] = useState([]);
  const { user } = useAuth();

  const getAllTheLists = () => {
    getLists(user.uid).then(setLists);
  };

  useEffect(() => {
    getAllTheLists();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* TODO: map over lists here using ListCard component */}
        {lists.map((list) => (
          <ListCard key={list.firebaseKey} listObj={list} onUpdate={getAllTheLists} />
        ))}
      </div>
      <Link href="/lists/new" passHref>
        <Button>Add A List</Button>
      </Link>
    </div>
  );
}

export default Home;
