import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import * as albumsAPI from '../../utilities/albums-api';
import './AlbumDetailsPage.css';


export default function AlbumDetailsPage({ collection, setCollection }) {
    const { id } = useParams();
    const album = collection.find(a => a._id === id);
    const navigate = useNavigate();
    const [commentBox, setCommentBox] = useState('');
    if (!album) return null;

    async function deleteAlbum() {
        const removed = await albumsAPI.deleteAlbum(album._id);
        const updatedCollection = collection.filter(album => album._id !== removed._id);
        setCollection(updatedCollection);
        navigate('/collection');
    }

    async function addComm() {
        const updatedAlbum = await albumsAPI.addComment(commentBox, album._id);
        const newCollection = collection.map((a) => a._id === updatedAlbum._id ? updatedAlbum : a);
        setCollection(newCollection);
        setCommentBox('');
    }

    return (
        <>
            <div className="detailDiv">
                <h1 className="titleFont">{album.title}</h1>
                <div className="albumCov">
                    <img key={album.title} src={album.cover_image} alt="oops" height="350px"></img>
                </div>
                <div className="albumDeets">
                    <p className="label">Released:</p>
                    <p>{album.year}</p>
                    <p className="label">Label:</p>
                    <p>{album.label[0]}</p>
                    <p className="label">Genre(s):</p>
                    <p>{album.genre}</p>
                    <br />
                    <button onClick={deleteAlbum}>Remove from collection</button>
                </div>
                <br />
                <div className="comm-sect">
                    <p className="label">Notes:</p>
                    <div>
                        {album.comments.map((c, idx) => <p className="notes" key={idx}>{c.comment}</p>)}
                    </div>
                    <br />
                    <textarea value={commentBox} onChange={(evt) => setCommentBox(evt.target.value)} className="form-container" type="text" rows="4" cols="50" />
                </div>
                <button onClick={addComm} className="add-comm-butt" >Add Note</button>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}
