var MOBCONSTANTS = {
  'production': {
    'SITE_URL': 'https://www.99acres.com',
    'API_URL': 'https://www.99acres.com',
    'CAPISTRANO_CURRENT_PATH': './current',
    'CLICKSTREAM_URL': '/do/clickStreamTracking/ClickStream/populateTrackingData',
  },
  'development': {
    'SITE_URL': 'https://pwa.infoedge.com',
    'API_URL': '//pwa.infoedge.com',
    'CAPISTRANO_CURRENT_PATH': '',
    'CLICKSTREAM_URL': '/do/clickStreamTracking/ClickStream/populateTrackingData',
  },
  'staging': {
    'SITE_URL': 'https://99sanity.infoedge.com',
    'API_URL': '//pwa.infoedge.com',
    'CAPISTRANO_CURRENT_PATH': './current',
    'CLICKSTREAM_URL': '/do/clickStreamTracking/ClickStream/populateTrackingData',
  },
};

export default MOBCONSTANTS;
