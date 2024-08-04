import './Detail.css';
import { makeStyles } from '@material-ui/core/styles';

import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab';
import Card from './card/Card';
import Zoho from "./image/zoho.webp"
import Gofrugal from "./image/gofrugalk.webp"
import Experience from './Experience/Experience';
import ZohoLogo from "./image/zoho-logo-web.svg"
import GofrugalLogo from "./image/gofrugal-new-logo.svg"
import Skill from './Skill/Skill';
import Education from './Educations/Education';
import Montfort from './image/montfort-school.png';
import Collage from "./image/collage.jpeg";
import BannariSchool  from "./image/school-bannari.jpeg"

const useStyles = makeStyles((theme) => ({
  timeline: {
    margin: 0,
    padding: 0,
    position: 'relative',
    alignItems: 'start',
    top: 0,
    left: 0,
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: '#5531A7',
    border: '5px solid white',
  },
  connector: {
    width: 1,
    backgroundColor: '#E2E6EE',
  }
}));

const programmingSkills = [
  "Clean Architecture",
  "MVVM (Model-View-ViewModel)",
  "Dependency Injection (DI)",
  "Jetpack Compose",
  "Kotlin",
  "Android SDK",
  "Room Database",
  "Flow",
  "Fragments",
  "Services",
  "Broadcast Receivers",
  "Multi-Module Projects",
  "ProGuard/R8",
  "Gradle Build System",
  "AndroidX Libraries",
  "DataStore",
  "Notification Management",
  "Firebase Integration",
  "Adaptive Layouts",
  "LiveData",
  "ViewModel",
  "Coroutines",
  "Retrofit",
  "Security Best Practices",
  "okhttp",
  "Dagger/Hilt",
  "Navigation Component",
  "WorkManager",
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "C#",
  "SQL",
  "HTML/CSS",
  "React.js",
  "Node.js",
  "Android (Java/Kotlin)",
  "React Native",
  "Git",
  "GitHub",
  "Firebase",
  "Realm",
];

function Detail() {
  const classes = useStyles();
  return (
    <div>
      <Timeline className={classes.timeline}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className="custom-content">
            <p className='detail-title'>Company projects  </p>
            <div className='card-section-list'>
              <Card title={"Zakya - Android"} content={"Zakya POS, a Point of Sale app for Android, simplifies your billing experience and enables you to process rapid checkouts from anywhere in your store."} image={Zoho} urlText={"Zakya POS - Point of Sale"} onclickUrl={"https://play.google.com/store/apps/details?id=com.zakya.pos&hl=en_IN"} />
              <Card title={"Gobill - Android"} content={"GoBill is an add-on mobile/tablet billing app for GOFRUGAL RetailEasy. Instead of billing with computers, GOFRUGAL provides you the ease of billing."} image={Gofrugal} urlText={"GoBill POS - Point of Sale"} onclickUrl={"https://play.google.com/store/apps/details?id=com.gofrugal.sellquick&hl=en_IN"} />
              <Card title={"ServeEasy GoBill"} content={"Introducing the ultimate mobile and tablet billing app for restaurants! Gofrugal understands that an easy intuitive mobile & tablet point of sale. is required for restaurants for faster checkouts."} image={Gofrugal} urlText={"ServeEasy GoBill"} onclickUrl={"https://play.google.com/store/apps/details?id=com.gofrugal.serveasy&hl=en_IN"} />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className="custom-content">
            <p className='detail-title'>Experience  </p>

            <div>
              <Experience image={ZohoLogo} role={"Android Developer"} company={"Zoho"} location={"Chennai, India"} duration={"July 2023 - Current"} />
              <Experience image={GofrugalLogo} role={"Android Developer"} company={"Gofrugal"} location={"Chennai, India"} duration={"Aug 2022 - June 2023"} />
            </div>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className="custom-content">
            <p className='detail-title'>Skills  </p>

            <div>
                <Skill programmingSkills={programmingSkills}/>
              </div>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className="custom-content">
            <p className='detail-title'>Education  </p>

          <div className='education'>
          <Education  name={"Montfort CBSE"} year={"2016 - 2017"} title={"10TH STD"} mark={"8/10 CGPA"} logo={Montfort}/>
          <Education  name={"Bannari Amman Vidya Niketan"} year={"2018 - 2019"} title={"12TH STD"} mark={"362/600"} logo={BannariSchool}/>
          <Education  name={"Bannari Amman Institute of Technology"} year={"2019 - 2023"} title={"B.Tech IT"} mark={"7.6/10 CGPA"} logo={Collage}/>

          </div>
            
          </TimelineContent>
        </TimelineItem>


      </Timeline>
    </div>
  );
}

export default Detail;