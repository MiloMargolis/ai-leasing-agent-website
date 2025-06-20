# AI-Powered Leasing Agent

---

**Problem Statement**  

Real estate agents in the student housing market waste hours with manual follow-ups, answering repetitive questions, and managing leads in spreadsheets.

Most leads never convert, and those that do often require dozens of back and forth messages and coordination. Agents handle these leads all while juggling listing updates, platform management, and compliance.

---

### Solution

Create an integrated platform (or agent plug-in) that automates student communication, qualifies leads, and optimizes listings across platforms. The goal is for (human) agents to focus entirely on closing deals, not managing inboxes.

---

### Features

**AI SMS & Email Assistant**  
- Instantly responds to questions about listings, neighborhoods, move-in dates, paperwork, and next steps (trained on agent’s listings and conversation history)  
- Automatically collect number of roommates, budget, move-in date, co-signer needs, etc.  
- Sends structured lead profiles directly to the agent’s CRM, spreadsheet, or inbox  
- Escalates to the agent only when necessary, saving hours of back-and-forth  

**Lead Generation Engine**  
Generate more student leads by posting in →  
- Apartments.com, Craigslist, Reddit (e.g., r/bostonhousing)  
- Facebook housing groups, TikTok/Instagram, and other high-traffic student platforms  
- SMS referral loops to students currently living in Cornerstone-managed buildings  
- Outreach to university clubs and orgs for partnerships and bulk leases  

---

### Tech Stack

- **AI Layer**: OpenAI / Claude for follow-up + FAQ handling  
- **SMS + Email**: Twilio, Telnyx, WhatsApp Business API  
- **CRM Dashboard**: Built in Supabase  
- **Data Syncing**: YouGotListings API (standard for Boston apartments) 
- **Integrations**: Google Calendar, Google Sheets, Microsoft Excel, Hubspot, and more 

---

### Revenue Model

**Commission Split**  
We take 20% of the agent’s broker fee for any lead we help convert.

**SaaS Tier**
- $Custom/month for AI follow-up + dashboard  
- Tiered based on # of listings or agents

### Inspiration
Having had the opportunity to connect with the founders of both of these incredible companies, we’ve learned a lot from how they’re approaching automation in the trades and in real estate.
- [Revin.ai](https://www.revin.ai/)  
- [ModernRealty.io](https://www.modernrealty.io/)

### To Run Locally 
npm run dev
