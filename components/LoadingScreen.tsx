import Router from 'next/router';
import { useTimeoutFn } from 'react-use';

import { LogoIcon } from './LogoIcon';

export function LoadingScreen() {
  useTimeoutFn(() => {
    Router.push("/start");
  }, 5000);

  return (
    <div className="flex flex:col ai:center jc:center h:100vh bg:black gap:20">
      <LogoIcon className="h:40% @heart|1s|infinite mb:100" />
      <p>Welcome Fibulacci</p>
      <p>O seu divertimento está sendo carregado...</p>
    </div>
  );
}
