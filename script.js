  // why choose script numbers
  function animateCount(el, target, duration, isK) {
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(ease * target);
        el.textContent = isK ? (val >= 1000 ? Math.round(val / 1000) + 'K' : val) : val;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = isK ? '25K' : target;
      }
      requestAnimationFrame(step);
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(document.getElementById('s1'), 7, 1200, false);
          animateCount(document.getElementById('s2'), 25000, 1800, true);
          animateCount(document.getElementById('s3'), 100, 1400, false);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    obs.observe(document.querySelector('.siddha-card'));