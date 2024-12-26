import React, { useEffect } from "react";
import Posts from "../../Components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../app/actions/post.actions";
import NewUsersSuggest from "../../Components/NewUsersSuggest";

function Home() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="sticky-top">
            {/* Sidebar */}
            <NewUsersSuggest />
          </div>
        </div>
        <div className="col-md-6">
          {/* Main Content */}
          <div className="row">
            <div className="col-12">
              {/* Status Update Form */}
              {/* You can add a status update form here */}
            </div>
            <div className="col-12 mt-3">
              {/* News Feed */}
              <Posts posts={post.posts} fetchType="GET_ALL_POSTS" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="sticky-top">
            {/* Right Sidebar */}
            {/* You can add friend suggestions or trending topics here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React, { useEffect } from "react";
// import Posts from "../../Components/Posts";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../../app/actions/post.actions";
// import NewUsersSuggest from "../../Components/NewUsersSuggest";

// function Home() {
//   const dispatch = useDispatch();
//   const post = useSelector((state) => state.post);

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto mt-5 px-4">
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-3">
//           <div className="sticky top-4">
//             {/* Sidebar */}
//             <NewUsersSuggest />
//           </div>
//         </div>
//         <div className="col-span-6">
//           {/* Main Content */}
//           <div className="grid grid-cols-12 gap-4">
//             <div className="col-span-12">
//               {/* Status Update Form */}
//               <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-4">
//                 {/* Your status update form component can go here */}
//                 <p className="text-gray-300">Status Update Form</p>
//               </div>
//             </div>
//             <div className="col-span-12">
//               {/* News Feed */}
//               <Posts posts={post.posts} fetchType="GET_ALL_POSTS" />
//             </div>
//           </div>
//         </div>
//         <div className="col-span-3">
//           <div className="sticky top-4">
//             {/* Right Sidebar */}
//             <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-4">
//               {/* Placeholder for friend suggestions or trending topics */}
//               <p className="text-gray-300">Friend Suggestions / Trending Topics</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useEffect } from "react";
// import Posts from "../../Components/Posts";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../../app/actions/post.actions";
// import NewUsersSuggest from "../../Components/NewUsersSuggest";

// function Home() {
//   const dispatch = useDispatch();
//   const post = useSelector((state) => state.post);

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto mt-5 px-4">
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-9">
//           {/* Main Content */}
//           <div className="grid grid-cols-12 gap-4">
//             <div className="col-span-12">
//               {/* Status Update Form */}
//               <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-4">
//                 {/* Your status update form component can go here */}
//                 <p className="text-gray-300">Status Update Form</p>
//               </div>
//             </div>
//             <div className="col-span-12">
//               {/* News Feed */}
//               <Posts posts={post.posts} fetchType="GET_ALL_POSTS" />
//             </div>
//           </div>
//         </div>
//         <div className="col-span-3">
//           <div className="sticky top-4">
//             {/* Sidebar */}
//             <NewUsersSuggest />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
// import React, { useEffect } from "react";
// import Posts from "../../Components/Posts";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../../app/actions/post.actions";
// import NewUsersSuggest from "../../Components/NewUsersSuggest";

// function Home() {
//   const dispatch = useDispatch();
//   const post = useSelector((state) => state.post);

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto mt-5 px-4">
//       <div className="flex flex-col md:flex-row md:justify-between">
//         <div className="md:w-3/4">
//           {/* Main Content */}
//           <div className="grid grid-cols-12 gap-4">
//             <div className="col-span-12">
//               {/* Status Update Form */}
//               <div className="bg-gray-800 text-white p-4 rounded-md shadow-md mb-4">
//                 {/* Your status update form component can go here */}
//                 <p className="text-gray-300">Status Update Form</p>
//               </div>
//             </div>
//             <div className="col-span-12">
//               {/* News Feed */}
//               <Posts posts={post.posts} fetchType="GET_ALL_POSTS" postClassName="p-2 my-2 bg-gray-100 rounded-md" />
//             </div>
//           </div>
//         </div>
//         <div className="md:w-1/4">
//           {/* Sidebar */}
//           <div className="sticky top-4">
//             <NewUsersSuggest />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;