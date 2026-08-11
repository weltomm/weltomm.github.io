> [!INFO] This page is created as a very first client's brainstorm. It may contain some grammar mistakes, which should be corrected (ex: not using proper Polish symbols due to using english keyboard layout while typing Polish words).
## General
- Main colors should be black and white, with elements of orange (as default color of the duck). Maybe makes sense to apply 60/30/10 rule? 
- login/register is under question, may be a good option in future.
- initial site language should be Polish as the company is based in Cracow, Poland. However, having everything localized would be a huge bonus. if so, expected locales: polish, english, ukrainian.
- "duckie" or "kaczuszek" is a little symbolic toy duck that is given to people, who want to help/donate 
## Technical debt
1. should it be a landing page (more like SPA) or multi-page website?

## Denys' (client) vision of the site 
### Header
- full left section
	- logo "tak wiele za tak niewiele"
- full right section
	- CTA "buy duckie" which basically is a donate button and should redirect user to a [Checkout](#checkout)
	- burger menu
		- login/register
			- if not logged in: should display as text. By clicking should redirect to login/register form (probably better have a dedicated page for this flow?)
			- if logged in: should display image (avatar) + name of the user and "open profile" text
		- site menu (at the moment, to be decided if those will be anchor links to sections on the same page, or links to dedicated pages)
			- **[Твій вплив](#твій-вплив)** aka "twoj wplyp"
			- **[How to buy](#how-to-buy)**: takes user to detailed step-by-step guide on how to buy a duckie (donate)
			- **[About me](#about-me)**: info about Denys and "Tak Wiele za tak niewiele" project.
			- **[aktualności](#aktualności-news)**: 
			- **[FAQ](#faq)**
### Footer
- sitemap (?)
- social links section (youtube, instagram, tiktok, facebook)
- mention of either copyright (if applicable) or author's name (my, as a developer who built and maintained this website)
### Pages
#### Твій вплив
> [!INFO]
> mostly static content explaining to a visitor how he/she can help and influence. Showcasing foundations and ways the money is used.
- photos + text slider taking being as a major part of the page
	- should be a slider with a photo+text per view per case. arrow and dots controls should be available to manually switch slides while slider should also switch slides automatically
	- photos/text should be contributed by a client (need some kind of CMS ?)
> [!attention]
> at the moment of brainstorming, only slider was requested per this page. Client thinks of switching/redirecting to [How to buy](#how-to-buy) page upon "scrolling this page". May be overkill to implement that and merging 2 pages  in 1 would make more sense.
> 

#### How to buy
> [!INFO]
> page dedicated to inform visitors how they can "buy a duckie"(donate) step-by-step

- some "hero" image 
- text instructions (below?)
	1. select quantity (ex: 10-20 pcs)
	2. select price amount: starting from 30zl
	3. pick a color of a duckie. (by picking a color we mean that customer picks what color he/she would prefer, but ducks are sent in color available only - users should be also informed)
- CTA "buy duckie" - centered, same functionality as CTA in the header.
	  
#### About me
Standard "about me" static page, telling the story of Denys (founder) and his project "Tak wiele za tak niewiele":
- a grid of photo + text sections telling the story
- optionally a mini slider with extra photos or testimonials from real people (friends, subscribers, donators) 
#### aktualności (news)
A blog-like page about recent activities where Denys can contribute. This page should display list of news and activities ("posts") created and contributed by Denys. Each card of content should have "read more" button which would open a specific post in its own view (page). No users comments needed at the moment.


#### FAQ
Standard "frequently asked questions" section, presented as list of Q&A accordions. Preferrably also contributable by Denys
#### Checkout
> [!attention]
> at the moment of brainstorming, client talked about having a preselected amount of pieces (5pcs) with availability to change amount (6, 7, and so on, up to 20). This may be not the best option as some people would be able to abuse such system. #suggestion: use predefined amounts and display them as small selectable cards of 5, 10, 15, 20 pieces. #negotiable  

> [!info] 
>at the moment of brainstorming, it is not yet obvious if this is going to be a one page checkout or multi page one. So, for now, each logical block will be referenced as "step"


##### Step 1:
- quantity (of duckies) selector
> [!attention]
> at the moment of brainstorming, client talked about having a preselected amount of pieces (5pcs) with availability to change amount (6, 7, and so on, up to 20). This may be not the best option as some people would be able to abuse such system. #suggestion: use predefined amounts and display them as small selectable cards of 5, 10, 15, 20 pieces. #negotiable  
- "price picker": 30zl, 50zl, 100zl, custom 
	- may be good idea to also display as small cards
	- if "custom" is selected, input should appear where user can specify amount of money to donate. Min: 30zl (as minimum predefined) Max: no top limit.
- "Uwagi": text input where user can mention what color they prefer. Small "i" icon with a tooltip should be added to explain to a customer that it's not a 100% guaranteed
- "next step" button
##### Step 2: delivery
- delivery options to select from:
	- InPost
	- DPD
- most probably, only "paczkomat" (parcel locker) will available options.
- maybe show a map to select from (?)
- contact info: phone number, email, name
- "next step" button
##### Step 3: order review
Main idea of this step is to review entire "order":
- amount of duckies 
- total price amount
- parcel locker address
- contact info
- "next step" button
##### Step 4: Payment
- blik
- apple pay
- google pay
- bank card
- "pay now" button
##### Step 5: Order confirmation (success)
Page dedicated to confirm successful payment and order placed. Order number should be shown.
"Thank you" note.
"Back to Home" button
