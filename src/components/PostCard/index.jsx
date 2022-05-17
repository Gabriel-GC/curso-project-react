import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h3>{title}</h3>
      <hr className='line' />
      <p>{body}</p>
      <div className="number">
        <span>{id}</span>
      </div>
    </div>
  </div>
);