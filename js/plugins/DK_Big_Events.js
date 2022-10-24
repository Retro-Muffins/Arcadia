/*
Title: Big Events
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.2.0
Release: 06.02.2022
First release: 13.09.2020
*/

/*ru
Название: Большие События
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.2.0
Релиз: 06.02.2022
Первый релиз: 13.09.2020
*/

/*:
 * @plugindesc v.1.2.0 [MV|MZ] Allows you to expand the coverage of the event by several tiles.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Info about plugin ###
 Title: DK_Big_Events
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 1.2.0
 Release: 06.02.2022
 First release: 13.09.2020

 ###=========================================================================
 ## Compatibility
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###===========================================================================
 ## Instructions
 ###===========================================================================
 Use event comments
 1. [size|turn|lx|rx|uy|dy]
 Increase event coverage
 turn - the coverage area reacts to the direction of the event. 0 or 1
 lx - number of tiles to the left of the event
 rx - number of tiles to the right of the event
 uy - number of tiles above the event
 dy - number of tiles below the event

    uy
 lx E rx
    dy

 Example: [size|1|1|1|1|1]
 The event will have the following coverage:

 x  x  x
 x  E  x
 x  x  x

 Example: [size|1|1|1|1|0]
 The event will have the following coverage:
 x  x  x
 x  E  x

 Example: [size|1|1|1|0|0]
 The event will have the following coverage:
 x  E  x

 Example: [size|1|0|1|1|0]
 The event will have the following coverage:
 x  x
 E  x

 Note: E - event, x - added coverage

 ###===========================================================================
 ## Script calls
 ###===========================================================================
 1. Collision of two events: $gameMap.event(eventId1).isCollidedWithEvent(eventId2, d1 = 0, d2 = 0)
 eventId1, eventId2 - Event ID's
 d1 - movement direction of event 1 (0 - no movement)
 d2 - movement direction of event 2 (0 - no movement)

 2. Player collision with event: $gamePlayer.isCollidedWithEvent(eventId, d = 0)
 eventId - Event ID
 d - movement direction (0 - no movement)

 ###=========================================================================
 ## See also
 ###=========================================================================
 1. Events Glow (https://dk-plugins.ru/events-glow/)
 Allows highlighting events on mouse hover.

 2. Picture Choices (https://dk-plugins.ru/picture-choices/)
 Allows to use a graphic buttons instead of the choice window.

 3. Pictures Glow (https://dk-plugins.ru/pictures-glow/)
 Allows highlighting pictures on mouse hover.

 ###===========================================================================
 ## License and terms of use
 ###===========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 Visit the page: https://dk-plugins.ru/commercial-license/

 ###===========================================================================
 ## Support
 ###===========================================================================
 Donate: https://dk-plugins.ru/donate
 Become a patron: https://www.patreon.com/dkplugins

*/

/*:ru
 * @plugindesc v.1.2.0 [MV|MZ] Позволяет расширить зону действия события на несколько тайлов.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Информация о плагине ###
 Название: DK_Big_Events
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.2.0
 Релиз: 06.02.2022
 Первый релиз: 13.09.2020

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###===========================================================================
 ## Инструкции
 ###===========================================================================
 Используйте комментарии события
 1. [size|turn|lx|rx|uy|dy]
 Увеличить зону действия события
 turn - зона действия реагирует на направление события. 0 или 1
 lx - количество тайлов слева от события
 rx - количество тайлов справа от события
 uy - количество тайлов сверху от события
 dy - количество тайлов снизу от события

    uy
 lx E rx
    dy

 Пример: [size|1|1|1|1|1]
 Событие будет иметь следующую зону действия:
 x  x  x
 x  E  x
 x  x  x

 Пример: [size|1|1|1|1|0]
 Событие будет иметь следующую зону действия:
 x  x  x
 x  E  x

 Пример: [size|1|1|0|0|0]
 Событие будет иметь следующую зону действия:
 x  E  x

 Пример: [size|1|0|1|1|0]
 Событие будет иметь следующую зону действия:
 x  x
 E  x

 Примечание: E - событие, x - добавленная зона действия

 ###===========================================================================
 ## Вызовы скриптов
 ###===========================================================================
 1. Коллизия двух событий: $gameMap.event(eventId1).isCollidedWithEvent(eventId2, d1 = 0, d2 = 0)
 eventId1, eventId2 - Номера событий
 d1 - направление движения события 1 (0 - нет движения)
 d2 - направление движения события 2 (0 - нет движения)

 2. Коллизия игрока с событием: $gamePlayer.isCollidedWithEvent(eventId, d = 0)
 eventId - Номер события
 d - направление движения (0 - нет движения)

 ###=========================================================================
 ## Смотрите также
 ###=========================================================================
 1. Свечение Событий (https://dk-plugins.ru/events-glow/)
 Позволяет подсвечивать события при наведении мыши.

 2. Выбор С Изображениями (https://dk-plugins.ru/picture-choices/)
 Позволяет использовать графические кнопки вместо окна выбора.

 3. Свечение Изображений (https://dk-plugins.ru/pictures-glow/)
 Позволяет подсвечивать изображения при наведении мыши.

 ###===========================================================================
 ## Лицензия и правила использования плагина
 ###===========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Посетите страницу: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Поддержать: https://dk-plugins.ru/donate
 Стать патроном: https://www.patreon.com/dkplugins

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Big_Events'] = '1.2.0';

//===========================================================================
// Game_Player
//===========================================================================

const BigCharacters_Game_Player_triggerTouchAction =
    Game_Player.prototype.triggerTouchAction;
Game_Player.prototype.triggerTouchAction = function() {
    if (BigCharacters_Game_Player_triggerTouchAction.apply(this, arguments)) {
        return true;
    }

    if ($gameTemp.isDestinationValid()) {
        const destX = $gameTemp.destinationX();
        const destY = $gameTemp.destinationY();
        const events = $gameMap.eventsXyNt(destX, destY);

        for (const event of events) {
            const direction = event.isMoving() ? event.direction() : 0;
            const tiles = event.getTiles(direction);
            const triggered = tiles.some(tile =>
                tile.x === destX && tile.y === destY
                    && (this.triggerTouchActionD1(destX, destY)
                        || this.triggerTouchActionD2(destX, destY)
                        || this.triggerTouchActionD3(destX, destY)));

            if (triggered) {
                return true;
            }
        }
    }

    return false;
};

Game_Player.prototype.isCollidedWithEvent = function(eventId, d = 0) {
    return $gameMap.event(eventId).getTiles(d).some(tile => this.pos(tile.x, tile.y));
};

//===========================================================================
// Game_Event
//===========================================================================

const BigCharacters_Game_Event_setupPage =
    Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
    BigCharacters_Game_Event_setupPage.apply(this, arguments);
    this.setupEventSize();
};

Game_Event.prototype.setupEventSize = function() {
    this.setSize({ 'turn': 0, '-x': 0, '+x': 0, '-y': 0, '+y': 0 });

    const regex = /\[size\|(\d+)\|(\d+)\|(\d+)\|(\d+)\|(\d+)\]/i;
    const comment = this.__DKgetComments__().find(
        comment => comment.match(regex));

    if (comment) {
        this.setSize({
            'turn': Number(RegExp.$1) === 1,
            '-x': Number(RegExp.$2),
            '+x': Number(RegExp.$3),
            '-y': Number(RegExp.$4),
            '+y': Number(RegExp.$5),
        });
    }
};

Game_Event.prototype.setSize = function(size) {
    this._size = size;
};

Game_Event.prototype.getTiles = function(d = 0) {
    const tiles = [];
    let lx = this._size['-x'];
    let rx = this._size['+x'];
    let uy = this._size['-y'];
    let dy = this._size['+y'];
    let x = d > 0 ? $gameMap.roundXWithDirection(this._x, d) : this._x;
    let y = d > 0 ? $gameMap.roundYWithDirection(this._y, d) : this._y;

    if (this._size['turn']) {
        switch (this.direction()) {
            case 4 :
                lx = this._size['+y'];
                rx = this._size['-y'];
                uy = this._size['-x'];
                dy = this._size['+x'];
                break;
            case 6 :
                lx = this._size['-y'];
                rx = this._size['+y'];
                uy = this._size['+x'];
                dy = this._size['-x'];
                break;
            case 8 :
                lx = this._size['+x'];
                rx = this._size['-x'];
                uy = this._size['+y'];
                dy = this._size['-y'];
                break;
        }
    }

    for (let i = x - lx; i <= x + rx; i++) {
        for (let j = y - uy; j <= y + dy; j++) {
            tiles.push({ x: i, y: j });
        }
    }

    return tiles;
};

Game_Event.prototype.__DKgetComments__ = function() {
    const page = this.page();
    const list = (page ? page.list : null);

    return (list ? list.reduce((comments, command) => {
        if (command.code === 108 || command.code === 408) {
            comments.push(command.parameters[0]);
        }

        return comments;
    }, []) : []);
};

Game_Event.prototype.pos = function(x, y, d = 0) {
    return this.getTiles(d).some(tile => tile.x === x && tile.y === y);
};

const BigCharacters_Game_Event_canPass = Game_Event.prototype.canPass;
Game_Event.prototype.canPass = function(x, y, d) {
    if (this.isThrough() || this.isDebugThrough()) {
        return true;
    }

    return BigCharacters_Game_Event_canPass.apply(this, arguments) &&
        !this.getTiles(d).some(tile => this.isCollidedWithCharacters(tile.x, tile.y));
};

const BigCharacters_Game_Event_isMapPassable = Game_Event.prototype.isMapPassable;
Game_Event.prototype.isMapPassable = function(x, y, d) {
    if (!BigCharacters_Game_Event_isMapPassable.apply(this, arguments)) {
        return false;
    }

    const d2 = this.reverseDir(d);
    const tiles = this.getTiles(d);

    return tiles.every(tile =>
        $gameMap.isPassable(tile.x, tile.y, d) && $gameMap.isPassable(tile.x, tile.y, d2));
};

Game_Event.prototype.isCollidedWithEvents = function(x, y) {
    const eventId = this.eventId();

    return $gameMap.eventsXyNt(x, y).some(event => event.eventId() !== eventId);
};

Game_Event.prototype.isCollidedWithEvent = function(eventId, d1 = 0, d2 = 0) {
    if (eventId === this.eventId()) {
        return false;
    }

    const tiles = $gameMap.event(eventId).getTiles(d2);

    return this.getTiles(d1).some(tile1 => tiles.some(tile2 =>
        tile1.x === tile2.x && tile1.y === tile2.y));
};
