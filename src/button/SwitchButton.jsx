import { LinkButtonContextDefault, LinkButtonContext } from '@kickstartds/base/lib/link-button';

const switchLights = (e) => {
  const closestSection = e.currentTarget.closest('.l-container.l-container--section');
  const inverted = closestSection.getAttribute('ks-inverted');

  const allChildren = closestSection.querySelectorAll('*');
  allChildren.forEach((element) => {
    element.style.transition = "all 1s ease-in-out";
  });

  const isTrueTest = inverted === 'true';
  if (isTrueTest) {
    closestSection.setAttribute('ks-inverted', false);
  } else {
    closestSection.setAttribute('ks-inverted', true);
  }

  setTimeout(() => {
    allChildren.forEach((element) => {
      element.style.transition = "none";
    });
  }, 1000);
};

const SwitchButton = (props) => {
  return <LinkButtonContextDefault {...props} onClick={switchLights} />;
};

export const SwitchButtonProvider = (props) => (
  <LinkButtonContext.Provider {...props} value={SwitchButton} />
);
