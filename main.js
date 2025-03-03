$(document).ready(function () {
    $('#carouselExampleIndicators').carousel();
  });





  //SCRIPT PENTRU A ADUNA NUMERELE CA EX: URMARITORI TIKTOK
  
 

  document.addEventListener("DOMContentLoaded", function () {
    const $counters = document.querySelectorAll(".counter");
    const targets = Array.from($counters).map($counter => Number($counter.getAttribute('data-target')));

    const updateCounter = (index) => {
      const $counter = $counters[index];
      const target = targets[index];

      let count = Number($counter.innerText);
      const increment = target / 250;

      if (count < target) {
        count = Math.ceil(count + increment);
        $counter.innerText = count;
        setTimeout(() => updateCounter(index), 35);
      } else {
        $counter.innerText = target + '+';
      }
    };

    const resetCounters = () => {
      $counters.forEach(($counter, index) => {
        $counter.innerText = '0';
        updateCounter(index);
      });
    };

    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        resetCounters();
      }
    });

    // Initial update
    resetCounters();
  });






  





//loadingpage
  document.addEventListener('DOMContentLoaded', function () {
    // Simulate a delay (you can replace this with actual loading logic)
    setTimeout(function () {
        document.getElementById('preload-container').style.opacity = '0';
        document.getElementById('content').style.display = 'block';
    }, 800); // Change 2000 to the desired duration in milliseconds
});





//filter profesori

document.addEventListener('DOMContentLoaded', function () {
  // ... your existing code

  function filterProfessors(className) {
      var allCards = document.querySelectorAll('.card');
      var filteredCards;

      // Reset the layout to align all professors
      allCards.forEach(function (card) {
          card.style.display = 'block';
      });

      // Filter the cards based on the selected class
      if (className !== 'all') {
          filteredCards = document.querySelectorAll('.' + className);
          allCards.forEach(function (card) {
              if (!Array.from(filteredCards).includes(card)) {
                  card.style.display = 'none';
              }
          });
      }

      // Adjust layout based on filtered cards
      adjustLayout(filteredCards);
  }

  function adjustLayout(filteredCards) {
      var cardContainers = document.querySelectorAll('.col-md-4');
      var visibleCards = filteredCards ? filteredCards : document.querySelectorAll('.card');

      // Hide empty containers
      cardContainers.forEach(function (container) {
          var cardsInContainer = Array.from(container.querySelectorAll('.card'));
          var visibleCardsInContainer = cardsInContainer.filter(function (card) {
              return card.style.display !== 'none';
          });

          if (visibleCardsInContainer.length === 0) {
              container.style.display = 'none';
          } else {
              container.style.display = 'block';
          }
      });

      // Adjust margin for visible cards
      visibleCards.forEach(function (card) {
          card.style.marginBottom = '20px';
      });
  }

  // Add change event listener to the select element
  var classFilter = document.getElementById('classFilter');

  classFilter.addEventListener('change', function () {
      // Filter the cards based on the selected class
      var selectedClass = classFilter.value;
      filterProfessors(selectedClass);
  });

  // ... your existing code
});


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'ro',
      initialView: window.innerWidth < 768 ? 'listWeek' : 'dayGridMonth', // Use list view for mobile
      height: 'auto', // Adjust height dynamically
      headerToolbar: window.innerWidth < 768 
          ? { left: 'prev,next', center: 'title', right: 'listWeek' } // Compact controls
          : { left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' },
      events: [
          { title: 'Olimpiada municipală la Geografie ', start: '2025-02-09' },
          { title: 'Meci de fotbal George Meniuc vs Mircea Eliade', start: '2025-01-26'}
      ]
  });
  calendar.render();
});
window.addEventListener('resize', function() {
  var newView = window.innerWidth < 768 ? 'listWeek' : 'dayGridMonth';
  calendar.changeView(newView);
});




// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Prevent the right-click menu from opening
  alert('Right-click is disabled on this page!');
});

// Disable copy, cut, and paste actions
document.addEventListener('copy', function(event) {
  event.preventDefault();
  alert('Copying is disabled!');
});



function toggleChatbot() {
  var chatbot = document.getElementById("chatbot");
  chatbot.style.display = (chatbot.style.display === "none" || chatbot.style.display === "") ? "block" : "none";
}

function sendMessage(userMessage) {
  var chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += `<p><strong>Tu:</strong> ${userMessage}</p>`;

  var botResponse = getBotResponse(userMessage);
  setTimeout(() => {
      chatbox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
      chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000);
}

function getBotResponse(input) {
  if (input === "Care este adresa liceului?") return "Adresa L.T'George Meniuc' este Albișoara 84";
  if (input === "Cum pot găsi informații despre membrii liceului?") return "Pentru informații despre profesori, accesează secțiunea 'Membrii'.";
  if (input === "Când sunt vacanțele?") return "Vacanțele sunt afișate în secțiunea 'Vacanțe 2025'.";
  return "Îmi pare rău, nu am un răspuns pentru asta.";
}


// Get the current year dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();




//  for login/singup form
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form[action='']");
  const signupForm = document.querySelector("form[action='login.php']");

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }

  function validatePassword(password) {
      return password.length >= 6;
  }

  function validatePhone(phone) {
      const re = /^\+373\d{8}$/;
      return re.test(phone);
  }

  function showError(input, message) {
      alert(`${input.placeholder} - ${message}`);
      input.focus();
  }

  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          const email = loginForm.querySelector("input[name='email']");
          const password = loginForm.querySelector("input[name='password']");

          if (!validateEmail(email.value)) {
              event.preventDefault();
              showError(email, "Format invalid!");
          } else if (!validatePassword(password.value)) {
              event.preventDefault();
              showError(password, "Parola trebuie să aibă cel puțin 6 caractere!");
          }
      });
  }

  if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
          const email = signupForm.querySelector("input[name='email']");
          const password = signupForm.querySelector("input[name='password']");
          const phone = signupForm.querySelector("input[name='phone']");

          if (!validateEmail(email.value)) {
              event.preventDefault();
              showError(email, "Format invalid!");
          } else if (!validatePhone(phone.value)) {
              event.preventDefault();
              showError(phone, "Numărul trebuie să fie în formatul +373xxxxxxxx!");
          } else if (!validatePassword(password.value)) {
              event.preventDefault();
              showError(password, "Parola trebuie să aibă cel puțin 6 caractere!");
          }
      });
  }
});
