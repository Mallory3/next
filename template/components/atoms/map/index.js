const Map = ({ src }) => {
  return (
    <div className="map__atom">
      <iframe 
        src={src} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>    
    </div>
  )
};

export default Map;