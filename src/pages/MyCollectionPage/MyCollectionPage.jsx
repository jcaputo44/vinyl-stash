import CollCard from '../../components/CollCard/CollCard';
import { Link } from 'react-router-dom';
import './MyCollectionPage.css';

export default function MyCollectionPage({ collection }) {
  const collectionList = collection.map((album, idx) => <CollCard className="alb-cov" key={idx} album={album} />);
  return (
    <>
      <h1 className="page-title">My Collection</h1>
      <div className={collection.length > 0 ? "ColGrid" : ""}>
        {(collection.length > 0 ? collectionList
          :
          <Link to="/collection/add"><img className="rec" src="https://i.imgur.com/8MEVBuT.png" alt="oops" height="350px"></img></Link>)}
        </div>
      <br />
      <br />
    </>
  );
}