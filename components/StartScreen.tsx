import Image from "next/image";

export function StartScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://img.freepik.com/premium-vector/pixel-art-8bit-game-home-screen-landscape-start-game-menu-background_360488-314.jpg?w=2000"
        className="h-screen w-full flex"
      />
    </div>
  );
}
