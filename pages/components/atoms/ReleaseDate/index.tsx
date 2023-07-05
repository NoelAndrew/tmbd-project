import React from 'react';

const ReleaseDate = ({ dateString }: any) => {

    const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  
    return (
      <div>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
    );
}
export default ReleaseDate;