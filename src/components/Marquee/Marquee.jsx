import React from 'react';
import './Marquee.css'; // (keep your css animation here)
import img1 from '../../Images/adsense.png'
import img2 from '../../Images/chatgpt.avif'
import img3 from '../../Images/discord.png'
import img4 from '../../Images/drive.png'
import img5 from '../../Images/dropbox.png'
import img6 from '../../Images/facebook.png'
import img7 from '../../Images/gmail.png'
import img8 from '../../Images/mailchimp.png'
import img9 from '../../Images/notion.avif'
import img10 from '../../Images/openai.avif'
import img11 from '../../Images/sheets.png'
import img12 from '../../Images/shopify.avif'
import img13 from '../../Images/slack.png'
import img14 from '../../Images/stripe.avif'
import img15 from '../../Images/teams.png'
import img16 from '../../Images/twillio.png'
import img17 from '../../Images/twitter.png'
import img18 from '../../Images/zohosheets.png'



const Marquee = () => {
  const tools = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18
  ];

  return (
    <div className="w-full overflow-hidden flex justify-center marquee-wrapper">
      <div className=" lg:w-1/2 w-5/6 flex flex-col items-center">
        <div className="relative w-full overflow-hidden">
          <div className="flex marquee-content whitespace-nowrap items-center">
            {/* Original sequence */}
            {tools.map((toolSrc, idx) => (
              <img
                key={`img-${idx}`}
                src={toolSrc}
                alt=""
                className="inline-block mx-4 sm:mx-6 lg:mx-8 h-12 w-auto object-contain"
              />
            ))}

            {/* Duplicate for seamless loop */}
            {tools.map((toolSrc, idx) => (
              <img
                key={`dup-img-${idx}`}
                src={toolSrc}
                alt=""
                className="inline-block mx-4  sm:mx-6 lg:mx-8 h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Marquee;
