import { ref, watch } from 'vue';

export default function useFavicon(newIcon) {
  const favicon = ref(newIcon);
  // console.log('favicon :>> ', favicon);

  const updateIcon = icon => {
    console.log('icon :>> ', icon);
    document.head.querySelectorAll(`link[rel*="icon"]`).forEach(el => (el.href = `${icon}`));
    // document.head.querySelector(`[rel="icon"]`).href = `${icon}`;
  };

  const reset = () => (favicon.value = '/favicon.ico');

  watch(favicon, newVal => {
    updateIcon(newVal);
  });
  return { reset, favicon };
}
