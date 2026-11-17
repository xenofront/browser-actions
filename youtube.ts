// https://www.youtube.com/*

const watchElements = ['#actions', '#subscribe-button', '.ytp-cards-teaser', 'ytd-feed-nudge-renderer'];
const observer = new MutationObserver(() => {
  const elements = document.querySelectorAll(watchElements.join(','));
  if (elements.length) {
    for (const element of elements) {
      element?.remove();
    }
  }
  
  if (location.href === 'https://www.youtube.com/') {
    document.querySelector('input[name="search_query"]')?.focus();
  }
});

observer.observe(
  document.documentElement, 
  {
    childList: true,
    subtree: true
  }
);