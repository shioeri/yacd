import type { ReadCallback } from 'i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const LngBackend = {
  type: 'backend' as const,
  read: (lng: string, _namespace: string, callback: ReadCallback) => {
    let p: PromiseLike<{ data: any }>;
    switch (lng) {
      case 'zh':
      case 'zh-CN':
        p = import('src/i18n/zh');
        break;
      case 'en':
      default:
        p = import('src/i18n/en');
        break;
    }
    if (p) {
      p.then(
        (d) => callback(null, d.data),
        (err) => callback(err, null),
      );
    } else {
      callback(new Error(`unable to load translation file for language ${lng}`), null);
    }
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(LngBackend)
  .init({
    debug: process.env.NODE_ENV === 'development',
    // resources,
    backend: {
      loadPath: '/__{{lng}}/{{ns}}.json',
      request: function (
        _options: any,
        url: string,
        _payload: any,
        callback: BackendRequestCallback
      ) {
        let p: PromiseLike<{ data: any }>;

        switch (url) {
          case '/__zh/translation.json':
          case '/__zh-CN/translation.json':
            p = allLocales.zh;
            break;
          case '/__en/translation.json':
          default:
            p = allLocales.zh;
            break;
        }

        if (p) {
          p.then((mod) => {
            callback(null, { status: 200, data: mod.data });
          });
        }
      },
    },
    supportedLngs: ['en', 'zh'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

if (process.env.NODE_ENV === 'development') {
  window.i18n = i18next;
}

export default i18next;
