import React from 'react';
import Image from 'next/image';

// Teacher data - can be moved to a separate file or fetched from API
const teacherData = {
  name: "Mr. Ahmed Saeed",
  position: "Mathematics Teacher, Senior Teacher",
  experience: "30 years",
  qualifications: "bachelor's degree in mathematics education, master's degree in applied mathematics",
  bio: "Dedicated to fostering a love for mathematics in students. Specializes in advanced calculus and problem-solving techniques. Helped students overcome their math challenges and improved how they learn mathematics.",
  email: "",
  phone: "+20 1033900135",
  imageUrl: "/images/Teachers/Ahmed Math-Fun.jpg",
  subjects: ["Algebra", "Calculus", "Geometry"],
  achievements: [
    "Over 30 years of teaching experience",
    "Inspired countless students to love mathematics",
    "Helped students overcome math problems and improved their learning approach",
  ]
};

const TeacherProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Teacher Image */}
          <div className="relative h-64 w-full">
            <Image
              src={teacherData.imageUrl}
              alt={teacherData.name}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-800/70 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h1 className="text-3xl font-bold text-white">{teacherData.name}</h1>
              <p className="text-amber-200 text-xl">{teacherData.position}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-medium text-orange-800">Experience</h3>
                <p className="text-gray-700">{teacherData.experience}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-medium text-orange-800">Contact</h3>
                <p className="text-gray-700">{teacherData.email}</p>
                <p className="text-gray-700">{teacherData.phone}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-medium text-orange-800">Qualifications</h3>
                <p className="text-gray-700">{teacherData.qualifications}</p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 border-amber-200 pb-2">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">{teacherData.bio}</p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Subjects Taught */}
              <div>
                <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 border-amber-200 pb-2">
                  Subjects
                </h2>
                <ul className="space-y-2">
                  {teacherData.subjects.map((subject, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span className="text-gray-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 border-amber-200 pb-2">
                  Achievements
                </h2>
                <ul className="space-y-3">
                  {teacherData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Button */}
            <div className="mt-8 text-center">
              <a
                href={`mailto:${teacherData.email}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact {teacherData.name.split(' ')[0]}
              </a>
                <a
                href={`tel:${teacherData.phone}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 ml-4 w-48 justify-center h-16"
                >
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.797l.291 2.327a1 1 0 01-.523 1.021l-1.577.852a11.002 11.002 0 006.289 6.289l.852-1.577a1 1 0 011.021-.523l2.327.291a1 1 0 01.797.986V17a1 1 0 01-1 1h-2C5.387 18 2 14.613 2 10V3z" />
                  </svg>
                </span>
                Call {teacherData.phone}
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;