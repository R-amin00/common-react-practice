// import React, { useEffect, useState } from 'react';

// const Post = () => {
//     const [posts, setPosts] = useState([]);
//     useEffect( () => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => setPosts(data))
//     } , [])
//     return (
//         <div>
//             <h1>Posts: {posts.length}</h1>
//             {
//                 posts.map(post => <AllPost title={post.title} body={post.body}></AllPost>)
//             }
//         </div>
//     );
// };
  
//   function AllPost(props){
//     return(
//       <div style={{backgroundColor:"tomato", margin:'10px', padding:'15px',borderRadius:'10px'}}>
//           <h2>Title: {props.title}</h2>
//           <p>Body: {props.body}</p>
//       </div>
//     )
//   }
  
// /*
// //   function District(props){
// //     const [power, setPower] = useState(1);
  
// //     // short Hand way
// //     const boostPower = () => setPower(power + 1);
// //     // long Hand way
// //     // const boostPower = () => {
// //     //   const newPower = power + 1;
// //     //   setPower(newPower);
// //     // }
// //     return(
// //       <div className='district'>
// //           <h1>Name: {props.name}</h1>
// //           <p>Speciality: {props.speciality}</p>
// //           <h4>Power: {power}</h4>
// //           <button onClick={boostPower}>Boost The Power</button>
// //       </div>
// //     )
// //   }
// */

// export default Post;