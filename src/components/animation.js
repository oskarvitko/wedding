import MainIntersectionObserver from "./MainIntersectionObserver";

const applyAnimation = (node, animations) => {
  node.classList.add("animate__animated");
  node.classList.remove("hide");
  animations.forEach((animation) => {
    node.classList.add(animation);
  });
};

const useObserver = (node, callback) => {
  const observer = new MainIntersectionObserver(
    node,
    (entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    },
    0.3
  );
  observer.observe();
};

export default () =>
  document.addEventListener("DOMContentLoaded", () => {
    const animatedNodes = {
      mainTitle: document.querySelector("h1"),
      mainSubTitle: document.querySelector("h2"),
      header: document.getElementById("header"),
      time: document.getElementById("time-count"),
      timeTitle: document.getElementById("time-title"),
      galery: document.querySelectorAll('[data-fancybox="galery"]'),
      place: document.getElementById("place"),
      circles: document.querySelectorAll(".dress__circles-item"),
      dressInner: (() => {
        const dressInner = document.getElementById("dress-inner");
        return dressInner.querySelectorAll("*");
      })(),
    };

    const blocks = {
      main: document.getElementById("section-main"),
      time: document.getElementById("section-time"),
      galery: document.getElementById("section-galery"),
      place: document.getElementById("section-place"),
      dress: document.getElementById("section-dress"),
    };

    Object.keys(animatedNodes).forEach((key) => {
      if (animatedNodes[key] instanceof NodeList) {
        return Array.prototype.forEach.call(animatedNodes[key], (node) => {
          node.classList.add("hide");
        });
      }
      animatedNodes[key].classList.add("hide");
    });

    applyAnimation(animatedNodes.header, ["animate__fadeInDown"]);

    useObserver(blocks.main, () => {
      applyAnimation(animatedNodes.mainTitle, ["animate__fadeInDown"]);
      applyAnimation(animatedNodes.mainSubTitle, ["animate__fadeInUp"]);
    });
    useObserver(animatedNodes.timeTitle, () => {
      applyAnimation(animatedNodes.timeTitle, ["animate__fadeInUp"]);
    });
    useObserver(animatedNodes.time, () => {
      applyAnimation(animatedNodes.time, ["animate__fadeInUp"]);
    });
    useObserver(animatedNodes.place, () => {
      applyAnimation(animatedNodes.place, ["animate__backInRight"]);
    });

    Array.prototype.forEach.call(animatedNodes.galery, (image, i) => {
      useObserver(blocks.galery, () => {
        let delay = 0;
        const delayPerStep = 200;
        switch (i) {
          case 1:
          case 3:
            delay = delayPerStep * 1;
            break;
          case 2:
          case 4:
          case 6:
            delay = delayPerStep * 2;
            break;
          case 5:
          case 7:
            delay = delayPerStep * 3;
            break;
          case 8:
            delay = delayPerStep * 4;
            break;
        }
        setTimeout(() => {
          applyAnimation(image, ["animate__flipInY"]);
        }, delay);
      });
    });
    Array.prototype.forEach.call(animatedNodes.dressInner, (item, i) => {
      useObserver(blocks.dress, () => {
        setTimeout(() => {
          applyAnimation(item, ["animate__fadeInUp", "animte__faster"]);
        }, i * 200);
      });
    });
  });
