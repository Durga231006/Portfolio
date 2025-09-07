
    function showPage(pageId, el) {
      // Hide all sections
      document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

      // Show selected
      document.getElementById(pageId).classList.add('active');

      // Update nav links
      document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
      el.classList.add('active');

      // Hide menu on mobile
      document.getElementById('nav-menu').classList.remove('active');
    }

    function toggleMenu() {
      document.getElementById('nav-menu').classList.toggle('active');
    }

