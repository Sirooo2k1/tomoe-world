import React, { useState } from 'react'
import croppedMirrorlake from '../Images/cropped_mirrorlake.jpg'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const Contact = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    confirmed: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      confirmed: false
    })
  }
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src={croppedMirrorlake}
          alt={t('お問い合わせ', 'Contact')}
          className="w-full h-auto object-contain block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">
              {t('お問い合わせ', 'Contact')}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-headings -mt-12">
            {t('お問い合わせ', 'Contact')}
          </h1>
          <p className="indent-4 md:indent-6">
            {t('共笑®︎事務局へのご連絡は下記のフォームをご利用ください。', 'Please use the form below to contact the 共笑®︎ office.')}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-2xl bg-[#F5F1E8] rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-8 text-center">
                {t('お問い合わせ', 'Contact')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-black font-medium mb-2">
                    {t('お名前', 'Name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('お名前は何ですか?', 'What is your name?')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-headings focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-black font-medium mb-2">
                    {t('メールアドレス', 'Email Address')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('メールアドレスは何ですか?', 'What is your email address?')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-headings focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-black font-medium mb-2">
                    {t('電話番号', 'Phone Number')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('電話番号は何ですか?', 'What is your phone number?')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-headings focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-black font-medium mb-2">
                    {t('件名', 'Subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('件名は何ですか?', 'What is the subject?')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-headings focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-black font-medium mb-2">
                    {t('メッセージ', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('何かお伝えしたいことはありますか?', 'Is there anything you would like to tell us?')}
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-headings focus:border-transparent resize-vertical"
                    required
                  />
                </div>
                <div className="pt-4">
                  <p className="text-black mb-4 text-center">
                    {t('上記の入力内容をご確認の上、下記のチェックをつけて [送信] ボタンを押して下さい。', 'Please review the above information, check the box below, and click the [Send] button.')}
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <input
                      type="checkbox"
                      id="confirmed"
                      name="confirmed"
                      checked={formData.confirmed}
                      onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                      className="w-4 h-4 text-headings border-gray-300 rounded focus:ring-headings"
                      required
                    />
                    <label htmlFor="confirmed" className="ml-2 text-black">
                      {t('上記の内容で送信します', 'I will send with the above content')}
                    </label>
                  </div>
                </div>
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-lg text-black font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                    style={{
                      background: 'linear-gradient(90deg, #fef3c7, #e9d5ff)',
                    }}
                  >
                    {t('送信', 'Send')}
                  </button>
                </div>
                {isSubmitted && (
                  <div className="mt-4 text-center">
                    <p className="text-black font-medium">
                      {t('ありがとうございます。メッセージは送信されました。', 'Thank you. Your message has been sent.')}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <img
              src={logoTomoe02}
              alt="tomoe logo"
              className="w-28 h-28 object-contain"
            />
          </div>
          <p className="text-sm text-headings text-center">
            {t('※ 当ウェブサイトの文言および写真の無断使用は固く禁じております。', 'Unauthorized use of text or photos on this site is strictly prohibited.')}
          </p>
          <p className="text-sm text-headings text-center mt-2">
            {t('※ 共笑®︎は、Office KANDY, Inc.の登録商標です。無断での利用はお断りします。', '共笑®︎ is a registered trademark of Office KANDY, Inc. Unauthorized use is not permitted.')}
          </p>
        </article>
      </div>
    </>
  )
}

export default Contact
