import React from 'react'
import mirrorLakeImage from '../Images/img_10.png'
import nishantaLogo from '../Images/nishanta_logo.png'
import jyukuImage from '../Images/img_01.png'
import logoTomoe02 from '../Images/Logo_tomoe_02.png'

const Jyuku = ({ language = 'ja' }) => {
  const t = (ja, en) => (language === 'en' ? en : ja)
  return (
    <>
      {/* Hero section */}
      <div className="relative w-full h-screen max-h-[900px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mirrorLakeImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-overlay/20 to-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">
              {t('共笑®︎塾', '共笑®︎ Jyuku')}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center mb-10">
          <img
            src={nishantaLogo}
            alt={t('にしゃんた', 'Nishanta')}
            className="w-full h-auto max-w-full object-contain"
          />
        </div>
        <article className="p-8 md:p-12 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
          <p className="text-2xl md:text-3xl font-display font-bold text-headings">
            {t('共笑®︎塾', 'TOMOE Jyuku')}
          </p>
          <p>
            {t(
              '「共笑®︎塾」は、「共に笑い（共笑®︎）、共に楽しみ（共楽）、共に学び（共学）、共に育ち（共育）、共に生き・活かされ（共活）、共に未来を創る（共創）」を理念に掲げ、笑顔と共感を通じて多様性を受け入れ、活かす力を育む学びの場です。個々が自分自身を見つめ直し、他者とつながり、多文化共生やダイバーシティ社会の実現に向けた意識とスキルを高めることを目的としています。',
              '共笑®︎ Jyuku, guided by the principles of laughing together (共笑®︎), enjoying together (共楽), learning together (共学), growing together (共育), living and being enlivened together (共活), and creating the future together (共創), is a place of learning that nurtures the power to accept and leverage diversity through smiles and empathy. It aims to help each individual reflect on themselves, connect with others, and enhance awareness and skills toward realizing multicultural coexistence and a diverse society.'
            )}
          </p>
          <p>
            {t(
              '　この塾では、笑顔を介したコミュニケーションや多文化理解の基礎から、実践的なアプローチまで幅広い内容を学ぶことができます。ワークショップやロールプレイ、プロジェクト型学習を通じて、学びを行動に移し、地域や職場で「共笑®︎」の精神を実践する力を身につけることができます。',
              '　At this school, you can learn a wide range of content from the basics of communication through smiles and multicultural understanding to practical approaches. Through workshops, role-plays, and project-based learning, you can gain the power to put learning into action and practice the spirit of "共笑®︎" in communities and workplaces.'
            )}
          </p>
          <p>
            {t(
              '　さらに、「共笑®︎塾」は定期的に開催しているほか、依頼による開催も可能です。幼児教育から企業研修まで、多様なニーズに対応できる専門家がそろっており、内容はご相談に応じて柔軟にカスタマイズいたします。参加される方の背景や目的に合わせたプログラム設計で、効果的な学びをお届けします。',
              '　Furthermore, 共笑®︎ Jyuku is held regularly, and can also be held upon request. We have experts who can respond to diverse needs from early childhood education to corporate training, and the content is flexibly customized according to your consultation. Through program design tailored to participants\' backgrounds and objectives, we deliver effective learning.'
            )}
          </p>
          <div className="mt-6 rounded-[32px] shadow-lg overflow-hidden bg-[#F5F1E8] border-4 border-[#F5F1E8]">
            <img
              src={jyukuImage}
              alt={t('共笑®︎塾', '共笑®︎ Jyuku')}
              className="w-full h-full object-cover block scale-105 transform-gpu"
            />
          </div>
          <section className="mt-10 text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                {t('塾の特徴', 'Jyuku Features')}
              </p>
              <p>
                {t(
                  '• 共感力の育成：笑顔を用いたコミュニケーションの技法や、相手の立場を理解し共感するためのエクササイズを行います。違いを楽しみ、共通点を見出す考え方を学びます。',
                  '• Building empathy: We conduct exercises in communication techniques using smiles and understanding others\' perspectives to empathize. You learn ways of thinking to enjoy differences and find common ground.'
                )}
              </p>
              <p>
                {t(
                  '• 多文化理解と共生の学び：異なる文化や価値観を知り、協力し合う方法を学ぶ講義や対話を通じて、多文化共生の本質に触れます。国際事例をもとに、地域での実践に活かせる知識も提供します。',
                  '• Learning about multicultural understanding and coexistence: Through lectures and dialogue on learning about different cultures and values and how to cooperate with each other, you touch upon the essence of multicultural coexistence. We also provide knowledge that can be utilized in local practice based on international cases.'
                )}
              </p>
              <p>
                {t(
                  '• 実践的なアクティビティ：ロールプレイや交流会など体験型の活動を通じて、多様な人々とのコミュニケーションを実践します。また、ストレスマネジメントや笑いを活かした方法論も取り入れます。',
                  '• Practical activities: Through experiential activities such as role-plays and exchange meetings, we practice communication with diverse people. We also incorporate methodologies utilizing stress management and laughter.'
                )}
              </p>
              <p>
                {t(
                  '• プロジェクト型学習：地域課題の解決に向けたチームプロジェクトを実施します。学んだ知識をもとに具体的なプランを立案し、成果を社会に発信していきます。',
                  '• Project-based learning: We conduct team projects aimed at solving local issues. Based on the knowledge learned, we create concrete plans and share the results with society.'
                )}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                {t('対象者', 'Audience')}
              </p>
              <p>
                {t(
                  '「共笑®︎塾」は、個人、教育関係者、企業、地域コミュニティなど、さまざまな人々を対象としています。コミュニケーション力を高めたい方や、ダイバーシティ＆インクルージョンを推進したい職場、多文化共生をテーマにした教育や地域活動を目指す団体にも最適です。特に幼児教育や企業研修を必要とする方に向けた専門プログラムもご用意しております。',
                  '共笑®︎ Jyuku targets various people including individuals, educators, companies, and local communities. It is ideal for those who want to enhance their communication skills, workplaces that want to promote diversity and inclusion, and organizations aiming for education and community activities themed around multicultural coexistence. We also have specialized programs for those who need early childhood education and corporate training.'
                )}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                {t('開催形式', 'Format')}
              </p>
              <p>
                {t(
                  '「共笑®︎塾」は、オンライン講座や対面型セミナー、企業や学校への出張プログラムなど、多様な形式で提供されます。全国どこからでも参加できる環境を整え、カスタマイズ可能なプログラムを通じて、ニーズに応じた学びを提供します。',
                  '共笑®︎ Jyuku is provided in various formats such as online courses, in-person seminars, and outreach programs to companies and schools. We have created an environment where participation is possible from anywhere in the country, and through customizable programs, we provide learning tailored to your needs.'
                )}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-display font-bold text-headings">
                {t('共笑®︎塾の未来へ', 'Toward the Future of 共笑®︎ Jyuku')}
              </p>
              <p>
                {t(
                  '「共笑®︎塾」は、単なる学びの場にとどまらず、笑顔と多様性が生む新たな可能性を発見し、共感を通じてつながるコミュニティを築きます。参加者が笑顔を通じて社会に貢献し、未来を彩る力を身につけることを目指します。ぜひ、「共笑®︎塾」で笑顔と共に歩む新たな一歩を踏み出しませんか？ご依頼やプログラムのカスタマイズについてはお気軽にご相談ください。',
                  '共笑®︎ Jyuku goes beyond being merely a place of learning—it discovers new possibilities born from smiles and diversity and builds a community connected through empathy. We aim for participants to contribute to society through smiles and gain the power to color the future. Why not take a new step forward with smiles at 共笑®︎ Jyuku? Please feel free to consult with us regarding requests or program customization.'
                )}
              </p>
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
          </section>
        </article>
      </div>
    </>
  )
}

export default Jyuku

