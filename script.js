// S : Index page
document.addEventListener("DOMContentLoaded", () => {
  /* 햄버거 메뉴 */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  /* 메인 로고 페이드인 효과 ✨ */
const mainHeroContent = document.querySelector(".main-hero-content");

if (mainHeroContent) {
    // 이제 부모 요소인 .main-hero-content에 'loaded' 클래스를 추가합니다.
    setTimeout(() => {
        mainHeroContent.classList.add("loaded");
    }, 300); 
}



  /* conB 전용 */
  const buttonsB = document.querySelectorAll(".conB .tabB-btn");
  const contentsB = document.querySelectorAll(".conB .contentB-box");

  buttonsB.forEach(btn => {
    btn.addEventListener("click", () => {
      buttonsB.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      contentsB.forEach(c => c.classList.remove("active"));
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add("active");
    });
  });

  /* conC 전용 */
  const buttonsC = document.querySelectorAll(".conC .tabC-btn");
  const contentsC = document.querySelectorAll(".conC .contentC-box");

  buttonsC.forEach(btn => {
    btn.addEventListener("click", () => {
      buttonsC.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      contentsC.forEach(c => c.classList.remove("active"));
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add("active");
    });
  });
});

// 카드 클릭 시 flip 토글
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
});

// 모바일 "더 알아보기" 버튼 클릭 시 앞/뒤 토글
document.querySelectorAll(".card").forEach(card => {
  const btn = card.querySelector(".more-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      card.classList.toggle("show-back"); // 앞/뒤 전환
    });
  }

  // 뒷면에서도 클릭 시 앞면으로 돌아오게 (옵션)
  const back = card.querySelector(".card-back");
  if (back) {
    back.addEventListener("click", () => {
      card.classList.remove("show-back");
    });
  }
});
// E : Index page

// S : page1 (설날)

// page2 (추석) 음식
const foodItems = document.querySelectorAll('.food-item');

foodItems.forEach(item => {
  const popup = item.querySelector('.popup');
  
  item.addEventListener('mouseenter', () => {
    popup.classList.add('show');
  });

  item.addEventListener('mouseleave', () => {
    popup.classList.remove('show');
  });
});


// page2 (추석) 놀이

