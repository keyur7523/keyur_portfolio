import './style/Skeleton.css';

export const Skeleton = ({ className = '', width, height }) => (
  <div
    className={`skeleton ${className}`}
    style={{ width, height }}
  />
);

export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`skeleton-text ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="skeleton skeleton-line"
        style={{ width: i === lines - 1 ? '66%' : '100%' }}
      />
    ))}
  </div>
);

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <Skeleton className="skeleton-image" height="200px" />
    <div className="skeleton-content">
      <Skeleton width="60%" height="24px" />
      <SkeletonText lines={2} />
    </div>
  </div>
);
