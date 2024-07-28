import React from 'react'
import ModeToggle from './ModeToggle';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background text-foreground p-8">
      <div className="container mx-auto">
        <div className="flex justify-start space-x-16">
          <div>
            <h3 className="text-lg font-bold mb-4">FAQ's</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Link 1</a></li>
              <li><a href="#" className="hover:underline">Link 2</a></li>
              <li><a href="#" className="hover:underline">Link 3</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">SOCIALS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">MORE INFO</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-4">
        <ModeToggle />
      </div>
    </footer>
  )
}

export default Footer