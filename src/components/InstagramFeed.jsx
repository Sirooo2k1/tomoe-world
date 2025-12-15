import React, { useEffect, useRef, useCallback } from 'react'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'
import img01 from '../Images/img_01.png'
import img02 from '../Images/img_02.png'
import img03 from '../Images/img_03.png'
import img04 from '../Images/img_04.png'
import img05 from '../Images/img_05.png'
import img06 from '../Images/img_06.png'
import img07 from '../Images/img_07.png'
import img08 from '../Images/img_08.png'

const InstagramFeed = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)
  const image4Ref = useRef(null)
  const [image2Height, setImage2Height] = React.useState(null)
  const [image3Height, setImage3Height] = React.useState(null)

  const calculateHeights = useCallback(() => {
    if (image2Ref.current) {
      const height = image2Ref.current.offsetHeight
      setImage2Height(height)
    }
    if (image3Ref.current) {
      const height = image3Ref.current.offsetHeight
      setImage3Height(height)
    }
  }, [])

  useEffect(() => {
    // Calculate heights after a short delay to ensure images are loaded
    const timer = setTimeout(() => {
      calculateHeights()
    }, 100)

    // Also recalculate when window resizes
    window.addEventListener('resize', calculateHeights)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculateHeights)
    }
  }, [calculateHeights])
  // Sample Instagram posts data - you can replace this with actual API data
  const instagramPosts = [
    {
      id: '1',
      image: img01,
      link: 'https://www.instagram.com/world_of_tomoe/',
      type: 'image',
    },
    {
      id: '2',
      image: img02,
      link: 'https://www.instagram.com/world_of_tomoe/',
      type: 'image',
    },
    {
      id: '3',
      image: img03,
      link: 'https://www.instagram.com/world_of_tomoe/',
      type: 'image',
    },
    {
      id: '4',
      image: img04,
      link: 'https://www.instagram.com/world_of_tomoe/',
      type: 'image',
    },
    {
      id: '5',
      image: img05,
      link: 'https://www.instagram.com/world_of_tomoe/',
      type: 'image',
    },
    {
      id: '6',
      image: img06,
      link: 'https://www.instagram.com/world_of_tomoe/',
      type: 'image',
    },
    {
      id: '7',
      image: img07,
      link: 'https://www.instagram.com/world_of_tomoe/',
      type: 'image',
    },
    {
      id: '8',
      image: img08,
      link: 'https://www.instagram.com/world_of_tomoe/',
      type: 'image',
    },
  ]

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Header */}
        <div className="flex flex-col items-center justify-center mb-8">
          <img
            src={logoTomoe02}
            alt={t('共笑', 'TOMOE')}
            className="w-24 h-24 rounded-full object-cover mb-3"
          />
          <h3 className="text-xl font-bold text-gray-900">World of Tomoe</h3>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
          {instagramPosts.map((post) => {
            const isImage1234 = ['1', '2', '3', '4'].includes(post.id);
            const isImage1 = post.id === '1';
            const isImage2 = post.id === '2';
            const isImage3 = post.id === '3';
            const isImage4 = post.id === '4';
            return (
              <div
                key={post.id}
                ref={isImage2 ? image2Ref : (isImage3 ? image3Ref : (isImage4 ? image4Ref : null))}
                className="relative group overflow-hidden rounded-lg block w-full border border-gray-200"
                style={{ 
                  lineHeight: 0, 
                  backgroundColor: '#f9fafb',
                  padding: 0,
                  ...(image3Height && { minHeight: `${image3Height}px` })
                }}
              >
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-auto opacity-0 pointer-events-none"
                  style={{ display: 'block' }}
                  onLoad={() => {
                    // Recalculate heights after images load
                    setTimeout(calculateHeights, 50)
                  }}
                />
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    transformOrigin: 'center center',
                    transform: 'scale(1.1)'
                  }}
                  onLoad={() => {
                    // Recalculate heights after images load
                    setTimeout(calculateHeights, 50)
                  }}
                />
                {post.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg
                      className="w-12 h-12 text-white opacity-80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/world_of_tomoe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>{t('Instagram でフォロー', 'Follow on Instagram')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed

