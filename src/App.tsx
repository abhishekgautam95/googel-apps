/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Activities from './pages/Activities';
import Achievements from './pages/Achievements';
import QuizZone from './pages/QuizZone';
import Lesson from './pages/Lesson';
import SubjectPage from './pages/SubjectPage';
import Certificates from './pages/Certificates';
import GenericPage from './pages/GenericPage';
import GameCloudCatcher from './pages/Game';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="activities" element={<Activities />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="quiz" element={<QuizZone />} />
          <Route path="game" element={<GameCloudCatcher />} />
          <Route path="lesson/:id" element={<Lesson />} />
          <Route path="certificates" element={<Certificates />} />
          
          <Route path="computer" element={<SubjectPage title="Computer Basics" description="Learn how computers work inside and out!" icon="💻" color="bg-blue-500" />} />
          <Route path="ai" element={<SubjectPage title="Intro to AI" description="Discover the magic of Artificial Intelligence!" icon="🤖" color="bg-purple-500" />} />
          <Route path="robotics" element={<SubjectPage title="Robotics" description="Build and program your own robots!" icon="⚙️" color="bg-green-500" />} />
          
          <Route path="notes" element={<GenericPage title="Class Notes" emoji="📝" desc="Download notes for all your classes." />} />
          <Route path="videos" element={<GenericPage title="Video Lectures" emoji="🎥" desc="Watch recordings of Abhishek Sir's classes." />} />
          <Route path="contact" element={<GenericPage title="Contact Us" emoji="📬" desc="Get in touch with Abhishek Sir and the team." />} />
          <Route path="about" element={<GenericPage title="About Abhishek Sir" emoji="👨‍🏫" desc="Learn more about your favorite teacher." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
