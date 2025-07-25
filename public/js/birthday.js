(function() {
  function showAnnouncement() {
    var announcement = document.createElement('div');
    announcement.id = 'birthday-announcement';
    announcement.innerHTML =
      "<p>We celebrate Wendy's birthday with grateful hearts and happy memories.</p>" +
      "<p>We've collected some special birthday photos together, <a href='https://photos.app.goo.gl/x6tC2n7D4ggVxqWB7' id='extra-album-link'>see them here</a></p>" +
      "<p><em>If you can, please <a href='https://www.stlukestribute.org.uk/initiatedonation/?firstName=Wendy&lastName=Nutbrown&imageUrl=/media/3731/mum.png&donationsFolderId=31267'>consider a donation to St Lukes in memory of Wendy.</a></em></p>";
    announcement.style.position = 'fixed';
    announcement.style.top = '0';
    announcement.style.left = '0';
    announcement.style.width = '100%';
    announcement.style.background = '#ffd';
    announcement.style.padding = '1em';
    announcement.style.textAlign = 'center';
    announcement.style.zIndex = '1000';
    announcement.querySelectorAll('a').forEach(function(link) {
      link.style.textDecoration = 'underline';
    });
    document.body.appendChild(announcement);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var preview = params.has('isBirthday');
    var now = new Date();
    var isBirthdayToday = (now.getMonth() === 6 && now.getDate() === 26);
    if (isBirthdayToday || preview) {
      showAnnouncement();
    }
  });
})();
