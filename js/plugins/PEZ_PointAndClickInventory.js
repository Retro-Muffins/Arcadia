//=============================================================================
// Point and Click Inventory (IconID) Ver.2.
// by Pez
// Date: 11/11/2018
// Ver.2. 10/06/2019
//=============================================================================

/*:
 * @plugindesc Makes an inventory for P&C games. 
 * @author Pez
 *
 * ============================================================================
 *
 * @param Inventory Key
 * @type number
 * @min 0
 * @desc Sets the "I" key to Open and Close the Inventory. 
 * Default: 73. [!! Better leave it as default].
 * @default 73
 *
 * @param Category Item
 * @desc Sets the category of the items shown on the Inventory. 
 * Default: keyItem. Could also be 'item', 'weapon' or 'armor'.
 * @default keyItem
 *
 * @param Unblur Background
 * @type boolean
 * @on YES
 * @off NO
 * @desc Unblur the background snap when calling the inventory
 * Default: false (no); true (yes); !It affects the whole game.
 * @default false
 *
 * @param Stop Blinking
 * @type boolean
 * @on YES
 * @off NO
 * @desc Stop the blinking effect when selecting an object
 * Default: false (no); true (yes); !It affects the whole game.
 * @default false
 *
 * @param ---Pictures---
 * @default
 *
 * @param Inventory Background Name
 * @parent ---Pictures---
 * @desc Name of the Inventory Background Picture. 
 * Default: Inventory.
 * @default Inventory
 *
 * @param Inventory Background X
 * @parent ---Pictures---
 * @desc Sets the X of Inventory Background Picture. 
 * Default: ((Graphics.width / 2) - 460).
 * @default ((Graphics.width / 2) - 460)
 *
 * @param Inventory Background Y
 * @parent ---Pictures---
 * @desc Sets the Y of Inventory Background Picture. 
 * Default: ((Graphics.height / 2) - 260).
 * @default ((Graphics.height / 2) - 260)
 *
 * @param Inventory Background Opacity
 * @parent ---Pictures---
 * @type number
 * @min 0
 * @max 255
 * @desc Sets the opacity of the inventory background picture.
 * From 0 (invisible) to 255 (visible). Default 255.
 * @default 255
 *
 * @param Help Background Name
 * @parent ---Pictures---
 * @desc Name of the Inventory Help Picture. 
 * Default: HelpInventory.
 * @default HelpInventory
 *
 * @param Help Background X
 * @parent ---Pictures---
 * @desc Sets the X of Inventory Help Background Picture. 
 * Default: ((Graphics.width / 2) - 440).
 * @default ((Graphics.width / 2) - 440)
 *
 * @param Help Background Y
 * @parent ---Pictures---
 * @desc Sets the Y of Inventory Help Background Picture. 
 * Default: 550.
 * @default 550
 *
 * @param Help Background Opacity
 * @parent ---Pictures---
 * @type number
 * @min 0
 * @max 255
 * @desc Sets the opacity of the inventory help background picture.
 * From 0 (invisible) to 255 (visible). Default 255.
 * @default 255
 *
 * @param IconSet Name
 * @parent ---Pictures---
 * @desc Name of the Item's IconSet.
 * Default: IconSet128.
 * @default IconSet128
 *
 * @param ---Inventory Window---
 * @default
 *
 * @param Inventory Width
 * @parent ---Inventory Window---
 * @desc Sets the width of the inventory window. 
 * Default 870.
 * @default 870
 *
 * @param Inventory Height
 * @parent ---Inventory Window---
 * @desc Sets the height of the inventory window. 
 * Default 450.
 * @default 450
 *
 * @param Inventory X
 * @parent ---Inventory Window---
 * @desc Sets the X of the inventory window. Like this is centered.
 * Default (Graphics.width / 2) - (eval(PEZ.Param.PEZWindowWidth) / 2).
 * @default (Graphics.width / 2) - (eval(PEZ.Param.PEZWindowWidth) / 2)
 *
 * @param Inventory Y
 * @parent ---Inventory Window---
 * @desc Sets the Y of the inventory window. Like this is centered.
 * Default (Graphics.height / 2) - (eval(PEZ.Param.PEZWindowHeight) / 2).
 * @default (Graphics.height / 2) - (eval(PEZ.Param.PEZWindowHeight) / 2)
 *
 * @param Inventory Opacity
 * @parent ---Inventory Window---
 * @type number
 * @min 0
 * @max 255
 * @desc Sets the opacity of the inventory window.
 * From 0 (invisible) to 255 (visible).
 * @default 0
 *
 * @param Inventory Columns
 * @parent ---Inventory Window---
 * @type number
 * @min 1
 * @desc Sets the number of columns of the Inventory.
 * Default 5.
 * @default 5
 *
 * @param ---Icons---
 * @default
 *
 * @param Icon Width
 * @parent ---Icons---
 * @type number
 * @min 0
 * @desc Sets the width of the icon.
 * Default 128.
 * @default 128
 *
 * @param Icon Height
 * @parent ---Icons---
 * @type number
 * @min 0
 * @desc Sets the height of the icon.
 * Default 128.
 * @default 128
 *
 * @param Icon Box Width
 * @parent ---Icons---
 * @type number
 * @min 0
 * @desc Sets the width of the box in which the icon fits.
 * Default 130.
 * @default 130
 *
 * @param Icon Box Height
 * @parent ---Icons---
 * @type number
 * @min 0
 * @desc Sets the height of the box in which the icon fits.
 * Default 130.
 * @default 130
 *
 * @param Icon Spacing
 * @parent ---Icons---
 * @type number
 * @min 0
 * @desc Sets the spacing between the boxes.
 * Default 24.
 * @default 24
 *
 * @param ---Help Window---
 * @default
 *
 * @param Inventory Help Width
 * @parent ---Help Window---
 * @desc Sets the width of the help window. 
 * Default 820.
 * @default 820
 *
 * @param Inventory Help Height
 * @parent ---Help Window---
 * @desc Sets the height of the help window. 
 * Default numLines
 * @default numLines
 *
 * @param Inventory Help X
 * @parent ---Help Window---
 * @desc Sets the X of the inventory help window. 
 * Default ((Graphics.width / 2) - (eval(PEZ.Param.PEZWindowWidth) / 2)) + 20.
 * @default ((Graphics.width / 2) - (eval(PEZ.Param.PEZWindowWidth) / 2)) + 20
 *
 * @param Inventory Help Y
 * @parent ---Help Window---
 * @desc Sets the Y of the inventory help window. 
 * Default eval(PEZ.Param.PEZWindowY) + eval(PEZ.Param.PEZWindowHeight).
 * @default eval(PEZ.Param.PEZWindowY) + eval(PEZ.Param.PEZWindowHeight)
 *
 * @param Inventory Help Opacity
 * @parent ---Help Window---
 * @type number
 * @min 0
 * @max 255
 * @desc Sets the opacity of the help window.
 * From 0 (invisible) to 255 (visible). Default 0.
 * @default 0
 *
 *
 * ============================================================================
 *
 * @help
 *
 * ============================================================================
 * 0. DESCRIPTION OF THE PLUGIN
 * ============================================================================
 *
 * !!! Plugin made with 1.5.2. Version of RPG Maker MV.
 *
 * This is a plugin made to emulate an inventory from Point&Click or 
 * Adventure games. 
 *
 * It removes the categories from the Scene Item, and shows only Key Items 
 * (or Regular Items).
 *
 * It removes the background window and loads a picture from your Picture 
 * folder to use as a background picture. 
 *
 * It uses the IconID attached to the items to draw a picture from a new 
 * IconSet on the System folder, so you don't need to load individual pictures 
 * for every item. 
 *
 * It also modifies the Select Item Command and make it look like the Inventory, 
 * so you can use that command instead to interact with NPC and other Events, 
 * and still attach Common Events to the items to use in the normal Inventory.
 *
 * ============================================================================
 * 1. NEW KEY MAPS
 * ============================================================================
 *
 * Open and Close the Inventory with the "I" key.
 *
 *     73: 'inv',   // I
 *
 * ============================================================================
 * 2. PRELOAD PICTURES
 * ============================================================================
 *
 * Change the names of the pictures with your own picture names.
 *
 * ============================================================================
 * 3. INVENTORY (SCENE ITEM)
 * ============================================================================
 *
 * -Deactivate categories selection.
 * -Set "Key Items" or "Regular Items" as the only category.
 * -Creates background picture.
 * -Sets item picture depending on its IconID (size can be modified)
 * -Sets "I" key to open and close it.
 *
 * ============================================================================
 * 4. INVENTORY (SELECT ITEM COMMAND)
 * ============================================================================
 *
 * "Replicates" the Inventory on the Select Item Command to use it to interact with NPC and Events. 
 *
 * ============================================================================
 * 5. HELP WINDOW (SCENE ITEM)
 * ============================================================================
 *
 * Sets the position and dimensions of the Help Window on the Scene Item (Inventory).
 *
 * ============================================================================
 * 6. MISC
 * ============================================================================
 *
 * !!! These affect the whole game, so use them only if you want to.
 * By default they are inactive, if you want to use them just remove the commented section.
 *
 * -Remove the blink effect when selecting an item (or any selection).
 * -Remove the blur effect from the background picture snap when calling the inventory.
 * 
 * ============================================================================
 * LOG
 * ============================================================================
 *
 * Version 2: Added Help Window to the Inventory and all the parameters to the plugin.
 *      *Still missing the Help Window on the Select Item Command.
 *
 * Version 1: Plugin released. 
 */

var Imported = Imported || {};
Imported.PEZ_PointAndClickInventory = true;

var PEZ = PEZ || {};
PEZ.CGa = PEZ.CGa || {};
PEZ.CGa.Version = 2.00;

//=============================================================================
// 
// 0. PARAMETERS
// 
//=============================================================================    
    
    PEZ.Parameters = PluginManager.parameters('PEZ_PointAndClickInventory');
    PEZ.Param = PEZ.Param || {};

    PEZ.Param.PEZInventoryKey = Number(PEZ.Parameters['Inventory Key'] || 73);
    PEZ.Param.PEZCategoryItem = String(PEZ.Parameters['Category Item']);
    PEZ.Param.PEZUnblurBackground = String(PEZ.Parameters['Unblur Background']);
    PEZ.Param.PEZStopBlinking = String(PEZ.Parameters['Stop Blinking']);

    PEZ.Param.PEZinventoryBackgroundName = String(PEZ.Parameters['Inventory Background Name']);
    PEZ.Param.PEZinventoryBackgroundX = String(PEZ.Parameters['Inventory Background X']);
    PEZ.Param.PEZinventoryBackgroundY = String(PEZ.Parameters['Inventory Background Y']);
    PEZ.Param.PEZinventoryBackgroundOpacity = Number(PEZ.Parameters['Inventory Background Opacity'] || 0);
    PEZ.Param.PEZinventoryHelpBackgroundName = String(PEZ.Parameters['Help Background Name']);
    PEZ.Param.PEZinventoryHelpBackgroundX = String(PEZ.Parameters['Help Background X']);
    PEZ.Param.PEZinventoryHelpBackgroundY = String(PEZ.Parameters['Help Background Y']);
    PEZ.Param.PEZinventoryHelpBackgroundOpacity = Number(PEZ.Parameters['Help Background Opacity'] || 0);
    PEZ.Param.PEZiconSetName = String(PEZ.Parameters['IconSet Name']);

    PEZ.Param.PEZWindowWidth = String(PEZ.Parameters['Inventory Width']);
    PEZ.Param.PEZWindowHeight = String(PEZ.Parameters['Inventory Height']);
    PEZ.Param.PEZWindowX = String(PEZ.Parameters['Inventory X']);
    PEZ.Param.PEZWindowY = String(PEZ.Parameters['Inventory Y']);
    PEZ.Param.PEZWindowOpacity = Number(PEZ.Parameters['Inventory Opacity'] || 0);
    PEZ.Param.PEZWindowColumns = Number(PEZ.Parameters['Inventory Columns'] || 5);

    PEZ.Param.PEZWindowIconWidth = Number(PEZ.Parameters['Icon Width'] || 128);
    PEZ.Param.PEZWindowIconHeight = Number(PEZ.Parameters['Icon Height'] || 128);
    PEZ.Param.PEZWindowIconBoxWidth = Number(PEZ.Parameters['Icon Box Width'] || 130);
    PEZ.Param.PEZWindowIconBoxHeight = Number(PEZ.Parameters['Icon Box Height'] || 130);
    PEZ.Param.PEZWindowIconSpacing = Number(PEZ.Parameters['Icon Spacing'] || 24);

    PEZ.Param.PEZHelpWindowWidth = String(PEZ.Parameters['Inventory Help Width']);
    PEZ.Param.PEZHelpWindowHeight = String(PEZ.Parameters['Inventory Help Height']);
    PEZ.Param.PEZHelpWindowX = String(PEZ.Parameters['Inventory Help X']);
    PEZ.Param.PEZHelpWindowY = String(PEZ.Parameters['Inventory Help Y']);
    PEZ.Param.PEZHelpWindowOpacity = Number(PEZ.Parameters['Inventory Help Opacity'] || 255);

//=============================================================================
// 
// 1. NEW KEYS
// 
//=============================================================================

    Input.keyMapper[PEZ.Param.PEZInventoryKey] = 'inv'; // I

//=============================================================================
// 
// 2. PRELOAD PICTURES
// 
//=============================================================================

    function preload() {
        ImageManager.loadSystem(PEZ.Param.PEZinventoryBackgroundName);
        ImageManager.loadSystem(PEZ.Param.PEZinventoryHelpBackgroundName);
        ImageManager.loadSystem(PEZ.Param.PEZiconSetName);
    };
    
    preload();
    
//=============================================================================
// 
// 3. INVENTORY (SCENE ITEM)
// 
//=============================================================================    

    //=========================================================================
    // 3.1. CREATE WINDOW
    //========================================================================= 

    Scene_Item.prototype.create = function() {
        Scene_ItemBase.prototype.create.call(this);
        this.createHelpWindow();
        this.createItemWindow();
        this._itemWindow.opacity = PEZ.Param.PEZWindowOpacity;
        this.createActorWindow();
      };


    Scene_Item.prototype.createItemWindow = function() {
        var width = eval(PEZ.Param.PEZWindowWidth);
        var height = eval(PEZ.Param.PEZWindowHeight);
        var x = eval(PEZ.Param.PEZWindowX); 
        var y = eval(PEZ.Param.PEZWindowY);
        this._itemWindow = new Window_ItemList(x, y, width, height);
        this._itemWindow.setHelpWindow(this._helpWindow);
        this._itemWindow._helpWindow.opacity = PEZ.Param.PEZHelpWindowOpacity;
        this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
        this._itemWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._itemWindow);
        this._itemWindow.setCategory(PEZ.Param.PEZCategoryItem); 
        this.onCategoryOk();
    };

    //=========================================================================
    // 3.2. CREATE BACKGROUND
    //========================================================================= 
    
    Scene_Item.prototype.createBackground = function() {
        this._backgroundItem1 = new Sprite();
        this._backgroundItem2 = new Sprite();
        this._backgroundItem3 = new Sprite();
        this._backgroundItem1.bitmap = SceneManager.backgroundBitmap();
        this._backgroundItem2.bitmap = ImageManager.loadSystem(PEZ.Param.PEZinventoryBackgroundName);
        this._backgroundItem3.bitmap = ImageManager.loadSystem(PEZ.Param.PEZinventoryHelpBackgroundName);
        this._backgroundItem2.x = eval(PEZ.Param.PEZinventoryBackgroundX);
        this._backgroundItem2.y = eval(PEZ.Param.PEZinventoryBackgroundY);
        this._backgroundItem2.opacity = PEZ.Param.PEZinventoryBackgroundOpacity;
        this._backgroundItem3.x = eval(PEZ.Param.PEZinventoryHelpBackgroundX);
        this._backgroundItem3.y = eval(PEZ.Param.PEZinventoryHelpBackgroundY);
        this._backgroundItem3.opacity = PEZ.Param.PEZinventoryHelpBackgroundOpacity;
        this.addChild(this._backgroundItem1);
        this.addChild(this._backgroundItem2);
        this.addChild(this._backgroundItem3);
    };

    //=========================================================================
    // 3.3. CREATE SIZES AND DRAW ICONS
    //========================================================================= 
    
    Window_ItemList.prototype.maxCols = function() {
        return PEZ.Param.PEZWindowColumns;
    };

    Window_ItemList.prototype.spacing = function() {
        return PEZ.Param.PEZWindowIconSpacing;
    };

    Window_ItemList.prototype.itemWidth = function() {
        return PEZ.Param.PEZWindowIconBoxWidth; 
    };

    Window_ItemList.prototype.itemHeight = function() {
        return PEZ.Param.PEZWindowIconBoxHeight;
    };

    Window_ItemList.prototype.drawItem = function(index) {
        var item = this._data[index];
        if (item) {
            var rect = this.itemRect(index);
            rect.width -= this.textPadding();
            this.changePaintOpacity(this.isEnabled(item));
            this.drawItemName(item, rect.x, rect.y, rect.width);
            this.changePaintOpacity(1);        
        }
    };

    Window_ItemList.prototype.drawItemName = function(item, x, y, width) {
        width = width || 312;
        if (item) {
            var iconBoxWidth = Window_Base._iconWidth + 4;
            this.resetTextColor();
            this.drawIcon(item.iconIndex, x + 2, y + 2);
        }
    };

    Window_ItemList.prototype.drawIcon = function(iconIndex, x, y) {
        var bitmap = ImageManager.loadSystem(PEZ.Param.PEZiconSetName);
        var pw = PEZ.Param.PEZWindowIconWidth; 
        var ph = PEZ.Param.PEZWindowIconHeight; 
        var sx = iconIndex % (PEZ.Param.PEZWindowIconWidth / 2) * pw;
        var sy = Math.floor(iconIndex /  (PEZ.Param.PEZWindowIconHeight / 2)) * ph;
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y);
    };

    //=========================================================================
    // 3.4. USE "I" KEY FROM MAP TO OPEN INVENTORY
    //========================================================================= 
    
    var Scene_Map_InventoryCalling = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        Scene_Map_InventoryCalling.call(this);
        this.inventoryCalling = false;
    };
    
    var Scene_Map_InventoryCallingUpdate = Scene_Map.prototype.updateScene;
    Scene_Map.prototype.updateScene = function() {
        Scene_Map_InventoryCallingUpdate.call(this);
        if (!SceneManager.isSceneChanging()) {
            this.updateCallInventory();
        }
    };
    
    Scene_Map.prototype.isInventoryCalled = function() {
        return Input.isTriggered('inv');
    };

    Scene_Map.prototype.updateCallInventory = function() {
        if (this.isMenuEnabled()) {
            if (this.isInventoryCalled()) {
                this.inventoryCalling = true;
            }
            if (this.inventoryCalling && !$gamePlayer.isMoving()) {
                this.callInventory();
            }
        } else {
            this.inventoryCalling = false;
        }
    };

    Scene_Map.prototype.callInventory = function() {
        SceneManager.push(Scene_Item);
        $gameTemp.clearDestination();
        this._mapNameWindow.hide();
        this._waitCount = 2;
    };
    
    //=========================================================================
    // 3.5. USE "I" KEY TO CLOSE INVENTORY
    //========================================================================= 
    
    Scene_Item.prototype.update = function() {
        Scene_MenuBase.prototype.update.call(this);
        this.updateCloseInventory();
    };

    Scene_Item.prototype.isInventoryClosed = function() {
        return Input.isTriggered('inv');
    };

    Scene_Item.prototype.updateCloseInventory = function() {
        if (this.isInventoryClosed()) {
                this.closeInventory();
            }
    };

    Scene_Item.prototype.closeInventory = function() {
        SceneManager.goto(Scene_Map);
    };

//=============================================================================
// 
// 4. INVENTORY (SELECT ITEM COMMAND)
// 
//=============================================================================    

    //=========================================================================
    // 4.1. CREATE WINDOW
    //========================================================================= 

    Window_EventItem.prototype.initialize = function(messageWindow) {
        this._messageWindow = messageWindow;
        var width = eval(PEZ.Param.PEZWindowWidth);
        var height = eval(PEZ.Param.PEZWindowHeight);
        var x = eval(PEZ.Param.PEZWindowX); 
        var y = eval(PEZ.Param.PEZWindowY); 
        Window_ItemList.prototype.initialize.call(this, x, y, width, height);
        this.opacity = PEZ.Param.PEZWindowOpacity;
        this.openness = 0;
        this.deactivate();
        this.setHandler('ok',     this.onOk.bind(this));
        this.setHandler('cancel', this.onCancel.bind(this));
    };

    //=========================================================================
    // 4.2. CREATE BACKGROUND
    //========================================================================= 

    Window_EventItem.prototype.start = function() {
        this.refresh();
        this.createBackground();
        this.select(0);
        this.open();
        this.activate();
    };

    Window_EventItem.prototype.createBackground = function() {
        this._backgroundItem2 = new Sprite();
        //this._backgroundItem3 = new Sprite();
        this._backgroundItem2.bitmap = ImageManager.loadSystem(PEZ.Param.PEZinventoryBackgroundName);
        //this._backgroundItem3.bitmap = ImageManager.loadSystem(PEZ.Param.PEZinventoryHelpBackgroundName);
        //this._backgroundItem2.x = eval(PEZ.Param.PEZinventoryBackgroundX);
        //this._backgroundItem2.y = eval(PEZ.Param.PEZinventoryBackgroundY);
        this._backgroundItem2.opacity = PEZ.Param.PEZinventoryBackgroundOpacity;
        //this._backgroundItem3.x = eval(PEZ.Param.PEZinventoryHelpBackgroundX) - 100;
        //this._backgroundItem3.y = eval(PEZ.Param.PEZinventoryHelpBackgroundY) - 100;
        //this._backgroundItem3.opacity = PEZ.Param.PEZinventoryHelpBackgroundOpacity;
        this.addChildToBack(this._backgroundItem2);
        //this.addChild(this._backgroundItem3);
    };


    //=========================================================================
    // 4.3. CREATE SIZES AND DRAW ICONS
    //========================================================================= 

    Window_EventItem.prototype.maxCols = function() {
        return PEZ.Param.PEZWindowColumns;
    };

    Window_EventItem.prototype.spacing = function() {
        return PEZ.Param.PEZWindowIconSpacing;
    };

    Window_EventItem.prototype.itemWidth = function() {
        return PEZ.Param.PEZWindowIconBoxWidth;
    };

    Window_EventItem.prototype.itemHeight = function() {
        return PEZ.Param.PEZWindowIconBoxHeight;
    };

    Window_EventItem.prototype.drawItem = function(index) {
        var item = this._data[index];
        if (item) {
            var rect = this.itemRect(index);
            rect.width -= this.textPadding();
            this.changePaintOpacity(this.isEnabled(item));
            this.drawItemName(item, rect.x, rect.y, rect.width);
            this.changePaintOpacity(1);        
        }
    };

    Window_EventItem.prototype.drawItemName = function(item, x, y, width) {
        width = width || 312;
        if (item) {
            var iconBoxWidth = Window_Base._iconWidth + 4;
            this.resetTextColor();
            this.drawIcon(item.iconIndex, x + 2, y + 2);
        }
    };

    Window_EventItem.prototype.drawIcon = function(iconIndex, x, y) {
        var bitmap = ImageManager.loadSystem(PEZ.Param.PEZiconSetName);
        var pw = PEZ.Param.PEZWindowIconWidth;
        var ph = PEZ.Param.PEZWindowIconHeight;
        var sx = iconIndex % (PEZ.Param.PEZWindowIconWidth / 2) * pw;
        var sy = Math.floor(iconIndex / ((PEZ.Param.PEZWindowIconHeight / 2))) * ph;
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y);
    };

//=============================================================================
// 
// 5. Help Window (Scene Item)
// 
//=============================================================================   

    Window_Help.prototype.initialize = function(numLines) {
        if (SceneManager._scene instanceof Scene_Item == true) {
            var width = eval(PEZ.Param.PEZHelpWindowWidth);
            var height = this.fittingHeight(eval(PEZ.Param.PEZHelpWindowHeight) || 2);
            var x = eval(PEZ.Param.PEZHelpWindowX);
            var y = eval(PEZ.Param.PEZHelpWindowY);
            Window_Base.prototype.initialize.call(this, x, y, width, height);
            this._text = '';
        }
        if (SceneManager._scene instanceof Scene_Item == false) {
            var width = Graphics.boxWidth;
            var height = this.fittingHeight(numLines || 2);
            Window_Base.prototype.initialize.call(this, 0, 0, width, height);
            this._text = '';
        }
    };

//=============================================================================
// 
// 6. MISC 
// 
//=============================================================================   


    Window.prototype._updateCursor = function() {
        if (eval(PEZ.Param.PEZStopBlinking)) {
            this._windowCursorSprite.alpha = 255;
            this._windowCursorSprite.visible = this.isOpen();
        }
        if (!eval(PEZ.Param.PEZStopBlinking)) {
            var blinkCount = this._animationCount % 40;
            var cursorOpacity = this.contentsOpacity;
            if (this.active) {
                if (blinkCount < 20) {
                    cursorOpacity -= blinkCount * 8;
                } else {
                    cursorOpacity -= (40 - blinkCount) * 8;
                }
            }
            this._windowCursorSprite.alpha = cursorOpacity / 255;
            this._windowCursorSprite.visible = this.isOpen();
        }
    };
    
    SceneManager.snapForBackground = function() {
        if (eval(PEZ.Param.PEZUnblurBackground)) {
            this._backgroundBitmap = this.snap();
            //this._backgroundBitmap.blur();
        }
        if (!eval(PEZ.Param.PEZUnblurBackground)) {
            this._backgroundBitmap = this.snap();
            this._backgroundBitmap.blur();
        }
    };

