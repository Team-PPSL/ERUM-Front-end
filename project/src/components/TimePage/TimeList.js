import React from 'react';

let i = -1;

function Time({ users }) {
  const color = [
    '#ffafb0',
    '#fdd0ac',
    '#fdfa87',
    '#bee9b4',
    '#aee4ff',
    '#caa6fe',
  ];
  i += 1;
  return (
    <div
      style={{
        backgroundColor: color[i],
        width: '150px',
        height: '50px',
        color: 'black',
        marginBottom: '30px',
        borderRadius: '30px',
        lineHeight: '50px',
        textAlign: 'center',
      }}
    >
      {users.subject}
    </div>
  );
}

function TimeList({ users }) {
  const color = [
    '#ffafb0',
    '#fdd0ac',
    '#fdfa87',
    '#bee9b4',
    '#aee4ff',
    '#caa6fe',
    '#caa6fe',
    '#caa6fe',
    '#caa6fe',
    '#caa6fe',
  ];
  return (
    <div>
      {users.map((users) => (
        <Time users={users} key={users.id} />
      ))}
    </div>
  );
}

export default TimeList;
