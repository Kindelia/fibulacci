import Router from 'next/router';
import { useState } from 'react';
import { useEffectOnce } from 'react-use';

export function StartScreen() {
  useEffectOnce(() => {
    setTimeout(() => {
      Router.push('/play');
    }, 5000);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/296cfd51810903.58fa63641b9a1.gif"
      />
    </div>
  );
}
