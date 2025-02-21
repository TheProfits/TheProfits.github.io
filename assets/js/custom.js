document.addEventListener('DOMContentLoaded', function() {
  // Discord Popup Toggle
  window.toggleDiscordPopup = function() {
    const popup = document.getElementById('discordPopup');
    popup.classList.toggle('show');
  }

  // Close popup when clicking outside
  document.addEventListener('click', function(event) {
    const popup = document.getElementById('discordPopup');
    const discordContainer = document.querySelector('.discord-container');
    if (popup && discordContainer && !discordContainer.contains(event.target)) {
      popup.classList.remove('show');
    }
  });
}); 