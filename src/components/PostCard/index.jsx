import './styles.css';

export const PostCard = ({id, cover, title, body}) => (

        <div className='post'>
              <img src={cover} alt={title} />
              <div key={id} className='post-content'>
                <h3>{title}</h3>
                <hr className='line' />
                <p>{body}</p>
              </div>
            </div>
);