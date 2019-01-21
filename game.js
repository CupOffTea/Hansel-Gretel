var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload });

/*
    ----------------------
    ------ VARIABILI -----
    ----------------------
*/

// INTRODUZIONE
var pag1;
var pag2;
var pag3;
var pag4;
var pag5;
var pag6;
var pag7;
var pag8;
var clickDx;
var clickSx;
var home;
var frecce;

// LIVELLO 1
var player;
var playerOldPos = {x: 0,  y: 0};
var playerSpawnX1 = 200;     var playerSpawnY1 = 1260;          // coordinate di spawn per controllo checkpoint
var cursors;
var mappa1;
var segnaGretel1;
var vite;
var viteMorte;
var cuore;
var cuoreMorto;
var sfondo1;
var sfondo2;
var spiderHitGround;
var chiave1;
var chiave2;
var contaChiave1;
var chiaveOmbra;
var cancChiuso;
var cancAperto;
var pausa;
var play;
var refresh;
var gretel;
var fbCanc;
var casa1;
var casa2;
var arma;
var segnaArma;
var armaOmbra;
var proiettile;
var fbCasa;
var istruzioni1;
var istruzioni2;
var playerCp = false;

// LIVELLO 2
var player;
var playerSpawnX2 = 0;     var playerSpawnY2 = 7450;         // Da checkpoint: 600, 4200 // coordinate di spawn per controllo checkpoint def: 0, 7450
var cursors;
var mappa2;
var segnaGretel2;
var vite;
var viteMorte;
var cuore;
var cuoreMorto;
var sfondo;
var gemma1;
var gemma2;
var gemma3;
var gemma4;
var gemma5;
var med00;
var med01;
var med02;
var med03;
var med04;
var med05;
var pausa;
var play;
var refresh;
var hitStanzettaFlag = false;
var hitStanzettaFlag2 = false;
var hitFornoFlag = false;
var hitFornoFlag2 = false;
var hitSticky = false;
var startBossFight = false;
var fbGabbia;
var forno1;
var forno2;
var fbForno;
var finaleP;
var finaleI;
var finaleN;
var luceVerde1;
var luceVerde2;
var playerCp1 = false;
var playerCp2 = false;
var playerCp3 = false;
var playerCp4 = false;
var playerCp5 = false;
var noMappa2 = false;
var camCheckpoint = false;
var blockFornoFlag = false;
var hitBoxFuoco;

var shootingRight = false;
var shootingLeft = false;
var facingRight = false;
var facingLeft = false;

function preload() {}


/*
    ----------------------
    ---- INTRODUZIONE ----
    ----------------------
*/

var Introduzione =
{
  preload: function()
  {
    game.load.image('pag1', 'assets/pag1.png');
    game.load.image('pag2', 'assets/pag2.png');
    game.load.image('pag3', 'assets/pag3.png');
    game.load.image('pag4', 'assets/pag4.png');
    game.load.image('pag5', 'assets/pag5.png');
    game.load.image('pag6', 'assets/pag6.png');
    game.load.image('pag7', 'assets/pag7.png');
    game.load.image('pag8', 'assets/pag8.png');
    game.load.image('pag9', 'assets/pag9.png');
    game.load.image('pag10', 'assets/pag10.png');
    game.load.image('pag11', 'assets/pag11.png');
    game.load.image('click', 'assets/click.png');
    game.load.image('home', 'assets/home.png');
  },

  create: function()
  {
    // PAGINE
        //pagina1
        pag1 = game.add.sprite(0, 0, 'pag1');
        pag1.visible = true;

        //pagina2
        pag2 = game.add.sprite(0, 0, 'pag2');
        pag2.visible = false;

        //pagina3
        pag3 = game.add.sprite(0, 0, 'pag3');
        pag3.visible = false;

        //pagina4
        pag4 = game.add.sprite(0, 0, 'pag4');
        pag4.visible = false;

        //pagina5
        pag5 = game.add.sprite(0, 0, 'pag5');
        pag5.visible = false;

        //pagina6
        pag6 = game.add.sprite(0, 0, 'pag6');
        pag6.visible = false;

        //pagina7
        pag7 = game.add.sprite(0, 0, 'pag7');
        pag7.visible = false;

        //pagina8
        pag8 = game.add.sprite(0, 0, 'pag8');
        pag8.visible = false;

        //pagina8
        pag9 = game.add.sprite(0, 0, 'pag9');
        pag9.visible = false;

        //pagina8
        pag10 = game.add.sprite(0, 0, 'pag10');
        pag10.visible = false;

        //pagina11
        pag11 = game.add.sprite(0, 0, 'pag11');
        pag11.visible = false;

    // HOME
        home = game.add.sprite(487, 698, 'home');
        home.height = 50;
        home.width = 50;
        home.visible = false;
        home.inputEnabled = true;

    // CLICK
        //clickSx
        clickSx = game.add.sprite(0, 0, 'click');
        clickSx.height = 768;
        clickSx.width = 200;
        clickSx.inputEnabled = true;

        //clickDx
        clickDx = game.add.sprite(824, 0, 'click');
        clickDx.height = 768;
        clickDx.width = 200;
        clickDx.inputEnabled = true;

    // CLICK
        game.input.onDown.add(voltaPagina, self);

  },

  update: function()
  {

  }
}

game.state.add('Introduzione', Introduzione);

/*
    ----------------------
    ----- LIVELLO 1 ------
    ----------------------
*/

var Livello1 =
{
  preload: function()
  {
    game.load.tilemap('mappa', 'mappa_liv_1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'grass-tiles-2-small1.png');          //immagine con i tiles con cui ho costruito la mappa
    game.load.image('mappa1', 'assets/mappa1.png');
    game.load.image('interfaccia1', 'assets/interfaccia1.png');
    game.load.image('segnaGretel', 'assets/segnaGretel.png');
    game.load.image('cuore', 'assets/cuore.png', 32, 32);
    game.load.image('axe', 'assets/axe.png');
    game.load.spritesheet('mostro1', 'assets/mostro1.png', 74, 74);
    game.load.spritesheet('mostro2', 'assets/mostro2.png', 74, 74);
    game.load.spritesheet('spider1', 'assets/spider1.png', 150, 59);
    game.load.spritesheet('spider2', 'assets/spider2.png', 110, 73);
    game.load.spritesheet('bat1', 'assets/bat1.png', 120, 52);
    game.load.spritesheet('bat2', 'assets/bat2.png', 120, 53);
    game.load.image('sfondo1', 'assets/sfondo_di.png');
    game.load.image('sfondo2', 'assets/sfondo_da.png');
    game.load.image('cuoreMorto', 'assets/cuore_morto.png');
    game.load.image('chiave1', 'assets/chiave1.png');
    game.load.image('chiave2', 'assets/chiave2.png');
    game.load.image('chiaveOmbra', 'assets/chiave_ombra.png');
    game.load.image('cpCanc', 'assets/cpCanc.png');
    game.load.image('pausa', 'assets/pausa.png');
    game.load.image('play', 'assets/play.png');
    game.load.image('refresh', 'assets/refresh.png');
    game.load.image('home', 'assets/home.png');
    game.load.spritesheet('gretel1', 'assets/gretel1.png', 70, 130);
    game.load.image('fbCanc', 'assets/fbCancello.png');
    game.load.image('fbCasa', 'assets/fbCasa.png');
    game.load.image('ingresso', 'assets/ingresso.png');
    game.load.image('hitBoxIngresso', 'assets/hitBoxIngresso.png');
    game.load.image ('casa1', 'assets/casa1.png');
    game.load.image ('casa2', 'assets/casa2.png');
    game.load.image ('casa3', 'assets/casa3.png');
    game.load.image('cancChiuso', 'assets/canchiuso.png');
    game.load.image('cancAperto', 'assets/cancaperto.png');
    game.load.image('arma', 'assets/arma.png');
    game.load.image('armaOmbra', 'assets/arma_ombra.png');
    game.load.image('proiettile', 'assets/proiettile.png');
    game.load.spritesheet('screenGlow', 'assets/screenGlow.png', 1024,768);
    game.load.image('istruzioni1', 'assets/istruzioni1.png');
    game.load.image('istruzioni2', 'assets/istruzioni2.png');
    game.load.image('retry', 'assets/retry.png');
  },

  create: function()
  {
    // SFONDO 1
        sfondo1 = game.add.tileSprite(0, 0, 11200, 1600, 'sfondo1');  //11200
        //sfondo1.height = 1600;

    // SFONDO 2
        sfondo2 = game.add.tileSprite(0, 0, 11200, 1600, 'sfondo2');
        //sfondo2.height = 1600;

    // TILEMAP
        map = game.add.tilemap('mappa');                  //creazione della mappa
        map.addTilesetImage('terreno', 'tiles');          //fare riferimento al numero corrispondente a ogni piastrella, facendo riferimento a 'terreno' in Tiled
        layer = map.createLayer('liv01');           //in Tiled si deve base dul livello 1
        map.setCollisionBetween(1, 100);                  //mappa fatta da oggetti con numero da 1 a 100 con cui il giocatore interagisce

    // CANCELLO APERTO
        cancAperto = game.add.sprite (5300, 920, 'cancAperto');
        game.physics.arcade.enable(cancAperto);
        cancAperto.body.gravity.y = 400;
        cancAperto.body.immovable = true;
        cancAperto.body.collideWorldBounds = true;
        if (playerCp) {cancAperto.alpha = 1;}
        else {cancAperto.alpha = 0};

    // ISTRUZIONI
        // istruzioni 1
        istruzioni1 = game.add.sprite (60, 1120, 'istruzioni1');
        game.physics.arcade.enable(istruzioni1);
        istruzioni1.body.immovable = true;

        // istruzioni 2
        istruzioni2 = game.add.sprite (5525, 1400, 'istruzioni2');
        game.physics.arcade.enable(istruzioni2);
        istruzioni2.body.immovable = true;

    // CASA 2
        casa2 = game.add.sprite (11000, 0, 'casa2');
        game.physics.arcade.enable(casa2);
        casa2.body.gravity.y = 400;
        casa2.body.immovable = true;
        casa2.alpha = 0;

    // HIT BOX INGRESSO
        hitBoxIngresso = game.add.sprite (11180, 1270, 'hitBoxIngresso');
        game.physics.arcade.enable(hitBoxIngresso);

    // PLAYER
        player = game.add.sprite(playerSpawnX1, playerSpawnY1, 'gretel1');
        player.frame = 15;
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.1;
        player.body.gravity.y = 400;
        player.animations.add('left', [13, 12, 11, 10, 9, 8, 7, 6], 7, true);
        player.animations.add('right', [17, 18, 19, 20, 21, 22, 23, 24], 7, true);
        player.animations.add('rightJump', [25, 26], 8, false); // tolto il frame 28, 27
        player.animations.add('leftJump', [5, 4], 8, false);  // tolto il frame 2, 3
        player.animations.add('leftShoot', [1, 0], 3, false);
        player.animations.add('rightShoot', [29, 30], 3, false);
        player.body.collideWorldBounds = true;
        player.invulnerabile = false;
        player.speed = 200;

        cursors = game.input.keyboard.createCursorKeys()

    // CAMERA
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.4, 0.4);
        game.world.setBounds(0, 0, 11200, 1600);          //dimensioni totali del gioco anche se non inquadrato
        layer.resizeWorld();          //dimensione del mondo adattato alla mia mappa

    // CHIAVI
        //chiave1
        chiave1 = game.add.sprite(3200, 200, 'chiave1');
        game.physics.arcade.enable(chiave1);
        chiave1.body.gravity.y = 400;
        chiave1.body.collideWorldBounds = true;

        //chiave2
        chiave2 = game.add.sprite(8550, 200, 'chiave2');
        game.physics.arcade.enable(chiave2);
        chiave2.body.gravity.y = 400;
        chiave2.body.collideWorldBounds = true;

    // ARMA
        arma = game.add.sprite (5700, game.world.height - 260, 'arma');
        game.physics.arcade.enable(arma);
        arma.body.gravity.y = 400;
        arma.body.collideWorldBounds = true;

    // NEMICI EASY
        spider1 = createSpiderEasy(700, game.world.height - 280);   spider2 = createSpiderEasy(3744, 672);
        bat1 = createBatEasy(2900, game.world.height - 1012);       bat2 = createBatEasy(4800, 690);
        mostro1 = createMostroEasy(1600, game.world.height - 295);  mostro2 = createMostroEasy(3620, game.world.height - 295);

    // NEMICI MID
        spider3 = createSpiderMid(6400, 680);                        spider4 = createSpiderMid(7200, 680);                       spider5 = createSpiderMid(7450, 620);                spider6 = createSpiderMid(8320, 640);   spider7 = createSpiderMid(7744, 288);
        bat3 = createBatMid(5700, game.world.height - 850);          bat4 = createBatMid(7300, game.world.height - 840);         bat5 = createBatMid(7600, 70);                      bat6 = createBatMid(9632, 480);         /* bat7 = createBatMid(9730, 580); */       //bat8 = createBatMid(7800, 100);   bat9 = createBatMid(7900, 130);
        mostro3 = createMostroMid(6000, game.world.height - 295);    mostro4 = createMostroMid(7296, game.world.height - 295);   mostro5 = createMostroMid(8640, 928);                mostro6 = createMostroMid(8128, 640);   mostro7 = createMostroMid(7830, 288);

    // NEMICI createBatHard
        spiderHard = createSpiderHard(10784, game.world.height - 295);
        spiderHard.body.enable = false; spiderHard.visible = false;

        batHard = createBatHard(10750, game.world.height - 450);
        batHard.body.enable = false; batHard.visible = false;

        mostroHard = createMostroHard(10680, game.world.height - 300);
        mostroHard.body.enable = false; mostroHard.visible = false;

        // spider2 = createSpiderMid(6300, game.world.height - 500);
        // bat2 = createBatMid(5600, game.world.height - 712);
        // mostro2 = createMostroMid(7300, game.world.height - 295);  // 7300

    // ARMA
        proiettile = game.add.weapon(50, 'proiettile');
        game.physics.arcade.enable(proiettile);
        proiettile.bullets.setAll("width", 15);
        proiettile.bullets.setAll("height", 15);
        proiettile.setBulletBodyOffset(20, 20);
        proiettile.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
        proiettile.bulletSpeed = 400;
        proiettile.fireRate = 2000;
        proiettile.trackSprite(player, 65, 50);
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    // LAMPEGGIO ARMA ONSHOOT
        proiettile.onFire.add(function(){
          for (var i = 250; i<2000; i+=250)
          {
            if (i % 500 == 0) {
              game.time.events.add(i, function() {segnaArma.alpha = 0.3;});
            }
            else {
              game.time.events.add(i, function() {segnaArma.alpha = 1;});
            }
          }
        });

    // CANCELLO CHIUSO
        cancChiuso = game.add.sprite(5300, 800, 'cancChiuso');
        game.physics.arcade.enable(cancChiuso);
        cancChiuso.body.gravity.y = 400;
        cancChiuso.body.collideWorldBounds = true;
        cancChiuso.body.immovable = true;
        if (playerCp) {cancChiuso.kill();}

    // CASA
        casa1 = game.add.sprite (11000, 0, 'casa1');
        game.physics.arcade.enable(casa1);
        casa1.body.gravity.y = 400;
        casa1.body.immovable = true;

        casa3 = game.add.sprite (11000, 0, 'casa3');
        game.physics.arcade.enable(casa3);
        casa3.body.gravity.y = 400;
        casa3.body.immovable = true;
        casa3.alpha = 0;

    // CAMERA CASA
        camCasa = game.add.sprite(10230,660,'nnt');
        game.physics.arcade.enable(camCasa);
        camCasa.body.immovable = true;
        camCasa.width = 1000;     camCasa.height = 800;
        camCasa.alpha = 0;

        camCasaOut = game.add.sprite(10976,1160,'nnt');  //camera per mostrare la cucina
        camCasaOut.alpha = 0;

        camOut = game.add.sprite(10040,660,'nnt');
        game.physics.arcade.enable(camOut);
        camOut.body.immovable = true;
        camOut.body.enable = false;
        camOut.width = 100;     camOut.height = 800;
        camOut.alpha = 0;

        newCamCasa = game.add.sprite(10230,660,'nnt');
        game.physics.arcade.enable(newCamCasa);
        newCamCasa.body.immovable = true;
        newCamCasa.width = 1000;     newCamCasa.height = 800;
        newCamCasa.alpha = 0;
        newCamCasa.body.enable = false;

    // INTERFACCIA
        interfaccia1 = game.add.sprite(0, 0, 'interfaccia1');
        interfaccia1.fixedToCamera = true;

    // MAPPA
        // mappa1
        mappa1 = game.add.sprite(230, 720, 'mappa1');
        mappa1.fixedToCamera = true;

        //segnaGretel
        segnaGretel1 = game.add.sprite(220, 715, 'segnaGretel');
        segnaGretel1.fixedToCamera = true;

        // cancello
        cpCanc = game.add.sprite(465, 723, 'cpCanc');
        cpCanc.fixedToCamera = true;

    // VITE MORTE
        viteMorte = game.add.group();
        for (var j=0; j<3; j++) {
          var cuoreMorto = viteMorte.create(110 - (j*45), 20, 'cuoreMorto')
          }
        viteMorte.fixedToCamera = true;

    // VITE
        vite = game.add.group();
        for(var i=0; i<3; i++) {
          var cuore = vite.create(110 - (i*45), 20, 'cuore')
        }
        vite.fixedToCamera = true;

    // SEGNA ARMA OMBRA
        armaOmbra = game.add.sprite(110, 70, 'armaOmbra');
        armaOmbra.fixedToCamera = true;

    // SEGNA ARMA
        segnaArma = game.add.sprite(110, 70, 'arma');
        segnaArma.fixedToCamera = true;
        segnaArma.visible = false;

    // CONTACHIAVI CHIAVEOMBRA
        chiaveOmbra1 = game.add.sprite(20, 70, 'chiaveOmbra');
        chiaveOmbra1.fixedToCamera = true;
        if (playerCp) {chiaveOmbra1.kill();}

        chiaveOmbra2 = game.add.sprite(60, 70, 'chiaveOmbra');
        chiaveOmbra2.fixedToCamera = true;

    // CONTACHIAVI
        contaChiave1 = game.add.sprite(20, 70, 'chiave1');
        contaChiave1.fixedToCamera = true;
        contaChiave1.visible = false;
        contaChiave1.height = 38;
        contaChiave1.width = 32;
        if (playerCp) {contaChiave1.visible = true; contaChiave1.alpha = 0.5;}

        contaChiave2 = game.add.sprite(60, 70, 'chiave2');
        contaChiave2.fixedToCamera = true;
        contaChiave2.visible = false;
        contaChiave2.height = 38;
        contaChiave2.width = 32;

    // SCREEN GLOW
        screenGlow = game.add.sprite(0, 0, 'screenGlow');
        screenGlow.animations.add('glow', [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0], 60, false);
        screenGlow.alpha = 0;
        screenGlow.fixedToCamera = true;

    // PLAY
        play = game.add.sprite(332, 344, 'play');
        play.fixedToCamera = true;
        play.inputEnabled = true;
        play.visible = false;

        game.input.onDown.add(gestioneClickPausa1, self);

    // REFRESH
        refresh = game.add.sprite(472, 344, 'refresh');
        refresh.fixedToCamera = true;
        refresh.visible = false;
        refresh.inputEnabled = true;

    // HOME
        home = game.add.sprite(612, 344, 'home');
        home.fixedToCamera = true;
        home.visible = false;
        home.inputEnabled = true;

    // PAUSA
        pausa = game.add.sprite(980, 20, 'pausa');
        pausa.fixedToCamera = true;
        pausa.inputEnabled = true;

        pausa.events.onInputUp.add(mettiInPausa);

    // RETRY TEXT
        retry = game.add.sprite(262, 247.5, 'retry')
        retry.visible = false;
        retry.fixedToCamera = true;

    // FLASHBACK
        //flashback cancello
        fbCanc = game.add.sprite(0, 0, 'fbCanc');
        fbCanc.visible = false;
        fbCanc.fixedToCamera = true;

        //flashback casa
        fbCasa = game.add.sprite(0, 0, 'fbCasa');
        fbCasa.visible = false;
        fbCasa.fixedToCamera = true;

        //ingresso
        ingresso = game.add.sprite(0, 0, 'ingresso');
        ingresso.visible = false;
        ingresso.fixedToCamera = true;
  },

  update: function()
  {
    // COLLISIONI
      hitGround = game.physics.arcade.collide(player, layer);
      game.physics.arcade.collide(cancChiuso, layer);      //collisione tra giocatore e mappa/layer che è istanza del livello 1
      game.physics.arcade.collide(cancAperto, layer);
      game.physics.arcade.collide(casa1, layer);
      game.physics.arcade.collide(casa2, layer);
      game.physics.arcade.collide(casa3, layer);

      game.physics.arcade.collide(chiave1, layer);
      game.physics.arcade.collide(chiave2, layer);
      game.physics.arcade.collide(arma, layer);

      game.physics.arcade.overlap(player, chiave1, prendiChiave1);
      game.physics.arcade.overlap(player, chiave2, prendiChiave2);
      game.physics.arcade.overlap(player, arma, prendiArma);

      game.physics.arcade.collide(player, cancChiuso, apriCancello);
      game.physics.arcade.collide(player, casa1, apriCasa);
      game.physics.arcade.collide(player, hitBoxIngresso, renderIngresso);

    // SEGNAGRETEL MAPPA
        segnaGretel1.cameraOffset.x = 200 + Math.min(player.x/11200*555, 820);

    // CONTROLLO CHIAVE CASA
      if (contaChiave2.visible) {
        camCasa.body.enable = true;
        spiderHard.visible = true;
        batHard.visible = true;
        mostroHard.visible = true;
      }
      else { camCasa.body.enable = false; }

    // UPDATE NEMICI
      updateMostro(mostro1,player); updateMostro(mostro2,player); updateMostro(mostro3,player); updateMostro(mostro4,player); updateMostro(mostro5,player); updateMostro(mostro6,player); updateMostro(mostro7,player);
      updateSpider(spider1,player); updateSpider(spider2,player); updateSpider(spider3,player); updateSpider(spider4,player); updateSpider(spider5,player); updateSpider(spider6,player); updateSpider(spider7,player);
      updateBat(bat1,player);       updateBat(bat2,player);       updateBat(bat3,player);       updateBat(bat4,player);       updateBat(bat5,player);       updateBat(bat6,player);       // updateBat(bat7,player);       // updateBat(bat8,player);   updateBat(bat9,player);

      updateSpider(spiderHard,player);
      updateBat(batHard,player);
      updateMostro(mostroHard,player);

    // CAMERA CASA
    var hitCamCasa = game.physics.arcade.overlap(player, camCasa);
    var hitCamOut = game.physics.arcade.overlap(player, camOut);
    var hitNewCamCasa = game.physics.arcade.overlap(player, newCamCasa);

      if (hitCamCasa) {
        game.camera.follow(camCasaOut, Phaser.Camera.FOLLOW_SMOOTH, 0.01, 0.01);
        game.time.events.add(4000, function(){    // gretel si ferma per 4 secondi, la camera si sposta sulla casa e i tre nemici si attivano
          camCasa.kill();
          spiderHard.body.enable = true;
          batHard.body.enable = true;
          mostroHard.body.enable = true;
          camOut.body.enable = true;
          newCamCasa.body.enable=true;
        })
      }
      if (hitCamOut) {
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
      }

      if (hitNewCamCasa) {
        game.camera.follow(camCasaOut, Phaser.Camera.FOLLOW_SMOOTH, 0.02, 0.02);
      }


    // CONTROLLI PLAYER

        if (player.body.velocity.x !== 0)
        {
          istruzioni1.kill();
        }

        // rallentamento
        player.body.velocity.x = 0.8*player.body.velocity.x;

        // movimento
        if (cursors.left.isDown && !hitCamCasa)
        {
          //  Effetto parallasse
          if (playerOldPos.x != player.body.x && player.alive && game.camera.x != 0 && game.camera.x != game.world.width - game.width && player.body.velocity.x < 0)
          {
            sfondo1.tilePosition.x += 0.4;
            sfondo2.tilePosition.x += 0.8;
          }
          //  Move to the left
          player.body.velocity.x = -player.speed;
          if (hitGround) {player.animations.play('left');}
          else {player.frame = 12;}
          proiettile.fireAngle = 180;
          proiettile.trackSprite(player, 10, 50);
          facingLeft = true;
          facingRight = false;
        }
        else if (cursors.right.isDown && !hitCamCasa)
        {
          //  Effetto parallasse
          if (playerOldPos.x != player.body.x && player.alive && game.camera.x != 0 && game.camera.x != game.world.width - game.width && player.body.velocity.x > 0)
          {
            sfondo1.tilePosition.x -= 0.4;
            sfondo2.tilePosition.x -= 0.8;
          }
          //  Move to the right
          player.body.velocity.x = player.speed;
          if (hitGround) {player.animations.play('right');}
          else {player.frame = 18;}
          proiettile.fireAngle = 0;
          proiettile.trackSprite(player, 65, 50);
          facingRight = true;
          facingLeft = false;
        }
        else
        {
            //  Stand still
            player.animations.stop();
            if (player.body.velocity.x > 0) {player.frame = 16;};
            if (player.body.velocity.x < 0) {player.frame = 14;};
        }

        // salto
        if (cursors.up.isDown && player.body.onFloor() && !hitCamCasa)
        {
            player.body.velocity.y = -400;
            /*
            // animazione salto
            if (player.body.velocity.x > 0) {
              player.animations.play('rightJump');
            }
            if (player.body.velocity.x < 0) {
              player.animations.play('leftJump');
            }
            if (cursors.left.isDown) {
              facingLeft = true;
              facingRight = false;
            }
            if (cursors.right.isDown) {
              facingRight = true;
              facingLeft = false;
            }
            */
        }

        // animazione salto dx sx
        /* if (!cursors.up.isDown && !hitGround && cursors.left.isDown || !cursors.up.isDown && !hitGround && facingLeft){
          player.frame = 2;
        }
        if (!cursors.up.isDown && !hitGround && cursors.right.isDown || !cursors.up.isDown && !hitGround && facingRight){
          player.frame = 28;
        } */

        // check sparo
        proiettile.onFire.add(function(){
          if (proiettile.fireAngle == 0) { shootingRight = true }
          if (proiettile.fireAngle == 180) { shootingLeft = true }
        });

        //sparo
        if(fireButton.isDown && segnaArma.visible != false && !hitCamCasa)
        {
          proiettile.fire();
          istruzioni2.kill();

          if (proiettile.fireAngle == 0 && shootingRight) {
            // player.animations.play('rightShoot');
            player.frame = 30;
            game.time.events.add(100, function(){ shootingRight = false; });
          }
          if (proiettile.fireAngle == 180 && shootingLeft) {
            //player.animations.play('leftShoot');
            player.frame = 0;
            game.time.events.add(100, function(){ shootingLeft = false; });
          }
        }
  }
}

game.state.add('Introduzione', Introduzione);

game.state.add('Livello1', Livello1);
/*
    ----------------------
    ----- LIVELLO 2 ------
    ----------------------
*/

var Livello2 =
{
  preload: function()
  {
    game.load.spritesheet('gretel2', 'assets/gretel2.png', 70, 130);
    //game.load.spritesheet('gretel3', 'assets/gretel3.png', 70, 130);
    game.load.tilemap('mappa', 'mappa_liv_2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'grass-tiles-2-small2.png');          //immagine con i tiles con cui ho costruito la mappa
    game.load.image('mappa2', 'assets/mappa2.png');
    game.load.image('interfaccia2a', 'assets/interfaccia2a.png');
    game.load.image('interfaccia2b', 'assets/interfaccia2b.png');
    game.load.image('segnaGretel', 'assets/segnaGretel.png');
    game.load.image('cuore', 'assets/cuore.png', 32, 32);
    game.load.image('cuoreMorto', 'assets/cuore_morto.png');
    game.load.image('cuoreStrega', 'assets/cuoreStrega.png');
    game.load.image('proiettile', 'assets/proiettile.png');
    game.load.image('sfondo', 'assets/bg_4.png');
    game.load.image('gemma1', 'assets/gemma1.png');
    game.load.image('gemma2', 'assets/gemma2.png');
    game.load.image('gemma3', 'assets/gemma3.png');
    game.load.image('gemma4', 'assets/gemma4.png');
    game.load.image('gemma5', 'assets/gemma5.png');
    game.load.image('med00', 'assets/med00.png');
    game.load.image('med01', 'assets/med01.png');
    game.load.image('med02', 'assets/med02.png');
    game.load.image('med03', 'assets/med03.png');
    game.load.image('med04', 'assets/med04.png');
    game.load.image('med05', 'assets/med05.png');
    game.load.image('pausa', 'assets/pausa.png');
    game.load.image('play', 'assets/play.png');
    game.load.image('home', 'assets/home.png');
    game.load.image('refresh', 'assets/refresh.png');
    game.load.spritesheet('strega', 'assets/strega.png', 181.5,400);
    game.load.spritesheet('spell', 'assets/spell.png', 81.6, 60);
    game.load.spritesheet('fuoco', 'assets/fire.png', 758, 115);
    game.load.image('gabbia', 'assets/gabbia.png');
    game.load.image('blockGabbia', 'assets/blockGabbia.png');
    game.load.image('blockGabbiaDx', 'assets/blockGabbiaDx.png');
    game.load.image('forno', 'assets/entrata_forno.png');
    game.load.image('movingPlt', 'assets/biscotto.png');
    game.load.spritesheet('fragilePlt', 'assets/wafer.png', 96, 32, 3);
    game.load.spritesheet('waferBf', 'assets/waferBf.png', 96, 32, 3);
    game.load.image('stickyPlt', 'assets/mou.png');
    game.load.image('fbGabbia', 'assets/fbGabbia.png');
    game.load.image('fbForno', 'assets/fbForno.jpg');
    game.load.image('finaleP', 'assets/finaleP.png');
    game.load.image('finaleI', 'assets/finaleI.png');
    game.load.image('finaleN', 'assets/finaleN.png');
    game.load.image('luceVerde', 'assets/luceVerde.png');
    game.load.image('arma', 'assets/arma.png');
    game.load.image('armaOmbra', 'assets/arma_ombra.png');
    game.load.spritesheet('screenGlow', 'assets/screenGlow.png',1024,768);
    game.load.image('tizzone', 'assets/tizzone.png');
    game.load.image('atrio', 'assets/atrio.png');
    game.load.image('hitBoxFuoco', 'assets/hitBoxFuoco.png');
  },

  create: function()
  {

    // SFONDO
        sfondo = game.add.tileSprite(0, 0, 2048, 7680, 'sfondo'); //y1=35
        // sfondo.width = 1024+128;

    // TILEMAP
        map = game.add.tilemap('mappa');                  //creazione della mappa
        map.addTilesetImage('terreno', 'tiles');          //fare riferimento al numero corrispondente a ogni piastrella, facendo riferimento a 'terreno' in Tiled
        map.setCollisionBetween(1, 100);                  //mappa fatta da oggetti con numero da 1 a 100 con cui il giocatore interagisce
        layer = map.createLayer('liv02');           //in Tiled si deve base dul livello 1

    // LUCE VERDE
        luceVerde1 = game.add.sprite(650, 6195, 'luceVerde');
        luceVerde1.alpha = 0.5;

        luceVerde2 = game.add.sprite(650, 4910, 'luceVerde');
        luceVerde2.alpha = 0.5;

    // PLAYER
        player = game.add.sprite(playerSpawnX2, playerSpawnY2, 'gretel2');
        player.frame = 15;
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0;
        player.body.gravity.y = 400;
        player.body.collideWorldBounds = true;
        player.invulnerabile = false;
        player.speed = 200;
        player.slide = 0.7;
        player.jump = 400;

    // ANIMAZIONI LIVELLO 2
        player.animations.add('left', [13, 12, 11, 10, 9, 8, 7, 6], 7, true);
        player.animations.add('right', [17, 18, 19, 20, 21, 22, 23, 24], 7, true);
        player.animations.add('rightJump', [25, 26, 27, 28], 8, false);
        player.animations.add('leftJump', [5, 4, 3, 2], 8, false);
        player.animations.add('leftShoot', [0, 1], 5, false);
        player.animations.add('rightShoot', [29, 30], 5, false);

    // ANIMAZIONI BOSSFIGHT
        player.animations.add('leftBf', [44, 43, 42, 41, 40, 39, 38, 37], 7, true);
        player.animations.add('rightBf', [48, 49, 50, 51, 52, 53, 54, 55], 7, true);
        player.animations.add('rightJumpBf', [56, 57, 58, 59], 8, false);
        player.animations.add('leftJumpBf', [36, 35, 34, 33], 8, false);
        player.animations.add('leftShootBf', [31, 32], 5, false);
        player.animations.add('rightShootBf', [61, 60], 5, false);

    //  PROIETTILI GRETEL
        proiettile = game.add.weapon(50, 'proiettile');
        game.physics.arcade.enable(proiettile);
        proiettile.bullets.setAll("width", 15);
        proiettile.bullets.setAll("height", 15);
        proiettile.setBulletBodyOffset(20, 20);
        proiettile.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        proiettile.bulletSpeed = 400;
        proiettile.fireRate = 2000;
        proiettile.trackSprite(player, 65, 50);
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    // LAMPEGGIO ARMA ONSHOOT
        proiettile.onFire.add(function(){
          for (var i = 250; i<2000; i+=250)
          {
            if (i % 500 == 0) {
              game.time.events.add(i, function() {segnaArma.alpha = 0.3;});
            }
            else {
              game.time.events.add(i, function() {segnaArma.alpha = 1;});
            }
          }
        });

        cursors = game.input.keyboard.createCursorKeys()

    // CAMERA
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.4, 0.4);
        // game.camera.bounds = new Phaser.Rectangle(0, 200, 900, 300);
        game.camera.deadzone = new Phaser.Rectangle(0, 200, 900, 300);
        game.world.setBounds(0, 0, 2048, 7680);          //dimensioni totali del gioco anche se non inquadrato
        layer.resizeWorld();          //dimensione del mondo adattato alla mia mappa

    // CAMERA STANZETTE
        camStanzetta1 = game.add.sprite(960,6208,'nnt');
        game.physics.arcade.enable(camStanzetta1);
        camStanzetta1.body.immovable = true;
        camStanzetta1.width = 256;     camStanzetta1.height = 160;
        camStanzetta1.alpha = 0;

        camStanzetta1In = game.add.sprite(780,6248,'nnt');
        camStanzetta1In.alpha = 0;
        camStanzetta1Out = game.add.sprite(-140,6228,'nnt');
        camStanzetta1Out.alpha = 0;

        camStanzetta2 = game.add.sprite(960,4928,'nnt');
        game.physics.arcade.enable(camStanzetta2);
        camStanzetta2.body.immovable = true;
        camStanzetta2.width = 256;     camStanzetta2.height = 160;
        camStanzetta2.alpha = 0;

        camStanzetta2In = game.add.sprite(780,4948,'nnt');
        camStanzetta2In.alpha = 0;
        camStanzetta2Out = game.add.sprite(-140,4948,'nnt');
        camStanzetta2Out.alpha = 0;

    // CAMERA CUCINA
        camForno = game.add.sprite(350,3822,'nnt');
        game.physics.arcade.enable(camForno);
        camForno.body.immovable = true;
        camForno.width = 330;     camForno.height = 800;
        camForno.alpha = 0;

        camFornoOut = game.add.sprite(500,4300,'nnt');  //camera per mostrare la cucina
        camFornoOut.alpha = 0;

    // CAMERA INGRESSO FORNO (FLASHBACK)
        camIngressoForno = game.add.sprite(680,3822,'nnt');
        game.physics.arcade.enable(camIngressoForno);
        camIngressoForno.body.immovable = true;
        camIngressoForno.width = 300;     camIngressoForno.height = 800;
        camIngressoForno.alpha = 0;

    // CAMERA FORNO
        camForno2 = game.add.sprite(1100,3822,'nnt');
        game.physics.arcade.enable(camForno2);
        camForno2.body.immovable = true;
        camForno2.width = 990;     camForno2.height = 800;
        camForno2.alpha = 0;

        camForno2Out = game.add.sprite(1800,4300,'nnt');
        camForno2Out.alpha = 0;

        // blocco che impedisce di uscire dal forno una volta iniziata la bossfight
        blockForno = game.add.sprite(992,4000,'nnt');
        game.physics.arcade.enable(blockForno);
        blockForno.body.immovable = true;
        blockForno.width = 32;     blockForno.height = 576;
        blockForno.alpha = 0;

        blockForno2 = game.add.sprite(992,3850,'nnt');
        game.physics.arcade.enable(blockForno2);
        blockForno2.body.immovable = true;
        blockForno2.width = 32;     blockForno2.height = 576;
        blockForno2.alpha = 0;

    // FORNO
        forno1 = game.add.sprite(891,4015,'forno');
        game.physics.arcade.enable(forno1);
        forno1.body.gravity.y = 400;

        forno2 = game.add.sprite(891,4215,'forno');
        game.physics.arcade.enable(forno2);
        forno2.body.gravity.y = 400;

    // CREAZIONE STREGA
        // strega
        strega = game.add.sprite(1780, 3950, 'strega');
        strega.animations.add('idle', [0, 1, 2, 3, 4], 10, true);
        strega.animations.add('cast', [5, 6, 7, 8, 9, 10, 9, 8, 7 ,6, 5], 10, true);
        strega.animations.add('shoot', [11, 12, 13, 14, 15, 16, 17, 18, 19 , 20, 21, 22, 23, 24, 25, 26, 27, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11], 60, false);
        strega.animations.add('hit', [30,31], 10, true);
        strega.animations.add('death', [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56], 15, false);
        game.physics.arcade.enable(strega);
        // strega.width = 200;     strega.height = 400;
        strega.body.immovable = true;
        strega.body.collideWorldBounds = true;
        strega.invulnerabile = false;
        strega.vite = 4;
        strega.normal = true;      strega.normalCastTime = 4000;      strega.normalSpellSpeed = 300;
        strega.advanced = false;    strega.advancedCastTime = 4000;     strega.advancedSpellSpeed = 300;
        strega.triggered = false;
        strega.isShooting = false;
        strega.isCasting = false;
        strega.dead = false;

        // hitbox strega
        stregaHitBox = game.add.sprite(strega.x+30, strega.y+100, 'nnt');
        game.physics.arcade.enable(stregaHitBox);
        stregaHitBox.body.immovable = true;
        stregaHitBox.width = 70;     stregaHitBox.height = 70;
        stregaHitBox.alpha = 0;

        // arma strega
        strega.weapon = game.add.weapon(10, 'spell');
        game.physics.arcade.enable(strega.weapon);
        strega.weapon.addBulletAnimation('shoot', [0,1,2,3,4,5,6,7,8,9,10,11,12,4,5,6,7,8,9,10,11,4,5,6,7,8,9,10,11,4,5,6,7,8,9,10,11], 10, false);
        strega.weapon.setBulletBodyOffset(20, 20);
        strega.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        strega.weapon.bulletAngleOffset = 90;
        strega.weapon.trackSprite(strega,50,235);
        strega.weapon.bulletAngleOffset = 190;

        // animazioni strega (si completa in updateStrega)
        strega.weapon.onFire.add(function()
        {
          strega.isCasting = false;
          strega.isShooting = true;
          strega.animations.play('shoot');
          game.time.events.add(800, function(){ strega.isShooting = false; })  // timer dopo il quale la strega stoppa l'animazione di shooting e inizia quella di idle (su update)
          game.time.events.add(2000, function(){ strega.isCasting = true; })  // timer che dopo 2 secondi di idle rimette l'animazione di cast alla strega (!!!!da ricalibrare se la strega cambia il suo castTime!!!)
        }
        );

    // FUOCO
        fuoco = game.add.sprite(1408, 4558, 'fuoco');
        game.physics.arcade.enable(fuoco);
        fuoco.alpha=0.8;
        fuoco.animations.add('fiamma', [0, 1, 2, 3, 4], 7, true);

    // HITBOX FUOCO
        hitBoxFuoco = game.add.sprite(1408, 4650, 'hitBoxFuoco');
        game.physics.arcade.enable(hitBoxFuoco);
        hitBoxFuoco.visible = false;

    // PEZZI MEDAGLIONE
        gemma1 = game.add.sprite(830, 7500, 'gemma1');
        game.physics.arcade.enable(gemma1);
        gemma1.body.gravity.y = 0;
        gemma1.body.collideWorldBounds = true;

        gemma2 = game.add.sprite(80, 7180, 'gemma2');
        game.physics.arcade.enable(gemma2);
        gemma2.body.gravity.y = 0;
        gemma2.body.collideWorldBounds = true;

        gemma3 = game.add.sprite(1130, 6310, 'gemma3');
        game.physics.arcade.enable(gemma3);
        gemma3.body.gravity.y = 0;
        gemma3.body.collideWorldBounds = true;

        gemma4 = game.add.sprite(1130, 5024, 'gemma4');
        game.physics.arcade.enable(gemma4);
        gemma4.body.gravity.y = 0;
        gemma4.body.collideWorldBounds = true;

        gemma5 = game.add.sprite(864, 4842, 'gemma5');
        game.physics.arcade.enable(gemma5);
        gemma5.body.gravity.y = 0;
        gemma5.body.collideWorldBounds = true;

    // CREAZIONE PIATTAFORME
        platforms = game.add.physicsGroup();
        fragilePlatforms = game.add.physicsGroup();
        stickyPlatforms = game.add.physicsGroup();

        movingPlt1 = createMovingPlatform(512,6816,512,800);
        fragilePlt1 = createFragilePlatform(256,6656);
        stickyPlt1 = createStickyPlatform(288,6368);
        stickyPlt2 = createStickyPlatform(544,6016);
        stickyPlt3 = createStickyPlatform(416,6016);
        fragilePlt2 = createFragilePlatform(0,5856);
        fragilePlt3 = createFragilePlatform(288,5504);
        fragilePlt4 = createFragilePlatform(576,5504);
        movingPlt2 = createMovingPlatform(0,5376,0,250);
        fragilePlt5 = createFragilePlatform(256,5184);
        movingPlt3 = createMovingPlatform(704,5184,704,860);
        fragilePlt6 = createFragilePlatform(512,4896);
        fragilePlt7 = createFragilePlatform(608,4896);
        fragilePlt8 = createFragilePlatform(704,4896);

        // bossfight
        movingPlt4 = createMovingPlatformBf(1248,4418,1248,1400);
        fragilePlt9 = createFragilePlatformBf(1072,4224);

    // GABBIA
        gabbia1 = game.add.sprite(730, 7334, 'gabbia');
        game.physics.arcade.enable(gabbia1);

        gabbia2 = game.add.sprite(730, 7334, 'gabbia');
        game.physics.arcade.enable(gabbia2);

        blockGabbia = game.add.sprite(840,7325, 'blockGabbia');
        game.physics.arcade.enable(blockGabbia);
        blockGabbia.width = 20;
        blockGabbia.body.immovable = true;
        blockGabbia.alpha = 0;

        blockGabbiaDx = game.add.sprite(920,7440, 'blockGabbiaDx');
        game.physics.arcade.enable(blockGabbiaDx);
        blockGabbiaDx.body.immovable = true;
        blockGabbiaDx.alpha = 0;

        blockGabbiaSx = game.add.sprite(760,7430, 'blockGabbiaDx');
        game.physics.arcade.enable(blockGabbiaSx);
        blockGabbiaSx.height = 20;
        blockGabbiaSx.body.immovable = true;
        blockGabbiaSx.body.enable = false;
        blockGabbiaSx.alpha = 0;

    // INTERFACCIA

      interfaccia2a = game.add.sprite(0, 0, 'interfaccia2a');
      interfaccia2a.fixedToCamera = true;

      interfaccia2b = game.add.sprite(0, 0, 'interfaccia2b');
      interfaccia2b.fixedToCamera = true;
      interfaccia2b.visible = false;

      // MAPPA
            // mappa2
            mappa2 = game.add.sprite(975, 100, 'mappa2');
            mappa2.fixedToCamera = true;

            //segnaGretel2
            segnaGretel2 = game.add.sprite(983, 700, 'segnaGretel');
            segnaGretel2.fixedToCamera = true;

            if (noMappa2 == true) {mappa2.visible = false; segnaGretel2.visible = false; interfaccia2a.visible = false; interfaccia2b.visible = true;}
            else {mappa2.visible = true; segnaGretel2.visible = true; interfaccia2a.visible = true; interfaccia2b.visible = false;}

        // VITE MORTE
            viteMorte = game.add.group();
            for (var j=0; j<3; j++)
            {
              var cuoreMorto = viteMorte.create(110 - (j*45), 20 , 'cuoreMorto')
            }
            viteMorte.fixedToCamera = true;

        // VITE
            vite = game.add.group();
            for(var i=0; i<3; i++)
            {
              var cuore = vite.create(110 - (i*45), 20 , 'cuore')
            }
            vite.fixedToCamera = true;

        // VITE MORTE STREGA
            viteStregaMorte = game.add.group();
            for (var l=0; l<3; l++)
            {
              var cuoreMorto = viteStregaMorte.create(840 + (l*45), 20 , 'cuoreMorto')
            }
            viteStregaMorte.alpha = 0;
            viteStregaMorte.fixedToCamera = true;

        // VITE STREGA
            viteStrega = game.add.group();
            for (var k=0; k<3; k++)
            {
              var cuoreStrega = viteStrega.create(840 + (k*45), 20 , 'cuoreStrega')
            }
            viteStrega.alpha = 0;
            viteStrega.fixedToCamera = true;

        // MEDAGLIONE
            med00 = game.add.sprite(15, 60, 'med00');
            med00.fixedToCamera = true;
            med00.visible = true;

            med01 = game.add.sprite(15, 60, 'med01');
            med01.fixedToCamera = true;
            if (playerCp1) {med01.visible = true;}
            else {med01.visible = false;}

            med02 = game.add.sprite(15, 60, 'med02');
            med02.fixedToCamera = true;
            if (playerCp2) {med02.visible = true;}
            else {med02.visible = false;}

            med03 = game.add.sprite(15, 60, 'med03');
            med03.fixedToCamera = true;
            if (playerCp3) {med03.visible = true;}
            else {med03.visible = false;}

            med04 = game.add.sprite(15, 60, 'med04');
            med04.fixedToCamera = true;
            if (playerCp4) {med04.visible = true;}
            else {med04.visible = false;}

            med05 = game.add.sprite(15, 60, 'med05');
            med05.fixedToCamera = true;
            if (playerCp5) {med05.visible = true;}
            else {med05.visible = false;}

        // SEGNA ARMA OMBRA
            armaOmbra = game.add.sprite(90, 70, 'armaOmbra');
            armaOmbra.fixedToCamera = true;

        // SEGNA ARMA
            segnaArma = game.add.sprite(90, 70, 'arma');
            segnaArma.fixedToCamera = true;
            segnaArma.height = 26;
            segnaArma.width = 26;

    // SCREEN GLOW
        screenGlow = game.add.sprite(0, 0, 'screenGlow');
        screenGlow.animations.add('glow', [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0], 60, false);
        screenGlow.alpha = 0;
        screenGlow.fixedToCamera = true;

    // PLAY
        play = game.add.sprite(332, 344, 'play');
        play.fixedToCamera = true;
        play.inputEnabled = true;
        play.visible = false;

        game.input.onDown.add(gestioneClickPausa2, self);

    // REFRESH
        refresh = game.add.sprite(472, 344, 'refresh');
        refresh.fixedToCamera = true;
        refresh.visible = false;
        refresh.inputEnabled = true;

    // HOME
        home = game.add.sprite(612, 344, 'home');
        home.fixedToCamera = true;
        home.visible = false;
        home.inputEnabled = true;

    // PAUSA
        pausa = game.add.sprite(980, 20, 'pausa');
        pausa.fixedToCamera = true;
        pausa.inputEnabled = true;

        pausa.events.onInputUp.add(mettiInPausa);

    // FLACHBACK
        // flashback gabbia
        fbGabbia = game.add.sprite(0, 0, 'fbGabbia');
        fbGabbia.visible = false;
        fbGabbia.fixedToCamera = true;

        // flashback forno
        fbForno = game.add.sprite(0, 0, 'fbForno');
        fbForno.visible = false;
        fbForno.fixedToCamera = true;

    // RENDER ATRIO
        atrio = game.add.sprite(0, 0, 'atrio');
        atrio.fixedToCamera = true;
        game.paused = true;

        game.input.onDown.add(fineAtrio, self);

    // FINALI
        // finale positivo
        finaleP = game.add.sprite(0, 0, 'finaleP');
        finaleP.visible = false;
        finaleP.fixedToCamera = true;

        // finale intermedio
        finaleI = game.add.sprite(0, 0, 'finaleI');
        finaleI.visible = false;
        finaleI.fixedToCamera = true;

        // finale negativo
        finaleN = game.add.sprite(0, 0, 'finaleN');
        finaleN.visible = false;
        finaleN.fixedToCamera = true;
  },

  update: function()
  {
    // COLLISIONI
      game.physics.arcade.collide(player, layer);
      // spiderHitGround = game.physics.arcade.collide(spider1,layer);  // ----- PROBLEMI CON SPIDER COLLISION CHECK!!!
      game.physics.arcade.collide(player, blockForno);
      game.physics.arcade.collide(player, blockForno2);

    // COLLISIONE GABBIA
      game.physics.arcade.collide(player, blockGabbia);
      game.physics.arcade.collide(player, blockGabbiaDx);
      game.physics.arcade.collide(player, blockGabbiaSx);

    // COLLISIONI FORNO
      game.physics.arcade.collide(forno1, layer);
      game.physics.arcade.collide(forno2, layer);

      game.physics.arcade.overlap(player, forno2, function() {game.paused = true; fbForno.visible = true; game.input.onDown.add(stopFbForno, self); forno2.kill();});
      game.physics.arcade.overlap(player, gabbia2, function() {game.paused = true; fbGabbia.visible = true; game.input.onDown.add(stopFbGabbia, self); gabbia2.kill();});

    // COLLISIONI NEMICI
      game.physics.arcade.overlap(strega.weapon.bullets, player, perditaVita2);

    // COLLISIONI CON STREGA
      game.physics.arcade.overlap(player, strega, function(){ morteIstantanea(player,strega); });
      game.physics.arcade.collide(proiettile.bullets, stregaHitBox, hitStrega);

    // COLLISIONI CON FUOCO
      game.physics.arcade.overlap(player, hitBoxFuoco, function(){ morteIstantanea(player,hitBoxFuoco);});

    // COLLISIONI CAMERA
      var hitStanzetta = game.physics.arcade.overlap(player, camStanzetta1);

        if (hitStanzetta && hitStanzettaFlag == false)
        {    // se il player è appena entrato nella stanzetta
          hitStanzettaFlag = true;
          game.camera.follow(camStanzetta1In, Phaser.Camera.FOLLOW_SMOOTH, 0.04, 0.04);
        }
        if (!hitStanzetta && hitStanzettaFlag)    // se il player è appena uscito dalla stanzetta
        {
          // game.camera.x = 0;
          game.camera.follow(camStanzetta1Out, Phaser.Camera.FOLLOW_SMOOTH, 0.01, 0.01);    // punto la telecamera su un quadratino invisibile (per riportare la cam al posto con una transizione)
          game.time.events.add(500, function()
          {
            game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.4, 0.4);
            game.camera.deadzone = new Phaser.Rectangle(0, 200, 900, 300);
          });
          hitStanzettaFlag = false;
        }

      var hitStanzetta2 = game.physics.arcade.overlap(player, camStanzetta2);

        if (hitStanzetta2 && hitStanzettaFlag2 == false)
        {
          // se il player è appena entrato nella stanzetta
          hitStanzettaFlag2 = true;
          game.camera.follow(camStanzetta2In, Phaser.Camera.FOLLOW_SMOOTH, 0.04, 0.04);
        }

        if (!hitStanzetta2 && hitStanzettaFlag2)    // se il player è appena uscito dalla stanzetta
        {
          // game.camera.x = 0;
          game.camera.follow(camStanzetta2Out, Phaser.Camera.FOLLOW_SMOOTH, 0.01, 0.01);    // punto la telecamera su un quadratino invisibile (per riportare la cam al posto con una transizione)
          game.time.events.add(500, function()
          {
            game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.4, 0.4);
            game.camera.deadzone = new Phaser.Rectangle(0, 200, 900, 300);
          });
          hitStanzettaFlag2 = false;
        }

    // TELECAMERA CUCINA
    var hitForno = game.physics.arcade.overlap(player, camForno);

      if (hitForno && hitFornoFlag == false)
      {
        game.camera.follow(camFornoOut, Phaser.Camera.FOLLOW_LOCKON, 0.05, 0.05);
        hitFornoFlag = true;
      }
      if (!hitForno && hitFornoFlag)
      {
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.4, 0.4);
        game.camera.deadzone = new Phaser.Rectangle(0, 200, 900, 300);
        // game.camera.x = (game.camera.x - 67) / 1000 * game.time.physicsElapsedMS
        hitFornoFlag = false;
      }

    // TELECAMERA INGRESSO FORNO (FLASHBACK)
    var hitIngressoForno = game.physics.arcade.overlap(player, camIngressoForno);

      if (hitIngressoForno)
      {
        game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
      }

    // BLOCCO USCITA FORNO NELLA Bossfight
      if (!blockFornoFlag)
      {
        blockForno.body.enable = false;
      }
      else
      {
        blockForno.body.enable = true;
        game.time.events.add(200, function() { camForno2.kill(); });  // una bestemmia
      }

    // TELECAMERA FORNO (NEL MENTRE CHE HITFORNOFLAG 2 IL GIOCATORE E LA STREGA NON SI MUOVONO. DOPO 6 SECONDI VIENE KILLATA LA CAM ED INIZIA LA BOSSFIGHT)
    var hitForno2 = game.physics.arcade.overlap(player, camForno2);
      if (hitForno2)
      {
        if (camCheckpoint == false)
        {    // controllo camera al checkpoint
          viteStrega.alpha = 1;
          viteStregaMorte.alpha = 1;
          mappa2.visible = false;
          interfaccia2a.visible = false;
          interfaccia2b.visible = true;
          segnaGretel2.visible = false;
          game.camera.follow(camForno2Out, Phaser.Camera.FOLLOW_SMOOTH, 0.01, 0.01);
          game.time.events.add(4000,function()
          {
            // inizia la bossfight
            camForno2.kill();
            startBossFight = true;
            hitForno2 = false;
            blockFornoFlag = true;
          }
          )
        }
        else
        {
          game.camera.x = 1024;
          game.camera.y = 3900;
          game.camera.follow(camForno2Out, Phaser.Camera.FOLLOW_SMOOTH, 0.01, 0.01);
          startBossFight = true;
          hitForno2 = false;
        }
      }

    // ANIMAIZIONE FUOCO MORTE ISTANTANEA
      fuoco.animations.play('fiamma');

    // COLLISIONI MEDAGLIONE
      game.physics.arcade.overlap(player, gemma1, prendiGemma, function() {med01.visible = true;});
      game.physics.arcade.collide(gemma1, layer);

      game.physics.arcade.overlap(player, gemma2, prendiGemma, function() {med02.visible = true;});
      game.physics.arcade.collide(gemma2, layer);

      game.physics.arcade.overlap(player, gemma3, prendiGemma, function() {med03.visible = true; luceVerde1.kill();});
      game.physics.arcade.collide(gemma3, layer);

      game.physics.arcade.overlap(player, gemma4, prendiGemma, function() {med04.visible = true; luceVerde2.kill();});
      game.physics.arcade.collide(gemma4, layer);

      game.physics.arcade.overlap(player, gemma5, prendiGemma, function() {med05.visible = true;});
      game.physics.arcade.collide(gemma5, layer);

    // COLLISIONI PIATTAFORME
      hitPlatform = game.physics.arcade.collide(player, platforms);

    // COLLISIONI PIATTAFORME SCIVOLOSE
      hitSticky = false;
      player.slide = 0.7;
      player.speed = 200;

      game.physics.arcade.collide(player, stickyPlatforms, function() {
        player.slide = 0.999;
        player.speed = 80;
        player.jump = player.jump;
        hitSticky = true;
      });


    // SEGNAGRETEL2 MAPPA
        segnaGretel2.cameraOffset.y = Math.max(player.y/7680*1409 - 680, 100);
        //segnaGretel2.cameraOffset.y = Math.max(player.y/7680*400, 470);    //Math.max(player.y/7680*750, 150)

        // UPDATE STREGA
                if (strega.alive && startBossFight == true)
                {
                updateStrega(strega);
                }

        // UPDATE PIATTAFORME

            updateMovingPlatform(movingPlt1);
            updateFragilePlatform(fragilePlt1);
            updateFragilePlatform(fragilePlt2);
            updateFragilePlatform(fragilePlt3);
            updateFragilePlatform(fragilePlt4);
            updateMovingPlatform(movingPlt2);
            updateFragilePlatform(fragilePlt5);
            // updateStickyPlatform(stickyPlt1);
            // updateStickyPlatform(stickyPlt2);
            updateMovingPlatform(movingPlt3);
            updateFragilePlatform(fragilePlt6);
            updateFragilePlatform(fragilePlt7);
            updateFragilePlatform(fragilePlt8);
            updateMovingPlatform(movingPlt4);
            updateFragilePlatform(fragilePlt9);

// CONTROLLI PLAYER 2 CASA
  if (player.x > 992 && player.y < 4608 || player.x > 270 && player.y < 4608 && player.y > 4400) {

    // rallentamento
    player.body.velocity.x = player.slide*player.body.velocity.x;

    // movimento
    if (cursors.left.isDown && !hitForno2)
    {
      //  Move to the left
      player.body.velocity.x = -player.speed;
      if (hitSticky || jumpFragilePlatforms && player.body.onFloor() || hitPlatform) {player.animations.play('leftBf');}
      else {player.frame = 43;}
      proiettile.fireAngle = 180;
      proiettile.trackSprite(player, 10, 50);
      facingLeft = true;
      facingRight = false;
    }
    else if (cursors.right.isDown && !hitForno2)
    {
      //  Move to the right
      player.body.velocity.x = player.speed;
      if (hitSticky || jumpFragilePlatforms && player.body.onFloor() || hitPlatform) {player.animations.play('rightBf');}
      else {player.frame = 49;}
      proiettile.fireAngle = 0;
      proiettile.trackSprite(player, 65, 50);
      facingRight = true;
      facingLeft = false;
    }
    else
    {
        //  Stand still
        player.animations.stop();
        if (player.body.velocity.x > 0) {player.frame = 47;};
        if (player.body.velocity.x < 0) {player.frame = 45;};
    }

    // salto (controllo se collide con le varie piattaforme e se non tocca la cam forno)
    if (cursors.up.isDown && player.body.onFloor() && hitFornoFlag || cursors.up.isDown && player.body.onFloor() && !hitForno2 || cursors.up.isDown && player.body.touching.down && hitSticky && !hitForno2 || cursors.up.isDown && player.body.touching.down && jumpFragilePlatforms && !hitForno2 && !hitForno && !hitIngressoForno|| cursors.up.isDown && player.body.touching.down && hitPlatform && !hitForno2 || cursors.up.isDown && player.body.touching.down && hitStanzetta && hitStanzetta2)
    {
        player.body.velocity.y = -player.jump;          //-400
    }

    // check sparo
    proiettile.onFire.add(function(){
      if (proiettile.fireAngle == 0) { shootingRight = true }
      if (proiettile.fireAngle == 180) { shootingLeft = true }
    });

    //sparo
    if(fireButton.isDown && segnaArma.visible != false && !hitForno2)
    {
      proiettile.fire();

      if (proiettile.fireAngle == 0 && shootingRight) {
        // player.animations.play('rightShoot');
        player.frame = 59;
        game.time.events.add(100, function(){ shootingRight = false; });
      }
      if (proiettile.fireAngle == 180 && shootingLeft) {
        //player.animations.play('leftShoot');
        player.frame = 31;
        game.time.events.add(100, function(){ shootingLeft = false; });
      }
    }
}

// CONTROLLI PLAYER FORNO
else{
  // rallentamento
  player.body.velocity.x = player.slide*player.body.velocity.x;

  // movimento
  if (cursors.left.isDown && !hitForno2)
  {
    //  Move to the left
    player.body.velocity.x = -player.speed;
    if (hitSticky || jumpFragilePlatforms && player.body.onFloor() || jumpFragilePlatforms && player.body.touching.down || hitPlatform) {player.animations.play('left');}
    else {player.frame = 12;}
    proiettile.fireAngle = 180;
    proiettile.trackSprite(player, 10, 50);
    facingLeft = true;
    facingRight = false;
  }
  else if (cursors.right.isDown && !hitForno2)
  {
    //  Move to the right
    player.body.velocity.x = player.speed;
    if (hitSticky || jumpFragilePlatforms && player.body.onFloor() || jumpFragilePlatforms && player.body.touching.down || hitPlatform) {player.animations.play('right');}
    else {player.frame = 18;}
    proiettile.fireAngle = 0;
    proiettile.trackSprite(player, 65, 50);
    facingRight = true;
    facingLeft = false;
  }
  else
  {
    //  Stand still
    player.animations.stop();
    if (player.body.velocity.x > 0) {player.frame = 16;};
    if (player.body.velocity.x < 0) {player.frame = 14;};
  }

  // salto (controllo se collide con le varie piattaforme e se non tocca la cam forno)
  if (cursors.up.isDown && player.body.onFloor() && hitFornoFlag || cursors.up.isDown && player.body.onFloor() && !hitForno2 || cursors.up.isDown && player.body.touching.down && hitSticky && !hitForno2 || cursors.up.isDown && player.body.touching.down && jumpFragilePlatforms && !hitForno2 && !hitForno && !hitIngressoForno|| cursors.up.isDown && player.body.touching.down && hitPlatform && !hitForno2 || cursors.up.isDown && player.body.touching.down && hitStanzetta && hitStanzetta2)
  {
    player.body.velocity.y = -player.jump;          //-400
  }

  // check sparo
  proiettile.onFire.add(function(){
    if (proiettile.fireAngle == 0) { shootingRight = true }
    if (proiettile.fireAngle == 180) { shootingLeft = true }
  });

  //sparo
  if(fireButton.isDown && segnaArma.visible != false && !hitForno2)
  {
    proiettile.fire();

    if (proiettile.fireAngle == 0 && shootingRight) {
      // player.animations.play('rightShoot');
      player.frame = 30;
      game.time.events.add(100, function(){ shootingRight = false; });
    }
    if (proiettile.fireAngle == 180 && shootingLeft) {
      //player.animations.play('leftShoot');
      player.frame = 0;
      game.time.events.add(100, function(){ shootingLeft = false; });
    }
  }
  }

}

}

game.state.add('Introduzione', Introduzione);

game.state.add('Livello2', Livello2);

/*
    ----------------------
    ----- FUNCTIONS ------
    ---- INTRODUZIONE ----
    ----------------------
*/

function voltaPagina(event)
{
    if(event.x < 200)
    {
      onClickSx()
    }
    if (event.x > 824)
    {
      onClickDx()
    }
    if (event.x > 487 && event.x < 537 && event.y > 698 && event.y < 748)
    {
      pag1.visible = true;
      home.visible = false;
      pag2.visible = false;
      pag3.visible = false;
      pag4.visible = false;
      pag5.visible = false;
      pag6.visible = false;
      pag7.visible = false;
      pag8.visible = false;
      pag9.visible = false;
      pag10.visible = false;
      pag11.visible = false;
    }
}

function onClickDx()
{
  if (pag1.visible == true) {pag1.visible = false; pag2.visible = true; home.visible = true;}
  else if (pag2.visible == true) {pag2.visible = false; pag3.visible = true}
  else if (pag3.visible == true) {pag3.visible = false; pag4.visible = true}
  else if (pag4.visible == true) {pag4.visible = false; pag5.visible = true}
  else if (pag5.visible == true) {pag5.visible = false; pag6.visible = true}
  else if (pag6.visible == true) {pag6.visible = false; pag7.visible = true}
  else if (pag7.visible == true) {pag7.visible = false; pag8.visible = true}
  else if (pag8.visible == true) {pag8.visible = false; pag9.visible = true}
  else if (pag9.visible == true) {pag9.visible = false; pag10.visible = true}
  else if (pag10.visible == true) {pag10.visible = false; pag11.visible = true}
  else if (pag11.visible == true) {game.state.start('Livello1', Livello1)}
}

function onClickSx()
{
  if (pag2.visible == true) {pag2.visible = false; pag1.visible = true; home.visible = false;}
  else if (pag3.visible == true) {pag3.visible = false; pag2.visible = true}
  else if (pag4.visible == true) {pag4.visible = false; pag3.visible = true}
  else if (pag5.visible == true) {pag5.visible = false; pag4.visible = true}
  else if (pag6.visible == true) {pag6.visible = false; pag5.visible = true}
  else if (pag7.visible == true) {pag7.visible = false; pag6.visible = true}
  else if (pag8.visible == true) {pag8.visible = false; pag7.visible = true}
  else if (pag9.visible == true) {pag9.visible = false; pag8.visible = true}
  else if (pag10.visible == true) {pag10.visible = false; pag9.visible = true}
  else if (pag11.visible == true) {pag11.visible = false; pag10.visible = true}
}

/*
----------------------
----- FUNCTIONS ------
----- LIVELLO 1 ------
----------------------
*/

function mettiInPausa()
{
  game.paused = true;
  play.visible = true;
  refresh.visible = true;
  home.visible = true;
}

function gestioneClickPausa1(event)
{
    // play
    if(game.paused == true && event.x > 332 && event.x < 412 && event.y > 344 && event.y < 424 && fbCanc.visible == false && fbCasa.visible == false && ingresso.visible == false && retry.visible == false)
    {
      game.paused = false;
      play.visible = false;
      refresh.visible = false;
      home.visible = false;
    }
    // refresh
    if (game.paused == true && event.x > 472 && event.x < 552 && event.y > 344 && event.y < 424 && fbCanc.visible == false && fbCasa.visible == false && ingresso.visible == false && retry.visible == false)
    {
      game.paused = false;
      fromZero1();
    }
    // home
    if (game.paused == true && event.x > 612 && event.x < 692 && event.y > 344 && event.y < 424 && fbCanc.visible == false && fbCasa.visible == false && ingresso.visible == false && retry.visible == false)
    {
      game.paused = false;
      game.state.start('Introduzione', Introduzione);
    }

}

function apriCancello()
{
  if (cancChiuso.alive = true && contaChiave1.visible == true)
  {
    player.body.velocity.x = 0;
    cancChiuso.body.velocity.x = 0;
    cancChiuso.kill();
    cancAperto.alpha = 1;
    fbCanc.visible = true;
    game.paused = true;
  }

  contaChiave1.alpha = 0.5;

  game.input.onDown.add(stopFbCanc, self);

}

function apriCasa()
{
  if (contaChiave2.visible != false)
  {
    player.body.velocity.x = 0;
    casa1.body.velocity.x = 0;
    casa1.kill();
    game.paused = true;
    fbCasa.visible = true;
    casa2.alpha = 1;
    casa3.alpha = 1;
  }

  contaChiave2.alpha = 0.5;

  game.input.onDown.add(stopFbCasa, self);
}

function renderIngresso()
{
  game.paused = true;
  ingresso.visible = true;

  game.input.onDown.add(stopIngresso, self);
}

function stopIngresso()
{
  game.state.start('Livello2', Livello2);
}

function stopFbCanc()
{
  fbCanc.visible = false;
  game.paused = false;
}

function stopFbCasa()
{
  fbCasa.visible = false;
  game.paused = false;
}

function prendiChiave1(player, chiave1)
{
  chiave1.kill();
  contaChiave1.visible = true;
  chiaveOmbra1.kill();
}

function prendiChiave2(player, chiave2)
{
  chiave2.kill();
  contaChiave2.visible = true;
  chiaveOmbra2.kill();
}

function prendiArma(player, arma)
{
  arma.kill();
  segnaArma.visible = true;
}

function perditaVita1(player,enemy)
{
    cuore = vite.getFirstAlive();

    // controllo player se è a destra o sinistra
    if (player.x <= enemy.x && !player.invulnerabile) {
        player.body.velocity.x = -(player.body.velocity.x + 1500);
        game.time.events.add(500, function() {player.body.velocity.x = 0;})
    }
    else if (player.x >= enemy.x && !player.invulnerabile) {
      player.body.velocity.x = player.body.velocity.x + 1500;
      game.time.events.add(500, function() {player.body.velocity.x = 0;})
    }

    // perdita vita, screenglow, lampeggio e invulnerabilità temporanea
    if (cuore && player.invulnerabile == false)
    {
      cuore.kill();

      // screenglow e glow ultimo cuore
      if (vite.countLiving() == 1) {
      //  screenGlow.alpha=1;
      //  screenGlow.animations.play('glow', 20, true);
        for (var i = 250; i<300000; i+=250)
        {
          if (i % 500 == 0) {
            game.time.events.add(i, function() { vite.alpha = 0;});
          }
          else {
            game.time.events.add(i, function() { vite.alpha = 1;});
          }
        }
        // screenGlow.alpha= 0.5;
        //screenGlow.animations.play('glow', 15, true);

      }
      //else {
        screenGlow.alpha=1;
        screenGlow.animations.play('glow');
        game.time.events.add(400, function() { screenGlow.alpha = 0;});
      //}

      player.invulnerabile = true;
      game.time.events.add(3000, function()
      {
        player.invulnerabile = false;
        player.body.velocity.x = 0;
      });

      // lampeggio
        player.alpha = 0.3;
        for (var i = 250; i<3000; i+=250)
        {
          if (i % 500 == 0) {
            game.time.events.add(i, function() {player.alpha = 0.3;});
          }
          else {
            game.time.events.add(i, function() {player.alpha = 1;});
          }
        }
    }

    // morte
    if (vite.countLiving() < 1)
    {
      player.kill();
      retry.visible = true;
      game.time.events.add(400, function() {screenGlow.animations.stop();});

      if (player.x > 5480){
        game.input.onTap.addOnce(restart1,this);
      }
      else {
        game.input.onTap.addOnce(fromZero1,this);
      }

      game.camera.follow(null);
    }
}

function createMostroEasy(x,y) {

  // FANTASMA LANCIATORE CON LA PROPRIA ARMA
  mostro = game.add.sprite(x,y,'mostro1');
  game.physics.arcade.enable(mostro);
  mostro.body.gravity.y = 400;
  mostro.body.velocity.x=0;

  mostro.hitGround = false;

  mostro.aggroX = 400;
  mostro.aggroY = 100;
  mostro.speed = 100;
  mostro.attackRange = 200;
  mostro.attackTime = 330; // tempo prima che attacchi

  mostro.weapon = game.add.weapon(1,'axe');
  mostro.weapon.trackSprite(mostro, 10, 20);
  mostro.weapon.bullets.setAll("height",30);
  mostro.weapon.bullets.setAll("width", 30);
  mostro.weapon.setBulletBodyOffset(30, 30);
  mostro.weapon.bulletSpeed = 240;
  mostro.weapon.bulletKillType=Phaser.Weapon.KILL_LIFESPAN;          // il proiettile si rigenera dopo 2 sec
  mostro.weapon.bulletLifespan = 2000;

  mostro.animations.add('cammina', [0, 1, 2, 1, 0], 7, true);
  mostro.animations.add('spara', [3, 4], 5, true);
  mostro.alive = true;

  return mostro;
}

function createMostroMid(x,y) {

  // FANTASMA LANCIATORE CON LA PROPRIA ARMA
  mostro = game.add.sprite(x,y,'mostro2');
  game.physics.arcade.enable(mostro);
  mostro.body.gravity.y = 400;
  mostro.body.velocity.x=0;

  mostro.hitGround = false;

  mostro.aggroX = 400;
  mostro.aggroY = 100;
  mostro.speed = 110;
  mostro.attackRange = 440;
  mostro.attackTime = 250;         // tempo prima che attacchi

  mostro.weapon = game.add.weapon(1,'axe');
  mostro.weapon.trackSprite(mostro, 10, 20);
  mostro.weapon.bullets.setAll("height",30);
  mostro.weapon.bullets.setAll("width", 30);
  mostro.weapon.setBulletBodyOffset(30, 30);
  mostro.weapon.bulletSpeed = 380;
  mostro.weapon.bulletKillType=Phaser.Weapon.KILL_LIFESPAN;          // il proiettile si rigenera dopo 3 sec
  mostro.weapon.bulletLifespan = 4000;

  mostro.animations.add('cammina', [0, 1, 2, 1, 0], 7, true);
  mostro.animations.add('spara', [3, 4], 5, true);
  mostro.alive = true;

  return mostro;
}

function createMostroHard(x,y) {

  // FANTASMA LANCIATORE CON LA PROPRIA ARMA
  mostro = game.add.sprite(x,y,'mostro2');
  game.physics.arcade.enable(mostro);
  mostro.body.gravity.y = 400;
  mostro.body.velocity.x=0;

  mostro.hitGround = false;

  mostro.aggroX = 600;
  mostro.aggroY = 150;
  mostro.speed = 110;
  mostro.attackRange = 700;
  mostro.attackTime = 220;         // tempo prima che attacchi

  mostro.weapon = game.add.weapon(1,'axe');
  mostro.weapon.trackSprite(mostro, 10, 20);
  mostro.weapon.bullets.setAll("height",30);
  mostro.weapon.bullets.setAll("width", 30);
  mostro.weapon.setBulletBodyOffset(30, 30);
  mostro.weapon.bulletSpeed = 350;
  mostro.weapon.bulletKillType=Phaser.Weapon.KILL_LIFESPAN;          // il proiettile si rigenera dopo 3 sec
  mostro.weapon.bulletLifespan = 3000;

  mostro.animations.add('cammina', [0, 1, 2, 1, 0], 7, true);
  mostro.animations.add('spara', [3, 4], 5, true);
  mostro.alive = true;

  return mostro;
}

function createSpiderEasy(x,y) {

  spider = game.add.sprite(x,y,'spider1');
  game.physics.arcade.enable(spider);
  spider.body.velocity.x=0;
  spider.body.gravity.y=350;
  spider.body.collideWorldBounds=true;

  spider.frame = 1;
  spider.aggroX = 350;
  spider.aggroY = 200;
  spider.speed = 70;
  spider.jump = 110;
  spider.attackRange = 200;
  spider.animations.add('cammina', [0, 1, 2, 3, 4], 7, true);
  spider.animations.add('salta', [5], 10, true);
  spider.alive = true;

  return spider;
}

function createSpiderMid(x,y) {

  spider = game.add.sprite(x,y,'spider2');
  game.physics.arcade.enable(spider);
  spider.body.velocity.x=0;
  spider.body.gravity.y=350;
  spider.body.collideWorldBounds=true;

  spider.frame = 1;
  spider.aggroX = 400;
  spider.aggroY = 200;
  spider.speed = 110;
  spider.jump = 280;
  spider.attackRange = 300;
  spider.animations.add('cammina', [0, 1], 4, true);
  spider.animations.add('salta', [2], 10, true);
  spider.alive = true;

  spider.spiderHitGround = false;

  return spider;
}

function createSpiderHard(x,y) {

  spider = game.add.sprite(x,y,'spider2');
  game.physics.arcade.enable(spider);
  spider.body.velocity.x=0;
  spider.body.gravity.y=350;
  spider.body.collideWorldBounds=true;

  spider.aggroX = 600;
  spider.aggroY = 220;
  spider.speed = 120;
  spider.jump = 300;
  spider.attackRange = 400;
  spider.animations.add('cammina', [0, 1], 4, true);
  spider.animations.add('salta', [2], 10, true);
  spider.alive = true;

  return spider;
}

function createBatEasy(x,y) {

  bat = game.add.sprite(x,y,'bat1');
  game.physics.arcade.enable(bat);
  bat.body.velocity.x=0;
  bat.body.gravity.y=0;
  bat.body.collideWorldBounds=false;
  bat.animations.add('vola', [0, 1, 2], 10, true);
  bat.alive = true;

  bat.aggroX = 250;
  bat.aggroY = 300;
  bat.speed = 110;
  bat.sprint = 150;
  bat.attackRange = 100;
  bat.retireTime = 500;       // quanto sta in "picchiata" nell'attacco (più lungo = più difficile)
  bat.restoreTime = 1500;       // quanto ci mette ad andare via (più corto = più difficile)

  return bat;
}

function createBatMid(x,y) {

  bat = game.add.sprite(x,y,'bat2');
  game.physics.arcade.enable(bat);
  bat.body.velocity.x=0;
  bat.body.gravity.y=0;
  bat.body.collideWorldBounds=false;
  bat.animations.add('vola', [0, 1, 2], 10, true);
  bat.alive = true;

  bat.aggroX = 300;
  bat.aggroY = 400;
  bat.speed = 140;
  bat.sprint = 170;
  bat.attackRange = 100;
  bat.retireTime = 900;       // quanto sta in "picchiata" nell'attacco (più lungo = più difficile)
  bat.restoreTime = 1300;       // quanto ci mette ad andare via (più corto = più difficile)

  return bat;
}

function createBatHard(x,y) {

  bat = game.add.sprite(x,y,'bat2');
  game.physics.arcade.enable(bat);
  bat.body.velocity.x=0;
  bat.body.gravity.y=0;
  bat.body.collideWorldBounds=false;
  bat.animations.add('vola', [0, 1, 2], 10, true);
  bat.alive = true;

  bat.aggroX = 600;
  bat.aggroY = 500;
  bat.speed = 180;
  bat.sprint = 200;
  bat.attackRange = 150;
  bat.retireTime = 800;       // quanto sta in "picchiata" nell'attacco (più lungo = più difficile)
  bat.restoreTime = 1100;       // quanto ci mette ad andare via (più corto = più difficile)

  return bat;
}

function updateMostro(mostro,player)
{
  if (mostro.alive && mostro.body.enable) {
    mostro.hitGround = game.physics.arcade.collide(mostro, layer);
    mostro.animations.play('cammina');

    // MOSTRO AGGRO (se il giocatore è a distanza aggro ed è vivo, allora il fantasma si muove, sennò si ferma.)

    if (Math.abs(mostro.x - player.x) < Math.abs(mostro.aggroX) && Math.abs(mostro.y - player.y) < Math.abs(mostro.aggroY) && player.alive)
    {
        // se il fantasma è più o meno a 200x dal player allora spara
        if (mostro.x > player.x && mostro.x < (player.x + mostro.attackRange) || mostro.x < player.x && mostro.x > (player.x - mostro.attackRange))
        {
            mostro.body.velocity.x=0;

            // se il fantasma è a dx spara a sx
            if ((mostro.x - player.x)>=0 && !player.invulnerabile)
            {
                game.time.events.add(mostro.attackTime, function() {
                  mostro.weapon.fireAngle = 180;
                  mostro.weapon.fire();});
                  mostro.animations.play('spara');
            }
            // se il fantasma è a sx spara a dx
            if ((mostro.x - player.x)<=0 && !player.invulnerabile)
            {
              game.time.events.add(mostro.attackTime, function() {
                mostro.weapon.fireAngle = 0;
                mostro.weapon.fire();});
                mostro.animations.play('spara');
            }
        }
        else
        {
            // se il fantasma è nel lato dx va verso sx
            if (mostro.x > (player.x+200))
            {
                mostro.body.velocity.x= -mostro.speed;
            }

            // se il fantasma è nel lato sx va verso dx
            if (mostro.x < (player.x-200))
            {
                mostro.body.velocity.x= mostro.speed;
            }
        }
    }
    else
    {
        mostro.body.velocity.x=0;
    }

  }

  // ATTACCO E LANCIO FANTASMA
  if (!player.invulnerabile){   // il player collide con il nemico solo se non è stato colpito
    game.physics.arcade.overlap(player,mostro,perditaVita1);
    game.physics.arcade.overlap(mostro.weapon.bullets,player, perditaVita1); // --- per funzionare con i proiettili: PARAMETRI AL CONTRARIO
  }

  // COLLISIONI
  // game.physics.arcade.collide(mostro,layer);
  game.physics.arcade.collide(mostro.weapon.bullets,layer,death);

  // ATTACCO PLAYER
  game.physics.arcade.collide(proiettile.bullets,mostro,uccidiNemico);

}



function updateSpider(spider,player)
{
if (spider.alive) {

  spider.spiderHitGround = game.physics.arcade.collide(spider, layer);

  if (!spider.body.onFloor())
  {
    spider.animations.play('salta');
  }
  else
  {
    spider.animations.play('cammina');
  }
  //spider.animations.add('salta', [2], 10, true);
  // SPIDER AGGRO (se il giocatore è a distanza aggro ed è vivo, allora il ragno si muove, sennò si ferma.)
  if (Math.abs(spider.x - player.x) < Math.abs(spider.aggroX) && Math.abs(spider.y - player.y) < Math.abs(spider.aggroY) && player.alive)
  {
      // se il ragno è a distanza di attacco dal player allora salta
      if (spider.x > player.x && spider.x < (player.x + spider.attackRange) || spider.x < player.x && spider.x > (player.x - spider.attackRange))
      {
          // se il ragno è a dx, alla stessa altezza del giocatore e tocca terra, salta a sx
          if ((spider.x - player.x)>=0 && spider.y < (player.y+spider.attackRange) && spider.y > (player.y-10) && spider.spiderHitGround && !player.invulnerabile)
          {
              spider.body.velocity.x = -spider.speed + (player.body.velocity.x/1.8);     // la velocità del ragno dipende dalla velocità di player
              spider.body.velocity.y= -spider.jump + (player.body.velocity.y/3);     // l'altezza del salto dipende da dove si trova player
          }
          // se il ragno è a sx, alla stessa altezza del giocatore e tocca terra, salta a dx
          if ((spider.x - player.x)<=0 && spider.y < (player.y+spider.attackRange) && spider.y > (player.y-10) && spider.spiderHitGround && !player.invulnerabile)
          {
              spider.body.velocity.x = spider.speed + (player.body.velocity.x/1.8);  // la velocità del ragno dipende dalla velocità di player
              spider.body.velocity.y= -spider.jump +(player.body.velocity.y/3) ;    // l'altezza del salto dipende da dove si trova player
          }
      }
      else
      {
          // se il ragno è nel lato dx va verso sx
          if (spider.x > (player.x+200) && spider.spiderHitGround)
          {
              spider.body.velocity.x= -spider.speed;
          }

          // se il ragno è nel lato sx va verso dx
          if (spider.x < (player.x-200) && spider.spiderHitGround)
          {
              spider.body.velocity.x= spider.speed;
          }
      }
  }
  else
  {
      spider.body.velocity.x=0;
  }


  // ATTACCO RAGNO
  if (!player.invulnerabile){   // il player collide con il nemico solo se non è stato colpito
      game.physics.arcade.overlap(player,spider,perditaVita1);
  }

  // ATTACCO PLAYER
  game.physics.arcade.collide(proiettile.bullets,spider,uccidiNemico);

}
}


function updateBat(bat,player)
{
  if (bat.alive) {

    bat.animations.play('vola');
  // if (bat.x < bat.rightLimit && bat.x > bat.leftLimit) {      // se il bat esce dal suo raggio di azione torna allo spawn point

    if ((Math.abs(bat.x - player.x) < Math.abs(bat.aggroX)) && (Math.abs(bat.y - player.y) < Math.abs(bat.aggroY)) && player.alive)     // se il player è nell'aggro range del bat
    {
      if (bat.y > (player.y + bat.attackRange) || bat.y < (player.y-bat.attackRange) || bat.x > (player.x + bat.attackRange) || bat.x < (player.x - bat.attackRange)) {       // se il player è nell'attackrange allora il bat accelera
        // game.physics.arcade.moveToObject(bat,player,bat.speed);
        game.physics.arcade.moveToXY(bat, player.x, player.y + bat.attackRange, bat.speed)
      }
      else {
        game.physics.arcade.moveToXY(bat, player.x, player.y, bat.sprint)         // se nell'attackRange allora vola in picchiata verso il giocatore
        game.time.events.add(bat.retireTime,function(){bat.body.velocity.y = -bat.sprint;});          // si ritira
        game.time.events.add(bat.restoreTime,function(){bat.body.velocity.y = 0;});          // dopo tot la velocità va a 0
      }
    }
    else
    {
        bat.body.velocity.y=0;
        bat.body.velocity.x=0;
    }

    // ATTACCO PIPISTRELLO
    if (!player.invulnerabile){   // il player collide con il nemico solo se non è stato colpito
    game.physics.arcade.overlap(player,bat,perditaVita1);
    }

    // ATTACCO PLAYER
    game.physics.arcade.collide(proiettile.bullets,bat,uccidiNemico);
  }
}

  // else {
  //  game.physics.arcade.moveToXY(bat, bat.spawnX, bat.spawnY, bat.speed + 100)
  //}
//}

function restart1()
{
    if (contaChiave1.visible == true)
    {
      game.state.restart(); //ricaricare pagina
      playerSpawnX1 = 5550;
      playerCp = true;
      /* contaChiave1.kill();
      chiave1.alpha = 0.5; */
    }

    if (contaChiave1.visible != true)
    {
      game.state.restart(); //ricaricare pagina
      playerSpawnX1 = 200;
    }
}

function fromZero1()
{
  game.state.restart();
}

function death(subject)
{
    subject.kill();
}

function uccidiNemico(nemico, proiettile)
{
  nemico.alive = false;
  proiettile.kill();
  nemico.animations.stop();
  nemico.body.collideWorldBounds = false;
  nemico.body.velocity.x = 0;
  nemico.body.velocity.y = -200;
  nemico.body.gravity.y = 900;
  game.time.events.add(800, function(){ nemico.body.velocity.y = 600;});
  game.time.events.add(4000, function(){ nemico.kill(); });
}

/*
----------------------
----- FUNCTIONS ------
----- LIVELLO 2 ------
----------------------
*/

function stopFbGabbia()
{
  fbGabbia.visible = false;
  game.paused = false;
}

function stopFbForno()
{
  fbForno.visible = false;
  game.paused = false;
}

function stopFinaleN()
{
  fromZero2();
}

function stopFinaleP()
{
  game.state.start('Introduzione');
}

function stopFinaleI()
{
  game.state.start('Introduzione');
}

function hitStrega(hitBox, bullet)
{
  strega.triggered = true;
  bullet.kill();
  cuoreStrega = viteStrega.getFirstAlive();

  // lampeggio
  for (var i = 125; i<3000; i+=125)
  {
    if (i % 250 == 0) {
      game.time.events.add(i, function() {strega.alpha = 0.3;});
    }
    else {
      game.time.events.add(i, function() {strega.alpha = 1;});
    }
  }

  if (cuoreStrega)
  {
    cuoreStrega.kill();
  }
  if (viteStrega.countLiving() < 1)  // morte strega
  {
    // lampeggio pre morte
    for (var i = 125; i<3000; i+=125)
    {
      if (i % 250 == 0) {
        game.time.events.add(i, function() {strega.alpha = 0.3;});
      }
      else {
        game.time.events.add(i, function() {strega.alpha = 1;});
      }
    }
    // stoppo tutte le animazioni
    strega.animations.stop();
    strega.weapon.autofire = false;
    strega.isCasting = false;
    strega.isShooting = false;
    strega.dead = true;
    strega.frame = 29;

    // animazione morte
    game.time.events.add(3000, function(){
      strega.animations.play('death');
    });

    // morte strega e flashback
    game.time.events.add(6000, function(){
      strega.kill();
      stregaHitBox.kill();
      if (med01.visible == true && med02.visible == true && med03.visible == true && med04.visible == true && med05.visible == true)
      {
        finaleP.visible = true; game.paused = true; game.input.onDown.add(stopFinaleP, self);
      }
      else
      {
        finaleI.visible = true; game.paused = true; game.input.onDown.add(stopFinaleI, self);
      }
    });
  }

  game.time.events.add(4000,function(){ strega.triggered=false;})   // la strega si scazza dopo 6 sec

}

function stregaShoot()
{
  if (player.alive == true) {strega.weapon.fireAtXY(player.x + 30,player.y+50);}
}

function stregaSpecial()
{
  strega.weapon.fireAngle = -180;
  strega.weapon.fire();

  strega.weapon.fireAngle = -200;
  strega.weapon.fire();

  strega.weapon.fireAngle = -220;
  strega.weapon.fire();

  strega.weapon.fireAngle = -240;
  strega.weapon.fire();
}

function updateStrega(strega)
{
  if (!strega.isShooting && !strega.isCasting && !strega.dead)
  {
    strega.animations.play('idle');
  }
  else if(!strega.isShooting && strega.isCasting && !strega.dead)
  {
    strega.animations.play('cast');
  }
  /* if (strega.triggered) {
    strega.animations.play('hit',10,true);
  } */

  // se la strega è triggerata allora fa la mossa speciale
  if (strega.triggered && !strega.dead)
  {
    strega.weapon.bulletSpeed = 500;
    strega.weapon.fireLimit = 4;
    strega.weapon.fireRate = 0;
    stregaSpecial();
  }
  // se la strega ha più di 2 vite allora attacca normalmente
  if (strega.triggered == false && !strega.dead)  // viteStrega.countLiving > 2 &&
  {
    strega.weapon.resetShots();
    strega.weapon.bulletSpeed = strega.normalSpellSpeed;
    strega.weapon.fireRate = strega.normalCastTime;
    stregaShoot();
  }

  // se la strega ha meno di 2 vite allora attacca più velocemente
  /* if (viteStrega.countLiving <= 2 && viteStrega.countLiving > 0 && strega.triggered == false)
  {
    strega.weapon.resetShots();
    strega.weapon.bulletSpeed = strega.advancedSpellSpeed;
    strega.weapon.fireRate = strega.advancedCastTime;
    stregaShoot();
  } */
}

function createMovingPlatform(x,y,leftLimit, rightLimit)
{
  p = platforms.create(x,y,'movingPlt');
  p.width = 96; p.height = 32;
  p.body.velocity.x = 100;
  p.leftLimit = leftLimit;
  p.rightLimit = rightLimit;
  p.body.immovable=true;
  return p;
}

function updateMovingPlatform(platform)
{
  if (platform.x <= platform.leftLimit)
  {
    platform.body.velocity.x = 100;
  }
  else if (platform.x >= platform.rightLimit)
  {
    platform.body.velocity.x = -100;
  }
  game.physics.arcade.collide(player, platform);
}

//moving platform bossfight

function createMovingPlatformBf(x,y,leftLimit, rightLimit)
{
  t = platforms.create(x,y,'tizzone');
  t.width = 96; t.height = 32;
  t.body.velocity.x = 100;
  t.leftLimit = leftLimit;
  t.rightLimit = rightLimit;
  t.body.immovable = true;
  return t;
}

function createFragilePlatform(x,y)
{
  f = fragilePlatforms.create(x,y,'fragilePlt');
  f.frame = 8;
  f.animations.add('break', [1, 2], 10, false);
  f.animations.add('restore', [0], 10, false);
  f.width = 80; f.height = 30;
  f.breakTime=1000;
  f.body.immovable=true;
  return f;
}

function createFragilePlatformBf(x,y)
{
  w = fragilePlatforms.create(x,y,'waferBf');
  w.frame = 8;
  w.animations.add('break', [1, 2], 10, false);
  w.animations.add('restore', [0], 10, false);
  w.width = 80; f.height = 30;
  w.breakTime=1000;
  w.body.immovable=true;
  return w;
}

function updateFragilePlatform(p)
{
  jumpFragilePlatforms = false;
  hitFragilePlatform = game.physics.arcade.collide(player, p);

  if (hitFragilePlatform && player.body.touching.down)
  {
    game.time.events.add(p.breakTime, function(){ p.body.enable=false; p.animations.play('break'); });
    game.time.events.add(p.breakTime+150, function(){ p.animations.stop(); });
    game.time.events.add(p.breakTime+5000, function(){ p.body.enable=true; p.animations.play('restore');});
    jumpFragilePlatforms = true;
  }
  else
  {
    jumpFragilePlatforms = true;
  }
}

function createStickyPlatform(x,y)
{
  p = stickyPlatforms.create(x,y,'stickyPlt');
  p.width = 128; p.height = 32;
  p.body.immovable=true;
  p.sticky = 150;
  return p;
}

function updateStickyPlatform(p)
{
  var hitSticky = game.physics.arcade.collide(player,p);

  if (hitSticky)
  {
    player.slide = 0.999;
    player.speed = 300;
  }
  else
  {
    player.slide = 0.7;
    player.speed = 200;
  }
}

function gestioneClickPausa2(event)
{
    if(game.paused == true && event.x > 332 && event.x < 412 && event.y > 344 && event.y < 424 && fbForno.visible == false && fbGabbia.visible == false && finaleP.visible == false && finaleI.visible == false && finaleN.visible == false)
    {
      game.paused = false;
      play.visible = false;
      refresh.visible = false;
      home.visible = false;
    }
    if (game.paused == true && event.x > 472 && event.x < 552 && event.y > 344 && event.y < 424 && fbForno.visible == false && fbGabbia.visible == false && finaleP.visible == false && finaleI.visible == false && finaleN.visible == false)
    {
      game.paused = false;
      fromZero2();
    }

    if (game.paused == true && event.x > 612 && event.x < 692 && event.y > 344 && event.y < 424 && fbForno.visible == false && fbGabbia.visible == false && finaleP.visible == false && finaleI.visible == false && finaleN.visible == false)
    {
      game.paused = false;
      game.state.start('Introduzione', Introduzione);
    }

}

function fineAtrio()
{
  game.paused = false;
  atrio.visible = false;
}

function prendiGemma(player, gemma)
{
  gemma.kill();
}

function perditaVita2(player,enemy)
{
    cuore = vite.getFirstAlive();

    // controllo player se è a destra o sinistra
    if (player.x <= enemy.x && !player.invulnerabile) {
        player.body.velocity.x = -(player.body.velocity.x + 1500);
        game.time.events.add(500, function() {player.body.velocity.x = 0;})
    }
    else if (player.x >= enemy.x && !player.invulnerabile) {
      player.body.velocity.x = player.body.velocity.x + 1500;
      game.time.events.add(500, function() {player.body.velocity.x = 0;})
    }

    // perdita vita, lampeggio e invulnerabilità temporanea
    if (cuore && player.invulnerabile == false)
    {
      cuore.kill();

      // screenglow e glow ultimo cuore
      if (vite.countLiving() == 1) {
      //  screenGlow.alpha=1;
      //  screenGlow.animations.play('glow', 20, true);
        for (var i = 250; i<300000; i+=250)
        {
          if (i % 500 == 0) {
            game.time.events.add(i, function() { vite.alpha = 0;});
          }
          else {
            game.time.events.add(i, function() { vite.alpha = 1;});
          }
        }
        // screenGlow.alpha= 0.5;
        //screenGlow.animations.play('glow', 15, true);

      }
      //else {
        screenGlow.alpha=1;
        screenGlow.animations.play('glow');
        game.time.events.add(400, function() { screenGlow.alpha = 0;});
      //}

      player.invulnerabile = true;
      game.time.events.add(3000, function()
      {
        player.invulnerabile = false;
        player.body.velocity.x = 0;
      });

      // lampeggio
        player.alpha = 0.3;
        for (var i = 250; i<3000; i+=250)
        {
          if (i % 500 == 0) {
            game.time.events.add(i, function() {player.alpha = 0.3;});
          }
          else {
            game.time.events.add(i, function() {player.alpha = 1;});
          }
        }
    }

    // morte
    if (vite.countLiving() < 1) // && deathCounter < 3
    {
      //deathCounter = deathCounter + 1;
      player.kill();
      //stateText.visible = true;
      /* if (deathCounter < 3) {stateText.visible = true;}
      else {*/ finaleN.visible = true; game.input.onDown.add(stopFinaleN, self); //}

      // click to restart
      game.input.onTap.addOnce(fromZero2,this);
      game.camera.follow(null);
    }
}

function restart2()
{
  if (deathCounter < 3){    // se il player è morto meno di 3 volte
    if (player.body.position.x > 1024 && player.body.position.y < 4512)   // se entrato nella bossfight si riparte da li
    {
      //ricaricare pagina
      vite.alpha = 1;
      camCheckpoint = true;
      playerSpawnX2 = 1050;
      playerSpawnY2 = 4420;
      if (med01.visible == true) {playerCp1 = true;};
      if (med02.visible == true) {playerCp2 = true;};
      if (med03.visible == true) {playerCp3 = true;};
      if (med04.visible == true) {playerCp4 = true;};
      if (med05.visible == true) {playerCp5 = true;};
      noMappa2 = true;
      game.state.restart();
      blockFornoFlag = true;
    }

    if (player.body.position.x < 1024 && player.body.position.y > 4512)   // si riparte dall'inizio
    {
      vite.alpha = 1;
      camCheckpoint = false;
      playerSpawnX2 = 0;
      game.state.restart(); //ricaricare pagina
    }
  }

  if (deathCounter >= 3) {    // se il player è morto 3 volte il gioco si riavvia
    vite.alpha = 1;
    camCheckpoint = false;
    playerSpawnX2 = 0;
    playerSpawnY2 = 7450;
    startBossFight = false;
    deathCounter = 0;
    game.state.restart(); //ricaricare pagina
    blockFornoFlag = false;
    game.paused = true;
    stateText.visible = false;
  }
}

function fromZero2()
{
  vite.alpha = 1;
  camCheckpoint = false;
  playerSpawnX2 = 0;
  playerSpawnY2 = 7450;
  startBossFight = false;
  deathCounter = 0;
  game.state.restart(); //ricaricare pagina
  blockFornoFlag = false;
  finaleN.visible = false;
  noMappa2 = false;
}

function morteIstantanea(player,strega)
{
  vite.alpha = 0;
  player.kill();
  finaleN.visible = true; game.input.onDown.add(stopFinaleN, self);

  // click to restart
  game.input.onTap.addOnce(restart2,this);
  game.camera.follow(null);
}




// DA DOVE COMINCIARE
game.state.start('Introduzione');
