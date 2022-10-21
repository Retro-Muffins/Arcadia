//==========================================================================
// Eli_ButtonCommonEvents.js
//==========================================================================

/*:
@plugindesc ♦5.2.2♦ Bind common events to keyboard/gamepad buttons!
@author Hakuen Studio

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
==============================================================================
Features
==============================================================================

● Bind common events to keyboard keys or gamepad buttons.
● Remove common events from these keys/buttons.
● Common events can be parallel type(uninterruptedly) or regular ones.
● Can do it through plugin parameters or plugin commands.
● Can choose to overwrite the default keys functions.
● The changes stay on the save file.

==============================================================================
How to use
==============================================================================

You can bind the common events into a key either by plugin parameters or 
plugin commands.

♦ Plugin Parameters ♦

• Keyboard Key & Gamepad Button → Choose a keyboard or gamepad button that 
the common event will be attached. 
In this process by plugin parameters, you will find a huge dropdown list 
of keys(mostly for the keyboard). You can then, pick the key you want on 
that list. 
If you don't want to search/scroll the dropdown list, you can use the text 
field to put the key there. 
It's not case sensitive but has to match the keys in the dropdown list.

• Common Event Id → Select the common event ID.

• Parallel → You can choose the way the common event will be played. 
If this option is true, the common event will play like a parallel one. 
Meaning that it can run even when choices or messages are open, or another 
event is running(but it will only run once per button press).
If false, it will work like a default common event. Meaning that it needs 
the player to be able to make an action, another map event is not playing,
choices and message are close, etc.

• Overwrite → Choose if you want to overwrite the default function of the key 
on RPG Maker. Example:

If true, when you assign X to call a common event, when you enter on other 
scenes like the menu, the X will no longer be able to cancel your actions.

If false, when you assign X to call a common event, it will only remove the 
default key function while on the scene map. If you go into a menu or open 
a choice window, the X will still perform the cancel action. 

♦ Plugin Commands ♦

BCE [Type] [Action] [Button] [Id / Restore] [Parallel] [Overwrite]

• Type → Replace with Keyboard or Gamepad
• Action → Replace with Assign or Remove
• Button → Replace with the button you want to assign a common event.
(Check the dropdown list into the plugin parameters)
• Id / Restore → When ACTION is assigned, it will work like a common event ID. 
When ACTION is “Remove”, it will work as true/false for the restore key 
behavior.
• Parallel → Replace with true or false(or leave empty for false).
• Overwrite → Replace with true or false(or leave empty for false).

● Examples:

• BCE Keyboard Assign Y 2 false false
• BCE Keyboard Remove Y false
• BCE Gamepad Assign LB 1 true true
• BCE Gamepad Remove LB false

NOTE¹: They are not case sensitive.

Here is a list of the default keys of RPG Maker(Keyboard/Gamepad):

"tab",      ■ Keyboard: tab
"ok",       ■ Keyboard: enter, space, Z ■ Gamepad: A
"shift",    ■ Keyboard: shift ■ Gamepad: X
"control",  ■ Keyboard: control, alt
"escape",   ■ Keyboard: escape, numpad0, insert, x
"pageup",   ■ Keyboard: Q, pageup ■ Gamepad: LB
"pagedown", ■ Keyboard: W, pagedown ■ Gamepad: RB
"left",     ■ Keyboard: left arrow, numpad4 ■ Gamepad: D-pad left
"up",       ■ Keyboard: up arrow, numpad8 ■ Gamepad: D-pad up
"right",    ■ Keyboard: right arrow, numpad6 ■ Gamepad: D-pad right
"down",     ■ Keyboard: down arrow, numpad2 ■ Gamepad: D-pad down
"debug"     ■ Keyboard: F9
"cancel"    ■ Gamepad: B
"menu"      ■ Gamepad: Y

Some observations:

"Escape" is the button that calls the menu and also can quit/cancel. 
As you can see, it does not exist on the Gamepad.
On Gamepad, you have the MENU and CANCEL. Is the escape button divided 
into proper functions: One to call the menu and the other to cancel/quit 
the menu.

Eli Extra Trigger compatibility

If Eli Extra Trigger is before this plugin on the Plugin Manager, then, 
their buttons will take priority over the Button Common Events.
Otherwise, the Button Common Events will take priority.

============================================================================
Update Log
============================================================================

https://tinyurl.com/buttonCommonEventsLog

============================================================================

@param presetKeys
@text Keyboard CE
@type struct<presetKeysSt>[]
@desc Set here all your default keys/common events.
(Keyboard)
@default []

@param presetKeysGamePad
@text Gamepad CE
@type struct<presetGamePadKeysSt>[]
@desc Set here all your default keys/common events.
(Game Pad)
@default []

*/

/* ------------------------------ KEYBOARD KEYS ----------------------------- */
{
/*~struct~presetKeysSt:

@param key
@text Keyboard Key
@type select
@option a @option b @option c @option d @option e @option f @option g @option h @option i @option j @option k @option l @option m @option n @option o @option p @option q @option r @option s @option t @option u @option v @option w @option x @option y @option z @option 0 @option 1 @option 2 @option 3 @option 4 @option 5 @option 6 @option 7 @option 8 @option 9 @option backspace @option tab @option enter @option shift @option ctrl @option alt @option pausebreak @option capslock @option esc @option space @option pageup @option pagedown @option end @option home @option leftarrow @option uparrow @option rightarrow @option downarrow @option insert @option delete @option leftwindowkey @option rightwindowkey @option selectkey @option numpad0 @option numpad1 @option numpad2 @option numpad3 @option numpad4 @option numpad5 @option numpad6 @option numpad7 @option numpad8 @option numpad9 @option multiply @option add @option subtract @option decimalpoint @option divide @option f1 @option f2 @option f3 @option f4 @option f5 @option f6 @option f7 @option f8 @option f9 @option f10 @option f11 @option f12 @option numlock @option scrolllock @option semicolon @option equalsign @option comma @option dash @option period @option forwardslash @option graveaccent @option openbracket @option backslash @option closebracket @option singlequote
@desc The keyboard key. It's not case sensitive.
@default a

@param id
@text Common Event Id
@type common_event
@desc The common event Id.
@default 0

@param isParallel
@text Parallel
@type boolean
@desc If true, the common event will play like a parallel.
@default false

@param overwrite
@text Overwrite keys
@type boolean
@desc Set to true if you want to overwrite the default keys.
@default false

*/
}

/* ------------------------------ GAMEPAD KEYS ------------------------------ */
{
/*~struct~presetGamePadKeysSt:

@param key
@text Gamepad button
@type select
@option a @option b @option x @option y @option lb @option rb @option lt @option rt @option select @option start @option l3 @option r3 @option up @option down @option left @option right

@param id
@text Common Event Id
@type common_event
@desc The common event Id.
@default 0

@param isParallel
@text Parallel
@type boolean
@desc If true, the common event will play like a parallel.
@default false

@param overwrite
@text Overwrite keys
@type boolean
@desc Set to true if you want to overwrite the default keys.
@default false

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_ButtonCommonEvents = true

/* ========================================================================== */
/*                                    ALERT                                   */
/* ========================================================================== */
{
const pluginName = "Eli Button Common Events"
const requiredVersion = 5.09
const messageVersion = "5.0.9"

if(!Eli.Book){

    const msg = `${pluginName}:\nYou are missing the core plugin: Eli Book.\nPlease, click ok to download it now.`
    if(window.confirm(msg)){
        nw.Shell.openExternal("https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz")
    }

}else if(Eli.Book.version < requiredVersion){

    const msg = `${pluginName}:\nYou need Eli Book version ${messageVersion} or higher.\nPlease, click ok to download it now.`
    if(window.confirm(msg)){
        nw.Shell.openExternal("https://hakuenstudio.itch.io/eli-book-rpg-maker-mv-mz")
    }
}

}
    
/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

Eli.ButtonCommonEvents = {

    version: 5.22,
    url: "https://hakuenstudio.itch.io/eli-button-common-events-for-rpg-maker-mz",
    parameters: {
        presetKeys: [{key: "", id: 0, isParallel: false, overwrite: false}],
        presetKeysGamePad: [{key: "", id: 0, isParallel: false, overwrite: false}],
    },
    alias: {},
    parallelCommonEvents: {},

    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        const parameters = PluginManager.parameters("Eli_ButtonCommonEvents")
        
        this.parameters.presetKeys = JSON.parse(parameters.presetKeys)
        for(let i = 0; i < this.parameters.presetKeys.length; i++){
            this.parameters.presetKeys[i] = this.parsePresetParameters(this.parameters.presetKeys[i])
        }

        this.parameters.presetKeysGamePad = JSON.parse(parameters.presetKeysGamePad)
        for(let i = 0; i < this.parameters.presetKeysGamePad.length; i++){
            this.parameters.presetKeysGamePad[i] = this.parsePresetParameters(this.parameters.presetKeysGamePad[i])
        }
    },

    parsePresetParameters(preset){
        const param = JSON.parse(preset)
        param.key = param.key.toLowerCase()
        param.id = Number(param.id)
        param.isParallel = param.isParallel === "true"
        param.overwrite = param.overwrite === "true"

        return param        
    },

    initPluginCommands(){},

    param(){
        return this.parameters
    },

    createInitialData(){
        const keyboardData = this.createData("keyboard")
        const gamepadData = this.createData("gamepad")

        return [keyboardData, gamepadData]
    },

    createData(type){
        const initialData = {}

        if(type === "keyboard"){
            var presetKeys = this.param().presetKeys
            var codeType = Eli.KeyCodes.keyboard
            var inputObject = Input.keyMapper
        }else{
            var presetKeys = this.param().presetKeysGamePad
            var codeType = Eli.KeyCodes.gamepad
            var inputObject = Input.gamepadMapper
        }

        for(const data of presetKeys){
            let keyName = data.key.toLowerCase()
            const keyCode = codeType[keyName]
            let oldName = ""

            if(inputObject.hasOwnProperty(keyCode) && !data.overwrite){
                oldName = inputObject[keyCode]
                keyName = inputObject[keyCode]
    
            }else{
                inputObject[keyCode] = keyName
            }

            initialData[keyName] = {id: data.id, isParallel: data.isParallel, oldName: oldName, code: keyCode}
        }

        return initialData
    },

    loadKeyMapperChanges(){
        const keyboardData = this.getKeyboardData()
        const gamepadData = this.getGamepadData()

        for(const keyName in keyboardData){
            const code = Eli.KeyCodes.keyboard[keyName]
            if(code){
                Input.keyMapper[code] = keyName
            }
        }

        for(const keyName in gamepadData){
            const code = Eli.KeyCodes.gamepad[keyName]
            if(code){
                Input.gamepadMapper[code] = keyName
            }
        }
    },

    getKeyboardData(){
        return $eliData.buttonCommonEvents()
    },

    getGamepadData(){
        return $eliData.gamePadCommonEvents()
    },

    setKeyboardData(keyName, commonEventId, isParallel, oldName, keyCode){
        $eliData.buttonCommonEvents()[keyName] = {
            id: commonEventId, 
            isParallel: isParallel, 
            oldName: oldName,
            code: keyCode,
        }
    },

    setGamepadData(keyName, commonEventId, isParallel, oldName, keyCode){
        $eliData.gamePadCommonEvents()[keyName] = {
            id: commonEventId, 
            isParallel: isParallel, 
            oldName: oldName,
            code: keyCode,
        }
    },

    isValidKeyboardKey(keyName){
        return $eliData.buttonCommonEvents().hasOwnProperty(keyName)  
    },

    canUpdate(){
        return Input._latestButton && Input.isTriggered(Input._latestButton)
    },

    update(){
        if(this.isValidKeyboardKey(Input._latestButton)){
            this.updateKeyboard()
        }

        if(Input._gamepadStates.length > 0){
            this.updateGamePad()
        }
    },

    updateGamePad(){
        const index = Input._gamepadStates[0].indexOf(true)

        if(index !== -1){
            const key = Input.gamepadMapper[index]
            const data = this.getGamepadData()[key]

            if(data){
                const commonEventId = data.id

                if(data.isParallel){
                    if(this.canReserveCommonEvent(commonEventId)){
                        this.reserveCommonEvent(commonEventId)
                    }
                    Input._gamepadStates[0].fill(false)
        
                }else if(!$gameMap.isEventRunning()){
                    if(this.canReserveCommonEvent(commonEventId)){
                        $gameTemp.reserveCommonEvent(commonEventId)
                    }
                    Input._gamepadStates[0].fill(false)
                }

            }
        }
    },

    updateKeyboard(){
        const data = this.getKeyboardData()[Input._latestButton]
        const commonEventId = data.id

        if(data.isParallel){
            if(this.canReserveCommonEvent(commonEventId)){
                this.reserveCommonEvent(commonEventId)
            }
            
            Input._latestButton = null

        }else if(!$gameMap.isEventRunning()){
            if(this.canReserveCommonEvent(commonEventId)){
                $gameTemp.reserveCommonEvent(commonEventId)
            }
            Input._latestButton = null
        }
        
    },

    canReserveCommonEvent(commonEventId){
        return !this.isParallelButtonCommonEvent(commonEventId)
    },

    reserveCommonEvent(commonEventId){
        const arrayPosition = $gameMap._commonEvents.length
        Plugin.parallelCommonEvents[commonEventId] = arrayPosition
        $gameMap._commonEvents.push(new Game_CommonEvent(commonEventId))
    },

    isParallelButtonCommonEvent(commonEventId){
        return this.parallelCommonEvents.hasOwnProperty(commonEventId)
    },

/* ----------------------------- PLUGIN COMMANDS ---------------------------- */
    assign(args){
        let keyName = args.key.toLowerCase()
        const commonEventId = Number(Eli.Utils.convertEscapeVariablesOnly(args.commonEvent))
        const isParallel = args.isParallel === "true"
        const overwrite = args.overwrite === "true"
        const keyCode = Eli.KeyCodes.keyboard[keyName]
        let oldName = ""

        if(Input.keyMapper.hasOwnProperty(keyCode) && !overwrite){
            oldName = Input.keyMapper[keyCode]
            keyName = Input.keyMapper[keyCode]

        }else{
            oldName = Input.keyMapper[keyCode]
            Input.keyMapper[keyCode] = keyName
        }

        this.setKeyboardData(keyName, commonEventId, isParallel, oldName, keyCode)
    },

    assignGamePad(args){
        let keyName = String(args.key).toLowerCase()
        const commonEventId = Number(Eli.Utils.convertEscapeVariablesOnly(args.commonEvent))
        const isParallel = args.isParallel === "true"
        const overwrite = args.overwrite === "true"
        const keyCode = Eli.KeyCodes.gamepad[keyName]
        let oldName = ""

        if(Input.gamepadMapper.hasOwnProperty(keyCode) && !overwrite){
            oldName = Input.gamepadMapper[keyCode]
            keyName = Input.gamepadMapper[keyCode]

        }else{
            oldName = Input.gamepadMapper[keyCode]
            Input.gamepadMapper[keyCode] = keyName
        }

        this.setGamepadData(keyName, commonEventId, isParallel, oldName, keyCode)
    },

    remove(args){
        const restoreKey = args.restoreKey === "true"
        const keyCode = Eli.KeyCodes.keyboard[args.key.toLowerCase()]
        let keyName = ""
        let oldName = ""

        for(let key in this.getKeyboardData()){
            const obj = this.getKeyboardData()[key]

            if(obj.code === keyCode){
                oldName = obj.oldName
                keyName = key
            }
        }

        if(restoreKey){
            Input.keyMapper[keyCode] = oldName
        }else{
            delete Input.keyMapper[keyCode]
        }
        
        delete this.getKeyboardData()[keyName]
    },

    removeGamePad(args){
        const restoreKey = args.restoreKey === "true"
        const keyCode = Eli.KeyCodes.gamepad[args.key.toLowerCase()]
        let keyName = ""
        let oldName = ""

        for(let key in this.getGamepadData()){
            const obj = this.getGamepadData()[key]

            if(obj.code === keyCode){
                oldName = obj.oldName
                keyName = key
            }
        }

        if(restoreKey && oldName){
            Input.gamepadMapper[keyCode] = oldName
        }else{
            delete Input.gamepadMapper[keyCode]
        }

        delete this.getGamepadData()[keyName]
    },

    executePluginCommandMV(args){
        //BCE [Type] [Action] [Button] [Id / Restore] [Parallel] [Overwrite]
        const [type, action, button, id_restore, isParallel = "false", overwrite = "false"] = args.map(item => item.toLowerCase())
        const cmdList = {
            keyboardassign: "assign",
            keyboardremove: "remove",
            gamepadassign: "assignGamePad",
            gamepadremove: "removeGamePad",
        }
        const cmd = cmdList[type+action]

        if(this[cmd]) {
            const mzArgs = {key: button, commonEvent: id_restore, restoreKey: id_restore || "true", isParallel: isParallel, overwrite: overwrite}
            this[cmd](mzArgs)
        }
    },

}
    
const Alias = Eli.ButtonCommonEvents.alias
const Plugin = Eli.ButtonCommonEvents

Plugin.initialize()
    
/* -------------------------------- SAVE DATA ------------------------------- */
{

Alias.Eli_SavedContents_initialize = Eli_SavedContents.prototype.initialize
Eli_SavedContents.prototype.initialize = function(){
    Alias.Eli_SavedContents_initialize.call(this)
    this.createButtonCommonEventData()
}

Eli_SavedContents.prototype.createButtonCommonEventData = function(){
    const [keyboardData, gamepadData] = Plugin.createInitialData()
    this.contents.buttonCommonEvents = keyboardData
    this.contents.gamePadCommonEvents = gamepadData
}

Eli_SavedContents.prototype.buttonCommonEvents = function(){
    return this.contents.buttonCommonEvents
}

Eli_SavedContents.prototype.gamePadCommonEvents = function(){
    return this.contents.gamePadCommonEvents
}

}

/* ------------------------------ DATA MANAGER ------------------------------ */
{

Alias.DataManager_extractSaveContents = DataManager.extractSaveContents
DataManager.extractSaveContents = function(contents) {
    Alias.DataManager_extractSaveContents.call(this, contents)
    Plugin.loadKeyMapperChanges()
}

}

/* -------------------------------- SCENE MAP ------------------------------- */
{
// If Extra Trigger is order before, it will update first.
if(Imported.Eli_ExtraTrigger){

    Alias.Scene_Map_updateMain = Scene_Map.prototype.updateMain
    Scene_Map.prototype.updateMain = function() {
        Alias.Scene_Map_updateMain.call(this)
        if(Plugin.canUpdate()){
            Plugin.update()
        }
        
    }

}else{

    Alias.Scene_Map_updateMain = Scene_Map.prototype.updateMain
    Scene_Map.prototype.updateMain = function() {
        if(Plugin.canUpdate()){
            Plugin.update()
        }
        Alias.Scene_Map_updateMain.call(this)
    }
}

}

/* ---------------------------- GAME COMMON EVENT --------------------------- */
{

Alias.Game_CommonEvent_isActive = Game_CommonEvent.prototype.isActive
Game_CommonEvent.prototype.isActive = function(){
    const alias = Alias.Game_CommonEvent_isActive.call(this)
    return alias || Plugin.isParallelButtonCommonEvent(this.event().id)
}

}

/* ----------------------------- PLUGIN COMMANDS ---------------------------- */
{

Alias.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args){
    Alias.Game_Interpreter_pluginCommand.call(this, command, args)
    if(command.toUpperCase() === "BCE"){
        Plugin.executePluginCommandMV(args)
    }
}

Alias.Game_Interpreter_onCommonEventEnd = Game_Interpreter.prototype.onCommonEventEnd
Game_Interpreter.prototype.onCommonEventEnd = function(){
    Alias.Game_Interpreter_onCommonEventEnd.call(this)
    if(Plugin.isParallelButtonCommonEvent(this._commonEventId)){
        this.endParallelButtonCommonEvent()
    }
}

Game_Interpreter.prototype.endParallelButtonCommonEvent = function(){
    $gameMap._commonEvents.splice(Plugin.parallelCommonEvents[this._commonEventId], 1)
    delete Plugin.parallelCommonEvents[this._commonEventId]
}

}
    
}