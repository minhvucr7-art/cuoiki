// Slider cho banner

// Hiệu ứng thanh điều hướng khi cuộn
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const showRegisterBtn = document.getElementById('show-register');
    const showLoginBtn = document.getElementById('show-login');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    
    // Chuyển đổi từ đăng nhập sang đăng ký
    showRegisterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });
    
    // Chuyển đổi từ đăng ký sang đăng nhập
    showLoginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });
    
    // Xử lý form đăng nhập
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Xử lý đăng nhập ở đây
        console.log('Đăng nhập đã được gửi');
        // Có thể gửi request AJAX đến server hoặc xử lý theo yêu cầu
    });
    
    // Xử lý form đăng ký
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Xử lý đăng ký ở đây
        console.log('Đăng ký đã được gửi');
        // Có thể gửi request AJAX đến server hoặc xử lý theo yêu cầu
    });
    
    // Đảm bảo dropdown không tự đóng khi click vào form
    document.querySelector('.account-dropdown').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('search-toggle');
    const searchDropdown = document.getElementById('search-dropdown');
    
    // Hiển thị/ẩn dropdown tìm kiếm khi click vào icon
    searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        searchDropdown.classList.toggle('active');
        
        // Focus vào input khi dropdown hiển thị
        if(searchDropdown.classList.contains('active')) {
            document.querySelector('.search-input').focus();
        }
    });
    
    // Đóng dropdown khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (!searchToggle.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.remove('active');
        }
    });
    
    // Xử lý form tìm kiếm
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', function(e) {
        const searchInput = document.querySelector('.search-input');
        // Nếu ô tìm kiếm rỗng, ngăn form submit
        if (searchInput.value.trim() === '') {
            e.preventDefault();
            alert('Vui lòng nhập từ khóa tìm kiếm');
        }
    });
});