# M's Portraits — Specification

## Purpose and audience
An art portfolio for Mariam, showing portraits and her accompanying notes.
The audience is other artists and people who enjoy art.
The first impression should be calm and welcoming, with room for introspection.

The site name is M's Portraits.
Mariam's name appears on the About page.

## Pages

### login.html — Front door
Purpose: welcome visitors and provide account access.
Content:
- Site name.
- Welcome line: "Step inside, pause, and meet the portraits."
- Log in and Sign up modes.
- Email and password fields with visible labels.
- Submit button and inline feedback.
- Warm-white background and a delicate original blue pattern.

This page is never gated.
If a visitor is already signed in, provide a link to index.html and a Log out action.

### index.html — Home
Purpose: introduce the portfolio and invite visitors into the artwork.
Content:
- Site name and a short introduction identifying it as Mariam's portrait portfolio.
- One featured black-and-white portrait, selected by Mariam.
- Its supplied note, if available.
- A clear link to Gallery.
- Shared menu and Log out action.

One featured portrait is the proposed initial layout.
Ask Mariam which portrait to feature before selecting an image.

### gallery.html — Gallery
Purpose: present the portraits in an organized, airy collection.
Content:
- Page heading and a one-line description.
- Responsive portrait grid.
- Complete, uncropped images displayed in black and white.
- Mariam's supplied notes beneath the corresponding images.
- Artwork titles only where supplied.
- Shared menu and Log out action.

Ask Mariam for the selection, order, and matching notes.
Do not add invented titles, dates, dimensions, materials, or sitter names.
Use natural scrolling when the collection requires it.

### about.html — About
Purpose: introduce the artist in her own words.
Content:
- Heading identifying Mariam.
- Artist introduction written by Mariam.
- Shared menu and Log out action.

Until supplied, use:
[ADD: Mariam's artist introduction]

An artist photograph is not required.

## Shared page requirements
Every page has a unique document title and a one-line description.
Include share metadata and a share image using supplied artwork or an original typographic graphic.
Do not invent artwork to create a share image.
Decorative patterns are hidden from assistive technology.
All links within the site are relative.

## Content available
Mariam has portrait images and notes about them.
She will create an artist introduction.
The image files, notes, introduction, artwork order, featured portrait, and factual alt descriptions still need to be supplied.

## Content rule
Never invent facts, dimensions, dates, or names Mariam has not given.
Ask Mariam instead.
Use clearly marked placeholders while waiting.
Do not fabricate an artist biography or artwork interpretation.

## Log-in gate
Use Supabase Auth for email-and-password sign-up and log-in.
login.html is never gated.
index.html is the home page.
Every page except login.html checks the current session before revealing portfolio content.
Signed-out visitors are sent to login.html.
After successful log-in, send visitors to index.html.

If sign-up requires email confirmation, show an inline instruction to check email.
Do not treat an unconfirmed sign-up as a successful log-in.
Provide a Log out action on every protected page and on login.html when a session exists.
Successful log-out clears the session and sends the visitor to login.html.
Respond to session expiration by returning the visitor to login.html.
Show understandable inline errors without pop-ups.

Use relative destinations such as login.html and index.html for site navigation.
Configure Supabase's allowed authentication URLs for the deployed Vercel site.
Use only the public Supabase project URL and publishable browser key.
Never include a secret or service-role key.

This static-site gate controls the visitor experience.
It does not make publicly deployed HTML or image files private.

## Construction
Use plain HTML, CSS, and JavaScript files only.
No frameworks, npm, or build step.
Load Supabase through its CDN script tag before the authentication script.
Keep index.html at the top of the folder.

Suggested files:
- login.html
- index.html
- gallery.html
- about.html
- styles.css
- auth.js
- main.js
- images/
- DESIGN.md
- SPEC.md
- AGENTS.md

Use semantic HTML, visible form labels, keyboard-accessible controls, and strong text contrast.
The site must work on a phone without horizontal scrolling.
Publish the files from GitHub to Vercel as a static site.
Preserve direct access to the .html page addresses.

## Images
Mariam's image files go in images/.
Display colour originals in black and white through CSS grayscale.
Keep original files unchanged.
Preserve image proportions and show the complete artwork.
Every image has meaningful alt text based on its actual content.
Ask Mariam when an accurate description is unavailable.
Decorative images use empty alt text.

Where an image is missing, use a plain grey box with a specific label, for example:
[ADD: image of featured portrait]
[ADD: image of portrait supplied by Mariam]

Tell Mariam if an image file is over 500 KB.
Optimize display copies without overwriting originals.

## Out of scope
- Payments.
- Storing anything about visitors beyond their log-in.
- Any database tables.
- Visitor profiles, comments, favourites, and analytics tracking.

## Done when
- [ ] Works on a phone.
- [ ] The menu reaches every page.
- [ ] Sign up, log in, and log out work.
- [ ] Typing a page address ending .html while signed out sends me to log-in.
- [ ] Every image has alt text.
- [ ] The live link opens in a new tab or window.
## First implementation status
Scheme B is selected; the four pages now live at the folder root.
The comparison studies are removed. Production authentication requirements apply.
Portrait files are present in Images/; selection, order, notes, factual alt
descriptions and the artist introduction are still awaiting Mariam.
Until supplied, Home and Gallery use labelled placeholders.
Supabase public configuration belongs in config.js. With configuration missing,
protected pages redirect to login.html and login shows an inline setup message.
No mock login or preview bypass is included. Live authentication and deployed
allowed URLs must be verified once the deployment exists. Mariam supplied the public project URL and publishable browser key; these are now configured in config.js. Live sign-up, email confirmation and login still need an account test.