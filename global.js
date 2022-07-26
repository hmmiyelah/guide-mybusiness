import { NativeModules } from 'react-native'

global.mainColor = '#1b2229'
global.PROTOCOL = 'http'
//global.HOST = "dnsoft.loca.lt";
global.HOST = '192.168.43.182'
global.API_URL = PROTOCOL + '://' + HOST + '/pubg'
global.USERDATA_URL = PROTOCOL + '://' + HOST + '/pubg/userdata/'
global.CONTENTS = {
  newbie: [
    {
      name: 'What is Google Business Profile',
      description: '(f.k.a. Google My Business)?',
      image: 'image1',
      contents: [
        {
          content:
            'Google Business Profile is a free business listing from Google. It allows you to provide details and photos of your business, including your location, services, and products.\n\nCreating this free profile is a great way to increase your visibility across Google services. Information from your Google Business Profile may appear in Google Search, Google Maps, and Google Shopping.\n\n',
          image: null,
          poster: 'image1',
        },
        {
          content:
            'Google Business Profile is only available to businesses that have contact with customers. This includes businesses with a physical location (like a restaurant or store) and businesses that provide services by meeting with clients in other locations (like consultants or plumbers).\n\nIf you have an online-only business, you’ll have to stick to other Google tools like Google Ads and Google Analytics.',
          image: null,
          poster: 'image1',
        },
      ],
    },
    {
      name: 'Why you need',
      description: 'a Google My Business account',
      image: 'image2',
      contents: [
        {
          content:
            '1. Get discovered in Google (and Google Maps)\n\nWhether you’re looking for foot traffic or web traffic, Google is the ultimate search referrer. A Google Business Profile helps ensure that people find your business when looking for products and services like yours in their local area.\n\nYour Google My Business listing shows searchers where and how to visit your business. A Google Business Profile also improves your local SEO. In particular, a listing for a local business is more likely to appear when people search for a nearby business using Google Maps.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-18-620x468.png',
          poster: 'image2',
        },
        {
          content:
            '2. Control your online business information\n\nYour Google My Business profile allows you to control and update your contact information, business hours, and other essential details as needed.\n\nYou can post updates to share that you’ve expanded services, temporarily closed, or fully reopened (an especially useful feature during emergencies like COVID-19). Google Business Profiles have strong local SEO, so the information you share will rank above third-party sites that might have out-of-date details.',
          image: null,
          poster: 'image2',
        },
        {
          content:
            '3. Build trust through reviews\n\nReviews are a key element of social proof, and a meaningful way to build trust and credibility.\n\nGoogle’s combined star rating and space for detailed reviews allows customers to share as much or as little information about their experience with your business as they like. All of it helps future potential customers decide which businesses to visit and products to buy.\n\nIt can be scary to think about reviews coming in on such a public platform, especially since you can’t pick and choose which Google My Business reviews to share. (Although you can respond to all reviews, as we’ll explain later.)\n\nBut don’t panic: Google finds that a combination of positive and negative reviews is more trustworthy than page after page of glowing recommendations.',
          image: null,
          poster: 'image2',
        },
      ],
    },
    {
      name: 'How to set up',
      description: 'a Google Business Profile',
      image: 'image3',
      contents: [
        {
          content:
            'Step 1: Sign in to Google Business Profile Manager\n\nIf you’re already logged into a Google account, you’re automatically logged into Google Business Profile Manager. Otherwise, enter your usual Google account login details or create a new Google account.',
          image: null,
          poster: 'image3',
        },
        {
          content:
            'Step 2: Add your business\n\nEnter your business name. If it does not appear in the drop-down menu, click Add your business to Google. Then select the appropriate category for your business and click Next.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-2-620x645.png',
          poster: 'image3',
        },
        {
          content:
            'Step 3: Enter your location\n\nIf you have a physical location customers can visit, select Yes. Then add your business address. You may also be asked to position a marker for the location on a map. If your business does not have a location customers can visit but offers in-person services or deliveries, you can list your service areas. Then click Next.\n\nIf you didn’t enter a physical address, Google will ask you to specify which region you’re based in. Choose from the drop-down menu and click Next.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-4-620x439.png',
          image2:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-5-620x417.png',
          poster: 'image3',
        },
        {
          content:
            'Step 4: Fill in your contact information\n\nEnter your business phone number and website address so customers can reach you. If you prefer not to be reached by phone, you don’t have to enter a phone number.\n\nWhen your info is complete, click Next.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-6-620x425.png',
          poster: 'image3',
        },
        {
          content:
            'Step 5: Verify your business\n\nEnter your real physical address, not a post office box. This information is only used to verify your business and is not displayed on your Google Business Profile or shared with the public.\n\nEnter your address and click Next. You’ll be offered the applicable options for verifying your account. Physical businesses will need to get a postcard by mail to verify their location. Service-area businesses can be verified through an email address.\n\nOnce you receive your five-digit code, enter it on the next screen (or go to https://business.google.com/) and click Verify or Verify business.\n\nYou’ll get a confirmation screen showing you’re verified. On that screen, click Next.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-7-620x524.png',
          image2:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-9-620x516.png',
          poster: 'image3',
        },
        {
          content:
            'Step 6: Customize your profile\n\nEnter your business hours, messaging preferences, business description, and photos. (We’ll get into the details of how to optimize your profile content in the next section of this post.)\n\nWhen you’re ready, click Continue. You’ll find yourself in the Business Profile Manager dashboard.\n\nFrom here, you can manage your business profile, view insights, manage reviews and messages, and create Google ads.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-10-620x341.png',
          poster: 'image3',
        },
      ],
    },
    {
      name: 'How to optimize',
      description: 'your Google My Business profile',
      image: 'image1',
      contents: [
        {
          content:
            'Google determines local search ranking based on three factors:\n\n1. Relevance: How well your Google My Business listing matches a search\n\n2. Distance: How far your location is from the search or searcher\n\n3. Prominence: How well-known your business is (based on factors like links, number of reviews, review score, and SEO)\n\nHere are some steps you can take to maximize your score for all three factors.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '1. Complete all elements of your profile\n\nCustomers are 2.7 times more likely to consider your business reputable if you have a complete Google Business Profile. They’re also 70% more likely to actually visit your location.\n\nGoogle specifically says that “businesses with complete and accurate information are easier to match with the right searches.” This improves your score for relevance. The key here is to tell Google visitors “what you do, where you are, and when they can visit.”\n\nIf your business hours change around holidays or seasons, make sure to keep them up to date.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '2. Verify your location(s)\n\nVerified business locations are “more likely to show in local search results across Google products, like Maps and Search.” Including a verified location also helps improve your score for the distance ranking factor.\n\nIf you skipped over verifying your location in the account creation steps above, request your verification postcard now at https://business.google.com/.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '3. Add real images and videos of your business\n\nYour Google Business Profile includes a logo and cover photo. Use images consistent with those on your social profiles to make it easier for people to recognize your brand.\n\nBut don’t stop there. Add images and videos to showcase your location, work environment, and team.\n\nIf you run a restaurant, post pictures of your meals, menus, and dining room. Make sure they look appetizing, professional, and aren’t low res. According to Google, businesses with photos receive more requests for directions and more clicks through to their websites.\n\nHow to add or edit photos to your profile on Google:\n\na. From the dashboard, click on Photos in the left menu.\n\nb. Start by adding your logo and cover photo. You can upload an image, choose one from your Business Profile albums, or choose a photo in which your business is tagged.\n\nc. To add more photos, click At Work or Team in the top menu of the photos page.\n\nd. To add videos, click the Video tab at the top of the photos page.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-12-620x393.png',
          poster: 'image1',
        },
        {
          content:
            '4. Include keywords in your profile\n\nUsing the right keywords will improve relevance. Not sure where to start? Try Google Trends or Keyword Planner.\n\nGoogle Analytics, Hootsuite Insights, and social monitoring tools can also help you uncover terms people use to search for your business. Incorporate them in a natural way into your business description. Don’t stuff keywords or use irrelevant ones – this can actually hurt your search ranking.',
          image: null,
          poster: 'image1',
        },
        {
          content:
            '5. Encourage and answer reviews and questions\n\nPeople trust other people more than they trust businesses. A good review can be the deciding factor that tips prospective customers in your favor. Reviews also improve your Google ranking.\n\nThe best time to ask for a review is after providing a great experience. To make it easier, Google provides a direct link to ask customers to review your business.\n\nTo share your review request link:\n\na. From the dashboard, scroll down to the button that says Share review form.\n\nb. Copy and paste the link into a message to customers, or into your autoresponder and online receipts.\n\nYou cannot turn off reviews for your Google My Business page. And it wouldn’t be in your interest to do that anyway, as reviews show customers that your business is legitimate.\n\nBut, you can flag and report inappropriate reviews.\n\nAlso, you can (and should!) respond to reviews, both positive and negative. According to a survey by Google and Ipsos Connect, businesses that respond to reviews are considered 1.7 times more trustworthy than those that don’t.\n\nRespond professionally in your brand voice. If responding to a negative review, be honest and offer an apology when it’s warranted.\n\nTo view and respond to reviews, click the Reviews tab in the left menu of your Business Profile Manager.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-11-620x207.png',
          poster: 'image1',
        },
        {
          content:
            '6. Keep your business information up to date\n\nMake sure to edit your business profile if you change your hours of operation, contact information, etc. Nothing annoys customers more than showing up within operating hours only to find you closed. If you have special hours for holidays or even as a one-off, make sure they are reflected in your Google Business Profile.\n\nYou can also create Google My Business posts to share updates, product news, offers, and events.\n\nTo edit your business information:\n\nYou can get back to the dashboard to make edits at any time at business.google.com. You can also edit your business information directly from Google search or Maps. Just search your business name on one of these tools to access the editing panel.\n\nTo create and share Google My Business posts:\n\na. From the dashboard, click Posts in the left menu.\n\nb. Click Create post.\n\nc. Choose which type of post you want to create: a COVID-19 update, an offer, information about What’s New, an event, or a product. Each type of post has different information to complete.\n\n',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-13-620x525.png',
          image2:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-14.png',
          poster: 'image1',
        },
        {
          content:
            '7. Add special features and attributes\n\nSpecial features are available for Google business accounts, depending on the category you’ve chosen.\n\nHere’s a rundown of category-specific features available:\n\na. Hotels can display class ratings, sustainability practices, highlights, check-in and out times, and amenities.\n\nb. Restaurants and bars can upload menus, dish photos, and popular dishes.\n\nc. Service-oriented businesses can display a list of services.\n\nd. Healthcare providers in the U.S. can add health insurance information.\n\ne. Businesses also have access to different types of buttons based on their category, such as appointment bookings, reservations, and orders.\n\nIf you think your business is eligible for one of these features, but you don’t see them, you may have chosen the wrong category. You can choose up to 10 categories for your business.\n\nYou can also add factual attributes to your profile to share more info your customers may care about. If you run a shop or restaurant, you may want to share that it’s wheelchair accessible or offers free Wi-Fi or outdoor seating. You can even share that your company is women-owned and LGBTQ+ friendly.\n\nHow to add or edit attributes:\n\na. From the dashboard, click Info.\n\nb. Under From the business, click Add attributes. Or, if you’ve already added attributes and want to add more, click the pencil next to From the business.\n\nc. Scroll through all the available options for your business, check the applicable attributes, and click Apply.\n\n',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-16.png',
          image2:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-15-620x558.png',
          poster: 'image1',
        },
        {
          content:
            '8. Add your products\n\nIf you sell products, make sure to add an up-to-date inventory to your Business Profile. In addition to appearing on your profile itself, your products can appear in Google Shopping.\n\nTo add products to your Business Profile manually:\n\n◉From the dashboard, click Products in the left menu, then click Get Started to add your first product.\n\nIf you have a retail business in the U.S., Canada, the UK, Ireland, or Australia, and you use a barcode scanner to sell products with manufacturer barcodes, you can use Pointy to automatically upload your products to your Business Profile.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-17.png',
          poster: 'image1',
        },
        {
          content:
            '9. Take advantage of Google’s free marketing tools\n\nGoogle offers businesses access to a free marketing kit with stickers, social posts, and printable posters. You can even create a custom video. (The link will only work after you set up your Business Profile.)',
          image: null,
          poster: 'image1',
        },
      ],
    },
    {
      name: 'How to manage',
      description: 'your Google My Business profile with Hootsuite',
      image: 'image2',
      contents: [
        {
          content:
            'Once you create and verify your Google Business Profile, you can integrate your Google My Business account with Hootsuite.\n\nRather than managing your Google Business Profile separately, this allows you to manage your Google My Business page, create posts, and respond to reviews and questions within your Hootsuite dashboard.\n\nThis integration allows you to manage Google like a social platform, within your social team, so your messaging is always consistent, on-brand, and up-to-date.',
          image: null,
          poster: 'image2',
        },
        {
          content:
            'Here’s how to manage your Google Business Profile with Hootsuite.\n\n1. Install the Google My Business App.\n\n2. Select whether you want to add your Google Business Profile streams to an existing tab, or create a new tab, then click Finish.\n\n3. In your Hootsuite dashboard, click on the appropriate Board under My Streams, and click Login to Google My Business for each stream.\n\nOnce you’re logged in, you can create a post and respond to Google My Business reviews and questions directly from your Hootsuite streams.',
          image:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-19.png',
          image2:
            'https://blog.hootsuite.com/wp-content/uploads/2022/01/google-my-business-20-620x237.png',
          poster: 'image2',
        },
      ],
    },
  ],
}
global.log = (message) => {
  console.log(message)
}
global.BANNER_AD_ID = 'ca-app-pub-3950402057146083/5883645909'
global.INTERSTITIAL_AD_ID = 'ca-app-pub-3950402057146083/4570564233'
global.NATIVE_AD_ID = 'ca-app-pub-3950402057146083/6173621646'
/* TEST AD ID */
/*global.INTERSTITIAL_AD_ID = "ca-app-pub-3940256099942544/1033173712";
global.BANNER_AD_ID = "ca-app-pub-3940256099942544/6300978111";
global.NATIVE_AD_ID = "ca-app-pub-3940256099942544/2247696110";*/
global.cs_email = 'luckynine.cs@gmail.com'
global.DEVELOPER_HOME =
  'https://play.google.com/store/apps/dev?id=6323058473789380568'
global.PACKAGE_NAME = 'com.dnprod.pubg'
global.readString = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readString(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.readInt = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readInt(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.readBoolean = async (name, defaultValue, callback) => {
  NativeModules.AndroidUtil.readBoolean(name, defaultValue, (value) => {
    if (value == null) {
      callback(defaultValue)
      return
    }
    callback(value)
  })
}
global.writeString = async (name, value) => {
  NativeModules.AndroidUtil.writeString(name, value)
}
global.writeInt = async (name, value) => {
  NativeModules.AndroidUtil.writeInt(name, value)
}
global.writeBoolean = async (name, value) => {
  NativeModules.AndroidUtil.writeBoolean(name, value)
}
global.uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
global.splitByNewline = (str, maxLength) => {
  var buff = ''
  var numOfLines = Math.floor(str.length / maxLength)
  for (var i = 0; i < numOfLines + 1; i++) {
    buff += str.substr(i * maxLength, maxLength)
    if (i !== numOfLines) {
      buff += '@'
    }
  }
  return buff
}
global.string = {
  app_name: 'Guide PUBG',
  text1: 'PC & Mobile',
  text2: 'Get Tips and trick for game play from Newby to Expert.',
  text3: 'PUBG Gaming Tutorial',
  next: 'Next',
  done: 'Done',
  newbie: 'Newbie',
  advance: 'Advance',
  pro: 'Pro',
  expert: 'Expert',
  ad: 'Ad',
  share: 'Share:',
  next: 'Next',
  prev: 'Prev',
  settings: 'Settings',
  notification: 'Notification',
  allow_notifications: 'Allow Notifications',
  help: 'Help',
  how_to_use: 'How To Use',
  contact_us: 'Contact Us',
  about: 'About',
  more_apps: 'More Apps',
  share: 'Share',
  share_apps: 'Share Apps',
  give_5_stars: 'Give 5 Stars',
  how_to_use: 'How To Use',
  about_us: 'About Us',
  share_text:
    'DOWNLOAD FOR FREE: https://play.google.com/store/apps/details?id=com.al2.howtousemybusiness.solution.winner.fullorder',
  newbie_guide: 'Newbie Guide',
  advance_guide: 'Advance Guide',
  pro_guide: 'Pro Guide',
  expert_guide: 'Expert Guide',
}
