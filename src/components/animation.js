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
    0.5
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
      approve: (() => {
        const approveInner = document.getElementById("animation-approve");
        return approveInner.children;
      })(),
      gift: (() => {
        const gift = document.getElementById("animation-gift");
        return gift.children;
      })(),
      contacts: (() => {
        const contacts = document.getElementById("animation-contacts");
        return contacts.children;
      })(),
      dear: (() => {
        const dear = document.getElementById("animation-dear");
        return dear.children;
      })(),
    };

    const blocks = {
      main: document.getElementById("section-main"),
      time: document.getElementById("section-time"),
      galery: document.getElementById("section-galery"),
      place: document.getElementById("section-place"),
      dress: document.getElementById("section-dress"),
      approve: document.getElementById("animation-approve"),
      gift: document.getElementById("animation-gift"),
      contacts: document.getElementById("animation-contacts"),
      dear: document.getElementById("animation-dear"),
    };

    Object.keys(animatedNodes).forEach((key) => {
      if (
        animatedNodes[key] instanceof NodeList ||
        animatedNodes[key] instanceof HTMLCollection
      ) {
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
    Array.prototype.forEach.call(animatedNodes.approve, (item, i) => {
      useObserver(blocks.approve, () => {
        setTimeout(() => {
          applyAnimation(item, ["animate__fadeInRight", "animte__faster"]);
        }, i * 200);
      });
    });
    Array.prototype.forEach.call(animatedNodes.gift, (item, i) => {
      useObserver(blocks.gift, () => {
        setTimeout(() => {
          applyAnimation(item, ["animate__fadeIn", "animte__faster"]);
        }, i * 200);
      });
    });
    Array.prototype.forEach.call(animatedNodes.contacts, (item, i) => {
      useObserver(blocks.contacts, () => {
        setTimeout(() => {
          applyAnimation(item, ["animate__fadeInUp"]);
        }, i * 300);
      });
    });
    Array.prototype.forEach.call(animatedNodes.dear, (item, i) => {
      useObserver(blocks.dear, () => {
        setTimeout(() => {
          applyAnimation(item, ["animate__fadeInRight"]);
        }, i * 200);
      });
    });
  });
