function set_query(key: string, value: string) {
  if (window.history.pushState) {
    const new_url = window.location.protocol + "//" + window.location.host + window.location.pathname + (
      window.location.search.startsWith('?') ? parse_queries(key, value) : '?' + key + '=' + value
    );

    window.history.pushState({path: new_url}, '', new_url);
  }
}

function parse_queries(key: string, value: string) {
  const query_entries = get_query('*');
  if (!query_entries) return '?' + key + '=' + value;

  if (!query_entries.find(entry => entry?.key === key))
    query_entries.push({key, value: 'undefined'});

  return '?' + query_entries
    .map(entry => {
      if (entry?.key === key) {
        return key + '=' + value;
      } else {
        return entry?.key + '=' + entry?.value;
      }
    })
    .join('&');
}

const get_query = (key: string): Array<{
  [key: string]: string
} | undefined> => {
  const url = window.location.href;
  const query = url.split('?')[1];
  const raw_query_entries = query.split('&');

  const query_entries = raw_query_entries.map(entry => {
    const [key, value] = entry.split('=');
    return {key, value};
  });

  return key === '*' ? query_entries : [query_entries.find(entry => entry.key === key)];
}

export {
  set_query,
  get_query
}