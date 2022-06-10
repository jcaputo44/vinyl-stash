// import { Link } from "react-router-dom";
import CollCard from '../../components/CollCard/CollCard';
import './MyCollectionPage.css';

export default function MyCollectionPage({collection}) {
  const collectionList = collection.map((album, idx) => <CollCard key={idx} album={album}/>);
  return (
    <>
    <h1 className="page-title">My Collection</h1>
    <div>
      <div className="ColGrid">{collectionList}</div>
    </div>
    <br />
    <br />
    </>
  );
}