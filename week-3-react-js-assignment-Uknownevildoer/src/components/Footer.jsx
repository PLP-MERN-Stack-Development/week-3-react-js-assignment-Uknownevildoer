// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  );
}
