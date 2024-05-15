const introSound = new Audio('../../assets/sounds/intro.wav');

export async function playIntroSound(): Promise<void> {
  try {
    await introSound.play();
  } catch (err) {
    console.log(err);
  }
}
