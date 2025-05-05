document.addEventListener('DOMContentLoaded', () => {
    // Simple confetti animation or other visual effects can be added here
    const animationDiv = document.getElementById('celebration-animation');
    
    setTimeout(() => {
      animationDiv.innerHTML = '<p>🎉🎈 Happy Birthday! 🎈🎉</p>';
      animationDiv.style.fontSize = '3em';
      animationDiv.style.color = '#ff6f61';
    }, 500);
  
    // For smooth scrolling and animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.opacity = 0;
      section.style.transition = 'opacity 2s ease-in-out';
    });
  
    window.addEventListener('scroll', function () {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          section.style.opacity = 1;
        }
      });
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const flowersContainer = document.getElementById('falling-flowers');
    const flowerEmojis = ['🌸', '🌺', '🌼', '💐']; // Flower emojis to fall
    
    // Function to create flower animation
    function createFallingFlower() {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      
      // Randomize flower position and size
      flower.style.left = Math.random() * window.innerWidth + 'px'; // Random position
      flower.style.fontSize = Math.random() * 2 + 1 + 'em'; // Random size between 1em and 3em
      flower.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random speed between 5s and 10s
      flower.style.animationDelay = Math.random() * 3 + 's'; // Random delay for each flower
  
      flowersContainer.appendChild(flower);
  
      // Remove flower after animation ends
      flower.addEventListener('animationend', () => {
        flower.remove();
      });
    }
  
    // Create flowers at random intervals
    setInterval(createFallingFlower, 300); // Adjust the frequency of flower creation
  });
  
  