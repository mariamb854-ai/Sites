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
- Warm-white background and a delicate original burgundy pattern.

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

Mariam selected Adolescence as the featured portrait.
File: Images/Adolescence.jpeg.
Alt text: "A representation of navigation through adolescence and the transformation that comes with it."
Display the complete image in black and white without cropping or stretching on desktop and phones.
Approved note: "Navigating adolescence and the transformation that comes with it."

### gallery.html — Gallery
Purpose: present the portraits in an organized, airy collection.
Content:
- Page heading and the one-line description: "My work".
- One portrait per row with its title and note beside the image on desktop and beneath it on phones.
- Complete, uncropped images displayed in black and white.
- Mariam's supplied notes beneath each title, beside the image on desktop and below it on phones.
- Artwork titles only where supplied.
- Shared menu and Log out action.

Mariam selected these gallery titles and this exact order:
1. Innocence — Images/Innocence.jpeg
2. Childhood Moments — Images/Childhood Moments.jpeg
3. Curiosity — Images/Curiosity.jpeg
4. First Lessons — Images/First Lessons.jpeg
5. Becoming — Images/Becoming.jpeg
6. Adolescence — Images/Adolescence.jpeg
7. Quiet Chaos — Images/Quiet Chaos.jpeg
8. Unspoken — Images/Unspoken.jpeg
9. Written in Memory — Images/Written in Memory.jpeg
10. What Grows Within — Images/What Grows Within.jpeg
11. A World Too Heavy — Images/A World Too Heavy.jpeg

Reuse Mariam's supplied Adolescence alt text from the Home section.
All gallery alt descriptions are approved by Mariam. Display all eleven selected portraits.

### Approved gallery alt descriptions
- Innocence: A baby beside a stuffed rabbit on softly patterned fabric, evoking the comfort of infancy.
- Childhood Moments: A curly-haired child seated in a patterned box, suggesting childhood play and imagination.
- Curiosity: A young child exploring an object, surrounded by paint-splash shapes that suggest discovery and experimentation.
- First Lessons: A child surrounded by letters and crayons, connecting early childhood with learning and creativity.
- Becoming: A child beside puzzle pieces and stars, suggesting an identity gradually taking shape.
- Quiet Chaos: Upright and inverted portraits with hands touching the faces, suggesting conflicting feelings beneath a quiet appearance.
- Unspoken: A close-up portrait framed by crosshatched lines, suggesting feelings held beneath the surface.
- Written in Memory: A man against geometric patterns made from printed text, suggesting a life shaped by accumulated stories and memories.
- What Grows Within: A face partly replaced by an anatomical heart, with branching growth, droplets and a bird suggesting inner change.
- A World Too Heavy: A seated young child within a large circular outline, suggesting vulnerability within a world larger than themselves.

### Approved artwork notes
Mariam approved these notes for publication. Notes are separate from image alt text.
- Innocence: A moment before experience begins to change how we see the world.
- Childhood Moments: Small moments of childhood that stay with us as we grow.
- Curiosity: The urge to look closer, ask questions, and discover something new.
- First Lessons: The early experiences that begin to shape our understanding.
- Becoming: A reflection on growing into a self that is still taking shape.
- Adolescence: Navigating adolescence and the transformation that comes with it.
- Quiet Chaos: A quiet exterior can hold a restless inner world.
- Unspoken: Some feelings remain present even when words cannot express them.
- Written in Memory: What we remember becomes part of how we understand ourselves.
- What Grows Within: Inner growth can unfold gradually, beyond what others can see.
- A World Too Heavy: A reflection on carrying more than we know how to hold.

Self Portrait is not part of this selected gallery.
Do not add invented titles, dates, dimensions, materials, or sitter names.
Use natural scrolling when the collection requires it.

### about.html — About
Purpose: introduce the artist in her own words.
Content:
- Heading identifying Mariam.
- One-line description: "Speaking through art".
- Artist introduction written by Mariam.
- Shared menu and Log out action.

Approved artist introduction (use this exact text):
My name is Mariam, and this collection brings together portraits I have created. I love drawing people because the human face is so expressive, and portraiture gives me a way to express myself. Through each portrait, I explore symbolism and the meanings a face can hold. I use the backgrounds of my portraits to connect each person with their stage of life, exploring growth, identity, and change. Drawing has always been something I love, especially working with pencil and colored pencil. I invite you to take your time with these portraits and discover what speaks to you.

Mariam selected Images/Self Portrait.jpg for About. Display the complete photograph beside the artist introduction on desktop and above it on phones, with Mariam in black and white against a burgundy background. Use the separate edited display copy Images/self-portrait-burgundy.jpg. Alt text: "Mariam smiling, wearing a light headscarf and a floral-patterned top." Preserve the original file.

## Shared page requirements
Every page has a unique document title and a one-line description.
Include share metadata and a share image using supplied artwork or an original typographic graphic.
Do not invent artwork to create a share image.
Decorative patterns are hidden from assistive technology.
All links within the site are relative.

## Content available
Mariam has portrait images and notes about them.
Mariam supplied the approved artist introduction in the About section.
Portrait image files are present. The featured portrait is Adolescence, with alt text supplied by Mariam above. Gallery selection and order are recorded above. Gallery alt descriptions are approved. The artist introduction is supplied above. The artwork notes in the Gallery section have been approved by Mariam.

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
Portrait files are present in Images/. Gallery selection, order, notes and alt descriptions are approved; the artist introduction is approved and displayed on About.
Home displays Adolescence with Mariam's supplied alt text. Gallery displays all eleven selected portraits with approved alt text, titles and notes.
Supabase public configuration belongs in config.js. With configuration missing,
protected pages redirect to login.html and login shows an inline setup message.
No mock login or preview bypass is included. Live authentication and deployed
allowed URLs must be verified once the deployment exists. Mariam supplied the public project URL and publishable browser key; these are now configured in config.js. Classroom testing currently has email confirmation disabled in Supabase. The site still handles confirmation-required sign-ups without treating them as logged in. Live Supabase signup, password login, authenticated user access and logout were verified. Browser checks verified signed-in Home visibility, logout returning to login.html, and signed-out redirects from index.html, gallery.html and about.html. Local checks also cover confirmation-required signup, login errors and expired sessions. Configure Site URL as https://site-sable-rho-83.vercel.app and allow https://site-sable-rho-83.vercel.app/login.html plus http://127.0.0.1:8765/login.html in Supabase URL Configuration; dashboard access is required to save these settings.