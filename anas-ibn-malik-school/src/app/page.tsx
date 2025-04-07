"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';

interface Teacher {
  id: string;
  name: string;
  subject: string;
  description: string;
  page:string;
}

interface NewsItem {
  image: string;
  title: string;
  comment: string;
}

interface KnowledgeItem {
  title: string;
  content: string[];
  link: string;
}

interface DownloadLinks {
  English: string;
  Arabic: string;
  Science: string;
  Math: string;
  Social: string;
  ICT: string;
  German: string;
  French: string;
}

interface DownloadOptions {
  [key: string]: {
    [key: string]: DownloadLinks;
  };
}

const AnasIbnMalikSchool: React.FC = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const [currentLinks, setCurrentLinks] = useState<DownloadLinks>({
    English: '#',
    Arabic: '#',
    Science: '#',
    Math: '#',
    Social: '#',
    ICT: '#',
    German: '#',
    French: '#',
  });

  const teachers: Teacher[] = [
    {
      id: 'sara',
      name: 'Ms. Sara',
      subject: 'English Teacher',
      description: 'Ms. Sara is passionate about helping students improve their English skills.',
      page: '/teachers/sara',
    },
    {
      id: 'hend',
      name: 'Ms. Hend',
      subject: 'Computer Teacher',
      description: 'Ms. Hend makes computer lessons very easy to learn with fun.',
      page: '/teachers/hend',
    },
    {
      id: 'ahmed',
      name: 'Mr. Ahmed S3eed',
      subject: 'Mathematics Teacher',
      description: 'With over 10 years of experience, Mr. Ahmed inspires students to love math.',
      page: '/teachers/ahmed',
    },
    {
      id: 'yasmen',
      name: 'Ms. Yasmen',
      subject: 'Science Teacher',
      description: 'Ms. Yasmen brings science to life with amazing experiments.',
      page: '/teachers/yasmen',
    },
    {
      id: 'ranya',
      name: 'Ms. Ranya',
      subject: 'Arabic Teacher',
      description: 'Ms. Ranya is known for her creative teaching methods.',
      page: '/teachers/ranya'
    },
  ];

  const newsItems: NewsItem[] = [
    {
      image: 'images/RAmadan-2A .jpg',
      title: 'School celebrates Ramadan and changes the look of classrooms',
      comment: 'The School now looks amazing - Asaad 2A',
    },
    {
      image: 'images/art-competition.png',
      title: 'ART Competition "Egypt IN HER CHILDREN EYES"',
      comment: 'Winner gets full marks in ART! - ART TEACHER',
    },
    {
      image: 'images/old-school.png',
      title: 'New website becomes old and heloo new one, Students and Principal agreement!',
      comment: 'Very well! - Student C',
    },
  ];

  const knowledgeItems: KnowledgeItem[] = [
    {
      title: 'بَابُ فَضْلِ الْعِلْمِ',
      content: [
        '"وَقَوْلِ اللَّهِ تَعَالَى: {يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ}.."',
        '. وَقَوْلِهِ عَزَّ وَجَلَّ: {رَبِّ زِدْنِي عِلْمًا}',
      ],
      link: 'https://sunnah.com/bukhari/3',
    },
    {
      title: 'بَابُ دُعَاؤُكُمْ إِيمَانُكُمْ',
      content: [
        'لِقَوْلِهِ تَعَالى: {قُلْ مَا يَعْبَؤُا بِكُمْ رَبِّ لَوْلَا دُعَاؤُكُمْ}',
        '[الفرقان: ٧٧] وَمَعْنَى الدُّعاءِ في اللُّغَةِ (الإيمان)',
      ],
      link: 'https://sunnah.com/bukhari/2',
    },
    {
      title: 'الشيخ الحصري',
      content: [
        'الشيخ محمود خليل الحصري هو قارئ قرآن مصري مشهور، ولد في 17 سبتمبر 1917 وتوفي في 24 نوفمبر 1980، وهو من أبرز قراء القرآن في العالم الإسلامي.',
      ],
      link: 'https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%AD%D8%B5%D8%B1%D9%8A',
    },
  ];

  const links: DownloadOptions = {
    Primary: {
      Grade1: {
        English: 'https://example.com/grade1/english',
        Arabic: 'https://example.com/grade1/arabic',
        Science: 'https://example.com/grade1/science',
        Math: 'https://example.com/grade1/math',
        Social: 'https://example.com/grade1/social',
        ICT: 'https://example.com/grade1/ict',
        German: '#',
        French: '#',
      },
      Grade2: {
        English: 'https://example.com/grade2/english',
        Arabic: 'https://example.com/grade2/arabic',
        Science: 'https://example.com/grade2/science',
        Math: 'https://example.com/grade2/math',
        Social: 'https://example.com/grade2/social',
        ICT: 'https://example.com/grade2/ict',
        German: '#',
        French: '#',
      },
      Grade3: {
        English: 'https://example.com/grade2/english',
        Arabic: 'https://example.com/grade2/arabic',
        Science: 'https://example.com/grade2/science',
        Math: 'https://example.com/grade2/math',
        Social: 'https://example.com/grade2/social',
        ICT: 'https://example.com/grade2/ict',
        German: '#',
        French: '#',
      },
      Grade4: {
        English: 'https://example.com/grade2/english',
        Arabic: 'https://example.com/grade2/arabic',
        Science: 'https://example.com/grade2/science',
        Math: 'https://example.com/grade2/math',
        Social: 'https://example.com/grade2/social',
        ICT: 'https://example.com/grade2/ict',
        German: '#',
        French: '#',
      },
      Grade5: {
        English: 'https://example.com/grade2/english',
        Arabic: 'https://example.com/grade2/arabic',
        Science: 'https://example.com/grade2/science',
        Math: 'https://example.com/grade2/math',
        Social: 'https://example.com/grade2/social',
        ICT: 'https://example.com/grade2/ict',
        German: '#',
        French: '#',
      },
      Grade6: {
        English: 'https://example.com/grade2/english',
        Arabic: 'https://example.com/grade2/arabic',
        Science: 'https://example.com/grade2/science',
        Math: 'https://example.com/grade2/math',
        Social: 'https://example.com/grade2/social',
        ICT: 'https://example.com/grade2/ict',
        German: '#',
        French: '#',
      },
    },
    Prep: {
      Prep1: {
        English:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/English%20language_1_Preparatory/English%20language_1_Preparatory.html',
        Arabic:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Arabic%20language__1_Preparatory/Arabic%20language__1_Preparatory.html',
        Science:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Science_ENGLISH_1_Preparatory/Science_ENGLISH_1_Preparatory.html',
        Math:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Math_English_1_Preparatory/Math_English_1_Preparatory.html',
        Social:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Social%20Studies_1_Preparatory/Social_Studies_1_Preparatory.html',
        ICT:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/ICT_ENGLISH_1_Preparatory/ICT_ENGLISH_1_Preparatory.html',
        German: 
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Deutschlanguages_1_Preparatory/Deutschlanguages_1_Preparatory.html',
        French: 
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory1/Term2/Streem/Une%20deuxi%C3%A8me%20langue%20fran%C3%A7aises_1_Preparatory/Une%20deuxi%C3%A8me%20langue%20fran%C3%A7aises_1_Preparatory.html',
      },
      Prep2: {
        English:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/English%20language_2_Preparatory/English%20language_2_Preparatory.html',
        Arabic:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Arabic%20language__2_Preparatory/Arabic%20language__2_Preparatory.html',
        Science:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Science_ENGLISH_2_Preparatory/Science_ENGLISH_2_Preparatory.html',
        Math:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Math_English_2_Preparatory/Math_English_2_Preparatory.html',
        Social:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Social%20Studies_2_Preparatory/Social%20Studies_2_Preparatory.html',
        ICT:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/ICT_ENGLISH_2_Preparatory/ICT_ENGLISH_2_Preparatory.html',
        German: 
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Deutschlanguages_2_Preparatory/Deutschlanguages_2_Preparatory.html',
        French: 
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory2/Term2/Streem/Une%20deuxi%C3%A8me%20langue%20fran%C3%A7aises_2_Preparatory/Une%20deuxi%C3%A8me%20langue%20fran%C3%A7aises_2_Preparatory.html',
      },
      Prep3: {
        English:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/English%20language_3_Preparatory/English%20language_3_Preparatory.html',
        Arabic:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Arabic%20language__3_Preparatory/Arabic%20language__3_Preparatory.html',
        Science:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Science_ENGLISH_3_Preparatory/Science_ENGLISH_3_Preparatory.html',
        Math:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Math_English_3_Preparatory/Math_English_3_Preparatory.html',
        Social:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Social%20Studies_3_Preparatory/Social_Studies_3_Preparatory.html',
        ICT:
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/ICT_ENGLISH_3_Preparatory/ICT_ENGLISH_3_Preparatory.html',
        German: 
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Deutschlanguages_3_Preparatory/Deutschlanguages_3_Preparatory.html',
        French: 
          'https://elearnningcontent.blob.core.windows.net/elearnningcontent/content/2025/Prepratory/Prepratory3/Term2/Streem/Une%20deuxi%C3%A8me%20langue%20fran%C3%A7aises_3_Preparatory/Une%20deuxi%C3%A8me%20langue%20fran%C3%A7aises_3_Preparatory.html',

       },
    },
    Sec: {
      Sec1: {
        English: 'https://example.com/sec2/english',
        Arabic: 'https://example.com/sec2/arabic',
        Science: 'https://example.com/sec2/science',
        Math: 'https://example.com/sec2/math',
        Social: 'https://example.com/sec2/social',
        ICT: 'https://example.com/sec2/ICT',
        German: 
        '#',
        French: 
        '#',

      },
      Sec2: {
        English: 'https://example.com/sec2/english',
        Arabic: 'https://example.com/sec2/arabic',
        Science: 'https://example.com/sec2/science',
        Math: 'https://example.com/sec2/math',
        Social: 'https://example.com/sec2/social',
        ICT: 'https://example.com/sec2/ICT',
        German: 
        '#',
        French: 
        '#',

      },
      Sec3: {
        English: 'https://example.com/sec2/english',
        Arabic: 'https://example.com/sec2/arabic',
        Science: 'https://example.com/sec2/science',
        Math: 'https://example.com/sec2/math',
        Social: 'https://example.com/sec2/social',
        ICT: 'https://example.com/sec2/ict',
        German: 
          '#',
        French: 
          '#',

      },
    }
  };

  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsNavActive(false);
    }
  };

  const updateDownloadLinks = (selectedOption: string) => {
    const [category, grade] = selectedOption.split('-');
    setCurrentLinks(links[category][grade]);
  };
  
  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>Anas Ibn Malik School</title>
        <meta name="description" content="Anas Ibn Malik School - Quality Education in Egypt" />
        <link rel="icon" href="/school-logo.png" />
        
        {/* Analytics */}
        <Script
          defer
          src="https://plausible.io/js/script.file-downloads.hash.outbound-links.revenue.js"
          data-domain="anas-bn-malek.netlify.app"
          />
        <Script
          id="plausible-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.plausible = window.plausible || function() {
              (window.plausible.q = window.plausible.q || []).push(arguments);
              };
              `,
            }}
            />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EBZFEL7R7V"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BFYFTL1VT8');
            `,
          }}
        />

      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
            <Image 
                src="/images/school-logo.png" 
                alt="School Logo" 
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-white font-bold text-xl">Anas Ibn Malik</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {['home', 'about', 'teachers', 'students', 'new-knowledge', 'news', 'downloads', 'contact', 'developer'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className="px-3 py-2 rounded-md text-white hover:bg-amber-600 transition-colors duration-200 capitalize"
                >
                  {item.replace('-', ' ')}
                </a>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleNavbar}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col space-y-1">
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isNavActive ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isNavActive ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isNavActive ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div className={`md:hidden ${isNavActive ? 'block' : 'hidden'} mt-2 pb-2`}>
            <div className="flex flex-col space-y-1">
              {['home', 'about', 'teachers', 'students', 'new-knowledge', 'news', 'downloads', 'contact', 'developer'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className="px-3 py-2 rounded-md text-white hover:bg-amber-600 transition-colors duration-200 capitalize"
                >
                  {item.replace('-', ' ')}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="home" className="py-16 mb-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl shadow-md">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">
              Welcome to <span className="text-amber-600">Anas Ibn Malik School</span>
            </h1>
            <div className="flex justify-center mb-8">
            <Image 
                src="/images/school-logo.png" 
                alt="School Logo" 
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </div>
            <p className="text-xl text-orange-700 mb-6">
              We are dedicated to providing quality education in a nurturing environment.
            </p>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 mb-16 bg-white rounded-xl shadow-md">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-8 text-center">
              About Our School
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
              <Image 
                src="/images/school-logo.png" 
                alt="School Logo" 
                width={48}
                height={48}
                className="h-12 w-12"
              />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 mb-4">
                  Located in the heart of Egypt, Anas Ibn Malik School is known for its commitment to excellence in education.
                </p>
                <p className="text-lg text-gray-700">
                  Our experienced teachers and supportive staff create a positive learning atmosphere for all students.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-amber-100 p-4 rounded-lg text-center">
                    <span className="text-2xl font-bold text-orange-600 block">50+</span>
                    <span className="text-gray-700">Teachers</span>
                  </div>
                  <div className="bg-amber-100 p-4 rounded-lg text-center">
                    <span className="text-2xl font-bold text-orange-600 block">1000+</span>
                    <span className="text-gray-700">Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section id="teachers" className="py-16 mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-12 text-center">
              Meet Our Teachers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher) => (
                <div 
                  key={teacher.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  onClick={() => window.location.href = `${teacher.page}`}
                >
                  <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                    <span className="text-6xl text-white font-bold">{teacher.name.charAt(0)}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-1">{teacher.name}</h3>
                    <p className="text-amber-600 font-medium mb-3">{teacher.subject}</p>
                    <p className="text-gray-600">{teacher.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Students Section */}
        <section id="students" className="py-16 mb-16 bg-white rounded-xl shadow-md">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-8 text-center">
              Our Lovely Students
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our students are the heart of our school. They are curious, creative, and eager to learn.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-orange-700 mb-2">Science Fair Winners</h3>
                <p className="text-gray-600">Our students excel in scientific research and innovation</p>
              </div>
              
              <div className="bg-orange-100 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-orange-700 mb-2">Art Competition Finalists</h3>
                <p className="text-gray-600">Creative talents recognized at national level</p>
              </div>
              
              <div className="bg-amber-100 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">⚽</div>
                <h3 className="text-xl font-bold text-orange-700 mb-2">Sports Champions</h3>
                <p className="text-gray-600">Football tournament champions every year</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-200 to-orange-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Student Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <img 
                    key={item}
                    src={`/images/student-${item}.jpg`} 
                    alt={`Student activity ${item}`}
                    className="rounded-lg h-32 w-full object-cover shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* New Knowledge Section */}
        <section id="new-knowledge" className="py-16 mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-12 text-center">
              New Knowledge
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {knowledgeItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4">
                    <h3 className="text-xl font-bold text-white text-center">{item.title}</h3>
                  </div>
                  <div className="p-6">
                    {item.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-4 text-right" dir="rtl">
                        {paragraph}
                      </p>
                    ))}
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-2 px-4 rounded-full transition-colors duration-200"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-700 mb-4 text-center">
                  Watch this video about الشيخ الحصري
                </h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-96 rounded-lg shadow-md"
                    src="https://www.youtube-nocookie.com/embed/_LyJkA3C4Pk?si=oBG45LhpAOg-6-07&amp;start=9"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 mb-16 bg-white rounded-xl shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-12 text-center">
              School News
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Stay updated with the latest news and events happening at Anas Ibn Malik School.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-amber-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">{item.title}</h3>
                    <div className="flex items-center text-sm text-amber-600 mb-3">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <span>Comments: {item.comment}</span>
                    </div>
                    <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-16 mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-md">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-8 text-center">
              Downloads
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Download important documents and resources:
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <label htmlFor="grade-select" className="block text-lg font-medium text-gray-700 mb-2">
                Select Grade:
              </label>
              <select
                id="grade-select"
                onChange={(e) => updateDownloadLinks(e.target.value)}
                className="block w-full p-3 border bg-amber-500 border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                defaultValue="Primary-Grade1"
              >
                <optgroup label="Primary School">
                  <option value="Primary-Grade1">Grade 1</option>
                  <option value="Primary-Grade2">Grade 2</option>
                  <option value="Primary-Grade3">Grade 3</option>
                  <option value="Primary-Grade4">Grade 4</option>
                  <option value="Primary-Grade5">Grade 5</option>
                  <option value="Primary-Grade6">Grade 6</option>
                </optgroup>
                <optgroup label="Preparatory School">
                  <option value="Prep-Prep1">Prep 1</option>
                  <option value="Prep-Prep2">Prep 2</option>
                  <option value="Prep-Prep3">Prep 3</option>
                </optgroup>
                <optgroup label="Secondary School">
                  <option value="Sec-Sec1">Secondary 1</option>
                  <option value="Sec-Sec2">Secondary 2</option>
                  <option value="Sec-Sec3">Secondary 3</option>
                </optgroup>
              </select>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {[
                  { name: 'English evaluation', key: 'English' },
                  { name: 'Arabic evaluation', key: 'Arabic' },
                  { name: 'Science evaluation', key: 'Science' },
                  { name: 'Math evaluation', key: 'Math' },
                  { name: 'الدراسات الاجتماعية evaluation', key: 'Social' },
                  { name: 'ICT evaluation', key: 'ICT' },
                  {name: 'German', key: 'German' },
                  {name: 'French', key: 'French' },
                ].map((item, index) => (
                  <li key={index} className="p-4 hover:bg-amber-50 transition-colors duration-200">
                    <a 
                      href={currentLinks[item.key as keyof DownloadLinks]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-gray-700 hover:text-amber-600"
                    >
                      <span>{item.name}</span>
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 mb-16 bg-white rounded-xl shadow-md">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-8 text-center">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              If you have any questions or would like to learn more about our school, please reach out!
            </p>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-inner p-8">
                <div className="text-center bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-lg shadow-md">
                <p className="text-lg text-orange-800 font-semibold">
                  We are working on adding a contact form soon. Stay tuned!
                </p>
                </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section id="developer" className="py-16 mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-md">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-700 mb-8 text-center">
              About the Developer
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-8">
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="https://avatars.githubusercontent.com/u/160162342?v=4" 
                  alt="Developer" 
                  className="h-48 w-48 rounded-full object-cover border-4 border-amber-300 shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 mb-4">
                  Hi, I'm Asaad, a student at Anas Ibn Malik School and the developer of this website. I love coding and
                  creating interactive web pages. My sister Asma helped me a lot.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <a
                    href="https://github.com/asaadzx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub Profile
                  </a>
                  
                  <a
                    href="https://github.com/asaadzx/Anas-Ibn-Malik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    School Repository
                  </a>
                </div>
                
                <div className="bg-amber-100 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-gray-700 mb-2">
                    Check out the old website for the school built with HTML and CSS:
                  </p>
                  <a
                    href="https://anas-bn-malek.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    https://anas-bn-malek.netlify.app/
                  </a>
                </div>
                
                <div className="mt-4 bg-orange-100 rounded-lg p-4 border-l-4 border-orange-500">
                  <p className="text-gray-700">
                    I'm currently asking school teachers for images to add. I apologize that Secondary 1, 2, 3 and all grades sections are incomplete as they have many subjects. I would appreciate help from anyone interested in collaborating on this project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-700 to-orange-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
              <Image 
                src="/images/school-logo.png" 
                alt="School Logo" 
                width={48}
                height={48}
                className="h-12 w-12"
              />
                <span className="text-xl font-bold">Anas Ibn Malik School</span>
              </div>
              <p className="mt-2 text-amber-100">Quality Education in Egypt</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-300 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-amber-500 text-center text-amber-100">
            <p>&copy; {currentYear || "Loading..."} Anas Ibn Malik School. All rights reserved.</p>
            <p className="mt-2">Developed by Asaad with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AnasIbnMalikSchool;