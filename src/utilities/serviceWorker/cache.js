export const serviceWorkerCache = caches => {
  console.log('Cache is Supported')
  console.log('1', caches);
  caches.open('example-cache').then(cache => {
    cache.add('/example-file.html');
  });
  console.log('2', caches)
};
