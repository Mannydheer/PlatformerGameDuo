class Engine {
  constructor() {
    this.player = new Player(GAME_WIDTH, GAME_HEIGHT);
    this.gravity = 3;
  }

  //Just using a simple boolean is not efficient because it doesn't take into account the different
  //speeds that a computer can run the program.
}
