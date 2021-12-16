'use strict';

const fs = require('fs');
const mkdirp = require('mkdirp');

// copy Android resources
mkdirp.sync('./android/app/src/main/assets');
fs.copyFileSync(
  './assets/resources/android/picovoice_android.ppn',
  './android/app/src/main/assets/picovoice_android.ppn',
);
fs.copyFileSync(
  './assets/resources/android/katha_en_android_v2_0_0.rhn',
  './android/app/src/main/assets/katha_en_android_v2_0_0.rhn',
);

// copy iOS resources
mkdirp.sync('./ios/resources');
fs.copyFileSync(
  './assets/resources/ios/picovoice_ios.ppn',
  './ios/picovoice_ios.ppn',
);
fs.copyFileSync(
  './assets/resources/ios/katha_en_ios_v2_0_0.rhn',
  './ios/katha_en_ios_v2_0_0.rhn',
);
