import { Link } from "react-router-dom";
import './MyCollectionPage.css';

export default function MyCollectionPage({collection}) {
  const collectionList = collection.map((album, idx) => album);
  return (
    <>
    <h1 className="page-title">My Collection</h1>
    <div className="ColGrid">
      <div><Link to={`details`}><img src="https://i.imgur.com/J3RGlSa.jpg" alt="darn" height="150px" /></Link></div>
      {/* <div><Link to={`details`}>{collectionList}</Link></div> */}
    </div>
    </>
  );
}