import React from 'react';

interface Props  { 
  dateString: string;
 }

const ReleaseDate = ( { dateString }: Props) =>  { 

    const formattedDate = new Date(dateString).toLocaleDateString('en-US',  { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
     });
  
    return (
      <div>
        <p className="text-sm text-gray-400">{ formattedDate }</p>
      </div>
    );
 }
export default ReleaseDate;