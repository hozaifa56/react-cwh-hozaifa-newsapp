import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "John Wagner",
        "title": "Republicans bolster RFK Jr. in hearing, while Democrats assail him - The Washington Post",
        "description": "The hearing frequently devolved into Democrats attacking Kennedy while Republicans defended their decision to give a prominent platform to a Biden rival.",
        "url": "https://www.washingtonpost.com/politics/2023/07/20/robert-kennedy-house-hearing/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/E5LG4X7DNKN4V2KN3KP6VPK7SI_size-normalized.jpg&w=1440",
        "publishedAt": "2023-07-20T22:00:00Z",
        "content": "Comment on this story\r\nComment\r\nRobert F. Kennedy Jr., a member of the storied political family who is making a long-shot Democratic presidential bid, was bolstered by Republicans at a hearing Thursd… [+5691 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "",
        "title": "Washington Commanders sale: NFL owners unanimously approve Josh Harris purchase for record $6 billion - CBS Sports",
        "description": "'We're very excited to get to work and to start the new era of Washington football,' Harris said Thursday",
        "url": "https://www.cbssports.com/nfl/news/washington-commanders-sale-nfl-owners-unanimously-approve-josh-harris-purchase-for-record-6-billion/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/07/20/21b87653-77be-47b8-b5c1-1f5169770ed5/thumbnail/1200x675/0bee5c19f56ae0b2ae5ec241c378bf73/commanders-logo-g.jpg",
        "publishedAt": "2023-07-20T21:45:00Z",
        "content": "More than six months after Daniel Snyder began exploring a sale of the Commanders, the franchise is finally changing hands. The NFL has long acknowledged billionaire Josh Harris' bid to purchase the … [+3322 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Annie Grayer, Marshall Cohen, Jeremy Herb",
        "title": "Grassley releases internal FBI document about unverified Biden bribery allegations - CNN",
        "description": "GOP Sen. Chuck Grassley of Iowa on Thursday released an internal FBI document containing unverified allegations President Joe Biden was involved in an illegal foreign bribery scheme.",
        "url": "https://www.cnn.com/2023/07/20/politics/chuck-grassley-fbi-document/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230720165241-chuck-grassley-071923.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-20T21:20:00Z",
        "content": "GOP Sen. Chuck Grassley of Iowa on Thursday released an internal FBI document containing unverified allegations President Joe Biden was involved in an illegal foreign bribery scheme.\r\nThe FBI had pre… [+5423 chars]"
      },
      {
        "source": {
          "id": "espn",
          "name": "ESPN"
        },
        "author": "Mark Schlabach",
        "title": "Christo Lamprecht shares lead at Open Championship after 66 - ESPN - ESPN",
        "description": "Christo Lamprecht, a senior at Georgia Tech, became just the second amateur in the past 50 years to have at least a share of the co-lead after the first round of The Open.",
        "url": "https://www.espn.com/golf/story/_/id/38043569/christo-lamprecht-shares-lead-open-championship-66",
        "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0720%2Fr1200155_1296x729_16%2D9.jpg",
        "publishedAt": "2023-07-20T21:01:00Z",
        "content": "HOYLAKE, England -- Amateur Christo Lamprecht might be the only one at Royal Liverpool Golf Club who isn't surprised his name is at the top of the leaderboard with England's Tommy Fleetwood and Argen… [+5161 chars]"
      },
      {
        "source": {
          "id": "fortune",
          "name": "Fortune"
        },
        "author": "Will Daniel",
        "title": "Tesla is ‘one of the most overvalued stocks’ and could be worth just a tenth of its current share price, New Constructs’ David Trainer says - Fortune",
        "description": "Trainer warned that Tesla would have to earn twice the annual profit of Apple by 2032 to justify its current valuation.",
        "url": "https://fortune.com/2023/07/20/tesla-stock-price-outlook-most-overvalued-worth-tenth-current-share-price-new-constructs-david-trainer/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/07/GettyImages-1258742338-e1689860281462.jpg?resize=1200,600",
        "publishedAt": "2023-07-20T20:58:00Z",
        "content": "Shares of Tesla sank more than 9% on Thursday after the company reported mixed results for the second quarter. Now, some Wall Street analysts are making the case that its just the beginning of a nigh… [+7297 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Claretta Bellamy",
        "title": "A look at the history of the courthouse in Jason Aldean’s music video - NBC News",
        "description": "Country singer Jason Aldean is facing backlash for featuring Maury County Courthouse, the site of a black teen’s lynching in 1927, in his music video.",
        "url": "https://www.nbcnews.com/news/nbcblk/jason-aldean-courthouse-black-teen-lynched-try-that-small-town-rcna95080",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230719-jason-aldean-al-1007-2125fa.jpg",
        "publishedAt": "2023-07-20T20:55:07Z",
        "content": "A music video by country star Jason Aldean has drawn widespread attention in part for featuring a Tennessee courthouse that is known as the site of a heinous lynching that happened a century ago. \r\nR… [+2839 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "WBAL TV Baltimore"
        },
        "author": "Josh Starkey",
        "title": "West Nile virus found in mosquitoes in Anne Arundel County - WBAL TV Baltimore",
        "description": "Anne Arundel County Health Department officials said mosquitoes trapped two parts of the county have tested positive for West Nile virus.",
        "url": "https://www.wbaltv.com/article/west-nile-virus-found-mosquitoes-anne-arundel-county/44603414",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/wbal/21015638-21015638.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "publishedAt": "2023-07-20T20:12:00Z",
        "content": "ANNAPOLIS, Md. —Anne Arundel County Health Department officials said mosquitoes trapped in two parts of the county have tested positive for West Nile virus.\r\nThe results represent the first West Nile… [+1084 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Alexandra Canal",
        "title": "Netflix stock falls as company says revenue acceleration will take time - Yahoo Finance",
        "description": "Netflix said accelerating revenue is the \"primary objective\" after Q2 revenue came in below analyst expectations.",
        "url": "https://finance.yahoo.com/news/netflix-stock-falls-as-company-says-revenue-acceleration-will-take-time-200005275.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/85QkQEd_fox.qEb.FeH4tQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/32c1ace0-2640-11ee-9fbf-f432de9b51b4",
        "publishedAt": "2023-07-20T20:00:05Z",
        "content": "Netflix (NFLX) said accelerating growth is its \"primary objective\" after the streaming giant saw its second quarter sales and third quarter revenue projection miss consensus estimates.\r\nBut the compa… [+3516 chars]"
      },
      {
        "source": {
          "id": "entertainment-weekly",
          "name": "Entertainment Weekly"
        },
        "author": "Maureen Lee Lenker",
        "title": "Ariana Grande is reportedly dating her 'Wicked' costar Ethan Slater - Entertainment Weekly News",
        "description": "Boq would be proud.",
        "url": "https://ew.com/celebrity/ariana-grande-dating-wicked-costar-ethan-slater/",
        "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C17%2C1500%2C767&poi=%5B735%2C0%5D&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F07%2F20%2FAriana-Grande-and-Ethan-Slater-dating-072023.jpg",
        "publishedAt": "2023-07-20T19:27:00Z",
        "content": "It looks like Ariana Grande and Ethan Slater are dancing through life together.\r\nThe \"Thank U, Next\" singer, 30, is currently dating her Wicked costar, 31, after recently splitting from husband Dalto… [+1962 chars]"
      },
      {
        "source": {
          "id": "politico",
          "name": "Politico"
        },
        "author": null,
        "title": "No one wants to talk about Donald Trump at Aspen forum - POLITICO",
        "description": "A return of Donald Trump to the White House could upend strategies Aspen attendees are devising to tackle major global challenges.",
        "url": "https://www.politico.com/news/2023/07/20/trump-2024-aspen-forum-00107429",
        "urlToImage": "https://static.politico.com/0f/8b/07de57424ba6a90b9c222fce156b/election-2024-trump-09206.jpg",
        "publishedAt": "2023-07-20T19:23:21Z",
        "content": "Others more directly sidestepped la question Trump.\r\nI havent even begun to think about 2024, declared Stephen Biegun, a deputy secretary of State during the first Trump administration.\r\nI dont do po… [+3818 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "",
        "title": "Why some folks never got sick from COVID: It could be in their genes : Goats and Soda - NPR",
        "description": "Everybody knows someone — maybe it's you — who got COVID but never got sick or who thinks they never got COVID at all. A new study found one possible reason, involving a certain gene and common colds.",
        "url": "https://www.npr.org/sections/goatsandsoda/2023/07/20/1188914806/you-know-those-folks-who-had-covid-but-no-symptoms-a-new-study-offers-an-explana",
        "urlToImage": "https://media.npr.org/assets/img/2023/07/20/sciencesourceimages_1008873_highres_wide-a2edcef7491042a8454e284d65fe3f6c6c19a8c1-s1400-c100.jpg",
        "publishedAt": "2023-07-20T19:09:05Z",
        "content": "This colorized transmission electron micrograph of a human white blood cell (bottom) shows the HLA antigen the uneven red areas on the cell's exterior surface. A variant of the HLA gene could play a … [+6595 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Rebekah Riess, Emma Tucker, Travis Nichols",
        "title": "Mother of missing 12-year-old girl in North Carolina discussed a theory that stepfather gave girl away for money, warrant shows - CNN",
        "description": "A newly unsealed search warrant in the case of missing 12-year-old Madalina Cojocari reveals that her mother, who was arrested for failing to report the girl’s disappearance, and grandmother discussed a theory that the child’s stepfather had given her away fo…",
        "url": "https://www.cnn.com/2023/07/20/us/madalina-cojocari-missing-north-carolina-warrant/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221229094802-02-madalina-cojocari.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-20T18:42:00Z",
        "content": "A newly unsealed search warrant in the case of missing 12-year-old Madalina Cojocari reveals that her mother, who was arrested for failing to report the girls disappearance, and grandmother discussed… [+2465 chars]"
      },
      {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "Saleen Martin",
        "title": "Poop frequency may impact brain function, researchers say - USA TODAY",
        "description": "Constipated participants who went once every 3+ days had \"significantly worse cognition\" researcher Chaoran Ma said.",
        "url": "https://www.usatoday.com/story/news/health/2023/07/20/poop-frequency-cognitive-function-research-study/70438086007/",
        "urlToImage": "https://www.usatoday.com/gcdn/-mm-/a0a28bd666af6d80b33247a358069ae6b7ce0cc4/c=0-108-2121-1306/local/-/media/2016/09/28/USATODAY/USATODAY/636106598795148547-ThinkstockPhotos-512168822.jpg?width=2121&height=1198&fit=crop&format=pjpg&auto=webp",
        "publishedAt": "2023-07-20T18:39:01Z",
        "content": "Researchers say they have linked chronic constipation with cognitive decline, suggesting that people who defecate less may have poorer cognitive function.\r\nChaoran Ma, an associate professor in the U… [+4930 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Hamdi Alkhshali, Celine Alkhaldi, Aqeel Najim",
        "title": "Iraqi security forces disband protests at Swedish embassy in Baghdad over Quran burning - CNN",
        "description": "Iraqi security forces dispersed hundreds of demonstrators who stormed the main gates of the Swedish embassy in the Iraqi capital of Baghdad, in response to police in Stockholm sanctioning another planned burning of the Muslim holy book, the Quran.",
        "url": "https://www.cnn.com/2023/07/19/middleeast/iraq-swedish-embassy-protest-quran-burning-intl-hnk/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230719193029-03-baghdad-swedish-embassy-protest-0720.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-20T18:39:00Z",
        "content": "Iraqi security forces dispersed hundreds of demonstrators who stormed the main gates of the Swedish embassy in the Iraqi capital of Baghdad, in response to police in Stockholm sanctioning another pla… [+6359 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "KCRA Sacramento"
        },
        "author": "Tamara Berg",
        "title": "Northern California Forecast: Another heat wave begins Thursday; Oregon wildfire smoke to impact CA - KCRA Sacramento",
        "description": "Another heat wave arrives in Northern California with triple-digits expected over the next several days.",
        "url": "https://www.kcra.com/article/northern-california-forecast-triple-digits-heat-wave-july-20/44600991",
        "urlToImage": "https://kubrick.htvapps.com/vidthumb/847680c0-6b39-4814-b734-690f4bd62d11/0849fd0b-1886-4463-a1f3-fa877f1db741.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "publishedAt": "2023-07-20T18:24:00Z",
        "content": "Another heat wave arrives in Northern California with triple-digits expected over the next several days. \r\nTemperatures on Thursday will be above average with highs in the 100-104 degree range for th… [+1304 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": null,
        "title": "Samsung Unpacked: How to Watch the Galaxy Fold 5, Flip 5 Live Reveal Event - CNET",
        "description": "Samsung's next wave of foldable phones are expected to debut next week.",
        "url": "https://www.cnet.com/tech/mobile/samsung-unpacked-how-to-watch-the-galaxy-fold-5-flip-5-live-reveal-event/",
        "urlToImage": "https://www.cnet.com/a/img/resize/555e9f441d4ee3bd89fc58d28ceb37c253a487a7/hub/2022/08/09/c50bf603-388c-49c5-8ffb-fdf86ead6933/samsung-galaxy-foldable-9808.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2023-07-20T18:13:00Z",
        "content": "Samsung is likely revealing a new generation of foldable phones -- presumably the Galaxy Z Fold 5 and Galaxy Z Flip 5 -- at next week's Samsung Unpacked event on Wednesday, July 26. The event is goin… [+5740 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Phil Stewart, Idrees Ali",
        "title": "US Army worried about how North Korea will treat Private King - Reuters",
        "description": "The United States on Thursday voiced mounting concern over Army Private Travis King, who dashed into North Korea two days ago, saying Pyongyang had a history of mistreating captured Americans.",
        "url": "https://www.reuters.com/world/asia-pacific/us-army-worried-about-how-north-korea-will-treat-private-king-2023-07-20/",
        "urlToImage": "https://www.reuters.com/resizer/-PvVlYFpWKW8yBybZnGrR-ldSx8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6MVD4GXT3FPLDA7F3ISHBTMSBA.jpg",
        "publishedAt": "2023-07-20T18:11:00Z",
        "content": "WASHINGTON, July 20 (Reuters) - The United States on Thursday voiced mounting concern over Army Private Travis King, who dashed into North Korea two days ago, saying Pyongyang had a history of mistre… [+5665 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Science.org"
        },
        "author": "Science",
        "title": "Warning signs detected hours ahead of big earthquakes - Science",
        "description": null,
        "url": "https://www.science.org/content/article/warning-signs-detected-hours-ahead-big-earthquakes",
        "urlToImage": null,
        "publishedAt": "2023-07-20T18:07:26Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Justin Chang",
        "title": "'Barbie' and 'Oppenheimer' review: Two blockbusters worth seeing in theaters - NPR",
        "description": "It's not every day that an exuberant comedy about a Mattel doll goes head-to-head with a brooding drama about the father of the atomic bomb, but critic Justin Chang says both films deliver.",
        "url": "https://www.npr.org/2023/07/21/1188326902/barbie-oppenheimer-review-barbenheimer",
        "urlToImage": "https://media.npr.org/assets/img/2023/07/20/barbie-oppenheimer_wide-c10222cd8e257474847e3ee7754df9e035860948-s1400-c100.jpg",
        "publishedAt": "2023-07-20T18:00:02Z",
        "content": "It's not every day that an exuberant comedy about a Mattel doll goes head-to-head with a brooding drama about the father of the atomic bomb, but both Barbie and Oppenheimer deliver. Above, Margot Rob… [+4924 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Laura Paddison",
        "title": "Long-lost Greenland ice core suggests potential for disastrous sea level rise - CNN",
        "description": "A recently-discovered ice core taken from beneath Greenland’s ice sheet decades ago reveals that much of the country was ice-free around 400,000 years ago – an alarming finding that could have disastrous implications for sea level rise.",
        "url": "https://www.cnn.com/2023/07/20/world/greenland-ice-sheet-melt-sea-level-rise-climate/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230720082315-03-greenland-ice-sheet-melt-climate.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-20T18:00:00Z",
        "content": "A recently discovered ice core taken from beneath Greenlands ice sheet decades agohas revealed that a large part of the country was ice-free around 400,000 years ago, when temperatures were similar t… [+4720 chars]"
      }
    ]
  }
  constructor() {
    super();
    this.state={
      articles:this.articles.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Topheadlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
          return(<div className='col-md-4' key={element.url}>
          <NewsItem  title={element.title} description={element.description?.slice(0,88)} 
          imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>);
        })}
            
        </div>

      </div>
    )
  }
}

export default News;
