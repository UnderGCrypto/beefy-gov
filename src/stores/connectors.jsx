import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  97: 'https://bsc-dataseed.binance.org/',
};

export const injected = new InjectedConnector({
  supportedChainIds: [56, 97, 3],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 3: RPC_URLS[56] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
