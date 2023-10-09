import React from 'react';

interface MemberListProps {
  members: string[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  return (
    <div className="member-list">
      <h2>Member List</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
