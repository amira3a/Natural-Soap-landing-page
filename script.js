// ملف script.js

function changeLanguage(language) {
  // إخفاء جميع الأقسام أولاً
   document.querySelector(".header-arabic").style.display = "none";
   document.querySelector(".header-english").style.display = "none";
   document.querySelector(".footer-arabic").style.display = "none";
   document.querySelector(".footer-english").style.display = "none";
   document.querySelector(".arabic").style.display = "none";
   document.querySelector(".english").style.display = "none";
   document.querySelector("#hover-text-ar").style.display = "none";
   document.querySelector("#hover-text-en").style.display = "none";
   document.querySelector(".timer-arabic").style.display = "none";
   document.querySelector(".timer-english").style.display = "none";
   document.querySelector("#testimonials-artitle").style.display = "none";
   document.querySelector("#testimonials-entitle").style.display = "none";
   document.querySelector("#artestimonial").style.display = "none";
   document.querySelector("#entestimonial").style.display = "none";



  // إظهار القسم المناسب بناءً على اللغة
  if (language === "arabic") {
    document.querySelector(".header-arabic").style.display = "block";
    document.querySelector(".footer-arabic").style.display = "block";
    document.querySelector(".arabic").style.display = "flex";
    document.querySelector("#hover-text-ar").style.display = "block";
    document.querySelector(".timer-arabic").style.display = "block";
    document.querySelector("#testimonials-artitle").style.display = "block";
    document.querySelector("#artestimonial").style.display = "block";

  } else if (language === "english") {
    document.querySelector(".header-english").style.display = "block";
    document.querySelector(".footer-english").style.display = "block";
    document.querySelector(".english").style.display = "flex";
    document.querySelector("#hover-text-en").style.display = "block";
    document.querySelector(".timer-english").style.display = "block";
    document.querySelector("#testimonials-entitle").style.display = "block";
  document.querySelector("#entestimonial").style.display = "block";
  }

 // تحديث العداد الزمني (تخصيص النصوص)
    const timerElement = document.getElementById("timer");
    if (language === "arabic") {
      timerElement.dataset.expiredText = "!انتهى العرض";
    } else if (language === "english") {
      timerElement.dataset.expiredText = "Offer Ended!";
  }
  
}



// تعديل وظيفة العداد التنازلي لدعم النصوص الديناميكية
function startCountdown(durationInMinutes) {
  let endTime = new Date().getTime() + durationInMinutes * 60 * 1000;

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    if (timeLeft < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerText =
        document.getElementById("timer").dataset.expiredText;
      return;
    }

    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
      "timer"
    ).innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

// بدء العد التنازلي 
startCountdown(30);



// تحميل الصفحة مع التبديل إلى اللغة العربية بشكل افتراضي
window.onload = function () {
  changeLanguage("arabic");
};






