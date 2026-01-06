# Gabriel Junco - Portfolio Website

## Summary
A clean, mobile-first single-page portfolio showcasing Gabriel Junco as a Mexico-based IT student and bilingual developer. Highlights technical strengths in C++, embedded systems (Arduino/ESP32), algorithms, and CAD. Features 8 projects, value propositions, workflow process, and accessible design with Spanish/English headings.

---

## Raw Text Copy (for CMS/LinkedIn)

### HEADLINE (LinkedIn)
IT Student & Developer | C++ | Arduino/ESP32 | Bilingual ES/EN | Mexico

### SHORT ABOUT (LinkedIn - 300 chars)
Mexico-based IT student specializing in C++, embedded systems (ESP32/Arduino), and algorithms. Bilingual Spanish/English. Building efficient solutions with attention to detail and a continuous learning mindset. Open to internships and collaboration.

### LONG ABOUT (Website)
I'm an IT student based in Mexico with a passion for building things that work—whether that's optimizing algorithms, wiring up microcontrollers, or crafting clean code. Bilingual in Spanish and English, I bridge technical concepts across languages and cultures.

My journey spans from low-level C++ programming with object-oriented design to connecting hardware (ESP32/ESP8266) with databases. I've explored graph algorithms, network analysis tools, CAD modeling in SolidWorks, and even academic writing on intersectionality and feminist theory. Outside of code, you'll find me strategizing Magic: The Gathering decks or tinkering with hardware projects.

I value attention to detail, continuous learning, and delivering solutions that actually solve problems—not just check boxes.

---

## PROJECTS LIST

### 1. C++ Shapes Library & Area Polymorphism
**Summary:** Implemented a polymorphic shapes library with a pure virtual area() method in the base Shape class. Derived classes (Rectangle, Circle, Polygon) override with their own calculations.
**Tech Stack:** C++, OOP
**Role:** Sole developer
**Suggested Assets:** GitHub repo, code snippet screenshot

### 2. Graph Traversal Tool
**Summary:** Loads graph data from an adjacency matrix file, converts to adjacency list, and performs DFS/BFS traversals with output visualization.
**Tech Stack:** C++, Algorithms, File I/O
**Role:** Sole developer
**Suggested Assets:** Demo GIF, console output screenshot

### 3. Network Analysis Program
**Summary:** Analyzes network logs using hash tables (unordered_map) keyed by IP address. Outputs access counts and unique connection summaries.
**Tech Stack:** C++, unordered_map, Data Analysis
**Role:** Sole developer
**Suggested Assets:** Sample output screenshot

### 4. Arduino → MySQL Bridge
**Summary:** ESP8266/ESP32 project connecting physical sensors to a remote MySQL database. Implements INSERT and SELECT operations for real-time data logging.
**Tech Stack:** Arduino, ESP32/ESP8266, MySQL, IoT
**Role:** Sole developer
**Suggested Assets:** Wiring diagram, database schema screenshot, demo video

### 5. Syntax Highlighter (Parallel vs Sequential)
**Summary:** Built a syntax highlighting tool with both sequential and parallel implementations. Produced detailed performance report comparing execution times.
**Tech Stack:** Multithreading, Performance Analysis
**Role:** Sole developer/author
**Suggested Assets:** PDF report, benchmark chart

### 6. SolidWorks CAD Projects
**Summary:** Mechanical designs and 3D models created using SolidWorks Student Edition. Includes assemblies and technical drawings.
**Tech Stack:** SolidWorks, CAD, Mechanical Design
**Role:** Designer
**Suggested Assets:** Rendered images, technical drawings

### 7. Modern Dragon Tribal (MTG Strategy)
**Summary:** Designed a Modern-format MTG deck focused on cheating large dragon creatures into play early. Demonstrates strategic thinking and meta-game analysis.
**Tech Stack:** Game Design, Strategy
**Role:** Deck designer
**Suggested Assets:** Decklist image, link to Moxfield/Archidekt

### 8. Academic Essays & Research
**Summary:** Essays on feminist theory and intersectionality with structured academic writing and APA citations.
**Tech Stack:** Writing, Research, APA
**Role:** Author
**Suggested Assets:** PDF samples (redacted if needed)

---

## WHAT I BRING - 8 Value Propositions

1. **Strong C++ Fundamentals** - Deep understanding of OOP, memory management, and STL. Efficient, maintainable code.

2. **Algorithm & Data Structure Proficiency** - Graph traversals, hash-based lookups, performance optimization.

3. **Hardware-Software Integration** - Arduino/ESP platforms bridging sensors to databases reliably.

4. **CAD & Mechanical Thinking** - SolidWorks for prototyping and 3D visualization.

5. **Bilingual Communication** - Spanish and English fluency for clear docs and cross-cultural collaboration.

6. **Technical Writing & Documentation** - From academic papers to code comments, clear communication.

7. **Debugging & Problem-Solving** - Systematic approach to finding and fixing issues methodically.

8. **Continuous Learner** - Adapts quickly, enjoys learning new tools and concepts.

---

## HOW I WORK - Process

- **Development Environment:** VS Code, Git, frequent commits, meaningful messages
- **Code Quality:** Clean code, single-responsibility functions, refactoring, code reviews
- **Testing & Validation:** Test as I build, verify with known inputs, incremental prototyping
- **Documentation:** READMEs, inline comments, setup steps, known issues documented
- **Collaboration:** Clear communication, async-friendly, ask early, respect deadlines

---

## CONTACT JSON
```json
[
    {
        "platform": "Email",
        "url": "mailto:gabriel.junco@example.com",
        "label": "gabriel.junco@example.com"
    },
    {
        "platform": "GitHub",
        "url": "https://github.com/gabrieljunco",
        "label": "GitHub"
    },
    {
        "platform": "LinkedIn",
        "url": "https://linkedin.com/in/gabrieljunco",
        "label": "LinkedIn"
    }
]
```

---

## NEXT STEPS CHECKLIST

### Assets to Supply:
- [ ] **Profile photo** (400x400px recommended, save as `images/profile.jpg`)
- [ ] **Open Graph image** (1200x630px, save as `images/og-image.png`)
- [ ] **Resume PDF** (save as `assets/Gabriel_Junco_Resume.pdf`)
- [ ] **GitHub repo links** for each project
- [ ] **Project screenshots/demos** (save in `images/projects/`)
- [ ] **SolidWorks renders** or technical drawings

### Information to Update:
- [ ] Replace `gabriel.junco@example.com` with real email
- [ ] Replace GitHub/LinkedIn URLs with real profiles
- [ ] Fill in university name and expected graduation year
- [ ] Add any certifications
- [ ] Update `og:url` meta tag with actual domain

### Optional Enhancements:
- [ ] Add favicon (`favicon.ico`)
- [ ] Add Google Analytics or Plausible tracking
- [ ] Set up form submission (Formspree, Netlify Forms)
- [ ] Add blog/articles when ready
- [ ] Optimize images with srcset for retina displays

### Deployment:
- Upload to GitHub Pages, Netlify, or Vercel
- Point custom domain if desired
- Test on mobile devices
- Run Lighthouse audit for accessibility/performance

---

## File Structure
```
webtech/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # Minimal JS
├── images/
│   ├── profile.jpg     # Your photo (to add)
│   ├── og-image.png    # Social share image (to add)
│   └── projects/       # Project screenshots (to add)
└── assets/
    └── Gabriel_Junco_Resume.pdf  # Resume (to add)
```
