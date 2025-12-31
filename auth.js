document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    
    // Check server-side session first
    fetch('api/check_session.php')
        .then(response => response.json())
        .then(data => {
            if (data.logged_in) {
                // Sync localStorage with server session
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', data.username);
                localStorage.setItem('email', data.email || '');
                localStorage.setItem('userId', data.user_id);
                
                updateNavForLoggedInUser(data.username);
            } else {
                // Clear localStorage if not logged in on server
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                localStorage.removeItem('email');
                localStorage.removeItem('userId');
                
                updateNavForGuest();
            }
        })
        .catch(error => {
            console.log('Session check failed, using localStorage fallback');
            // Fallback to localStorage
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const username = localStorage.getItem('username') || 'Profile';
            
            if (isLoggedIn) {
                updateNavForLoggedInUser(username);
            } else {
                updateNavForGuest();
            }
        });

    function updateNavForLoggedInUser(username) {
        if (!navLinks) return;
        
        // Hide Login and Sign Up links
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes('login') || text.includes('sign up')) {
                link.style.display = 'none';
            }
        });

        // Add Profile Link
        const profileLink = document.createElement('a');
        profileLink.href = 'profile.html';
        profileLink.className = 'nav-item';
        profileLink.innerHTML = `<i class="fa-solid fa-user"></i> ${username}`;
        navLinks.appendChild(profileLink);

        // Add Logout Link
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.className = 'nav-item';
        logoutLink.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> Logout`;
        logoutLink.onclick = (e) => {
            e.preventDefault();
            logout();
        };
        navLinks.appendChild(logoutLink);
    }

    function updateNavForGuest() {
        // Guest navigation is already in HTML, no changes needed
    }

    function logout() {
        fetch('api/logout.php', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Clear localStorage
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('username');
                    localStorage.removeItem('email');
                    localStorage.removeItem('userId');
                    
                    // Redirect to home
                    window.location.href = 'home.html';
                }
            })
            .catch(error => {
                console.error('Logout error:', error);
                // Force logout anyway
                localStorage.clear();
                window.location.href = 'home.html';
            });
    }
});
