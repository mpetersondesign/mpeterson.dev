const projects = [
  {
    id: "olive-adventure",
    name: "Olive Adventure",
    subtitle: "(Pixel Game Jam 2022 3rd Place Winner)",
    subtitle2: "Top Down Twin-Stick Shooter",
    thumbnailUrl: "images/olive-adventure-banner.png",
    videoFile: "images/olive_adventure.mp4",
    youtubeId: "VIDEO_ID_1",
    galleryImages: ["", ""],
    description:
      'Olive Adventure was created for the 3-day long Pixel Game Jam 2022 on itch.io by a team comprised of myself and two of my peers. <br /> The Pixel Game Jam was originally designed so that teams would have 3 full days to work on and submit their projects. There was a given theme of "Adventure" for teams to work with. Our team consisted of myself, one artist, and one sound designer. <br />(<a href="https://mpetersondev.itch.io/olive-adventure">Play it here</a>)',
    teamSize: 3,
    myRoles: ["Producer", "Gameplay Programmer"],
    duration: "24 hours",
    skills: ["Team Coordination", "Scope Revision", "Aseprite Workflow"],
    contributions:
      "As the design director, I was in charge of coordinating and unifying pitches and concepts into a cohesive idea to base our submission on. Part of my responsibility was leveraging scope and time to make sure our pitch was within reason and could be accomplished within the given timeframe. <br /> <br />As the sole programmer, I spent my time coding a character controller, enemy AI, implementing tiles and collisions, and fleshing out the rest of the game's vital systems before submission. The game was designed to be a top-down twin stick shooter where enemies would drop collectibles that would change the pattern and properties of projectiles fired by the player.",
    hurdles:
      "Although the game jam period was three days, due to unforseen delays in our team's schedule, this project was created within the span of 24 hours. Despite the reduced amount of time to work, we felt confident in what we had for submission by the end of the project period.",
    results:
      "Out of 55 entries to the jam, Olive Adventure earned #3 in Theme Relevance, #3 in General Design, and #6 in Pixel Art. The overall placement of the game was 3rd out of 55.",
    type: "personal",
  },
  {
    id: "castle-climber-redux",
    name: "Castle Climber REDUX",
    subtitle: "(Technical/UX Design DigiPen Capstone Project)",
    subtitle2: "Physics-based 2.5D Platformer",
    thumbnailUrl: "images/ccr-banner.png",
    description:
      'Castle Climber REDUX was a "remaster" of my previous DigiPen student project, Castle Climber. To show my expertise and improvement since that build, I remade the game with new visuals and mechanics.',
    teamSize: 1,
    myRoles: ["Fullstack Developer", "Technical Designer"],
    duration: "10 weeks",
    skills: [
      "URP Shaders",
      "2D/3D Hybrid Workflow",
      "Shader-Vertex Extrusion",
      "Unity Debug Tools",
      "Normal Mapping",
      "Tesselation",
      "UV Map Animation",
      "Triplanar Mapping",
      "URP Material Keyframing",
      "Custom Lighting Materials",
    ],
    contributions:
      "As a solo project, Castle Climber REDUX challenged me to work in all aspects of game design, including but not limited to asset creation, implementation, shader graphs, gameplay and editor programming, UI/UX creation and implementation, playtesting and user research. Every week, I ran presentations sharing my discoveries and technical implementations, receiving and interpreting feedback, and practicing my presentation skills.",
    hurdles:
      "Since I used Castle Climber REDUX as my capstone project for two separate specialization classes, I had to split focus between the requirements of both classes. Ultimately, since REDUX is a full remaster, that wasn't too much of a problem, but a lot more time was spent documenting what aspects of the projects aligned with both courses requirements than I would have liked, taking precious time away from the project itself. This was also my first time working in a faux 2.5D environment, I had to teach myself a lot of tech on the fly to make the game performant and easy to work in with Unity.",
    results:
      'The "capstone" projects at DigiPen are meant to be semester-long projects to show your mastery/improvement in your design specialization; As a UX and Technical designer, I wanted to demonstrate how much I had grown by remastering a previous project of mine. In an unorthodox fashion for the class structure, I incidentally ended up taking both UX/Tech capstones at the same time (whereas they are meant to be separate classes with separate projects) and Castle Climber REDUX is the result. Even though a lot of time was spent working on visual tech and messing with shaders in a way I hadn\'t done before, I\'m very happy with the game this "remaster" turned out to be.',
    documentation: "images/CCR_Doc.pdf",
    type: "academic",
  },
  {
    id: "draculad",
    name: "Draculad",
    subtitle: "(MiniJam #118 9th Place Winner)",
    subtitle2: "Classically-styled 2D Platformer",
    thumbnailUrl: "images/draculad-banner.png",
    videoFile: "images/draculad.mp4",
    youtubeId: "VIDEO_ID_2",
    description:
      'Draculad was created for the 3-day long Mini Jam #118 on itch.io. <br /> Mini Jam #118 is a game jam where designers must abide by a 3 day time limit given a theme and a unique "limitation" that the game must follow. Teams must find a way to make the theme and limitation work together in some form during gameplay. The theme for Mini Jam #118 was "vampire", while the limitation was "blood must be lethal". My team consisted of myself, an artist, and a sound designer. <br /> (<a href="https://mpetersondev.itch.io/draculad-minijam118">Play it here</a>)',
    teamSize: 3,
    duration: "72 hours",
    myRoles: ["Producer", "Gameplay Progammer"],
    skills: ["Finite State Machines", "Enemy AI", "Parallax Tilesets"],
    contributions:
      "As the design director, I was tasked with coordinating pitch efforts between our team members. This game jam was unique in that we all wanted to expand our horizons by trying something new with our respective specializations. For me, this meant creating finite state machine based intelligence for enemies, and my teammates wanted to experiment with particles and sound implementations. In the end, I was able to unify our individual desires for this project into one cohesive and in-scope pitch for us to develop. <br /> <br />As the sole programmer, much of my time was spent on the character controller, implementing aforementioned FSM and locomotion for enemies, and interpreting gameplay and mechanic related desires from the other teammates into engine.",
    hurdles:
      "Our initial design for the project introduced issues that were out of scope to solve with the time we had remaining. A large part of what I learned how to do competently consisted of downsizing mechanics to fit our scope and mitigating any potential for future complications arising from our concept's design. This would primarily consist of leading team discussions on refactoring certain aspects of our game.",
    results:
      "Mini Jam #118 had a 5 day judging period where the game was given ratings by game jam officials and the community that had submitted projects. Out of the 150 submissions made by other game jam entrants, Draculad placed #9 in overall score, landing the submission in the top 10 for the jam.",
    type: "personal",
  },
  {
    id: "big-time-crimpark",
    name: "Big Time Crimepark",
    subtitle: "(Global Game Jam 2024 Entry)",
    subtitle2: "Isometric Mystery Point & Click Adventure",
    thumbnailUrl: "images/crimepark-banner.png",
    youtubeId: "UKA-DGdtt7o",
    description:
      'Big Time Crimepark was created for the 48 hour long Global Game Jam 2024 on itch.io. Global Game Jam was a 48 hour game jam where over 30,000 registrants from all over the world worked to create an original interactive experience fitting with the theme of this years jam, which was "Make me laugh". Big Time Crimepark is a "mystery" point-and-click game made in Godot, an engine nobody on our team had any experience with prior. We saw the game jam as an opportunity to expand our skillsets by learning a new engine and making an interactive experience in it at an expedited rate.',
    teamSize: 4,
    myRoles: ["Gameplay Programmer", "Asset Implementation"],
    duration: "48 hours",
    skills: [
      "Godot",
      "Godot Tilesets",
      "GDScript",
      "Godot Animations",
      "Godot Node System",
      "Visual Programming",
      "Scope Revision",
    ],
    contributions:
      "Our team composition consisted of 3 programmers and an artist. I took on the role of UX design and asset implementation, as we had never used Godot before my task was to figure out a workflow to get art and animations into the game, including but not limited to tileset implementation, layering and lighting, and player animations. I was also responsible for the player controller, managing collisions and movement, and generally figuring out how certain aspects of the engine worked.",
    hurdles:
      "Being a 48 hour jam, we were constantly racing against the clock to learn the engine, syntax, and workflow. With Godot specifically, the hierarchal asset structure was a bit confusing at first-- most of us with Unity and Unreal experience didn't expect the functionality Godot provides. Creating the necessary art assets within the scope of the timeframe was also difficult provided we weren't sure how asset implementation would work, everything we did we had to figure out quickly and on the fly.",
    results:
      "Overall, although we didn't walk away with a definitive ranking, three of us learned a brand new game engine in under 48 hours. We picked this avenue for our submission specifically to broaden our horizons in a team environment, and we learned to piggyback new information off of each other to further our own and each others' understanding of the new development environment and accompanying language.",
    type: "personal",
  },
  {
    id: "castle-climber",
    name: "Castle Climber",
    subtitle: "(DigiPen 200-Level Technical Design Project)",
    subtitle2: "Physics-based 2.5D Platformer",
    thumbnailUrl: "images/castle-climber-banner.png",
    videoFile: "images/castle_climber.mp4",
    description:
      'Castle Climber is a small, 2-5 minute experience made for my technical design class in my junior year at DigiPen. Castle Climber is a momentum-based "parkour" physics platformer that pays homage to some of my favorite platforming movement options. For the first project of this class, I wanted to create a fast, momentum-based movement system for my character controller.',
    teamSize: 1,
    duration: "4 weeks",
    myRoles: ["Fullstack Developer", "Technical Designer"],
    skills: [
      "Advanced 2D Physics",
      "Acceleration and Momentum",
      "Runtime Collider Modification",
    ],
    myRole:
      "These were solo projects, so everything was created by hand. Aside from music, which was provided royalty-free by a talented friend of mine, everything in the final project was created by myself and implemented in Unity within the span of two weeks.",
    contributions:
      "These were solo projects, so everything was created by hand. Aside from music, which was provided royalty-free by a talented friend of mine, everything in the final project was created by myself and implemented in Unity within the span of two weeks.",
    hurdles:
      "As a solo project, all of the implementation was at my sole discretion. Choosing a project that would be in scope, while taking multiple other project-based classes in the same semester, was a challenge. I decided to play off a concept I had submitted in the 200-level version of this course, which was a simple 2D platformer featuring the same witch with different movement mechanics. As I wanted to challenge myself to break out of linear movement and the typical expectations of a simple 2D platformer, learning acceleration, momentum, and forces was a big focus for me during this project. I learned a lot about fine-tuning, playtesting, polishing, and iterative design as I attempted to improve my controller.",
    results:
      "The project received a 5/5 in Controls and Camera, 5/5 in Gameplay Systems, 4/5 in UI and UX, and 4/5 in Overall Execution.",
    type: "academic",
  },
  {
    id: "cublight",
    name: "CuBlight",
    subtitle: "(DigiPen Junior Team Project)",
    subtitle2: "3D Isometric Roguelike",
    thumbnailUrl: "images/cublight-banner.png",
    youtubeId: "_XYrlOpdHuI",
    description:
      "CuBlight is an abstract isometric roguelike made for our GAM350 class in my Junior year. Our goal for the project was to create a fun, abstract atmosphere using only primative shapes and limited visual assets. We did not have an artist on the team, we had to stick to very simple models outside of the assets in the game that were base primitives.",
    teamSize: 12,
    myRoles: ["Gameplay Designer", "Quality Director"],
    duration: ["12 weeks"],
    skills: [
      "Quality Assurance",
      "Documentation Procedures",
      "Team Presentations",
      "Quarterly Reviews",
      "AGILE Workflow",
    ],
    contributions:
      "Our team was large (12 people) and I was a late addition, but I took up the roles of Quality Director and Gameplay Designer. I helped design the EXP system and the implementation of dashing and executions, as well as the hat system. I regularly offered direction on user experience design, and helped guide some technical implementation. During my role as a quality director, I was in charge of documentation between commits and builds, as well as presenting information to shareholders and driving presentations.",
    hurdles:
      'Our team composition left some artistic limitations; when I was brought onto the team, the theme of "simplistic primitives" was already decided. The rest of the team was dedicated to using simple geometric shapes to represent everything in the game. I voiced concerns about this decision when we quickly ran out of simple shapes to use that would appropriately deliver adequate amounts of significance and feedback. I guided the team away from this design decision while keeping the core aesthetic intact.',
    results: "The project received a 5/5.",
    type: "academic",
  },
  {
    id: "shattered-soul",
    name: "Shattered Soul",
    subtitle: "(DigiPen Sophomore Team Project)",
    subtitle2: "Classic 2D Platformer",
    thumbnailUrl: "images/shattered-soul-banner.png",
    videoFile: "images/shattered_soul.mp4",
    youtubeId: "VIDEO_ID_2",
    description:
      "Shattered Soul is an atmospheric platformer with an emphasis on collectibles and level exploration. It was originally designed as a puzzle game but development pivoted halfway through the course to a simpler format. We quickly decided to forego any development on the puzzle half of the game and focus on platforming and exploration.",
    teamSize: 5,
    myRoles: ["Technical Designer", "Gameplay Programmer"],
    duration: ["12 weeks"],
    skills: [
      "Unity Asset Implementation",
      "2D Rigidbody Physics",
      "Character Controller Creation",
      "Team Conflict Resolution",
      "Team Pitch Coordination",
      "Team Scope Revision",
    ],
    contributions:
      'As the gameplay designer, my job was to take the high concept (Puzzle platformer, turned "exploration" platformer) into a workable and playable idea we could execute on. Working with the rest of the team, I shifted our focus towards ways we could make this a unique experience. My solution became a mechanic that would have a distinctive effect on aspects of our game like player motivation and the conventional "health" system. <br /> <br /> I was also largely in charge of the bulk of the programming. My main focus was the character controller; I wanted to make sure our character was fun and interesting to control in these vast spaces meant for expedient exploration, something which I was greatly praised for during testing and production of the game. <br /> <br /> I was also in charge of debug implementations, analytics implementations, and handling any bugs or technical errors during the duration of the project.',
    hurdles:
      "Shattered Soul was our first large, in-person team development cycle, and this came with a number of growing pains. One of the things I learned best from this project was conflict resolution, and we as a team learned how to conduct meetings, carry design discussions, and converse in manners condusive to a more productive team environment than we had initially at project start. Beyond team conflictions, we had concerns voiced from our stakeholders about certain assets being scrutinized for potentially infringing on existing media, so as a team we also learned how to pivot our aesthetic design pitches as well. ",
    results:
      "The project received a 5/5, receiving extra credit for 'involved Core Gameplay'.",
    type: "academic",
  },
  {
    id: "super-tee-off",
    name: "Super Tee Off!",
    subtitle: "(DigiPen Kinesthetic Project)",
    subtitle2: "Motion Effect Simulation",
    thumbnailUrl: "images/super-tee-off-banner.png",
    videoFile: "images/super_tee_off.mp4",
    description:
      "Super Tee Off! is a pocket-sized kinesthetic project that emulates the experience of being a golf ball launched off the tee. Using motion, sound, and visual effects, I make this small, short experience a fun, bite-sized game.",
    teamSize: 1,
    myRoles: ["User Experience Designer", "Programmer"],
    duration: ["4 weeks"],
    skills: [
      "Game Feel",
      "User Experience Iteration",
      "Scope Revision",
      "Playtesting",
      "Physiological Response Measurement",
    ],
    contributions:
      "We were tasked with coming up with an interactive experience for a metaphorical game that we could create. The experience was supposed to simulate different kinematic experiences; motion, sound, visual effects, et cetera. <br /> <br />Super Tee Off! was a bit of a different approach to this project; whereas many people created first-person simulation experiences, I instead wanted to turn my kinematic emulation into a small mini-game.<br /> <br /> I chose golf, a game where the kinematics are very distinctive, and most of the work is done through physics. There are many very specific, memorable, and iconic elements of the golf swing experience; the signature sound of a club slicing the air, the grass that kicks up, the sound of the ball taking off, and the satisfying arc the ball takes towards its destination. <br /> <br />I wanted to put these elements together in a tiny experience for the player, so I created a mini game where you, as a golf ball, are swung at by a golfer taking a random (but fairly accurate) shot at the hole. You have a bit of control over the ball as it makes it's way towards the goal, including a small amount of drift left/right and a bit of control over your gravity/drop rate, all dynamically influenced by the current velocity of the ball.",
    hurdles:
      'Coming up with a kinesthetic experience was a tough job alone; the criteria were pretty strict and I had to come up with an experience that wouldn\'t be nauseating to the user. My first ideas involved bowling and pinball, as I thought a sports-centric game would be fun "from the perspective of the ball". Unfortunately, many sports involve the ball spinning, whirling, or being tossed to and fro, which would make for an uncomfortable experience for the user. I had to get express permission to use third-person, although Super Tee Off! does have a zoom parameter that can be used to give a first person experience in-game.',
    results:
      "The project received a 5/5 in all categories, including game feel, sound and visual design, and interactivity.",
    type: "academic",
  },
];
