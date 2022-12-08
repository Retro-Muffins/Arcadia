/*
Title: Events Glow
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0
Release: 24.02.2022
First release: 13.09.2020
*/

/*ru
Название: Свечение Событий
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0
Релиз: 24.02.2022
Первый релиз: 13.09.2020
*/

/*:
 * @plugindesc v.1.2.0 [MV|MZ] Allows highlighting events on mouse hover.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @orderAfter pixi-filters
 * @help

 ### Info about plugin ###
 Title: DK_Events_Glow
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 1.2.0
 Release: 24.02.2022
 First release: 13.09.2020

 ###=========================================================================
 ## Compatibility
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Instructions
 ###=========================================================================
 Use event comments
 1. <glow_effect: id>
 Replace id with effect id
 Example: <glow_effect: 1>

 2. Enabling a glow effect when the player enters the event's range
 <glow_effect<range>: id>
 Replace id with effect id
 Replace range with the required range
 Example: <glow_effect<3>: 1>

 ###=========================================================================
 ## Plugin commands (RPG Maker MV)
 ###=========================================================================
 1. Force to show glow effect
 ShowGlowEffect EVENT_ID EFFECT_ID
 EVENT_ID - Event Id. -1 for this event
 EFFECT_ID - Effect number

 2. Force to show glow effect from variable
 ShowGlowEffectVar EVENT_ID VAR_ID
 EVENT_ID - Event Id. -1 for this event
 VAR_ID - Variable

 3. Hide forced glow effect
 HideGlowEffect EVENT_ID
 EVENT_ID - Event Id. -1 for this event

 ###=========================================================================
 ## See also
 ###=========================================================================
 1. Mouse System (https://dk-plugins.ru/mouse-system/)
 Allows you to change the mouse cursor, activate events by clicking, hovering, etc.

 2. Picture Choices (https://dk-plugins.ru/picture-choices/)
 Allows to use a graphic buttons instead of the choice window.

 3. Pictures Glow (https://dk-plugins.ru/pictures-glow/)
 Allows highlighting pictures on mouse hover.

 ###=========================================================================
 ## License and terms of use
 ###=========================================================================
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



 * @command ShowGlowEffect
 * @desc Force to show glow effect
 *
 * @arg eventId
 * @text Event Id
 * @desc Event Id. -1 for this event
 * @type number
 * @min -1
 * @default -1
 *
 * @arg id
 * @text Effect Id
 * @desc Effect id
 * @type number
 * @min 1
 * @default 1

 * @command ShowGlowEffectVar
 * @desc Force to show glow effect from variable
 *
 * @arg eventId
 * @text Event Id
 * @desc Event Id. -1 for this event
 * @type number
 * @min -1
 * @default -1
 *
 * @arg id
 * @text Variable
 * @desc Variable
 * @type variable
 * @default 1

 * @command HideGlowEffect
 * @desc Hide forced glow effect
 *
 * @arg eventId
 * @text Event Id
 * @desc Event Id. -1 for this event
 * @type number
 * @min -1
 * @default -1



 * @param presets
 * @text Effects
 * @desc List of glow effects
 * @type struct<GlowEffect>[]
 * @default []

*/

/*:ru
 * @plugindesc v.1.2.0 [MV|MZ] Позволяет подсвечивать события при наведении мыши.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @orderAfter pixi-filters
 * @help

 ### Информация о плагине ###
 Название: DK_Events_Glow
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.2.0
 Релиз: 24.02.2022
 Первый релиз: 13.09.2020

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Инструкции
 ###=========================================================================
 Используйте комментарии события
 1. Включение эффекта свечения при наведении мыши
 <glow_effect: id>
 Замените id на номер эффекта
 Пример: <glow_effect: 1>

 2. Включение эффекта свечения, когда игрок попадает в диапазон события
 <glow_effect<range>: id>
 Замените id на номер эффекта
 Замените range на требуемый диапазон
 Пример: <glow_effect<3>: 1>

 ###=========================================================================
 ## Команды плагина (RPG Maker MV)
 ###=========================================================================
 1. Принудительно показать эффект свечения
 ShowGlowEffect EVENT_ID EFFECT_ID
 EVENT_ID - Номер события. -1 для текущего события
 EFFECT_ID - Номер эффекта

 2. Принудительно показать эффект свечения из переменной
 ShowGlowEffectVar EVENT_ID VAR_ID
 EVENT_ID - Номер события. -1 для текущего события
 VAR_ID - Переменная

 3. Скрыть принудительно показанный эффект свечения
 HideGlowEffect EVENT_ID
 EVENT_ID - Номер события. -1 для текущего события

 ###=========================================================================
 ## Смотрите также
 ###=========================================================================
 1. Система Мыши (https://dk-plugins.ru/mouse-system/)
 Позволяет изменять курсор мыши, активировать события нажатием, наведением и др.

 2. Выбор С Изображениями (https://dk-plugins.ru/picture-choices/)
 Позволяет использовать графические кнопки вместо окна выбора.

 3. Свечение Изображений (https://dk-plugins.ru/pictures-glow/)
 Позволяет подсвечивать изображения при наведении мыши.

 ###=========================================================================
 ## Лицензия и правила использования плагина
 ###=========================================================================
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



 * @command ShowGlowEffect
 * @desc Принудительно показать эффект свечения
 *
 * @arg eventId
 * @text Номер события
 * @desc Номер события. -1 для текущего события
 * @type number
 * @min -1
 * @default -1
 *
 * @arg id
 * @text Номер эффекта
 * @desc Номер эффекта
 * @type number
 * @min 1
 * @default 1

 * @command ShowGlowEffectVar
 * @desc Принудительно показать эффект свечения из переменной
 *
 * @arg eventId
 * @text Номер события
 * @desc Номер события. -1 для текущего события
 * @type number
 * @min -1
 * @default -1
 *
 * @arg id
 * @text Переменная
 * @desc Переменная
 * @type variable
 * @default 1

 * @command HideGlowEffect
 * @desc Скрыть принудительно показанный эффект свечения
 *
 * @arg eventId
 * @text Номер события
 * @desc Номер события. -1 для текущего события
 * @type number
 * @min -1
 * @default -1



 * @param presets
 * @text Эффекты
 * @desc Список эффектов свечения
 * @type struct<GlowEffect>[]
 * @default []

*/

/*~struct~GlowEffect:

 * @param distance
 * @text Glow distance
 * @desc Glow distance
 * @type number
 * @min 0
 * @default 10

 * @param outerStrength
 * @text Strength of the outer glow
 * @desc Strength of the outer glow
 * @type number
 * @min 0
 * @default 4

 * @param innerStrength
 * @text Strength of the inner glow
 * @desc Strength of the inner glow
 * @type number
 * @min 0
 * @default 0

 * @param color
 * @text Glow color
 * @desc Glow color in hex format
 * @default ffffff

 * @param quality
 * @text Quality
 * @desc Quality. A larger value has a stronger effect on FPS.
 * @type number
 * @decimals 1
 * @min 0
 * @max 1
 * @default 0.9

*/

/*~struct~GlowEffect:ru

 * @param distance
 * @text Дистанция свечения
 * @desc Дистанция свечения
 * @type number
 * @min 0
 * @default 10

 * @param outerStrength
 * @text Сила внешнего свечения
 * @desc Сила внешнего свечения
 * @type number
 * @min 0
 * @default 4

 * @param innerStrength
 * @text Сила внутренного свечения
 * @desc Сила внутренного свечения
 * @type number
 * @min 0
 * @default 0

 * @param color
 * @text Цвет свечения
 * @desc Цвет свечения в формате hex
 * @default ffffff

 * @param quality
 * @text Качество
 * @desc Качество. Большее значение сильнее влияет на ФПС.
 * @type number
 * @decimals 1
 * @min 0
 * @max 1
 * @default 0.9

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Events_Glow'] = '1.2.0';

if (!PIXI.filters.GlowFilter) {
    throw new Error('DK_Events_Glow require "pixi-filters" plugin!');
}

(function() {

    const parameters = PluginManager.parameters('DK_Events_Glow').presets;
    const presets = JSON.parse(parameters).map((json) => {
         const effect = JSON.parse(json);

         effect.distance = parseInt(effect.distance);
         effect.outerStrength = parseInt(effect.outerStrength);
         effect.innerStrength = parseInt(effect.innerStrength);
         effect.color = '0x' + effect.color.replace('#', '');
         effect.quality = parseFloat(effect.quality);

         return effect;
    });

    function getEventComments(event) {
        const page = event.page();
        const list = (page ? page.list : null);

        return (list ? list.reduce((comments, command) => {
            if (command.code === 108 || command.code === 408) {
                comments.push(command.parameters[0]);
            }

            return comments;
        }, []) : []);
    }

    if (Utils.RPGMAKER_NAME === 'MV') {

        //===========================================================================
        // TouchInput
        //===========================================================================

        const EventsGlow_TouchInput_onMouseMove = TouchInput._onMouseMove;
        TouchInput._onMouseMove = function(event) {
            EventsGlow_TouchInput_onMouseMove.apply(this, arguments);

            const x = Graphics.pageToCanvasX(event.pageX);
            const y = Graphics.pageToCanvasY(event.pageY);

            this._onMove(x, y);
        };

    } else {

        PluginManager.registerCommand('DK_Events_Glow',
            'ShowGlowEffect', function(args) {
            let eventId = Number(args.eventId);

            if (eventId === -1) {
                eventId = this.eventId();
            }

            const event = $gameMap.event(eventId);

            if (!event) {
                console.error(`"ShowGlowEffect": Event with id: ${eventId} not found!`);

                return;
            }

            event.forceShowGlowEffect(Number(args.id));
        });

        PluginManager.registerCommand('DK_Events_Glow',
            'ShowGlowEffectVar', function(args) {
            let eventId = Number(args.eventId);

            if (eventId === -1) {
                eventId = this.eventId();
            }

            const event = $gameMap.event(eventId);

            if (!event) {
                console.error(`"ShowGlowEffectVar": event with id: ${eventId} not found!`);

                return;
            }

            event.forceShowGlowEffect($gameVariables.value(Number(args.id)));
        });

        PluginManager.registerCommand('DK_Events_Glow',
            'HideGlowEffect', function(args) {
                let eventId = Number(args.eventId);

                if (eventId === -1) {
                    eventId = this.eventId();
                }

                const event = $gameMap.event(eventId);

                if (!event) {
                    console.error(`"HideGlowEffect": event with id: ${eventId} not found!`);

                    return;
                }

                event.hideForcedGlowEffect();
        });

    }

    //===========================================================================
    // Game_Interpreter
    //===========================================================================

    const EventsGlow_Game_Interpreter_pluginCommand =
        Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        EventsGlow_Game_Interpreter_pluginCommand.apply(this, arguments);

        switch (command) {
            case 'ShowGlowEffect': {
                let eventId = Number(args[0]);

                if (eventId === -1) {
                    eventId = this.eventId();
                }

                const event = $gameMap.event(eventId);

                if (!event) {
                    console.error(`"ShowGlowEffect": Event with id: ${eventId} not found!`);

                    return;
                }

                event.forceShowGlowEffect(Number(args[1]));
                break;
            }
            case 'ShowGlowEffectVar': {
                let eventId = Number(args[0]);

                if (eventId === -1) {
                    eventId = this.eventId();
                }

                const event = $gameMap.event(eventId);

                if (!event) {
                    console.error(`"ShowGlowEffectVar": event with id: ${eventId} not found!`);

                    return;
                }

                event.forceShowGlowEffect($gameVariables.value(Number(args[1])));
                break;
            }
            case 'HideGlowEffect': {
                let eventId = Number(args[0]);

                if (eventId === -1) {
                    eventId = this.eventId();
                }

                const event = $gameMap.event(eventId);

                if (!event) {
                    console.error(`"HideGlowEffect": event with id: ${eventId} not found!`);

                    return;
                }

                event.hideForcedGlowEffect();
                break;
            }
        }
    };

    //===========================================================================
    // Game_Event
    //===========================================================================

    const EventsGlow_Game_Event_setupPage = Game_Event.prototype.setupPage;
    Game_Event.prototype.setupPage = function() {
        EventsGlow_Game_Event_setupPage.apply(this, arguments);
        this.setupGlowEffect();
    };

    Game_Event.prototype.setupGlowEffect = function() {
        if (this._glowEffect && this._glowEffect.force) {
            return;
        }

        const comment = getEventComments(this).find(
            comment => comment.match(/<glow_effect[<]*(\d*)[>]*:\s*(\d+)>/i));

        if (comment) {
            this._glowEffect = { range: Number(RegExp.$1), id: Number(RegExp.$2) };
        }
    };

    Game_Event.prototype.glowEffect = function() {
        return this._glowEffect;
    };

    Game_Event.prototype.forceShowGlowEffect = function(id) {
        this._glowEffect = { id, force: true };
    };

    Game_Event.prototype.hideForcedGlowEffect = function() {
        if (this._glowEffect && this._glowEffect.force) {
            delete this._glowEffect;
            this.setupGlowEffect();
        }
    }

    //===========================================================================
    // Sprite_Character
    //===========================================================================

    const EventsGlow_Sprite_Character_update = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function() {
        EventsGlow_Sprite_Character_update.apply(this, arguments);
        this.checkGlowEffect();
    };

    Sprite_Character.prototype.checkGlowEffect = function() {
        if (!(this._character instanceof Game_Event)) {
            return;
        }

        const glowEffect = this._character.glowEffect();

        if (!glowEffect) {
            this.hideGlowEffect();

            return;
        }

        const preset = presets[glowEffect.id - 1];

        if (!preset) {
            throw new Error(`DK_Events_Glow: preset with id = ${glowEffect.id} not found!`);
        }

        // optimization
        if (!glowEffect.force && Graphics.frameCount % 3 !== 0) {
            return;
        }

        let showEffect;

        if (glowEffect.range > 0) {
            const range = Math.floor(
                Math.sqrt(
                    Math.pow($gamePlayer.x - this._character.x, 2) + Math.pow($gamePlayer.y - this._character.y, 2)));
            showEffect = range <= glowEffect.range;
        } else {
            const x = $gameMap.canvasToMapX(TouchInput.x);
            const y = $gameMap.canvasToMapY(TouchInput.y);
            showEffect = $gameMap.eventsXy(x, y).some(e => e === this._character);
        }

        if (!showEffect && !glowEffect.force) {
            this.hideGlowEffect();
            return;
        }

        if (this._glowFilter && this._glowFilter.__presetId__ === preset.id) {
            return;
        }

        this.hideGlowEffect();

        this._glowFilter = new PIXI.filters.GlowFilter(preset);
        this._glowFilter.__presetId__ = preset.id;

        const filters = this.filters;

        if (filters) {
            filters.push(this._glowFilter);

            this.filters = filters;
        } else {
            this.filters = [this._glowFilter];
        }
    };

    Sprite_Character.prototype.hideGlowEffect = function() {
        if (this._glowFilter) {
            const filters = this.filters;

            if (filters) {
                this.filters = filters.filter(filter =>
                    filter.__presetId__ !== this._glowFilter.__presetId__);

                if (filters.length === 0) {
                    this.filters = null;
                }
            }

            delete this._glowFilter;
        }
    };

})();
