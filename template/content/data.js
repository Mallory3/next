const data = [
  {
    title: 'Website Template',
    logo: 'public/logo.svg',
    contact: {
        phone: '403-818-4164',
        text: '403-818-4164',
        email: 'info@applify.com',
        address: {
          street:'13 Deer Lane Road',
          city: 'Calgary, AB',
          postal: 'T2J 5S9'
        },
        map: {
          embedded: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.1022254900045!2d-114.01418358427553!3d50.921825961168416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176554fc7272d%3A0x6a2a89ba1f8ccd50!2s13%20Deer%20Lane%20Rd%20SE%2C%20Calgary%2C%20AB%20T2J%205S9!5e0!3m2!1sen!2sca!4v1655531000161!5m2!1sen!2sca',
          url: 'https://www.google.com/maps/place/13+Deer+Lane+Rd+SE,+Calgary,+AB+T2J+5S9/@50.9218226,-114.0119949,17z/data=!3m1!4b1!4m5!3m4!1s0x537176554fc7272d:0x6a2a89ba1f8ccd50!8m2!3d50.9218226!4d-114.0119949'
        },
    },
    globalContent: {
      sectionHeader: '--CHECK OUT OUR'
    },
    faqs: {
      header: "FAQs",
      subHeader: "Your commonly asked questions.",
      questions: [
        {
          question: "How am I getting my website for so cheap?",
          answer: "My website template is made using next.js and tailwind css, allowing for it's fast performance, mobile first responsive design and modern styles. So whats the catch? No catch, just following a dream. This is a communal project, where I will be offering the same template to everyone--similar to Squarespace, Shopify, Wix ...--with all of the content, imagary and branding colors fully customizable. This means, that although you will own your website and be provided with the code, I will maintain ownership of its Intellectual Property (IP). Basically, you jus't cant sell me website to someone else. Why is this better for you? I will be continuially learning new things and building new components based on your feedback. Meaining, the capabilities of your website will stay up-to-date with the latest trends and advanements in technologies. You will continously have the opportunity to include new content to your site. Like your business, always growing and evolving, your online brand should be too."
        },
        {
          question: "What's included in the optional monthly fee?",
          answer: "Now whats the catch? Still no catch. If you want to get a 15% discount off on your new site, you can choose to sign up for the monthly subscription (for the discount, you need to commit to at least 1 year, but can cancel at any time, effective that month, afterwards :). In the monthly subscripts I offer <ul>1 hour of content updates/month (can be carried over up to a max of 1 year) FYI in 1 hour, I could update the content of your whole site each month. I got you covered! I will deploy and host your site for you Option to use your 1 hour towards developing you new things</ul>"
        },
        {
          question: "What is your referal program?",
          answer: "I know you will be talking to your friends about your new site ;) If you refer someone to me that gets a site, you will get a month free (unlimited months!). Plus, if they mention they were referred by you, they will also get 15% off their website... win-win-win."
        },
        {
          question: "Do you know what you are doing?",
          answer: "Well, yah! I am a certified web developer, with 3 years industry experience. I am still learning, like many of you, but love what I do. Coding is my passion and I spend a large portion of my time, outside of my full-time-job in the industry, learning and improving my skills. Let's learn more together."
        },
        {
          question: "I want something more, something different?",
          answer: "We do offer custom websites! How much will it be? How long will it take? I do not know. It will depend on what you want. Let's chat and find out! I provide free consultations to chat about your ideas and provide an estimate! Reach out to schedule one. I look forward to meeting you!"
        }
      ]
    },
    sections: {
      contact: {
        firstCard: {
          header: "Let's talk.",
          subHeader: "We love hearing from you!"
        },
        secondCard: {
          header: "Questions?",
          subHeader: "Check out our <a class='link' href='/'>FAQ's</a> or send us a message."
        },
        thirdCard: {
          header: "We're here.",
          subHeader: "Find our <a class='link' href='/'>hours</a> below."
        },
      },
      parallaxBanner: {
        image: {
          url: "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          alt: 'Image of coding'
        },
        content: {
          header: "Join our mailing list.",
          subHeader: "Don't worry, we won't span you."
        }
      },
    }
  }
]

export default { data };