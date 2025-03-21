


    window.onload = function() {
      function quoteRouletteFunction() {
        // Loop through each quote (1 to 5)
        for (let i = 1; i <= 5; i++) {
          let quote = document.getElementById(`umencitat${i}`);
          
          // Hide all quotes initially
          setTimeout(function() {
            // Add the fade-out animation to the current quote
            document.querySelectorAll('.quote').forEach(function(q) {
              q.style.display = "none";  // Hide all quotes
            });

            // Show the current quote with fade-out animation
            quote.style.display = "inline";
            quote.style.animation = "fade-in 0.3s ease-out forwards";  // Show current quote
          }, i * 5000);  // Delay each quote display by 1 second, 2 seconds, etc.

        }

        // Repeat the entire function every 5 seconds
        setTimeout(quoteRouletteFunction, 25000);
      }


      document.querySelectorAll('p[id^="umencitat"]').forEach(function(element) {
        element.classList.add('quote');
      });

      // Start the quote rotation function
      quoteRouletteFunction();


      let showcaseImgIndex = 1;

      // For the right button (cycling forward)
      document.getElementById("rightShowcaseImg").onclick = function() {
          showcaseImgIndex++;
      
          console.log(showcaseImgIndex);
      
          if (showcaseImgIndex > 5) {
              showcaseImgIndex = 1;
              console.log(showcaseImgIndex);
      
              // Show the first image when we reset
              let currentImg = document.getElementById(`showcaseImg${showcaseImgIndex}`);
              let previousImg = document.getElementById(`showcaseImg${5}`);
      
              currentImg.style.animation = "fade-in 0.5s ease-out forwards";
              currentImg.style.display = "block";
              previousImg.style.display = "";
          }
          else if (showcaseImgIndex > 1) {
              let currentImg = document.getElementById(`showcaseImg${showcaseImgIndex}`);
              let previousImg = document.getElementById(`showcaseImg${showcaseImgIndex - 1}`);
      
              currentImg.style.animation = "fade-in 0.5s ease-out forwards";
              currentImg.style.display = "block";
              previousImg.style.display = "";
          }
      }
      
      // For the left button (cycling backward)
      document.getElementById("leftShowcaseImg").onclick = function() {
          showcaseImgIndex--;
      
          console.log(showcaseImgIndex);
      
          if (showcaseImgIndex < 1) {
              showcaseImgIndex = 5; 
              console.log(showcaseImgIndex);
      
              let currentImg = document.getElementById(`showcaseImg${showcaseImgIndex}`);
              let previousImg = document.getElementById(`showcaseImg${1}`);
      
              currentImg.style.animation = "fade-in 0.5s ease-out forwards";
              currentImg.style.display = "block";
              previousImg.style.display = "";
          }
          else if (showcaseImgIndex < 5) {
              let currentImg = document.getElementById(`showcaseImg${showcaseImgIndex}`);
              let previousImg = document.getElementById(`showcaseImg${showcaseImgIndex + 1}`);
      
              currentImg.style.animation = "fade-in 0.5s ease-out forwards";
              currentImg.style.display = "block";
              previousImg.style.display = "";
          }
      }
      

      
    };
    
