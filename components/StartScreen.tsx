import { ConnectButton } from '@rainbow-me/rainbowkit';

import { LogoIcon } from './LogoIcon';

export function StartScreen() {
  return (
    <div className="flex flex:col ai:center jc:center h:100vh bg:black gap:20">
      <LogoIcon className="h:40% @float|3s|ease-in-out|infinite" />
      <p>Welcome Fibulacci</p>
      <button className='bg:white py:20 px:100 f:black rounded bg:gray-60:hover'>START</button>
      <ConnectButton />
      <p>CREDITS</p>
    </div>
  );
}
