# Roadcon Construction - Professional Road Construction Company Website

A complete, professional website for a road construction company in Ghana built with pure HTML, CSS, JavaScript, and Node.js (Express).

## Features

- Responsive design that works on all devices
- 8 fully functional pages:
  - Home Page
  - About Us
  - Services
  - Projects/Portfolio
  - Equipment & Capacity
  - Certifications
  - Contact Page
  - Request a Quote Page
- Backend with Node.js and Express for form handling
- Mobile-friendly navigation with hamburger menu
- Floating WhatsApp contact button
- SEO-friendly meta tags
- Form validation
- Simple animations and transitions

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Form Handling**: Body-parser middleware
- **File Storage**: JSON files for form submissions

## Installation and Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd roadcon-construction
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```
   or
   ```
   node server.js
   ```

5. Open your browser and visit `http://localhost:3000`

## Folder Structure

```
roadcon-construction/
│
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   └── *.html
│
├── routes/
│   └── index.js
│
├── data/
│   ├── contacts.json
│   └── quotes.json
│
├── server.js
└── package.json
```

## Pages

1. **Home Page** (`index.html`)
   - Hero section with strong headline
   - Call-to-action buttons
   - Company overview and services

2. **About Us** (`about.html`)
   - Company background
   - Mission & vision
   - Core values and leadership team

3. **Services** (`services.html`)
   - Detailed service offerings
   - Road construction, asphalt paving, bridge repair, etc.

4. **Projects** (`projects.html`)
   - Portfolio of completed and ongoing projects
   - Project filtering capability

5. **Equipment** (`equipment.html`)
   - List of machinery and workforce capability
   - Equipment categories and specifications

6. **Certifications** (`certifications.html`)
   - Display of licenses and compliance information
   - Quality and safety certifications

7. **Contact** (`contact.html`)
   - Contact form
   - Phone, email, office address
   - Embedded Google Map

8. **Request a Quote** (`quote.html`)
   - Customized quote request form
   - Project type selection
   - Detailed project information fields

## Form Handling

The website includes two functional forms:

1. **Contact Form** - Submits to `/contact` endpoint
2. **Quote Request Form** - Submits to `/quote` endpoint

Form submissions are saved as JSON files in the `data/` directory:
- `data/contacts.json` for contact form submissions
- `data/quotes.json` for quote request submissions

## Customization

To customize the website for your company:

1. Replace placeholder images in the `public/images/` folder
2. Update company information in all HTML files
3. Modify colors in `public/css/style.css` (currently using orange, dark grey, and white)
4. Update contact information throughout the site
5. Customize form fields as needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Roadcon Construction Ltd.