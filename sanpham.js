// JavaScript for V-Strike Collection Page

document.addEventListener('DOMContentLoaded', function() {
    // Scroll Animation for Collection Items
    const collectionItems = document.querySelectorAll('.collection-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    collectionItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (validateEmail(email)) {
                // Normally this would be an AJAX call to your server
                alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi thông tin mới nhất cho bạn.');
                emailInput.value = '';
            } else {
                alert('Vui lòng nhập địa chỉ email hợp lệ.');
            }
        });
    }
    
    // Sticky Navigation
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Filter collections functionality (can be expanded)
    const viewCollectionButtons = document.querySelectorAll('.view-collection');
    viewCollectionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const collectionName = this.parentElement.querySelector('h3').textContent;
            alert(`Bạn đang xem bộ sưu tập: ${collectionName}`);
            // This would normally navigate to a filtered view or specific collection page
        });
    });
});

// Email validation helper function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const filter = document.getElementById('filter');
const products = document.querySelectorAll('.product');

filter.addEventListener('change', () => {
  const selected = filter.value;
  products.forEach(p => {
    const type = p.dataset.type;
    if (selected === 'all' || type === selected) {
      p.classList.remove('hidden');
    } else {
      p.classList.add('hidden');
    }
  });
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});