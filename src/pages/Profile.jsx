import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container p-4">
      <div className="profile-header flex flex-col items-center">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image rounded-full w-32 h-32 mb-4" />
        <h1 className="profile-name text-2xl font-bold">John Doe</h1> 
        <p className="profile-bio text-gray-600">Web Developer | Tech Enthusiast | Blogger</p>
      </div>
      <div className="profile-content mt-6">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec magna fermentum, a facilisis nulla cursus.</p>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>Email: johndoe@example.com</p>
      </div>
      <div className="profile-footer mt-6">
        <h1 className="saisob-text text-5xl">Saisob</h1>
      </div>
    </div>
  );
};

export default Profile;