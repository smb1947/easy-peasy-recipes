# Easy Peasy Recipes - Product Requirements Document

## 1. Product Core Idea

Easy Peasy Recipes is a simple, mobile-first recipe recommendation app that helps people decide what to cook using the ingredients, pantry items, and utensils they already have at home.

The app answers one everyday question:

> What can I make right now with what I already have?

Instead of asking users to search through endless recipes, Easy Peasy Recipes starts from the user's real kitchen inventory, time constraints, food preferences, and trusted friend recommendations. It turns cooking from a decision-heavy task into a quick, confident choice.

The app should feel like a calm, practical kitchen companion: fast, useful, personal, and easy enough to use while standing in front of the fridge.

---

## 2. Clear WHY

### User Problem

People often have food at home but still do not know what to cook. The problem is rarely a lack of recipes. The problem is too many recipes, too much scrolling, and not enough context.

Typical user pain points:

- "I have ingredients, but I do not know what they can become."
- "I only have 20 minutes."
- "I do not know if I have the right utensils."
- "I do not want to read a long blog post before cooking."
- "I trust what my friends cook more than random internet recipes."
- "I want the short version when I already know the basics, and the long version when I need guidance."

### Product Opportunity

Most recipe products are built around search, content, or inspiration. Easy Peasy Recipes is built around readiness.

The key opportunity is to recommend recipes based on:

- What the user has
- What the user can cook with
- How much time the user has
- What the user feels like eating
- What people they trust recommend

This creates a more useful recipe experience than generic browsing.

### Product Promise

Easy Peasy Recipes helps users cook more often, waste less food, and make faster decisions by recommending simple recipes that match their real kitchen.

---

## 3. Target Users

### Primary Users

Busy home cooks who want fast, practical meal or snack ideas.

Examples:

- Students
- Working professionals
- Young couples
- Shared apartment households
- Beginner cooks
- People trying to reduce food waste
- People who cook casually but do not meal plan deeply

### Example Primary User

Shankar opens the app at home. He has cucumber, carrot, tomato, onion, cumin seeds, mustard seeds, sauces, a microwave, a grater, a chopping board, a rice pot, and a pan. He wants to make something in around 20 minutes. The app recommends recipes he can cook now, including recipes suggested by friends like Anjali, Varun, and Chandan.

---

## 4. Product Principles

1. **Start with what the user has**
   Recommendations should be grounded in the user's inventory.

2. **Default to quick decisions**
   The user should see useful recipe ideas without configuring too much.

3. **Make the best option obvious**
   The app should help the user choose, not just show a list.

4. **Keep the interface calm**
   Avoid visual clutter, endless filters, and dense recipe pages.

5. **Support different cooking confidence levels**
   Short-form recipes are for confident users. Long-form recipes are for users who want guidance.

6. **Use social trust lightly**
   Friend recommendations should increase confidence without turning the app into a social network.

7. **Be useful in the kitchen**
   Recipe instructions should be readable, tappable, and available as text, audio, and video.

---

## 5. MVP Scope

### In Scope

- Mobile-first responsive recipe recommendations website
- Home feed with recipe recommendations
- Expandable top controls for groceries, utensils, time range, and food preference
- Inventory page for fridge, shelf, and kitchen utensils
- Friend following
- Friend profile pages with recipe recommendations
- Recipe detail pages
- Recipe metadata
- Text recipe format
- Audio recipe format
- Video recipe format
- Short and long recipe variants for each format
- Basic saved recipes
- Basic recommendation ranking
- Cooking mode

### Out of Scope for MVP

- Grocery delivery integration
- Barcode scanning
- Receipt scanning
- Nutrition tracking
- Advanced meal planning
- Comments
- Likes
- Public creator marketplace
- Complex household sharing
- AI-generated recipes from scratch
- Full social feed behavior

---

## 6. Information Architecture

Recommended bottom navigation:

1. **Home**
   Personalized recipe feed and controls

2. **Inventory**
   Groceries, pantry items, and utensils

3. **Friends**
   Following list, discovery, and friend profiles

4. **Saved**
   Saved recipes

5. **Profile**
   User preferences and account settings

---

## 7. Core Pages

## 7.1 Home Page

### Purpose

The Home Page helps the user quickly find something they can cook now.

### Default State

When the user opens the app, the Home Page should show:

- Compact controls at the top
- Default time preference: `20 mins`
- Default food preference: `All`
- Personalized recipe feed below

### Top Controls

Controls should be compact by default and expandable when the user wants more control.

Controls:

- Groceries
- Utensils
- Time range preference
- Food preference

Default values:

- Time range preference: `20 mins`
- Food preference: `All`

### Expanded Controls

When expanded, the user can refine:

- Included groceries
- Excluded groceries
- Available utensils
- Maximum cooking time
- Cuisine or food type
- Only show recipes where I have all ingredients
- Show near matches with missing ingredients
- Friend recommendations only

### Recipe Feed

The recipe feed should show a ranked list of recipe cards.

Each recipe card should include:

- Recipe name
- Food image or video thumbnail
- Food type
- Time to make
- Match status
- Ingredient availability
- Required utensils
- Missing ingredients, if any
- Friend recommendation, if applicable
- Format badges: Text, Audio, Video
- Short/Long availability
- Save action
- Start cooking action

Example card signals:

- "You have everything"
- "Missing only tomato"
- "Ready in 15 mins"
- "Recommended by Anjali"
- "Uses your cucumber"

### Feed Ranking Logic

Prioritize recipes that:

1. Match available ingredients
2. Match available utensils
3. Fit within the selected time range
4. Match selected food preference
5. Are recommended by followed friends
6. Use items that may expire soon, when expiry is available
7. Match the user's saved or cooked history

---

## 7.2 Inventory Page

### Purpose

The Inventory Page lets users manage the ingredients, pantry items, and utensils they have at home.

### Example Household

Inventory owner:

- Shankar's home

### Inventory Sections

#### Fridge

Example items:

- Cucumber
- Carrot
- Tomato
- Onion

Each item should include quantity.

#### Shelf

Example items:

- Cumin seeds
- Mustard seeds
- Sauces
- Spices
- Dry goods

Each item should include quantity.

#### Kitchen Utensils

Example utensils:

- Microwave
- Grater
- Chopping board
- Rice pot
- Pan

### Inventory Actions

Users should be able to:

- Add item
- Edit item
- Delete item
- Update quantity
- Mark item as running low
- Search inventory
- Filter by location
- Add common items quickly
- Add utensils
- Remove utensils

### Inventory Item Fields

Required:

- Item name
- Quantity
- Unit
- Storage location

Optional:

- Expiry date
- Notes
- Brand
- Dietary label

Supported units:

- Pieces
- Grams
- Kilograms
- Cups
- Tablespoons
- Teaspoons
- Bottles
- Packets
- Cans

### Utensil Fields

- Utensil name
- Category
- Availability status

Example utensil categories:

- Prep
- Cooking
- Heating
- Serving
- Storage

### Inventory UX Requirements

- Adding an item should take fewer than 10 seconds.
- Quantity editing should be possible inline.
- Users should not be forced to add expiry dates.
- The page should feel like a lightweight checklist, not a spreadsheet.
- Recommendations should update after inventory changes.

---

## 7.3 Friends and Following

### Purpose

The Friends area lets users follow people they trust and see recipe recommendations from them.

Example friends:

- Anjali
- Varun
- Chandan

### Friends Page

The Friends Page should include:

- Following list
- Search
- Suggested friends
- Friend recommendation highlights

### Friend Profile

Each friend profile should include:

- Name
- Profile photo
- Short bio
- Favorite food types
- Recommended recipes
- Recently cooked recipes
- Public saved recipes
- Follow/unfollow button

### Friend Recommendations

Friend recommendations should appear:

- On friend profiles
- In the Home feed when relevant
- On recipe detail pages

Friend recommendation labels:

- "Recommended by Anjali"
- "Varun cooked this recently"
- "Chandan saved this"

### Social Design Principle

The product should use social trust, not social noise. Avoid comments, popularity contests, and infinite social feeds in the MVP.

---

## 7.4 Recipe Detail Page

### Purpose

The Recipe Detail Page gives the user everything needed to decide whether to cook and then complete the recipe.

### Recipe Metadata

Each recipe should include:

- Recipe ID
- Recipe name
- Description
- Food type
- Ingredients
- Required utensils
- Amount of time to make
- Servings
- Difficulty
- Recipe format availability
- Short-form availability
- Long-form availability
- Missing ingredients
- Inventory match score
- Friend recommendation source
- Dietary tags, if available

### Food Types

Initial food types:

- American snacks
- Thai
- Indian
- Mediterranean
- Chinese

Future expandable food types:

- Mexican
- Italian
- Korean
- Japanese
- Middle Eastern
- Breakfast
- Desserts
- Drinks
- Vegan
- Vegetarian

### Recipe Formats

Each recipe should support:

- Text
- Audio
- Video

Each format should support:

- Short version
- Long version

### Short-Form Recipe

Short-form recipe is for users who want the fastest possible version.

It should include:

- Brief summary
- Ingredients
- Condensed steps
- Time estimate
- Key warnings or tips only when essential

### Long-Form Recipe

Long-form recipe is for users who want more support.

It should include:

- Detailed steps
- Ingredient prep instructions
- Cooking cues
- Substitution ideas
- Timing notes
- Common mistakes
- Serving suggestions

### Recipe Detail Layout

Recommended structure:

1. Recipe media header
2. Recipe name
3. Time, food type, difficulty, servings
4. Inventory match summary
5. Friend recommendation signal
6. Format toggle: Text / Audio / Video
7. Length toggle: Short / Long
8. Ingredients
9. Utensils
10. Steps
11. Substitutions
12. Save and Start Cooking actions

---

## 7.5 Cooking Mode

### Purpose

Cooking Mode helps the user follow a recipe while actively cooking.

### Requirements

Cooking Mode should include:

- Large step-by-step instructions
- Current step indicator
- Previous and next controls
- Timer support
- Audio playback
- Pause and resume
- Keep screen awake
- Ingredients needed for current step
- Utensils needed for current step
- Exit cooking mode

### UX Requirements

- Text should be readable from a short distance.
- Controls should be large enough for messy hands.
- The user should never lose their place.
- Audio should support next step, previous step, pause, and replay.

---

## 8. Recommendation System

### Goal

Recommend recipes that are immediately useful, not just popular.

### Primary Signals

- Ingredient availability
- Utensil availability
- Time preference
- Food preference

### Secondary Signals

- Friend recommendations
- Saved recipes
- Previously cooked recipes
- Cuisine preferences
- Ingredient freshness or expiry, if available

### Match Categories

#### Perfect Match

The user has all required ingredients and utensils.

Label:

- "You have everything"

#### Near Match

The user is missing 1 or 2 ingredients.

Label:

- "Missing only tomato"
- "Missing 2 ingredients"

#### Stretch Match

The recipe fits preferences but requires several missing items.

Label:

- "Needs 4 ingredients"

### Recommendation Explanation

Every recommendation should explain why it appears.

Examples:

- "Ready in 15 mins"
- "Uses your cucumber and onion"
- "Works with your microwave"
- "Recommended by Anjali"
- "Indian recipe under 20 mins"

---

## 9. Key User Flows

## 9.1 Find Something to Cook Now

1. User opens Home.
2. App shows default 20-minute recommendations.
3. User expands filters.
4. User selects Indian.
5. Feed updates.
6. User taps a recipe.
7. User chooses short text version.
8. User starts cooking.

## 9.2 Add Groceries

1. User opens Inventory.
2. User taps Add Item.
3. User enters cucumber.
4. User enters quantity: 2.
5. User selects fridge.
6. Item is saved.
7. Recommendations update.

## 9.3 Add a Utensil

1. User opens Inventory.
2. User goes to Kitchen Utensils.
3. User taps Add Utensil.
4. User enters microwave.
5. Utensil is saved.
6. Recipes requiring a microwave become eligible.

## 9.4 Follow a Friend

1. User opens Friends.
2. User searches Anjali.
3. User opens Anjali's profile.
4. User taps Follow.
5. Anjali's recommendations can now appear in the Home feed.

## 9.5 Use Audio Recipe

1. User opens a recipe.
2. User selects Audio.
3. User chooses Long.
4. App plays step-by-step guidance.
5. User can pause, resume, replay, next, or previous.

## 9.6 Start Cooking Mode

1. User opens a recipe.
2. User taps Start Cooking.
3. App opens step-by-step mode.
4. User follows each step.
5. User completes recipe.
6. App asks whether they cooked it and optionally saves feedback.

---

## 10. Product Design Choices

### Overall Feel

The app should feel:

- Simple
- Warm
- Practical
- Modern
- Trustworthy
- Lightweight

It should not feel:

- Like a generic recipe blog
- Like a dense database
- Like a social media app
- Like a calorie tracker
- Like a complicated meal planner

### Visual Design

Recommended visual direction:

- Mobile-first layout
- Clean typography
- Soft neutral background
- Warm accent color
- High-contrast action buttons
- Rounded but restrained cards
- Clear food imagery
- Minimal decoration

### Navigation

Use bottom navigation because the product is mobile-first and has five frequent destinations:

- Home
- Inventory
- Friends
- Saved
- Profile

### Home Controls Design

The top controls should be compact by default. Users should not land on a screen full of filters.

Recommended pattern:

- One horizontal control bar
- Visible default chips:
  - `20 mins`
  - `All food`
  - `Groceries`
  - `Utensils`
- Expand icon to reveal full controls

### Recipe Card Design

Recipe cards should be scannable in under 3 seconds.

Highest priority information:

- What is it?
- Can I make it?
- How long will it take?
- Why is it recommended?

### Inventory Design

Inventory should feel like a fast checklist.

Recommended design:

- Sectioned list
- Inline quantity controls
- Quick add button
- Search at top
- Clear category tabs or filters

### Recipe Detail Design

Recipe detail should avoid overwhelming the user. Use progressive disclosure.

Recommended design:

- Show the most decision-relevant information first
- Keep ingredients and utensils easy to scan
- Use format toggles clearly
- Keep Start Cooking visible

### Accessibility

Design should support:

- Large tap targets
- High contrast text
- Screen reader labels
- Captions or transcripts for video/audio
- Clear focus states
- Readable text in cooking mode

---

## 11. Functional Specifications

## 11.1 Inventory Management

### Requirements

- User can create inventory items.
- User can update quantities.
- User can delete items.
- User can assign storage location.
- User can add utensils.
- User can remove utensils.
- User can search inventory.
- User can filter inventory by category.

### Acceptance Criteria

- Given the user adds cucumber with quantity 2 to fridge, then cucumber appears in the Fridge section.
- Given the user updates tomato quantity from 3 to 1, then recommendations reflect the updated quantity.
- Given the user removes pan from utensils, then recipes requiring a pan should be deprioritized or marked as missing utensil.

## 11.2 Home Feed

### Requirements

- Feed loads recommendations based on inventory.
- Feed defaults to recipes under 20 minutes.
- Feed defaults to all food preferences.
- User can expand filters.
- User can change time range.
- User can change food preference.
- User can filter by groceries and utensils.
- Feed updates after filter changes.

### Acceptance Criteria

- Given the default state, recipes should use a 20-minute time preference.
- Given the user selects Indian, the feed prioritizes Indian recipes.
- Given the user chooses "only recipes I can make", recipes with missing required ingredients should be hidden.

## 11.3 Recipe Detail

### Requirements

- User can view recipe metadata.
- User can view ingredients.
- User can view utensils.
- User can switch between Text, Audio, and Video.
- User can switch between Short and Long.
- User can save recipe.
- User can start cooking mode.

### Acceptance Criteria

- Given a recipe has text, audio, and video, all three format options are visible.
- Given the user selects Short, condensed steps are displayed.
- Given the user selects Long, detailed steps are displayed.

## 11.4 Friends

### Requirements

- User can view friends.
- User can search for friends.
- User can open friend profiles.
- User can follow or unfollow friends.
- User can see recipes recommended by friends.

### Acceptance Criteria

- Given the user follows Anjali, Anjali's recommendations can appear in the Home feed.
- Given the user unfollows Anjali, Anjali's recommendations should no longer be used as a ranking boost.

## 11.5 Saved Recipes

### Requirements

- User can save recipes.
- User can unsave recipes.
- User can view saved recipes.

### Acceptance Criteria

- Given the user taps Save on a recipe, it appears on the Saved page.
- Given the user removes a saved recipe, it no longer appears on the Saved page.

---

## 12. Data Model Specs

## 12.1 User

```json
{
  "id": "user_123",
  "name": "Shankar",
  "homeName": "Shankar's home",
  "defaultTimePreferenceMinutes": 20,
  "defaultFoodPreference": "All",
  "followingUserIds": ["user_anjali", "user_varun"]
}
```

## 12.2 Inventory Item

```json
{
  "id": "item_123",
  "userId": "user_123",
  "name": "Cucumber",
  "quantity": 2,
  "unit": "pieces",
  "storageLocation": "fridge",
  "expiryDate": null,
  "notes": ""
}
```

## 12.3 Utensil

```json
{
  "id": "utensil_123",
  "userId": "user_123",
  "name": "Microwave",
  "category": "heating",
  "available": true
}
```

## 12.4 Recipe

```json
{
  "id": "recipe_123",
  "name": "Cucumber Tomato Chaat",
  "description": "A quick Indian snack with fresh vegetables and spices.",
  "foodType": "Indian",
  "timeMinutes": 15,
  "servings": 2,
  "difficulty": "Easy",
  "ingredients": [
    {
      "name": "Cucumber",
      "quantity": 1,
      "unit": "piece"
    },
    {
      "name": "Tomato",
      "quantity": 1,
      "unit": "piece"
    }
  ],
  "utensils": ["Chopping board", "Knife", "Bowl"],
  "formats": {
    "text": {
      "short": true,
      "long": true
    },
    "audio": {
      "short": true,
      "long": true
    },
    "video": {
      "short": true,
      "long": true
    }
  }
}
```

## 12.5 Friend Recommendation

```json
{
  "id": "rec_123",
  "recipeId": "recipe_123",
  "recommendedByUserId": "user_anjali",
  "note": "My go-to quick evening snack.",
  "createdAt": "2026-05-28T10:00:00Z"
}
```

---

## 13. Recommendation Scoring Specs

### Suggested MVP Formula

Each recipe receives a score from 0 to 100.

Suggested weighting:

- Ingredient match: 40 points
- Utensil match: 20 points
- Time match: 15 points
- Food preference match: 15 points
- Friend recommendation boost: 10 points

### Ingredient Match

- Full match: 40
- Missing 1 ingredient: 30
- Missing 2 ingredients: 20
- Missing 3+ ingredients: 5

### Utensil Match

- Full utensil match: 20
- Missing 1 utensil: 10
- Missing 2+ utensils: 0

### Time Match

- At or under selected time: 15
- Up to 10 minutes over: 7
- More than 10 minutes over: 0

### Food Preference Match

- Exact match: 15
- All selected: 15
- No match: 0

### Friend Boost

- Recommended by followed friend: 10
- Cooked recently by followed friend: 7
- Saved publicly by followed friend: 4

---

## 14. Content Requirements

### Recipe Content

Each recipe must include:

- Name
- Short description
- Image or thumbnail
- Ingredients
- Utensils
- Steps
- Food type
- Time estimate
- Servings
- Difficulty
- Short text version
- Long text version
- Short audio version
- Long audio version
- Short video version
- Long video version

### Audio Content

Audio should support:

- Play
- Pause
- Resume
- Skip forward
- Skip backward
- Step-by-step playback

### Video Content

Video should support:

- Short preview
- Full recipe walkthrough
- Captions
- Muted autoplay preview in feed, if appropriate

---

## 15. MVP Seed Data

### Users

- Shankar
- Anjali
- Varun
- Chandan

### Shankar's Fridge

- Cucumber: 2 pieces
- Carrot: 4 pieces
- Tomato: 3 pieces
- Onion: 5 pieces

### Shankar's Shelf

- Cumin seeds: 1 jar
- Mustard seeds: 1 jar
- Soy sauce: 1 bottle
- Hot sauce: 1 bottle
- Rice: 1 bag
- Salt: 1 jar
- Black pepper: 1 jar

### Shankar's Utensils

- Microwave
- Grater
- Chopping board
- Rice pot
- Pan

### Initial Recipe Examples

- Cucumber Tomato Chaat
- Carrot Cucumber Salad
- Tomato Onion Rice
- Quick Fried Rice
- Mediterranean Cucumber Bowl
- Thai Cucumber Peanut Salad
- Chinese Tomato Egg Stir Fry
- American Veggie Snack Plate

---

## 16. Success Metrics

### Activation

- Percentage of users who add at least 5 inventory items
- Percentage of users who view a recipe in first session
- Percentage of users who start cooking in first session

### Engagement

- Recipes viewed per session
- Recipes saved per user
- Recipes started per week
- Cooking mode starts
- Filter usage
- Friend profile views
- Friend follows

### Recommendation Quality

- Recipe card click-through rate
- Start cooking rate
- Save rate
- Completion rate
- Percentage of recipes dismissed
- Percentage of recommendations with high inventory match

### Retention

- Weekly active users
- Repeat cooking sessions
- Inventory updates per week
- Returning saved recipe usage

---

## 17. Non-Goals

Easy Peasy Recipes is not:

- A generic recipe search engine
- A food blogging platform
- A full social network
- A grocery delivery app
- A calorie-counting app
- A professional chef marketplace
- A restaurant discovery product

The product should stay focused on helping people decide what to cook at home.

---

## 18. Open Questions

- Should users be able to share one household inventory with roommates or family in V1?
- Should recipes be created by the app, imported from creators, or manually curated for MVP?
- Should audio be generated from text or recorded separately?
- Should video be hosted natively or embedded from external sources?
- How strict should ingredient quantity matching be in the first version?
- Should the app support dietary preferences in MVP?
- Should missing ingredients create a grocery list in MVP or later?

---

## 19. Build Prompt for Lovable

Build a mobile-first responsive web app called **Easy Peasy Recipes**.

The app helps users discover recipes they can cook using ingredients and utensils they already have at home. The main user is Shankar. His home inventory includes fridge items like cucumber, carrot, tomato, and onion; shelf items like cumin seeds, mustard seeds, sauces, rice, salt, and pepper; and utensils like a microwave, grater, chopping board, rice pot, and pan.

Create a polished, simple, intuitive product with five bottom navigation tabs: Home, Inventory, Friends, Saved, and Profile.

The Home page should show compact controls at the top for groceries, utensils, time range, and food preference. The controls should be expandable. Default time should be 20 minutes. Default food preference should be All. Below the controls, show a personalized recipe feed with recipe cards. Each recipe card should include recipe name, thumbnail, time, food type, ingredient match, missing ingredients, required utensils, friend recommendation signal, Save button, and Start Cooking button.

The Inventory page should show Shankar's home inventory grouped into Fridge, Shelf, and Kitchen Utensils. Users should be able to add, edit, delete, and update quantities. The interface should feel fast and lightweight.

The Friends page should include profiles for Anjali, Varun, and Chandan. Users should be able to follow or unfollow friends. Friend profiles should show recommended recipes, favorite food types, and recently cooked recipes.

The Recipe Detail page should support recipes in three formats: Text, Audio, and Video. Each format should have Short and Long versions. Each recipe should include metadata: recipe name, ingredients, utensils, food type, time to make, servings, difficulty, missing ingredients, and inventory match score.

Add a Cooking Mode with large step-by-step instructions, previous and next controls, timer support, audio playback controls, and current step ingredients.

Use warm, clean, modern design. Keep the app practical and uncluttered. Avoid making it feel like a social network or recipe blog. The primary experience should help the user quickly answer: "What can I make right now with what I already have?"

