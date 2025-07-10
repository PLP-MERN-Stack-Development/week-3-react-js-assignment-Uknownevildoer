// src/components/Card.jsx
import PropTypes from 'prop-types';

export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
