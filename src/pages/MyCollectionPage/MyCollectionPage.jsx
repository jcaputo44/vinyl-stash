import CollCard from '../../components/CollCard/CollCard';
import './MyCollectionPage.css';

export default function MyCollectionPage({collection}) {
  const collectionList = collection.map((album, idx) => <CollCard key={idx} album={album}/>);
  return (
    <>
    <h1 className="page-title">My Collection</h1>
    <div className={collection.length > 0 ? "ColGrid" : ""}>
    {(collection.length > 0 ? collectionList : <p>Add albums to start your collection!</p>)}
    </div>
    <br />
    <br />
    </>
  );
}