import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";
const IMAGE_URL = 'https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png'
import {dateFormatter} from '../../utils/utils'

export default class JobDescription extends LightningElementWithBootstrap {

    isLoaded = false
    get logoImage() {
        return IMAGE_URL
    }

    get formattedDate() {
        return dateFormatter(this.selectedJob.created_at)
    }

    selectedJob =
    {
          "id": "30cd4668-e917-4b56-a3a6-10dd3c6f65e5",
          "type": "Contract",
          "url": "https://jobs.github.com/positions/30cd4668-e917-4b56-a3a6-10dd3c6f65e5",
          "created_at": "Sat Jan 16 20:24:31 UTC 2021",
          "company": "MemberVault",
          "company_url": "https://membervault.co",
          "location": "Remote",
          "title": "Full Stack PHP Developer",
          "description": "<h1>MemberVault Development Jobs</h1>\n<p>We are looking for a full-stack senior level developer with a talent for front end dev and an eye for good design to join our small virtual team.</p>\n<h2>Experience required:</h2>\n<ul>\n<li>PHP (starting the process of moving from CodeIgniter to Laravel)</li>\n<li>MySQL</li>\n<li>Vue / jQuery</li>\n<li>CSS (mainly using Tailwind now)</li>\n</ul>\n<p>Will report directly to the CTO with your role focused on maintaining, advancing and upgrading the current platform with new features as the company grows.  Will also network directly with the rest of our small team to assist with platform bugs and improvements.</p>\n<p>We’d like someone who can stay focused on primary goals, then take small projects related to those goals and run with them, checking in as needed for guidance, but not needing to be micro-managed. Our team has a casual, fast paced energy with a collaborative work style, with daily conversations happening in Telegram. If you prefer to work independently and only check in your code, without having conversations with fellow team members, this isn’t a good fit for you.</p>\n<p>We’d also really like to find someone with an eye for good design/UX (although we aren’t expecting you to also be a pro level designer) and can take a basic idea and make it look good in our framework.</p>\n<p>This is a virtual contractor position with a guaranteed monthly income of $10K. We encourage our team to craft their own schedules so you’ll be able to decide how you want to allocate your flexible 30/hr work week. Overall we focus more on completed tasks, and you showing up vocally during your hours worked (rather than silently working in a silo), than time tracked hours worked.</p>\n<p>Our goal as a company is to support our team in having a quality work/life balance, and also enable our team members to stay fresh and to explore new, side projects, as desired.</p>\n<p>In order to support that goal, this is a 30/hr position rather than a typical 9-5 40/hr work week. However you’d like to spend that extra 10 hours in your week — mountain biking, cuddling kids, building your own app or helping others develop their “dream” app — we’re here for it!</p>\n<p>We’re a global team of passionate entrepreneurs, who are also focused on developing a platform to make it easy for people to run online businesses.</p>\n<h3>You:</h3>\n<p>Are a self starter\nEnjoy regular communication, with both the team and overall MV community\nWant to own your role rather than be managed\nComfortable making quick decisions\nEnjoy looking for opportunities to improve the platform\nAbility to prioritize and manage multiple streams of work tasks (ie platform improvements, bugs, etc)\nEnjoy finding the perfect gif response to a conversation\nAre interested and committed to create the best user experience possible</p>\n<p>We’re a global team, and are open to a wide variety of time zones as long as there is an overlap with MV HQ time zone of PST.</p>\n<p>We are committed to building a diverse team for greater impact and perspectives, and creating a caring, inclusive workplace and community. MemberVault is an equal opportunity employer, and we choose our hires based on abilities regardless of race, religion, marital status, gender identity or expression, physical disability, or sexual orientation.</p>\n<p>We are also a majority run female and family positive company. We believe in providing supportive parental leaves and are completely comfortable working schedules and calls around nap times and breastfeeding sessions! MemberVault was founded by Erin and Mike Kelly (now CEO and CTOs, respectively) and was built while traveling full time on the road in an RV with their young son. So the core of the company is rooted in flexibility, and work/life balance.</p>\n<h3>HOW TO APPLY:</h3>\n<p>We look forward to hearing more from you about why you’re a good fit for the position. Please reach out to our CTO, Mike Kelly, at <a href=\"mailto:mike@membervault.co\">mike@membervault.co</a> and cc CEO, Erin Kelly, at <a href=\"mailto:erin@membervault.co\">erin@membervault.co</a>.</p>\n<p>Include in the body of the email why you’re a good fit and what appeals to you about the position. Attach resume and/or breakdown of past work experience.</p>\n<p>We’ll reach out to schedule next steps if we also feel you’re a strong fit.</p>\n<p>If you’d like to get a feel for the platform before applying, grab a free account at <a href=\"https://membervault.co\">https://membervault.co</a> and poke around. And to get a sense of our community culture and engaged users, take a peek at our thriving FB community here: <a href=\"https://membervault.co/collab\">https://membervault.co/collab</a></p>\n<p>Thanks in advance for considering joining our team!</p>\n",
          "how_to_apply": "<p>We look forward to hearing more from you about why you’re a good fit for the position. Please reach out to our CTO, Mike Kelly, at <a href=\"mailto:mike@membervault.co\">mike@membervault.co</a> and cc CEO, Erin Kelly, at <a href=\"mailto:erin@membervault.co\">erin@membervault.co</a>.</p>\n<p>Include in the body of the email why you’re a good fit and what appeals to you about the position. Attach resume and/or breakdown of past work experience.</p>\n<p>We’ll reach out to schedule next steps if we also feel you’re a strong fit.</p>\n",
          "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUNWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5a73992dd998e0efcfa290f493f8cbd3dcd6993a/logo_square_black.png"
        }
    
    renderedCallback() {
        if (this.isLoaded) {
            return 
        } 
            let jobdescription = this.template.querySelector('.jobdescription')
            if (this.selectedJob.description) {
                // eslint-disable-next-line @lwc/lwc/no-inner-html
                jobdescription.innerHTML = this.selectedJob.description
                this.isLoaded = true
            }
        
    }


}