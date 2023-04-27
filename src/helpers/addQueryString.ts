export const addQueryString = (queryString: string) => {
  if (history.pushState) {
    const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + queryString;

    window.history.pushState({ path: newurl }, '', newurl);
  }
};
