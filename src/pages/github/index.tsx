// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// export default function GithubAdd() {
//     const [username, setUsername] = useState('');
//     const history = useHistory();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         history.push(`/github/${username}`);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 value={username} 
//                 onChange={(e) => setUsername(e.target.value)} 
//                 placeholder="Enter GitHub username" 
//                 required 
//             />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }



