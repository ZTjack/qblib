window.qb = {
    version: '0.0.1',
    auth: 'qbTrade',
    sleep: function (s) {
      return new Promise(resolve => setTimeout(resolve, 1000 * s));
    }
  }