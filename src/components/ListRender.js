import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Marta', 'Marcos', 100]);

  const [users] = useState([
    { id: 1, name: 'Matheus', age: 31 },
    { id: 45451, name: 'Pedro', age: 23 },
    { id: 12365, name: 'Marta', age: 19 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
