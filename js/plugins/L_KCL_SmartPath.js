//=============================================================================
// Smart Pathfinding
// by Shaz
// Last Updated: 2015.10.26
//=============================================================================

/*:
 * @plugindesc Allows events or players to do smart Pathfinding
 * @author Shaz
 *
 * @help
 *
 * This is merely a fork of Shaz's SMARTPATH plugin. I've added some extra
 * functionality to be able to auto-cancel the pathfinding as well as to 
 * have the event interpreter WAIT while the pathing takes place.
 *
 * Plugin Command:
 *  SmartPath eventId1 eventId2      # Makes event 1 find path to event 2
 *  SmartPath eventId x y            # Makes event find a path to location x, y
 *  SmartPath eventId cancel         # Cancel Pathfinding for event
 *
 *  event = number for specific event
 *  event = 0 for "this" event
 *  event = -1 for player
 *  event = $gameVariables.value(x) to get the event id from variable x
 *
 *  x, y = coordinates or $gameVariables.value(#) to use a variable coordinate
 *
 * Update by DragoonKain:
 *   Use Game_Interpreter.findEvent to allow specifying events by name.
 *   Added Wait, Auto_Cancel and Auto_Cancel_Near.
 * 
 * Update by Lloyd99124:
 *   Added the RM_MOVE which moves the player to a position
 *   waits until it reaches the position and then cancels movement.
 *   Added the RM_MOVE_NEAR which moves the player near the event (1 tile)
 *   waits until it reaches the position and then cancels movement.
 * Plugin Commands Lloyd99124:
 * 
 * Move the player near the event (1 tile around it):
 * SMARTPATH eventId RM_MOVE_NEAR		#normally just use 0
 * SMARTPATH eventId RM_MOVE x y		#eventId is not necessary, just leave it as 0
 * 
 */

(function() {
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);

    if (command.toUpperCase() === 'SMARTPATH') {
      subject = this.findEvent 
        ? this.findEvent(args[0])
        : this.character(eval(args[0]));

      if (args[1].toUpperCase() === 'CANCEL') {
        subject.clearTarget();
      } else if (args[1].toUpperCase() === 'RM_MOVE_NEAR') {
        player = this.findEvent
          ? this.findEvent(-1)
          : this.character(eval(-1));
        // MOVE
        player.setTarget(subject)
        player._moveSpeed = 5;

        // WAIT NEAR
        var isNear = Math.abs(player.x - player._targetX) <= 1 &&
          Math.abs(player.y - player._targetY) <= 1;

        if (!(isNear)) {
          this.wait(.5);
          this.jumpTo(this._index - 1);

        } else {
          // CANCEL
          player.clearTarget();
          player._moveSpeed = 4;

        }

      subject.clearTarget();


        // if (!(isNear) && !(Input.isPressed("escape"))) {
        //   this.wait(.5);
        //   this.jumpTo(this._index - 1);

        // } else {
        //   // CANCEL
        //   if ((Input.isPressed("escape"))){
        //     $gameMap._interpreter.command115();
        //   }
        //   player.clearTarget();
        //   player._moveSpeed = 4;

        // }

        // subject.clearTarget();




      } else if (args[1].toUpperCase() === 'RM_MOVE') {
        player = this.findEvent
          ? this.findEvent(-1)
          : this.character(eval(-1));
        // MOVE
        player.setTarget(null, eval(args[2]), eval(args[3]))
        player._moveSpeed = 5;

        // WAIT
        if (!(player.x == player._targetX && player.y == player._targetY)) {
          this.wait(20);
          this.jumpTo(this._index - 1);
        } else {
        // CANCEL
          player.clearTarget();
          player._moveSpeed = 4;
        }

        subject.clearTarget();

      } else if (args[1].toUpperCase() === 'RM_CANCEL') {
        player = this.findEvent
          ? this.findEvent(-1)
          : this.character(eval(-1));
        
        player.clearTarget();
        
        subject.clearTarget();

      } else if (args[1].toUpperCase() === 'WAIT') {
        if (subject._target && !subject.isOnTarget(subject._targetX, subject._targetY)) {
          this.wait(20);
          this.jumpTo(this._index-1);
        }
      } else if (args[1].toUpperCase() == 'AUTO_CANCEL') {
        subject.setTargetAutoCancel('on');
      } else if (args[1].toUpperCase() == 'AUTO_CANCEL_NEAR') {
        subject.setTargetAutoCancel('near');

        if (args.length > 2) {
          subject.setTargetAutoCancelThreshold(parseInt(args[2]));
        }
      } else if (args.length > 2) {
        subject.setTarget(null, eval(args[1]), eval(args[2]));
      } else {
        var target = this.findEvent 
          ? this.findEvent(args[1])
          : this.character(eval(args[1]));
        subject.setTarget(target);
      }
    }
  };

  var _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
  Game_CharacterBase.prototype.initMembers = function() {
    _Game_CharacterBase_initMembers.call(this);
    this._target = null;
    this._targetX = null;
    this._targetY = null;
    this._targetAutoCancel = false; // 'on', 'near', false
    this._targetAutoCancelThreshold = 1;
    this._break = false;
  };

  Game_CharacterBase.prototype.setTarget = function(target, targetX, targetY) {
    this._target = target;
    if (this._target) {
      this._targetX = this._target.x;
      this._targetY = this._target.y;
    } else {
      this._targetX = targetX;
      this._targetY = targetY;
    }
    this._targetAutoCancel = false;
  };

  Game_CharacterBase.prototype.setTargetAutoCancel = function(targetAutoCancel) {
    this._targetAutoCancel = targetAutoCancel;
  }

  Game_CharacterBase.prototype.setTargetAutoCancelThreshold = function(threshold) {
    this._targetAutoCancelThreshold = threshold;
  }

  Game_CharacterBase.prototype.clearTarget = function() {
    this._target = null;
    this._targetX = null;
    this._targetY = null;
  };

  Game_CharacterBase.prototype.isNearTarget = function(x, y) {
    var isNear =    Math.abs(this.x - x) <= this._targetAutoCancelThreshold &&
                    Math.abs(this.y - y) <= this._targetAutoCancelThreshold;
    return isNear;
  }

  Game_CharacterBase.prototype.isOnTarget = function(x, y) {
    return this.x == x &&
           this.y == y;
  }

  var _Game_CharacterBase_updateStop = Game_CharacterBase.prototype.updateStop;
  Game_CharacterBase.prototype.updateStop = function() {
    _Game_CharacterBase_updateStop.call(this);

    if (this._target) {
      this._targetX = this._target.x;
      this._targetY = this._target.y;
    }

    if (this._targetX != null) {
      direction = this.findDirectionTo(this._targetX, this._targetY);
      if (direction > 0)
      {
        this.moveStraight(direction);
      }
    }

    if (this._target && this._targetAutoCancel) {
      if (this._targetAutoCancel.toUpperCase() === 'ON') {
        if (this.isOnTarget(this._targetX, this._targetY)) {
          this.clearTarget();
        }
      } else if (this._targetAutoCancel.toUpperCase() === 'NEAR') {
        if (this.isNearTarget(this._targetX, this._targetY)) {
          this.clearTarget();
        }
      }
    }
  };
})();
