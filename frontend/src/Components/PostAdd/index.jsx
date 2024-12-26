import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserId, savePost } from "../../app/actions/post.actions";
import storage from "../../util/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function PostAdd() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const fileInputRef = useRef(null);

  const [caption, setCaption] = React.useState("");
  const [imgLink, setImgLink] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      userId: user.userId,
      caption,
      imgLink,
    };
    await dispatch(savePost(post));
    await dispatch(getPostsByUserId(user.userId));
    setCaption("");
    setImgLink("");
    fileInputRef.current.value = "";

  };

  const uploadImage = (e) => {
    const files = e.target.files;
  
    if (files.length === 0) {
      alert("Please upload at least one image!");
      return;
    }
  
    // upload up to 4 images
    const maxImages = 4;
    const numImages = Math.min(maxImages, files.length);
  
    for (let i = 0; i < numImages; i++) {
      const file = files[i];
      const storageRef = ref(storage, `/posts/${file.name}`);
  
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImgLink((prevLinks) => [...prevLinks, url]);
          });
        }
      );
    }
  };
  
  
  return (
    <div className="container mb-3 card create-card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h1 className="mt-2">Share your thoughts</h1>
          <div className="mt-2 mb-3">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="What's on your mind?"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
            <i>*maximum 4 images</i>
          <div className="mb-3">
            {imgLink && (
              <img
                src={imgLink}
                className="img-fluid me-3"
                alt="Profile"
              />
            )}

            <input
              type="file"
              className="form-control"
              onChange={(e) => uploadImage(e)}
              ref={fileInputRef}
              multiple 
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            PUBLISH
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostAdd;

/*-----------------------------------------------------------------------*/
// import React, { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPostsByUserId, savePost } from "../../app/actions/post.actions";
// import storage from "../../util/firebaseConfig";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// function PostAdd() {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);
//   const fileInputRef = useRef(null);

//   const [caption, setCaption] = useState("");
//   const [mediaLinks, setMediaLinks] = useState([]); // Updated to handle both images and videos

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!caption.trim()) {
//       alert("Caption cannot be empty.");
//       return;
//     }
//     if (mediaLinks.length === 0) {
//       alert("Please upload at least one media.");
//       return;
//     }

//     const post = {
//       userId: user.userId,
//       caption,
//       mediaLinks, // Updated to handle both images and videos
//     };
//     await dispatch(savePost(post));
//     await dispatch(getPostsByUserId(user.userId));
//     setCaption("");
//     setMediaLinks([]); // Clear the media links after submission
//     fileInputRef.current.value = "";
//   };

//   const uploadMedia = (e) => {
//     const files = e.target.files;

//     if (files.length === 0) {
//       alert("Please upload at least one media!");
//       return;
//     }

//     const maxMedia = 4;
//     const numMedia = Math.min(maxMedia, files.length);

//     for (let i = 0; i < numMedia; i++) {
//       const file = files[i];
//       const storageRef = ref(storage, `/posts/${file.name}`);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//           console.log(`Upload is ${progress}% done`);
//           // Optionally, update the UI with the progress here
//         },
//         (err) => {
//           console.error(err);
//           alert("Media upload failed.");
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//             setMediaLinks((prevLinks) => [...prevLinks, url]);
//           });
//         }
//       );
//     }
//   };

//   return (
//     <div className="container mb-3 card create-card">
//       <div className="card-body">
//         <form onSubmit={handleSubmit}>
//           <h1 className="mt-2">Share your thoughts</h1>
//           <div className="mt-2 mb-3">
//             <label className="form-label"></label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="What's on your mind?"
//               value={caption}
//               onChange={(e) => setCaption(e.target.value)}
//             />
//           </div>
//           <i>*maximum 4 media (images or videos)</i>
//           <div className="mb-3">
//             {mediaLinks.map((link, index) => (
//               <div key={index}>
//                 {link.endsWith('.mp4')? (
//                   <video controls width="200">
//                     <source src={link} type="video/mp4" />
//                   </video>
//                 ) : (
//                   <img
//                     src={link}
//                     className="img-fluid me-3"
//                     alt={`Uploaded Media ${index + 1}`}
//                   />
//                 )}
//               </div>
//             ))}
//             <input
//               type="file"
//               className="form-control"
//               onChange={(e) => uploadMedia(e)}
//               ref={fileInputRef}
//               multiple
//             />
//           </div>

//           <button type="submit" className="btn btn-outline-primary">
//             PUBLISH
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PostAdd;
