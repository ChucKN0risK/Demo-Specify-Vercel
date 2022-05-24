import { LinkButtonContextDefault, LinkButtonContext } from '@kickstartds/base/lib/link-button';

const switchLights = (e) => {
  const closestSection = e.currentTarget.closest('.l-container.l-container--section');
  const inverted = closestSection.getAttribute('ks-inverted');

  const isTrueTest = inverted === 'true';
  if (isTrueTest) {
    closestSection.setAttribute('ks-inverted', false);
  } else {
    closestSection.setAttribute('ks-inverted', true);
  }
};

const SwitchButton = (props) => {
  return <LinkButtonContextDefault {...props} onClick={switchLights} />;
};

export const SwitchButtonProvider = (props) => (
  <LinkButtonContext.Provider {...props} value={SwitchButton} />
);
