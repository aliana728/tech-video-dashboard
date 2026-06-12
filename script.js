const videosData = [
  {
    id: 1,
    title: "JavaScript Basics for Beginners",
    duration: 45,
    category: "JavaScript",
    creator: {
      name: "Aliana",
      channel: "TechEdu",
      subscribers: 950
    },
    stats: {
      views: 1200,
      likes: 450,
      comments: 28
    },
    uploadedAt: "2024-06-12"
  },
  {
    id: 2,
    title: "React Hooks Tutorial",
    duration: 60,
    category: "React",
    creator: {
      name: "Aliana",
      channel: "TechEdu",
      subscribers: 950
    },
    stats: {
      views: 2300,
      likes: 890,
      comments: 145
    },
    uploadedAt: "2024-06-10"
  },
  {
    id: 3,
    title: "Python Web Scraping",
    duration: 55,
    category: "Python",
    creator: {
      name: "Aliana",
      channel: "TechEdu",
      subscribers: 950
    },
    stats: {
      views: 1800,
      likes: 620,
      comments: 92
    },
    uploadedAt: "2024-06-08"
  },
  {
    id: 4,
    title: "Object Destructuring in JS",
    duration: 38,
    category: "JavaScript",
    creator: {
      name: "Aliana",
      channel: "TechEdu",
      subscribers: 950
    },
    stats: {
      views: 950,
      likes: 380,
      comments: 56
    },
    uploadedAt: "2024-06-12"
  },
  {
    id: 5,
    title: "Building a MERN Stack App",
    duration: 90,
    category: "React",
    creator: {
      name: "Aliana",
      channel: "TechEdu",
      subscribers: 950
    },
    stats: {
      views: 3200,
      likes: 1200,
      comments: 234
    },
    uploadedAt: "2024-06-05"
  },
  {
    id: 6,
    title: "Python Data Analysis with Pandas",
    duration: 75,
    category: "Python",
    creator: {
      name: "Aliana",
      channel: "TechEdu",
      subscribers: 950
    },
    stats: {
      views: 2100,
      likes: 750,
      comments: 128
    },
    uploadedAt: "2024-06-03"
  }
];

function createVideoCard(videoData) {
  const { 
    title, 
    duration, 
    category,
    creator: { name: creatorName, channel, subscribers },
    stats: { views, likes, comments },
    uploadedAt 
  } = videoData;

  const card = document.createElement('div');
  card.className = 'video-card';
  
  card.innerHTML = `
    <div class="video-thumbnail">
      🎬
    </div>
    <div class="video-content">
      <div class="video-duration">⏱️ ${duration} min</div>
      <div class="video-title">${title}</div>
      
      <div class="creator-info">
        <div class="creator-name">👤 ${creatorName}</div>
        <div class="creator-channel">${channel} • ${subscribers} subscribers</div>
      </div>
      
      <div class="stats">
        <div class="stat">
          <div class="stat-value">${views.toLocaleString()}</div>
          <div class="stat-label">Views</div>
        </div>
        <div class="stat">
          <div class="stat-value">${likes.toLocaleString()}</div>
          <div class="stat-label">Likes</div>
        </div>
        <div class="stat">
          <div class="stat-value">${comments}</div>
          <div class="stat-label">Comments</div>
        </div>
      </div>
      
      <div class="uploaded-date">📅 ${uploadedAt}</div>
    </div>
  `;
  
  return card;
}

function displayVideos(videos) {
  const container = document.getElementById('videosContainer');
  container.innerHTML = '';
  
  videos.forEach(videoObj => {
    const card = createVideoCard(videoObj);
    container.appendChild(card);
  });
}

function filterVideos(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  if (category === 'all') {
    displayVideos(videosData);
  } else {
    const filteredVideos = videosData.filter(videoObj => {
      const { category: videoCategory } = videoObj;
      return videoCategory === category;
    });
    displayVideos(filteredVideos);
  }
}

displayVideos(videosData);