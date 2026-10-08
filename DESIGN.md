# M's Portraits — Design

## Concept
M's Portraits is a calm, welcoming space for Mariam's portraits, inviting other artists and art lovers to pause and reflect. Black-and-white artwork, deep burgundy details, and an orderly layout create an introspective experience that feels calm, pretty, and organized.

## Reference
Layout reference: Mariam supplied a screenshot of the Maria Hall portfolio: a slim horizontal header, compact navigation and a large artwork beneath it. Borrow its alignment and visual hierarchy, using only Mariam's images and existing content.

Material reference: maman café branding.
Source: https://mamannyc.com/journal/blue-and-white-pattern-design

Borrow the system: a restrained black, warm-white and burgundy palette, delicate decorative rhythm, and a comforting sense of welcome.
Create an original, sparse pattern using simple lines and dots; keep it around the edges of the log-in page.
Do not reproduce maman's recognizable patterns or identity.
No reference names, logos, text, images, or fonts are copied into the site.

## Colour and material
- Warm white #FAF8F3: page backgrounds and quiet, solid text and form surfaces.
- Black #191919: headings, body text, site name and Home artwork note.
- Deep burgundy #6B2038: Gallery descriptions, links, primary buttons and keyboard focus indicators.
- Dark burgundy #4B1627: button hover backgrounds.
- Muted burgundy #C6A7AF: decorative rules and the original login edge pattern; never body text.
- Plain grey #DEDEDE: missing-image placeholders, with black labels.

Use a delicate CSS paper texture: faint, irregularly spaced ink-like flecks
and fine grain on warm white. It sits in the surrounding whitespace, behind
solid warm-white text surfaces; never overlay it on artwork, captions, forms
or text. No external texture images are needed.
Keep the material feeling quiet, like warm paper and burgundy ink.
Use black or deep burgundy text on warm white, and warm white on burgundy buttons.
Retain scheme B's serif typography and monochrome artwork while refining the layout to match the supplied portfolio reference.

## Typography
Use Georgia for headings, body text and the site name, with a generic serif
fallback. Use system sans-serif for navigation, labels, captions and buttons.
No external font request is needed.

Main headings: italic, regular weight, 40px with 1.2 line-height on desktop,
30px on phones. Section headings: 28px desktop, 24px on phones.
Artwork headings: 20px with 1.4 line-height.
Body: 18px with 1.6 line-height.
Navigation, labels and captions: 16px with 1.5 line-height.
Avoid all-capital paragraphs and decorative lettering.

## Layout and spacing
Use separate, short Home, Gallery, and About pages.
Keep a strict, airy grid with aligned edges.
Maximum content width: 1120px.
Page padding: 48px on desktop and 20px on phones.
Use an 8px spacing scale: 8, 16, 24, 32, 48, and 64px.
Leave 48–64px between major sections.
Keep reading text within approximately 60 characters per line.

Home: show the complete Adolescence image immediately below the header, up to 1024px wide, with its featured label and approved caption below. Follow with the existing introduction and View Gallery link, using 48px between image and introduction. No cropping or fixed-height banner.
Gallery: one portrait per row, with its title and note beside it on desktop
and medium screens. Keep the image on the left and text on the right for a
steady reading rhythm. Use a centered maximum row width of 960px, a 48px
column gap and exactly 64px between visible images on desktop. Images use their
natural proportions without fixed-ratio blank space; object-fit: contain keeps
each full image visible. Notes are deep burgundy; titles remain black.
Use italic Georgia titles at 28px and left-aligned notes beneath them, with
16px between title and note. No reserved heading height or ornamental frames.
On phones, stack each image above its title and note; use 24px titles,
24px between image and text, a consistent minimum caption area of 120px,
and 64px between portrait entries.
About: use a two-column layout with the complete artist photograph on the left (up to 360px) and the existing introduction on the right, separated by 64px. Left-align the introduction. At 760px and below, stack the photograph above the text with a 32px gap. The person stays black and white against burgundy; do not apply grayscale to the edited display copy.
Let pages grow naturally when content requires it; never shrink artwork or text to force a single screen.

## Images
Display Mariam's colour portraits in black and white using CSS grayscale.
Preserve the original image files.
Keep the monochrome treatment on hover and focus.
Show each complete portrait without cropping or stretching.
Use generous warm-white space around images, without ornamental frames.
Place supplied artwork notes beneath their titles; beside Gallery portraits on desktop and below them on phones.
Do not use full-bleed images, collages, or invented captions.

Missing images use plain grey boxes labelled:
[ADD: image of ...]

## Movement
Use gentle colour changes and brief fades, approximately 150–200ms.
Keep content visible even if animation or JavaScript fails.
No moving artwork, parallax, animated patterns, or elaborate page transitions.
Respect reduced-motion preferences by removing fades and transitions.

## Log-in page
Use a warm-white background with a sparse, original burgundy pattern around the outer edges.
Place a simple form in the centre, with a maximum width of 420px.
Show the site name above this welcome line:
"Step inside, pause, and meet the portraits."

Provide clearly labelled Log in and Sign up modes.
Both use visible Email and Password labels.
Use a burgundy primary button and plain inline feedback.
Keep the pattern clear of the form so the page feels welcoming and easy to read.

## Menu and buttons
On protected pages, show the text site name, Home, Gallery, About, and Log out.
Use a visible, compact menu that wraps neatly on phones.
Indicate the current page with an underline and accessible current-page state.
Use burgundy buttons with warm-white text, modest rounded corners, and no heavy shadows.
Secondary actions use burgundy text with an underline or visible border.
Interactive targets are at least 44px high, with clear keyboard focus.

## Tone of voice
Warm, quiet, direct, and reflective.
Invite visitors to look and pause without telling them what they must feel.
Keep interface text short and clear.
Artwork notes and the artist introduction come from Mariam.
Do not invent interpretations, biography, or claims about the work.

## Five never rules
1. Never clutter a page or break the orderly grid.
2. Never use saturated colours or decoration that competes with portraits.
3. Never add pop-ups, autoplay music, or distracting animation.
4. Never crop, stretch, or reveal the portraits' original colour on interaction.
5. Never copy a reference's identity or invent content about Mariam or her art.
## Selected direction — Quiet exhibition (scheme B)
Mariam selected scheme B. It is now the design for the whole site.
Use a slim horizontal header on protected pages: site name at left and compact navigation at right, with 24px vertical padding and 48px side padding. On phones, wrap navigation below the name with left alignment and 20px side padding. Home gives the complete featured artwork priority above its introduction. Gallery retains one portrait per row and burgundy descriptions. About places the photograph beside the introduction on desktop. Login retains its centered form, serif typography and sparse burgundy edge pattern.
Home copy is “Mariam's portrait portfolio.” and
“Step inside, pause, and meet the portraits.”
The comparison previews and scheme folders are removed.
Keep labelled placeholders until Mariam provides content decisions.