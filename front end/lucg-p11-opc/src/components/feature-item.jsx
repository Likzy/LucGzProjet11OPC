function FeatureItem({ icon, tagline, content, alt }) {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{tagline}</h3>
      <p>{content}</p>
    </div>
  );
}

export default FeatureItem;
