    const img = document.querySelector('.watch-img-div img');
    
    
    const arr = [
      'https://i.postimg.cc/PNcYpVtR/smartwatch-2.jpg',
      'https://i.postimg.cc/kDZK6YJr/smartwatch-3.jpg',
      'https://i.postimg.cc/0r3DMX8F/smartwatch-4.jpg',
      'https://i.postimg.cc/G9NG8gcW/smartwatch-5.jpg',
      'https://i.postimg.cc/G99vpn15/smartwatch.png'
    ];
    
    let i = 0;
    
    const imageCache = [];
    
    arr.forEach(src => {
      const img = new Image();
      img.src = src;
      imageCache.push(img);
    });
    
    setInterval(() => {
      img.style.transform = 'translateX(-100%)';
      
      setTimeout(() => {
        img.src = arr[i];
        i++;
        
        if (i === arr.length) i = 0;
        
        img.style.transform = 'translateX(100%)';
        img.offsetHeight;
        img.style.transform = 'translateX(0)';
      }, 500);
      
    }, 4000);
    
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });