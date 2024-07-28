import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">FAQ's</h3>
            <ul className="mt-2">
              <li><a href="#" className="hover:underline">Link 1</a></li>
              <li><a href="#" className="hover:underline">Link 2</a></li>
              <li><a href="#" className="hover:underline">Link 3</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">SOCIALS</h3>
            <ul className="mt-2">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">MORE INFO</h3>
            <ul className="mt-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer