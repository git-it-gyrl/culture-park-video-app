import React from 'react'

const FavoriteVideos = (props) => {
  
    return(
      
        <div className="FavoriteVideos" style={style}>
           {props.favoriteData.map(auPair => {
            return <Video
            video ={video}
            key = {video.id}
            favoriteId ={Video.id}
            />
        
        })}
        </div>
          
      )
          
    }

export default FavoriteVideos;