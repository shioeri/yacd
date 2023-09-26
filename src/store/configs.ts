import { useQuery } from '@tanstack/react-query';

import { fetchConfigs2 } from '$src/api/configs';
import { ENDPOINT } from '$src/misc/constants';
import { useApiConfig } from '$src/store/app';

export function useClashConfig() {
  const apiConfig = useApiConfig();
  return useQuery([ENDPOINT.config, apiConfig], fetchConfigs2);
}

function markHaveFetchedConfig() {
  return (dispatch: DispatchFn) => {
    dispatch('store/configs#markHaveFetchedConfig', (s: State) => {
      s.configs.haveFetchedConfig = true;
    });
  };
}

export function updateConfigs(
  apiConfig: ClashAPIConfig,
  partialConfg: Partial<ClashGeneralConfig>,
) {
  return async (dispatch: DispatchFn) => {
    configsAPI
      .updateConfigs(apiConfig, partialConfg)
      .then(
        (res) => {
          if (res.ok === false) {
            // eslint-disable-next-line no-console
            console.log('Error update configs', res.statusText);
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log('Error update configs', err);
          throw err;
        },
      )
      .then(() => {
        dispatch(fetchConfigs(apiConfig));
      });

    dispatch('storeConfigsOptimisticUpdateConfigs', (s) => {
      s.configs.configs = { ...s.configs.configs, ...partialConfg };
    });
  };
}

export function reloadConfigs(apiConfig: ClashAPIConfig) {
  return async (dispatch: DispatchFn) => {
    configsAPI
        .reloadConfigs(apiConfig)
        .then(
            (res) => {
              if (res.ok === false) {
                // eslint-disable-next-line no-console
                console.log('Error update configs', res.statusText);
              }
            },
            (err) => {
              // eslint-disable-next-line no-console
              console.log('Error update configs', err);
              throw err;
            }
        )
        .then(() => {
          dispatch(fetchConfigs(apiConfig));
        });
  };
}

export function flushFakeIPPool(apiConfig: ClashAPIConfig) {
  return async (dispatch: DispatchFn) => {
    configsAPI
        .flushFakeIPPool(apiConfig)
        .then(
            (res) => {
              if (res.ok === false) {
                // eslint-disable-next-line no-console
                console.log('Error update configs', res.statusText);
              }
            },
            (err) => {
              // eslint-disable-next-line no-console
              console.log('Error update configs', err);
              throw err;
            }
        )
        .then(() => {
          dispatch(fetchConfigs(apiConfig));
        });
  };
}

export function updateGeoDatabasesFile(apiConfig: ClashAPIConfig) {
  return async (dispatch: DispatchFn) => {
    configsAPI
      .updateGeoDatabasesFile(apiConfig)
      .then(
        (res) => {
          if (res.ok === false) {
            // eslint-disable-next-line no-console
            console.log('Error update geo databases file', res.statusText);
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log('Error update geo databases file', err);
          throw err;
        }
      )
      .then(() => {
        dispatch(fetchConfigs(apiConfig));
      });
  };
}

export const initialState: StateConfigs = {
  configs: {
    port: 7890,
    'socks-port': 7891,
    'redir-port': 0,
    'allow-lan': false,
    mode: 'Rule',
    'log-level': 'uninit',
  },
  haveFetchedConfig: false,
};