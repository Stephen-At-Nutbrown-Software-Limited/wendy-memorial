(function(){
  function showAnnouncement() {
    var announcement = document.createElement('div');
    announcement.id = 'birthday-announcement';
    announcement.textContent = 'Happy Birthday Wendy!';
    announcement.style.position = 'fixed';
    announcement.style.bottom = '0';
    announcement.style.left = '0';
    announcement.style.width = '100%';
    announcement.style.background = '#ffd';
    announcement.style.padding = '1em';
    announcement.style.textAlign = 'center';
    announcement.style.zIndex = '1000';
    document.body.appendChild(announcement);
  }

  document.addEventListener('DOMContentLoaded', function(){
    var params = new URLSearchParams(window.location.search);
    var now = new Date();
    var isBirthday = (now.getMonth() === 6 && now.getDate() === 26);
    if (isBirthday || params.has('previewBirthday')) {
      showAnnouncement();
    }
  });
})();
