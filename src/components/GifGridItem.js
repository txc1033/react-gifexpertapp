
export function GifGridItem( {id,title,url} ) {

  return (
    <div className="card animate__animated animate__fadeInLeft">
        <h4>{title}</h4>
        <img src={url} alt={title} />
    </div>
  )
}
