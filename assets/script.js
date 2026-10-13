document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    link.setAttribute('aria-label', 'Email contact');
  });
});
